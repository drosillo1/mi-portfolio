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
      id: 'gamenook',
      name: 'GameNook',
      description: 'Plataforma que permite descubrir, reseñar y compartir tus videojuegos favoritos, además de conectar con otros gamers y encontrar tu próxima aventura',
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
      technologies: ['SAP UI5', 'Fiori', 'OData (Northwind)', 'XML Views', 'TypeScript', 'Node.js',],
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

  const [showAllTechs, setShowAllTechs] = useState<string | null>(null);
  const [expandedDesc, setExpandedDesc] = useState<string | null>(null);

  const getStatusInfo = (status: Project['status']) => {
    switch (status) {
      case 'completed':
        return { 
          label: 'Completado', 
          color: 'bg-green-500 text-white border-green-400',
          icon: <Check className = "w-4 h-4"/>
        }
      case 'in-development':
        return { 
          label: 'En desarrollo', 
          color: 'bg-yellow-500 text-white border-yellow-400',
          icon: <Wrench className = "w-4 h-4"/>
        }
      default:
        return { 
          label: 'Planeado', 
          color: 'bg-blue-500 text-white border-blue-400',
          icon: <ChartGantt className = "w-4 h-4"/>
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
          <div className="flex justify-center space-x-2 mb-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === 'all'
                  ? 'bg-purple-500 text-white'
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
                  ? 'bg-green-500 text-white'
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
                  ? 'bg-yellow-500 text-white'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
              }`}
            >
              <Wrench className="inline-block w-4 h-4 mr-2" />
              En desarrollo ({projects.filter(p => p.status === 'in-development').length})
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const statusInfo = getStatusInfo(project.status)
            
            return (
              <div
                key={project.id}
                className="group bg-slate-900/50 rounded-lg overflow-hidden border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:transform hover:scale-105"
              >
                {/* Imagen proyecto */}
                <div className="relative h-48 sm:h-56 md:h-64 bg-slate-800 overflow-hidden border border-slate-700">
                  {project.imageUrl ? (
                    <Image
                      src={project.imageUrl}
                      alt={project.name}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-700">
                      <Code2 className="h-12 w-12 sm:h-16 sm:w-16 text-slate-500" />
                    </div>
                  )}
                  
                  {/* Banda de estado */}
                  <div className="absolute top-3 right-3">
                    <span className={`inline-flex items-center px-2 py-1 text-xs rounded-full border ${statusInfo.color}`}>
                      <span className="mr-1">{statusInfo.icon}</span>
                      {statusInfo.label}
                    </span>
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 ">
                    {project.name}
                  </h3>
                  {/* Descripción expandible */}
                  <div className="mb-4">
                    <p className={`text-slate-400 text-sm ${expandedDesc === project.id ? '' : 'line-clamp-4'}`}>
                      {project.description}
                    </p>
                    {project.description.length > 120 && (
                      <button
                        className="mt-1 text-xs text-blue-400 underline focus:outline-none"
                        onClick={() => setExpandedDesc(expandedDesc === project.id ? null : project.id)}
                      >
                        {expandedDesc === project.id ? 'Ver menos' : 'Ver más'}
                      </button>
                    )}
                  </div>
                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {(showAllTechs === project.id ? project.technologies : project.technologies.slice(0, 3)).map((tech, index) => (
                      <span
                        key={`${project.id}-${tech}-${index}`}
                        className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded border border-slate-700 hover:bg-slate-700 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && showAllTechs !== project.id && (
                      <button
                        onClick={() => setShowAllTechs(project.id)}
                        className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded border border-slate-700 cursor-pointer hover:bg-slate-700 hover:text-slate-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-50"
                        aria-label={`Ver todas las tecnologías: ${project.technologies.slice(3).join(', ')}`}
                      >
                        +{project.technologies.length - 3} más
                      </button>
                    )}
                    {showAllTechs === project.id && (
                      <button
                        onClick={() => setShowAllTechs(null)}
                        className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded border border-slate-700 cursor-pointer hover:bg-slate-700 hover:text-slate-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-50"
                      >
                        Mostrar menos
                      </button>
                    )}
                  </div>

                  {/* Botones de acción */}
                  <div className="flex space-x-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-2 bg-purple-500 text-white text-sm font-medium rounded hover:bg-purple-600 transition-colors duration-300"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        URL
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-2 bg-slate-700 text-white text-sm font-medium rounded hover:bg-slate-600 transition-colors duration-300"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Código
                      </a>
                    )}
                    {!project.demoUrl && !project.githubUrl && (
                      <span className="inline-flex items-center px-3 py-2 bg-slate-800 text-slate-400 text-sm rounded">
                        {project.status === 'in-development' ? (
                          <>
                          < Clock className="h-4 w-4 mr-2" />
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

        {/* Filtro vacío por si algun dia me quedo sin proyectos en desarrollo por ejemplo */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <Code2 className="h-16 w-16 text-slate-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-400 mb-2">
              No hay proyectos en esta categoría
            </h3>
            <p className="text-slate-500">
              Prueba con otro filtro para ver más proyectos
            </p>
          </div>
        )}

        {/* Colaboremos */}
        <div className="text-center mt-16 p-8 bg-slate-900/50 rounded-lg border border-slate-800">
          <h3 className="text-2xl font-bold text-white mb-4">
            ¿Tienes un proyecto en mente?
          </h3>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            Estoy disponible para colaborar en proyectos interesantes y desafiantes. 
            ¡Hablemos sobre tu próxima idea!
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            <Code2 className="mr-2 h-5 w-5" />
            Colaboremos
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects