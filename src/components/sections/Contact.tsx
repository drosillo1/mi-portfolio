'use client'

import { useState } from 'react'
import { Mail, MapPin, Linkedin, Github, Copy, Check } from 'lucide-react'

const Contact = () => {
  const [copied, setCopied] = useState(false)
  
  const contactInfo = {
    email: 'danirosillo1@gmail.com',
    linkedin: "https://linkedin.com/in/daniel-rosillo",
    github: 'https://github.com/drosillo1',
    location: 'Murcia, España'
  }

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.preventDefault()
    try {
      await navigator.clipboard.writeText(contactInfo.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Error al copiar:', err)
    }
  }

  return (
    <section id="contacto" className="scroll-mt-24 section-padding bg-gradient-to-b from-slate-900/10 via-slate-900/80 to-slate-900/90">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <Mail className="inline-block mr-3 h-8 w-8 text-blue-400" />
            Contacto
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente o quieres colaborar? No dudes en contactarme. 
            Estoy siempre abierto a nuevas oportunidades y conversaciones interesantes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            
            {/* Métodos de contacto */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email con función de copiar */}
              <div className="relative">
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-400 hover:bg-slate-800/70 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                    <Mail className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="ml-4 flex-1">
                    <h4 className="text-white font-semibold">Email</h4>
                    <p className="text-slate-400 group-hover:text-blue-400 transition-colors duration-300">
                      {contactInfo.email}
                    </p>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="ml-2 p-2 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-all duration-300 group/copy"
                    aria-label="Copiar email"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-green-400" />
                    ) : (
                      <Copy className="h-4 w-4 text-slate-400 group-hover/copy:text-blue-400 transition-colors duration-300" />
                    )}
                  </button>
                </a>
                
                {/* Tooltip de copiado */}
                {copied && (
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-sm px-3 py-1 rounded-lg shadow-lg animate-fade-in">
                    ¡Email copiado!
                  </div>
                )}
              </div>

              <a 
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-400 hover:bg-slate-800/70 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                  <Linkedin className="h-6 w-6 text-blue-400" />
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-semibold">LinkedIn</h4>
                  <p className="text-slate-400 group-hover:text-blue-400 transition-colors duration-300">
                    Conecta conmigo en LinkedIn
                  </p>
                </div>
              </a>

              <a 
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-slate-400 hover:bg-slate-800/70 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-slate-500/20 rounded-lg flex items-center justify-center group-hover:bg-slate-500/30 transition-colors duration-300">
                  <Github className="h-6 w-6 text-slate-400" />
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-semibold">GitHub</h4>
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                    Explora mis proyectos en GitHub
                  </p>
                </div>
              </a>

              <div className="flex items-center p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-purple-400" />
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-semibold">Ubicación</h4>
                  <p className="text-slate-400">{contactInfo.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact