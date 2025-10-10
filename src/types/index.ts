// src/types/index.ts
export interface Experience {
  id: string
  company: string
  position: string
  period: string
  description: string
  technologies: string[]
  current?: boolean
}

export interface Project {
  id: string
  name: string
  description: string
  technologies: string[]
  imageUrl?: string
  demoUrl?: string
  githubUrl?: string
  status: 'completed' | 'in-development' | 'planned'
}

export interface ContactInfo {
  email: string
  linkedin: string
  github: string
  location: string
}