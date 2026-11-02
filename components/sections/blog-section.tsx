import Link from "next/link";
import { Reveal } from "@/lib/motion";
import { IconBolt } from "@/components/icons";
import { ArrowRight, Calendar } from "lucide-react";
import { blogPosts as POSTS } from "@/siteconfig";

export function BlogSection() {
  return (
    <section id="blog" className="relative border-t border-edge bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.24em] text-volt">
                <IconBolt className="h-3.5 w-3.5" /> Latest Insights
              </p>
              <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-[0.95] text-snow sm:text-5xl">
                Electrical Tips & Guides
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 border border-edge px-5 py-3.5 font-mono text-[0.72rem] font-bold uppercase tracking-[0.14em] text-snow transition-all duration-300 hover:border-volt hover:text-volt"
            >
              View all posts <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post, i) => (
            <Reveal key={post.slug} delay={i * 100}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col border border-edge bg-ink2/30 p-6 transition-all duration-300 hover:border-volt/60 hover:bg-ink2/50"
              >
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="border border-edge px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-volt">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 font-mono text-[0.6rem] uppercase tracking-wider text-mist">
                    <Calendar className="h-3 w-3" />
                    {new Date(post.date).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </span>
                </div>
                <h3 className="mb-3 font-display text-xl font-bold uppercase tracking-wide text-snow transition-colors group-hover:text-volt">
                  {post.title}
                </h3>
                <p className="mb-6 flex-grow text-sm leading-relaxed text-mist line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-volt transition-all group-hover:gap-3">
                  Read Article <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
