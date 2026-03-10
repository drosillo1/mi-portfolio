// src/components/sections/Projects.tsx
'use client'

import { useState } from 'react'
import { Code2, ExternalLink, Github, Calendar, Filter, Wrench, Check, ChartGantt, Clock } from 'lucide-react'
import Image from 'next/image'
import type { Project } from '@/types'

const Projects = () => {
  const projects: Project[] = [
    {
      id: 'sap-example',
      name: 'App empresa energética (SAP UI5)',
      description: 'Implementación de nuevas funcionalidades y mantenimiento en aplicación de una importante empresa energética en SAP UI5, usada para la gestión de procesos e integrada con servicios OData',
      technologies: ['SAP UI5', 'Fiori', 'OData', 'XML Views', 'JavaScript', 'Node.js'],
      imageUrl: '/images/dashboardexample.jpg',
      demoUrl: '',
      githubUrl: '', 
      status: 'completed'
    },
    {
      id: 'paquitártelas',
      name: 'Paquitártelas',
      description: 'Plataforma web personalizada para una psicóloga, que permite a los pacientes conocer sus servicios, reservar sesiones fácilmente a través de WhatsApp, contactar mediante un formulario y acceder a sus redes sociales para mantenerse informados y conectados.',
      technologies: ['Next.js', 'JavaScript', 'Tailwind CSS', 'EmailJS', 'Node.js'],
      imageUrl: '/images/projectPaquitartelas.png',
      demoUrl: 'https://www.paquitartelas.com/',
      githubUrl: 'https://github.com/drosillo1/paquitartelas-web',
      status: 'completed'
    },
    {
      id: 'todook',
      name: 'Todook',
      description: 'Plataforma web desarrollada para TODOOK, enfocada en presentar sus servicios de gestión de marca y comunicación digital. La web permite a los visitantes conocer su propuesta de valor, explorar sus servicios y contactar fácilmente mediante un formulario integrado, ofreciendo una experiencia clara, moderna y optimizada para dispositivos móviles.',
      technologies: ['Next.js', 'JavaScript', 'Tailwind CSS', 'EmailJS', 'Node.js'],
      imageUrl: '/images/projectTodook.png',
      demoUrl: 'https://todookstudio.com/',
      githubUrl: 'https://github.com/drosillo1/todook-website',
      status: 'completed'
    },
    {
      id: 'gamenook',
      name: 'GameNook',
      description: 'GameNook es una plataforma integral que permite descubrir, reseñar y compartir tus videojuegos favoritos. Los usuarios pueden conectar con otros gamers, crear una red de contactos, explorar recomendaciones personalizadas, y encontrar tu próxima aventura.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'Node.js'],
      imageUrl: '/images/gamenook.jpg',
      demoUrl: '',
      githubUrl: 'https://github.com/drosillo1/GameNook',
      status: 'in-development'
    },
    {
      id: 'demo-sap',
      name: 'Demo Northwind Explorer (SAP UI5)',
      description: 'Proyecto personal en SAP UI5 conectado al OData de ejemplo (Northwind). Muestra listados de productos, stock, proveedores, pedidos, filtros avanzados y analíticas.',      
      technologies: ['SAP UI5', 'Fiori', 'OData (Northwind)', 'XML Views', 'TypeScript', 'Node.js'],
      imageUrl: '/images/pruebasapui5.jpg',
      demoUrl: '',
      githubUrl: '',
      status: 'in-development'
    },
  ]

  const [filter, setFilter] = useState<'all' | 'completed' | 'in-development'>('all')
  
  const filteredProjects = projects.filter(project => 
    filter === 'all' ? true : project.status === filter
  )

  const [showAllTechs, setShowAllTechs] = useState<string | null>(null)
  const [expandedDesc, setExpandedDesc] = useState<string | null>(null)

  const getStatusInfo = (status: Project['status']) => {
    switch (status) {
      case 'completed':
        return { 
          label: 'Completado', 
          color: 'bg-green-500 text-white border-green-400',
          icon: <Check className="w-4 h-4"/>
        }
      case 'in-development':
        return { 
          label: 'En desarrollo', 
          color: 'bg-yellow-500 text-white border-yellow-400',
          icon: <Wrench className="w-4 h-4"/>
        }
      default:
        return { 
          label: 'Planeado', 
          color: 'bg-blue-500 text-white border-blue-400',
          icon: <ChartGantt className="w-4 h-4"/>
        }
    }
  }

  return (
    <section id="proyectos" className="scroll-mt-24 bg-gradient-to-b from-slate-900/10 via-slate-900/80 to-slate-900/90 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <Code2 className="inline-block mr-3 h-8 w-8 text-purple-400" />
            Proyectos
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-8">
            Una selección de proyectos personales y profesionales, que muestran mi experiencia en diferentes tecnologías y metodologías de desarrollo
          </p>
          
          {/* Botones de filtro */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === 'all'
                  ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/30'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <Filter className="inline-block w-4 h-4 mr-2" />
              Todos ({projects.length})
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === 'completed'
                  ? 'bg-green-500 text-white shadow-lg shadow-green-500/30'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <Check className="inline-block w-4 h-4 mr-2" />
              Completados ({projects.filter(p => p.status === 'completed').length})
            </button>
            <button
              onClick={() => setFilter('in-development')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === 'in-development'
                  ? 'bg-yellow-500 text-white shadow-lg shadow-yellow-500/30'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <Wrench className="inline-block w-4 h-4 mr-2" />
              En desarrollo ({projects.filter(p => p.status === 'in-development').length})
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => {
            const statusInfo = getStatusInfo(project.status)
            
            return (
              <div
                key={project.id}
                className="group bg-gradient-to-br from-slate-900/90 to-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 hover:border-slate-600 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 flex flex-col"
              >
                {/* Imagen proyecto con overlay mejorado */}
                <div className="relative h-56 md:h-64 bg-slate-800 overflow-hidden">
                  {project.imageUrl ? (
                    <>
                      <Image
                        src={project.imageUrl}
                        alt={project.name}
                        fill
                        className="object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-out"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={false}
                      />
                      {/* Overlay gradiente sutil */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                      {/* Overlay hover con efecto de brillo */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-purple-500/10 group-hover:via-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-500"></div>
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800">
                      <Code2 className="h-16 w-16 text-slate-600 group-hover:text-slate-500 transition-colors duration-300" />
                    </div>
                  )}
                  
                  {/* Badge de estado mejorado */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border backdrop-blur-sm ${statusInfo.color} shadow-lg`}>
                      {statusInfo.icon}
                      {statusInfo.label}
                    </span>
                  </div>
                </div>

                {/* Contenido con mejor spacing */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {project.name}
                  </h3>
                  
                  {/* Descripción expandible */}
                  <div className="mb-4 flex-grow">
                    <p className={`text-slate-400 text-sm leading-relaxed ${expandedDesc === project.id ? '' : 'line-clamp-3'}`}>
                      {project.description}
                    </p>
                    {project.description.length > 120 && (
                      <button
                        className="mt-2 text-xs text-blue-400 hover:text-blue-300 underline transition-colors duration-200 focus:outline-none"
                        onClick={() => setExpandedDesc(expandedDesc === project.id ? null : project.id)}
                      >
                        {expandedDesc === project.id ? 'Ver menos' : 'Ver más'}
                      </button>
                    )}
                  </div>
                  
                  {/* Tecnologías con mejor diseño */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {(showAllTechs === project.id ? project.technologies : project.technologies.slice(0, 3)).map((tech, index) => (
                      <span
                        key={`${project.id}-${tech}-${index}`}
                        className="px-2.5 py-1 bg-slate-800/80 text-slate-300 text-xs font-medium rounded-md border border-slate-700/50 hover:bg-slate-700/80 hover:border-slate-600 hover:text-white transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && showAllTechs !== project.id && (
                      <button
                        onClick={() => setShowAllTechs(project.id)}
                        className="px-2.5 py-1 bg-purple-500/20 text-purple-300 text-xs font-medium rounded-md border border-purple-500/30 hover:bg-purple-500/30 hover:border-purple-400/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                        aria-label={`Ver todas las tecnologías: ${project.technologies.slice(3).join(', ')}`}
                      >
                        +{project.technologies.length - 3} más
                      </button>
                    )}
                    {showAllTechs === project.id && (
                      <button
                        onClick={() => setShowAllTechs(null)}
                        className="px-2.5 py-1 bg-slate-800/80 text-slate-400 text-xs font-medium rounded-md border border-slate-700/50 hover:bg-slate-700/80 hover:text-slate-300 transition-all duration-200 focus:outline-none"
                      >
                        Mostrar menos
                      </button>
                    )}
                  </div>

                  {/* Botones de acción mejorados */}
                  <div className="flex gap-3 mt-auto">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-sm font-semibold rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-105"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Ver Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${project.demoUrl ? 'flex-none' : 'flex-1'} inline-flex items-center justify-center px-4 py-2.5 bg-slate-700/80 text-white text-sm font-semibold rounded-lg hover:bg-slate-600 border border-slate-600 hover:border-slate-500 transition-all duration-300 hover:scale-105`}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        {project.demoUrl ? '' : 'Ver Código'}
                      </a>
                    )}
                    {!project.demoUrl && !project.githubUrl && (
                      <span className="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-slate-800/80 text-slate-400 text-sm font-medium rounded-lg border border-slate-700/50">
                        {project.status === 'in-development' ? (
                          <>
                            <Clock className="h-4 w-4 mr-2" />
                            Próximamente
                          </>
                        ) : (
                          <>
                            <Calendar className="h-4 w-4 mr-2" />
                            Privado
                          </>
                        )}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Filtro vacío */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-800/50 mb-4">
              <Code2 className="h-10 w-10 text-slate-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-400 mb-2">
              No hay proyectos en esta categoría
            </h3>
            <p className="text-slate-500">
              Prueba con otro filtro para ver más proyectos
            </p>
          </div>
        )}

        {/* CTA Colaboremos mejorado */}
        <div className="text-center mt-20 p-8 md:p-10 bg-gradient-to-br from-slate-900/80 via-slate-800/50 to-slate-900/80 rounded-2xl border border-slate-700/50 shadow-2xl">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              ¿Tienes un proyecto en mente?
            </h3>
            <p className="text-slate-400 mb-8 text-base md:text-lg">
              Estoy disponible para colaborar en proyectos interesantes y desafiantes. 
              ¡Hablemos sobre tu próxima idea!
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40"
            >
              <Code2 className="mr-2 h-5 w-5" />
              Colaboremos
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects