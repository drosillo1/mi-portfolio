'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Coffee, Sparkles, ArrowUp, Wand, Gift, Trophy, Star, MessageCircle, ArrowRight, Clock } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [clickCount, setClickCount] = useState(0)
  const [showEasterEgg, setShowEasterEgg] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [randomMessage, setRandomMessage] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (clickCount > 0) {
      const timer = setTimeout(() => setClickCount(0), 1500)
      return () => clearTimeout(timer)
    }
  }, [clickCount])

useEffect(() => {
  if (showEasterEgg) {
    const audio = new Audio('/sounds/archievement.wav');
    audio.play().catch((e) => console.error('Error al reproducir el sonido:', e));
    
  }
}, [showEasterEgg]);

  const handleLogoClick = () => {
    setClickCount((prev) => {
      const newCount = prev + 1
      if (newCount === 1) {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
      if (newCount >= 3) {
        setIsAnimating(true)
        setTimeout(() => {
          setShowEasterEgg(true)
          setIsAnimating(false)
        }, 500)
      }
      return newCount
    })
  }

  const handleClaimReward = () => {
    setShowEasterEgg(false)
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
  }

  const navItems = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Experiencia', href: '#experiencia' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Sobre mí', href: '#sobre-mi' },
    { name: 'Contacto', href: '#contacto' },
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/drosillo1', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/daniel-rosillo', label: 'LinkedIn' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? isMenuOpen
              ? 'bg-slate-950/90 backdrop-blur-sm border-b border-slate-800'
              : 'bg-slate-950/90 backdrop-blur-sm border-b border-slate-800'
            : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Menu primero para movil */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white focus:outline-none focus:text-white active:text-slate-400"
                aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              >
                {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
              </button>
            </div>
            <div className="flex-shrink-0 relative group md:order-first mt-2">
              <button
                onClick={handleLogoClick}
                className={`text-indigo-500 font-bold gradient-text cursor-pointer relative ${
                  isAnimating ? 'animate-bounce' : ''
                }`}
              >
                <div className="relative">
                  <img
                    src="/images/programacion.png"
                    alt="Logo"
                    className={`h-9 w-auto hover:scale-110 active:scale-95 transition-all duration-200 ${
                      clickCount > 0 ? 'animate-pulse' : ''
                    }`}
                  />
                  {clickCount > 0 && (
                    <div className="absolute -top-1 -right-1 bg-indigo-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-rubber-band" key={clickCount}>
                      {clickCount}
                    </div>
                  )}
                </div>
              </button>
            </div>

            {/* Escritorio - Navegación */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-white hover:text-slate-200 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-slate-800/50 rounded-md"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Escritorio - Enlaces sociales */}
            <div className="hidden md:flex items-center space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white transition-transform duration-200 hover:text-slate-400 hover:scale-110"
                  aria-label={link.label}
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Movil - Menú desplegable */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-3 pt-3 pb-3 space-y-1 sm:px-3 bg-slate-900/90 backdrop-blur-sm rounded-lg mt-2 mb-4 ">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-white active:text-slate-400 block px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-slate-800/50 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                {/* Movil - Social links */}
                <div className="flex items-center space-x-4 px-3 py-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white active:text-slate-400 transition-colors duration-200"
                      aria-label={link.label}
                    >
                      <link.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Easter egg */}
      {showEasterEgg && (
      <div 
        className="fixed inset-0 bg-gradient-to-br from-black/95 via-slate-900/90 to-black/95 backdrop-blur-md flex items-start sm:items-center justify-center z-[9999] animate-in fade-in duration-700 p-2 sm:p-4 overflow-y-auto"
        onClick={() => setShowEasterEgg(false)}
      >
        <div 
          className="relative bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-3 sm:p-6 shadow-2xl w-full max-w-[95%] sm:max-w-md text-center border border-slate-700/50 transform animate-bounce-fade-in duration-500 ease-out mt-4 sm:my-0"
          onClick={(e) => e.stopPropagation()}
        >             
          {/* Botón cerrar */}
          <button
            onClick={() => setShowEasterEgg(false)}
            className="absolute -top-3 -right-3 z-[60] text-white hover:text-slate-400 transition-all duration-300 bg-slate-800 hover:bg-slate-700 rounded-full cursor-pointer p-2 backdrop-blur-sm border border-slate-600/30 hover:border-slate-500/50 shadow-lg"
            aria-label="Cerrar"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Header del easter */}
          <div className="mb-3 sm:mb-4">
            <div className="relative flex items-center justify-center mb-3 sm:mb-4">
              <div className="absolute w-12 sm:w-20 h-12 sm:h-20 bg-gradient-to-r from-yellow-400/20 via-orange-500/20 to-yellow-400/20 blur-xl rounded-full"></div>
              <Trophy className="h-10 w-10 sm:h-16 sm:w-16 text-yellow-400 drop-shadow-lg animate-tada" />
            </div>
            
            <h2 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent mb-2 sm:mb-3 animate-pulse">
              ¡LOGRO DESBLOQUEADO!
            </h2>
          </div>

          {/* GIF más pequeño en móvil */}
          <div className="mb-3 sm:mb-6 relative overflow-hidden rounded-xl sm:rounded-2xl border border-pink-400/30 bg-slate-800/50">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10"></div>
            <img
              src="https://www.likeinteligente.org/wp-content/uploads/2023/10/68747470733a2f2f6d656469612e74656e6f722e636f6d2f7a7a6e746d325f3942336741414141432f6861636b65722e676966.gif"
              alt="Desarrollador programando"
              className="w-full rounded-xl sm:rounded-2xl"
              style={{ 
                height: '120px',
                objectFit: 'cover',
              }}
            />
          </div>

          {/* Contenido más compacto en móvil */}
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2 sm:p-4 mb-3 sm:mb-6 border border-pink-400/30">
            <div className="text-left space-y-2 sm:space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-xs sm:text-sm font-semibold">Descripción:</span>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-0.5 rounded-full">
                  RARO
                </span>
              </div>
              <p className="text-white text-xs sm:text-sm leading-relaxed">
                ¡Buen ojo! Has demostrado la misma curiosidad y atención al detalle que aplico en cada proyecto.
              </p>
            </div>
          </div>

          {/* Botones más compactos en móvil */}
          <div className="space-y-2 sm:space-y-4">
            <p className="text-white text-xs sm:text-sm font-medium">
              ¿Reclamar recompensa?
            </p>
            
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <button
                onClick={handleClaimReward}
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs sm:text-sm font-semibold px-3 sm:px-5 py-2 sm:py-3 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2"
              >
                <Coffee className="h-3 w-3 sm:h-4 sm:w-4" />
                Contactar
              </button>
              
              <button
                onClick={() => setShowEasterEgg(false)}
                className="bg-slate-700/80 hover:bg-slate-600/80 text-white text-xs sm:text-sm font-semibold px-3 sm:px-5 py-2 sm:py-3 rounded-lg flex items-center justify-center gap-1 sm:gap-2"
              >
                <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                Después
              </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header