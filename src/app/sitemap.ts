import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://danielrosillo.dev', 
      lastModified: new Date(),
    },
    {
      url: 'https://danielrosillo.dev/#sobre-mi', 
      lastModified: new Date(),
    },
    {
      url: 'https://danielrosillo.dev/#experiencia', 
      lastModified: new Date(),
    },
    {
      url: 'https://danielrosillo.dev/#proyectos', 
      lastModified: new Date(),
    },
    {
      url: 'https://danielrosillo.dev/#contacto',
      lastModified: new Date(),
    },
  ]
}

