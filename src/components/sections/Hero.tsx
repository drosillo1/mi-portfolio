// src/components/sections/Hero.tsx
'use client'

import { useState, useEffect } from 'react'
import { ArrowDown, Mail, Linkedin } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

 const scrollToExperience = () => {
  const element = document.getElementById('experiencia')
  if (element) {
    const headerHeight = 30
    const elementPosition = element.offsetTop - headerHeight
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    })
  }
}

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/10 via-slate-900/80 to-slate-900/90"/>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Imagen  */}
          <div className={`mb-8 transition-all duration-1000 delay ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative mx-auto w-32 h-32 md:w-40 md:h-40 mt-6">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 rounded-full p-1">
                <div className="w-full h-full bg-slate-950 rounded-full overflow-hidden">
                  <Image
                    src="/images/fotoperfil.jpg" 
                    alt="Foto de perfil"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
              
              {/* Banda */}
              <button
                onClick={() => {
                  document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="absolute -bottom-2 right-0.5 bg-blue-500 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-2 border-slate-950 focus:outline-none hover:bg-blue-700 transition-colors cursor-pointer"
                aria-label="Ir a contacto"
              >
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  <span>Abierto a colaborar</span>
                </div>
              </button>
            </div>
          </div>

          {/* Main heading */}
          <div className={`mb-6 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Daniel Rosillo Barnés
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-2">
              <span className="text-cyan-400">+1 Año de experiencia.</span>{' '}
              <span className="text-blue-500">SAP UI5/ Fiori.</span>{' '}
              <span className="text-purple-400">Frontend React / Next.js</span>
            </p>
            <p className="text-lg text-slate-400">
              Murcia, España. Especializado en aplicaciones web modernas y escalables.
            </p>
          </div>

          {/* Botones de contacto */}
          <div className={`mb-12 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contacto"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold border border-white/20 rounded-lg hover:from-cyan-700 hover:to-blue-700 hover:border-white/30 transition-all duration-300 transform hover:scale-105"

              >
                <Mail className="mr-2 h-5 w-5" />
                Contáctame
              </a>
              <a
                href="https://linkedin.com/in/daniel-rosillo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-slate-800 text-white font-semibold rounded-lg border border-slate-600 hover:bg-slate-700 hover:border-slate-500 transition-all duration-300 transform hover:scale-105"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Stats or highlights */}
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="text-center p-4 rounded-lg bg-slate-800/50 backdrop-blur-sm">
              <div className="text-2xl font-bold text-blue-500 mb-1">+1</div>
              <div className="text-slate-400 text-sm">Año de experiencia</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-slate-800/50 backdrop-blur-sm">
              <div className="text-2xl font-bold text-purple-400 mb-1">SAP UI5</div>
              <div className="text-slate-400 text-sm">Especialización</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-slate-800/50 backdrop-blur-sm">
              <div className="text-2xl font-bold text-cyan-400 mb-1">Web Apps</div>
              <div className="text-slate-400 text-sm">Enfoque principal</div>
            </div>
          </div>

          {/* Indicador*/}
          <div className={`transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
           <button
              onClick={scrollToExperience}
              className="inline-flex flex-col items-center text-slate-400 hover:text-white transition-colors mt-20 md:mt-40 cursor-pointer duration-300 group"
              aria-label="Scroll to experience section"
            >
              <span className="text-sm mb-2">Ver experiencia</span>
              <ArrowDown className="h-5 w-5 animate-bounce group-hover:animate-none" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero