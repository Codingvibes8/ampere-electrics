import type { MetadataRoute } from 'next'
import { appearance } from '@/siteconfig'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: appearance.manifestName,
    short_name: appearance.manifestShortName,
    description: appearance.manifestDescription,
    start_url: '/',
    display: 'standalone',
    background_color: appearance.backgroundColor,
    theme_color: appearance.themeColor,
    icons: [appearance.icon],
  }
}
