// src/components/Footer.tsx
import { Linkedin, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900/10 text-slate-400 py-6">
      <div className="container mt-10 mx-auto px-4 flex items-center justify-center"> 
        {/* Copyright */}
        <p className="text-sm tracking-wide">
          © {new Date().getFullYear()} Daniel Rosillo Barnés. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
