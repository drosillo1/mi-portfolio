# 💼 Portfolio Web - Desarrollador Full Stack

Portfolio personal construido con Next.js 14, TypeScript y Tailwind CSS. Diseño moderno, responsive y optimizado para SEO.

## 🌟 Características

- ✨ **Diseño moderno** inspirado en las últimas tendencias de desarrollo
- 📱 **Totalmente responsive** - Optimizado para móvil, tablet y desktop
- 🎨 **Animaciones suaves** con transiciones CSS personalizadas
- 🚀 **Performance optimizado** con Next.js 14 y App Router
- 🔍 **SEO optimizado** con metadatos y Open Graph
- 💼 **Secciones completas**: Hero, Experiencia, Proyectos, Sobre mí y Contacto
- 📧 **Formulario de contacto** funcional con EmailJS
- 🎯 **TypeScript** para mayor seguridad y productividad

## 🛠️ Stack Tecnológico

- **Framework**: [Next.js 14](https://nextjs.org/) con App Router
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
- **Iconos**: [Lucide React](https://lucide.dev/)
- **Animaciones**: [Framer Motion](https://www.framer.com/motion/)
- **SEO**: [Next SEO](https://github.com/garmeeh/next-seo)
- **Deployment**: [Vercel](https://vercel.com/)

## 📁 Estructura del Proyecto

```
mi-portfolio/
├── public/
│   └── images/
│       ├── profile.jpg          # Foto de perfil
│       └── projects/            # Imágenes de proyectos
├── src/
│   ├── app/
│   │   ├── globals.css         # Estilos globales
│   │   ├── layout.tsx          # Layout principal
│   │   └── page.tsx            # Página principal
│   ├── components/
│   │   ├── layout/
│   │   │   └── Header.tsx      # Navegación
│   │   └── sections/
│   │       ├── Hero.tsx        # Sección de presentación
│   │       ├── Experience.tsx  # Experiencia laboral
│   │       ├── Projects.tsx    # Proyectos destacados
│   │       ├── AboutMe.tsx     # Información personal
|   |       └── Contact.tsx     # Métodos de contacto
│   └── types/
│       └── index.ts            # Definiciones TypeScript
├── tailwind.config.ts          # Configuración Tailwind
├── tsconfig.json               # Configuración TypeScript
└── package.json
```

## 🚀 Inicio Rápido

### Prerequisitos

- Node.js 18.17 o superior
- npm o yarn

### Instalación

1. **Clonar el repositorio**

```bash
git clone https://github.com/TU-USUARIO/mi-portfolio.git
cd mi-portfolio
```

2. **Instalar dependencias**

```bash
npm install
# o
yarn install
```

3. **Configurar variables de entorno**

Crea un archivo `.env.local` en la raíz del proyecto:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key
```

4. **Ejecutar en desarrollo**

```bash
npm run dev
# o
yarn dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📝 Scripts Disponibles

```bash
npm run dev      # Inicia servidor de desarrollo
npm run build    # Crea build de producción
npm run start    # Inicia servidor de producción
npm run lint     # Ejecuta ESLint
```

## 🎨 Personalización

### Modificar Contenido

1. **Información personal**: Edita `src/components/sections/Hero.tsx` y `src/components/sections/AboutMe.tsx`
2. **Experiencia laboral**: Actualiza `src/components/sections/Experience.tsx`
3. **Proyectos**: Modifica `src/components/sections/Projects.tsx`
4. **Enlaces sociales**: Cambia URLs en `src/components/layout/Header.tsx`

### Cambiar Colores

Los colores principales están definidos en `src/app/globals.css`:

Puedes personalizarlos usando las clases de Tailwind o modificando el gradiente.

### Añadir Proyectos

Edita el array de proyectos en `src/components/sections/Projects.tsx`:

```typescript
const projects = [
  {
    title: "Mi Proyecto",
    description: "Descripción del proyecto",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    image: "/images/projects/mi-proyecto.jpg",
    link: "https://mi-proyecto.com",
    github: "https://github.com/usuario/proyecto"
  },
];
```

## 🌐 Deploy en Vercel

### Deploy Automático

1. **Conectar con GitHub**
   - Ve a [Vercel](https://vercel.com)
   - Click en "New Project"
   - Importa tu repositorio de GitHub

2. **Configurar Variables de Entorno**
   - En Vercel → Settings → Environment Variables
   - Añade las variables de EmailJS

3. **Deploy**
   - Vercel desplegará automáticamente en cada push a `main`

### Deploy Manual

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 🔒 Privacidad durante Desarrollo

Para mantener el sitio privado mientras haces pruebas:

1. En Vercel → Settings → Deployment Protection
2. Activa "Password Protection" o "Vercel Authentication"
3. Configura tu contraseña

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👤 Autor

**Daniel Rosillo Barnés**

- 📍 Ubicación: Murcia, España
- 💼 LinkedIn: [drosillo1](https://github.com/drosillo1)
- 🐙 GitHub: [daniel-rosillo](https://linkedin.com/in/daniel-rosillo)
- 📧 Email: danirosillo1@gmail.com

## 🙏 Agradecimientos

- Diseño inspirado en [porfolio.dev](https://porfolio.dev/)
- Iconos por [Lucide](https://lucide.dev/)
- Deployed con [Vercel](https://vercel.com/)

---

⭐ Si este proyecto te fue útil, ¡dale una estrella en GitHub!

**Estado**: 🟢 Abierto a colaborar
