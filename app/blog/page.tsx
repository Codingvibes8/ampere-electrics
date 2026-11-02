import type { Metadata } from 'next'
import { TopBar } from '@/components/nav/top-bar'
import { Nav } from '@/components/nav/navbar'
import { Footer } from '@/components/layout/footer'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { blogPosts, seo } from '@/siteconfig'

export const metadata: Metadata = {
  title: seo.blog.title,
  description: seo.blog.description,
  openGraph: {
    title: seo.blog.openGraphTitle,
    description: seo.blog.description,
    type: 'website',
    locale: 'en_GB',
  },
}

const posts = blogPosts

export default function BlogPage() {
  return (
    <main className="relative">
      <TopBar />
      <Nav />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-deep-dark overflow-hidden">
        <div className="absolute inset-0 circuit-grid opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Blog</span>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white text-balance leading-tight">
            Electrical Tips &{' '}
            <span className="text-accent glow-text">Expert Guides</span>
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            Practical advice from a NAPIT approved electrician to help you keep your home safe,
            efficient, and up to code.
          </p>
        </div>
      </section>

      {/* Blog posts */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex flex-col gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-card border border-border rounded-xl p-8 hover:border-primary/40 transition-all"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-xs font-medium text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                  {post.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                  Read article
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
