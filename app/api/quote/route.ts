import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { supabase } from "@/lib/supabase";

const resend = new Resend(process.env.RESEND_API_KEY);

const quoteSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().regex(/^\+?[0-9][0-9\s]{8,14}$/, "Valid UK phone number required"),
  postcode: z.string().regex(/^[A-Z]{1,2}[0-9][A-Z0-9]?\s*[0-9][A-Z]{2}$/i, "Valid UK postcode required"),
  job: z.string().min(1, "Job type is required"),
  urgency: z.enum(["Emergency — today", "This week", "Planning ahead"]),
  details: z.string().optional(),
  honeypot: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // 1. Validate Schema
    const result = quoteSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json({ error: "Invalid data", details: result.error.format() }, { status: 400 });
    }
    
    const { name, phone, postcode, job, urgency, details, honeypot } = result.data;

    // 2. Honeypot check
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Logged." }, { status: 200 }); // fake success for bots
    }

    // 4. Save to Supabase
    const { error: dbError } = await supabase
      .from("quotes")
      .insert([
        { name, phone, postcode, job, urgency, details }
      ]);
      
    if (dbError) {
      console.error("Supabase insert error:", dbError);
      // We can continue even if DB fails, or we can fail the request
    }

    // 5. Send email via Resend
    const ref = `AS-${Math.floor(4822 + Math.random() * 900)}`;
    
    if (process.env.RESEND_API_KEY) {
      const { error: emailError } = await resend.emails.send({
        from: "Ampere Electric <quotes@electricjamez.co.uk>", // Replace with verified domain
        to: ["info@electricjamez.co.uk"],
        subject: `New Quote Request [${ref}]: ${job}`,
        html: `
          <h2>New Quote Request (${ref})</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Postcode:</strong> ${postcode}</p>
          <p><strong>Job:</strong> ${job}</p>
          <p><strong>Urgency:</strong> ${urgency}</p>
          <p><strong>Details:</strong> ${details || "N/A"}</p>
        `,
      });

      if (emailError) {
        console.error("Resend email error:", emailError);
      }
    }

    return NextResponse.json({ success: true, ref }, { status: 200 });
    
  } catch (error) {
    console.error("Quote submission error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
