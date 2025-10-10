// src/components/sections/AboutMe.tsx
'use client'

import { useState } from 'react'
import { User, Code2, Heart, Dumbbell, Cpu, Gamepad2, Clapperboard, Tv, ChevronRight, Award, MapPin, Calendar } from 'lucide-react'
import Image from 'next/image'

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState<'story' | 'skills' | 'interests'>('story')

  const skills = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'SAP UI5', level: 80, years: '1 año' },
      { name: 'JavaScript / TypeScript', level: 85, years: '1 año' },
      { name: 'React / Next.js', level: 70, years: '<1 año' },
      { name: 'HTML / CSS', level: 85, years: '+1 año' },
      { name: 'Tailwind CSS', level: 75, years: '<1 año' }
    ]
  },
  {
    category: 'Backend & Databases',
    technologies: [
      { name: 'Java / Spring Boot', level: 70, years: '1 año' },
      { name: 'Node.js', level: 75, years: '1 año' },
      { name: 'OData', level: 70, years: '<1 año' },
      { name: 'Kotlin', level: 70, years: '1 año' },
      { name: 'SQL / PostgreSQL', level: 70, years: '1 año' },
      { name: 'Prisma ORM', level: 65, years: '<1 año' }
    ]
  },
  {
    category: 'Herramientas',
    technologies: [
      { name: 'Git / GitHub', level: 85, years: '+1 año' },
      { name: 'Supabase', level: 70, years: '<1 año' },
    ]
  }
]

  const interests = [
    {
      id: 1,
      icon: Gamepad2,
      title: 'Gaming',
      description: 'Apasionado de los videojuegos, desde triples AAA hasta títulos indie. Fan de los Souls, mis plataformas son PS5, PC y Nintendo Switch.',
      color: 'text-purple-400'
    },
    {
      id: 2,
      icon: Code2,
      title: 'Desarrollo',
      description: 'Siempre aprendiendo, atento a las novedades del sector y abierto a probar nuevas tecnologías y frameworks.',
      color: 'text-blue-400'
    },
    {
      id: 3,
      icon: Dumbbell,
      title: 'Fitness',
      description: 'Disfruto entrenar fuerza en el gimnasio y mantener un estilo de vida activo y saludable.',
      color: 'text-red-400'
    },
    {
      id: 4,
      icon: Cpu,
      title: 'Hardware',
      description: 'Me mantengo al día de todas las novedades en móviles, televisores y componentes de PC, además de montar mis propios equipos.',
      color: 'text-green-400'
    },
    {
      id: 5,
      icon: Clapperboard,
      title: 'Cine',
      description: 'Disfruto de ir al cine y de ver todo tipo de películas, desde clasicos hasta los blockbusters actuales.',
      color: 'text-orange-400'
    },
    {
      id: 6,
      icon: Tv,
      title: 'Series',
      description: 'Muy fan de las series y del anime en general, siempre llevo alguna en curso.',
      color: 'text-yellow-400'
    }
  ]

  const achievements = [
    {
      year: '2025',
      title: 'Trinity ISE II – B2 English Certificate',
      description: 'Certificación oficial de inglés B2 por Trinity College London, enfocada en comprensión, expresión oral y escrita.'
    }
  ]
  
  return (
    <section id="sobre-mi" className="scroll-mt-24 section-padding bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900/10 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <User className="inline-block mr-3 h-8 w-8 text-cyan-400" />
            Sobre mí
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Más allá del código: mi trayectoria, habilidades e intereses
          </p>
        </div>

        {/* Contenido principal */}
        <div className="max-w-6xl mx-auto">
          {/* Perfil */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-1">
              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 text-center">
                <div className="relative mx-auto w-32 h-32 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 rounded-full p-1">
                    <div className="w-full h-full bg-slate-950 rounded-full overflow-hidden">
                      <Image
                        src="/images/FotoPF.jpg"
                        alt="Foto de perfil"
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">Daniel Rosillo Barnés</h3>
                <p className="text-blue-500 font-semibold mb-4">Desarrollador SAP UI5</p>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-center text-slate-400">
                    <MapPin className="h-4 w-4 mr-2" />
                    Murcia, España
                  </div>
                  <div className="flex items-center justify-center text-slate-400">
                    <Calendar className="h-4 w-4 mr-2" />
                    +1 año de experiencia
                  </div>
                  <div className="flex items-center justify-center text-slate-400">
                    <Award className="h-4 w-4 mr-2" />
                    B2 Trinity College London
                  </div>
                </div>

                {/* Estado */}
                <div className="mt-6 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <div className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse mr-2"></div>
                    <span className="text-blue-500 text-sm font-semibold">Abierto a colaborar</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="lg:col-span-2">
              {/* Botones tabs  */}
              <div className="flex flex-wrap gap-2 mb-8">
                <button
                  onClick={() => setActiveTab('story')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === 'story'
                      ? 'bg-cyan-400 text-white'
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  Mi Historia
                </button>
                <button
                  onClick={() => setActiveTab('skills')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === 'skills'
                      ? 'bg-blue-500 text-white'
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  Habilidades
                </button>
                <button
                  onClick={() => setActiveTab('interests')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === 'interests'
                      ? 'bg-purple-500 text-white'
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  Intereses
                </button>
              </div>

              {/* Contenido tab */}
              <div className="bg-slate-800/50 rounded-lg p-6 lg:p-8 border border-slate-700 min-h-[400px]">
                {/* Historia */}
                {activeTab === 'story' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Mi trayectoria profesional</h3>
                      <div className="space-y-4 text-slate-300">
                        <p>
                          Mi camino profesional no comenzó en la tecnología, sino en el ámbito de la 
                          <span className="text-cyan-400 font-semibold"> Criminología</span>, carrera que estudié en la Universidad de Murcia. 
                          Sin embargo, durante mis estudios descubrí que mi verdadera vocación estaba en el desarrollo de software 
                          y en el potencial de la tecnología para transformar el día a día de las personas.
                        </p>
                        <p>
                          Tras completar el ciclo de Desarrollo de Aplicaciones Multiplataforma (DAM), 
                          di el salto al mundo profesional. Actualmente cuento con 1 año de experiencia 
                          como <span className="text-blue-500 font-semibold">desarrollador SAP UI5</span>, 
                          creando aplicaciones web y trabajando principalmente con JavaScript 
                          y tecnologías modernas de frontend.
                        </p>
                        <p>
                          Me apasiona mantenerme en constante aprendizaje, explorar nuevas herramientas y adoptar las últimas 
                          tendencias del sector para ofrecer soluciones eficientes, escalables y con una experiencia de usuario 
                          cuidada al detalle.
                        </p>
                        <p>
                          Además de mi trabajo diario, desarrollo en mi tiempo libre creando proyectos como este portfolio o <span className="text-purple-400 font-semibold">GameNook</span>, 
                          una plataforma para gamers que combina mi amor por los videojuegos con las últimas tecnologías web.
                        </p>
                      </div>
                    </div>

                    {/* Certificaciones */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Certificaciones</h4>
                      <div className="space-y-4">
                        {achievements.map((achievement, index) => (
                          <div key={index} className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-16 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center">
                              <span className="text-cyan-400 text-sm font-bold">{achievement.year}</span>
                            </div>
                            <div>
                              <h5 className="font-semibold text-white">{achievement.title}</h5>
                              <p className="text-slate-400 text-sm">{achievement.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Habilidades */}
                {activeTab === 'skills' && (
                  <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Mis habilidades técnicas</h3>
                    {skills.map((skillGroup, index) => (
                      <div key={index}>
                        <h4 className="text-lg font-semibold text-white mb-4">{skillGroup.category}</h4>
                        <div className="space-y-4">
                          {skillGroup.technologies.map((tech, techIndex) => (
                            <div key={techIndex} className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="text-slate-300 font-medium">{tech.name}</span>
                                <div className="flex items-center space-x-2">
                                  <span className="text-slate-400 text-sm">{tech.years}</span>
                                  <span className="text-cyan-400 text-sm font-semibold">{tech.level}%</span>
                                </div>
                              </div>
                              <div className="w-full bg-slate-700 rounded-full h-2">
                                <div
                                  className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 h-2 rounded-full transition-all duration-1000 ease-out"
                                  style={{ width: `${tech.level}%` }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Intereses */}
                {activeTab === 'interests' && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-6">Lo que me apasiona</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {interests.map((interest, id) => (
                        <div key={id} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600">
                          <div className="flex items-start space-x-4">
                            <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-slate-800/50 flex items-center justify-center`}>
                              <interest.icon className={`h-6 w-6 ${interest.color}`} />
                            </div>
                            <div>
                              <h4 className="font-semibold text-white mb-2">{interest.title}</h4>
                              <p className="text-slate-400 text-sm leading-relaxed">
                                {interest.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>   
        </div>
      </div>
    </section>
  )
}

export default AboutMe