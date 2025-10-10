// src/components/sections/Experience.tsx
'use client'

import { useState } from 'react'
import { Briefcase, Calendar, ChevronRight, ExternalLink } from 'lucide-react'
import type { Experience } from '@/types'

const Experience = () => {
  const experiences: Experience[] = [
    {
      id: 'sap-ui5',
      company: 'NTT Data',
      position: 'Desarollador SAP UI5',
      period: 'Junio 2025 - Actualmente...',
      description: 'Desarrollo y mantenimiento de aplicaciones empresariales con SAP UI5 y Fiori, implementando interfaces de usuario modernas y responsivas, trabajando en equipo siguiendo buenas prácticas de desarrollo, testing y despliegue continuo.',
      technologies: ['SAP UI5', 'SAP Fiori', 'OData', 'JavaScript', 'MVC', 'XML', 'Git', 'Jira'],
      current: true
    },
    {
      id: 'becario-sap',
      company: 'NTT Data',
      position: 'Desarrollador SAP UI5 e Ionic (Prácticas)',
      period: 'Marzo 2025 - Junio 2025',
      description: ' Aprendizaje y apoyo en proyectos con SAP UI5, Fiori y OData, comprendiendo la arquitectura MVC y la integración de servicios empresariales. Participación en el desarrollo de aplicaciones móviles con Ionic y Angular, creando interfaces interactivas y responsivas.',
      technologies: ['Ionic', 'Angular', 'SAP UI5', 'Fiori', 'OData', 'JavaScript', 'XML', 'MVC', 'Git']
    },
    {
      id: 'personal-projects',
      company: 'Proyectos Personales',
      position: 'Desarollador Web Fullstack',
      period: 'Agosto 2025 - Actualmente...',
      description: 'Desarrollo de aplicaciones web modernas como proyectos personales y portfolio. Creación de interfaces interactivas y responsivas, implementación de CRUD completo, integración con bases de datos y consumo de APIs externas. Enfocado en buenas prácticas, experiencia de usuario y aprendizaje continuo de nuevas tecnologías.',
      technologies: ['React', 'Tailwind CSS', 'Next.js', 'TypeScript', 'Prisma', 'Supabase'],
      current: true
    },
    
  ]
  const [selectedExperience, setSelectedExperience] = useState<string>(experiences[0].id)
  const currentExperience = experiences.find(exp => exp.id === selectedExperience)

  return (
    <section id="experiencia" className="pt-20 pb-24 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900/10" >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <Briefcase className="inline-block mr-3 h-8 w-8 text-blue-400" />
            Experiencia laboral
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Mi trayectoria profesional en el desarrollo de software y tecnologías web
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Lista*/}
            <div className="lg:w-1/3">
              <div className="space-y-2">
                {experiences.map((experience) => (
                  <button
                    key={experience.id}
                    onClick={() => setSelectedExperience(experience.id)}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                      selectedExperience === experience.id
                        ? 'bg-slate-800 border-l-4 border-blue-400'
                        : 'bg-slate-800/50 hover:bg-slate-800/70 border-l-4 border-transparent'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-white">
                          {experience.position}
                        </h3>
                        <p className="text-sm text-slate-400">
                          {experience.company}
                        </p>
                        <div className="flex items-center mt-1 text-xs text-slate-500">
                          <Calendar className="h-3 w-3 mr-1" />
                          {experience.period}
                        </div>
                      </div>
                      <ChevronRight 
                        className={`h-5 w-5 text-slate-400 transition-transform duration-300 ${
                          selectedExperience === experience.id ? 'rotate-90' : ''
                        }`} 
                      />
                    </div>
                    
                    {experience.current && (
                      <div className="mt-2">
                        <span className="inline-flex items-center px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded-full">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1 animate-pulse" />
                          Actual
                        </span>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Detalles */}
            <div className="lg:w-2/3">
              {currentExperience && (
                <div className="bg-slate-800/50 rounded-lg p-6 lg:p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {currentExperience.position}
                    </h3>
                    <div className="flex items-center text-blue-400 mb-1">
                      <span className="text-lg font-semibold">
                        {currentExperience.company}
                      </span>
                      {currentExperience.current && (
                        <span className="ml-3 inline-flex items-center px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded-full">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1 animate-pulse" />
                          Actual
                        </span>
                      )}
                    </div>
                    <div className="flex items-center text-slate-400 text-sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      {currentExperience.period}
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-slate-300 leading-relaxed">
                      {currentExperience.description}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">
                      Tecnologías utilizadas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {currentExperience.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm border border-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience