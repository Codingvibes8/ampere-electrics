import type { MetadataRoute } from 'next'
import { absoluteUrl, blogPosts, blogSitemapPriority, staticRoutes } from '@/siteconfig'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = staticRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  const posts = blogPosts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: blogSitemapPriority,
  }))

  return [...pages, ...posts]
}
