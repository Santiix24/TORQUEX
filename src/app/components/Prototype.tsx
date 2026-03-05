import { useState, useEffect } from 'react';
import logoImg from "../../assets/5c502591b95ce684081753040d896bc31d86be5e.png";
import motoSketchImg from "../../assets/810f4055d7e5855a4c1e4c8bfc639b22f171baeb.png";
import { Zap, Gauge, Shield, ArrowRight, Menu, X, Star, Phone, Mail, MapPin, Play, Award, Target, TrendingUp, Sparkles, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Prototype() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [selectedTab, setSelectedTab] = useState('especificaciones');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const models = [
    {
      id: 'r1',
      name: 'TORQUEX R1',
      tagline: 'La superbike definitiva',
      price: '$24,999',
      hp: '200 HP',
      torque: '116 Nm',
      weight: '193 kg',
      topSpeed: '299 km/h',
      acceleration: '2.9 seg',
      image: 'https://images.unsplash.com/photo-1767275090613-adb6fbd16172?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBzdXBlcmJpa2UlMjBzcGVlZHxlbnwxfHx8fDE3NzI3MzQxMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      badge: 'NUEVO',
      badgeColor: 'bg-red-600',
      color: 'Rojo Racing',
      specs: ['200 HP', '299 km/h', '193 kg']
    },
    {
      id: 's6',
      name: 'TORQUEX S6',
      tagline: 'Elegancia deportiva',
      price: '$19,999',
      hp: '165 HP',
      torque: '95 Nm',
      weight: '185 kg',
      topSpeed: '270 km/h',
      acceleration: '3.2 seg',
      image: 'https://images.unsplash.com/photo-1763244737839-220b4cd0259e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMG1vdG9yY3ljbGUlMjBzdHVkaW98ZW58MXx8fHwxNzcyNzM0MTE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      badge: null,
      color: 'Negro Stealth',
      specs: ['165 HP', '270 km/h', '185 kg']
    },
    {
      id: 'x9',
      name: 'TORQUEX X9',
      tagline: 'Edición limitada',
      price: '$29,999',
      hp: '210 HP',
      torque: '125 Nm',
      weight: '190 kg',
      topSpeed: '310 km/h',
      acceleration: '2.7 seg',
      image: 'https://images.unsplash.com/photo-1758887699099-efa710f06a83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwcmFjaW5nJTIwbW90b3JjeWNsZXxlbnwxfHx8fDE3NzI3MzQxMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      badge: 'LIMITADA',
      badgeColor: 'bg-yellow-600',
      color: 'Azul Competición',
      specs: ['210 HP', '310 km/h', '190 kg']
    }
  ];

  const heroImages = [
    'https://images.unsplash.com/photo-1767274859866-8bb59b4f900d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwcmlkZXIlMjBoaWdod2F5JTIwc3BlZWR8ZW58MXx8fHwxNzcyNzM0Njc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1770936994186-dfea62e840c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjB0cmFjayUyMGN1cnZlcyUyMGFlcmlhbHxlbnwxfHx8fDE3NzI3MzQ2Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1625155648806-a537ac845daf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydCUyMGJpa2UlMjBoZWFkbGlnaHQlMjBjbG9zZXVwfGVufDF8fHx8MTc3MjczNDY3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
    }, 3000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden">
      {/* Hero Section with Enhanced Parallax and Slider */}
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden min-h-screen flex items-center">
        {/* Background Image Slider */}
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.15, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
            >
              <img 
                src={heroImages[currentSlide]} 
                alt="Background"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
        
        {/* Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-8 py-6">
          {/* Enhanced Header with Scroll Effect */}
          <motion.header 
            className="flex items-center justify-between mb-16"
            style={{
              backgroundColor: scrollY > 50 ? 'rgba(0,0,0,0.8)' : 'transparent',
              backdropFilter: scrollY > 50 ? 'blur(10px)' : 'none',
              padding: scrollY > 50 ? '1rem 2rem' : '1.5rem 2rem',
              position: scrollY > 50 ? 'fixed' : 'relative',
              top: scrollY > 50 ? 0 : 'auto',
              left: scrollY > 50 ? 0 : 'auto',
              right: scrollY > 50 ? 0 : 'auto',
              zIndex: 50,
              transition: 'all 0.3s ease'
            }}
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-4"
            >
              <div className="relative">
                <img src={logoImg} alt="TORQUEX Logo" className="h-12 md:h-14 drop-shadow-2xl" />
                <motion.div 
                  className="absolute -inset-2 bg-red-600/20 blur-xl -z-10"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                ></motion.div>
              </div>
            </motion.div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 bg-white/5 backdrop-blur-lg rounded-full px-2 py-2 border border-white/10">
              <a href="#modelos" className="px-6 py-2.5 text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all">Modelos</a>
              <a href="#tecnologia" className="px-6 py-2.5 text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all">Tecnología</a>
              <a href="#contacto" className="px-6 py-2.5 text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all">Contacto</a>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-2.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-full font-semibold shadow-lg shadow-red-600/30 transition-all"
              >
                Cotizar
              </motion.button>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 bg-white/10 backdrop-blur-sm rounded-lg"
              whileTap={{ scale: 0.95 }}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </motion.header>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-gray-800/95 backdrop-blur-lg rounded-lg p-6 mb-8"
              >
                <nav className="flex flex-col space-y-4">
                  <a href="#modelos" className="text-gray-300 hover:text-white transition-colors">Modelos</a>
                  <a href="#tecnologia" className="text-gray-300 hover:text-white transition-colors">Tecnología</a>
                  <a href="#contacto" className="text-gray-300 hover:text-white transition-colors">Contacto</a>
                  <button className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-full transition-colors text-center">
                    Cotizar
                  </button>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Enhanced Hero Content */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div 
                className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-red-600/20 to-red-600/5 border border-red-600/50 rounded-full text-red-400 text-sm backdrop-blur-sm"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                <span className="font-semibold">Nueva Colección 2026</span>
                <Sparkles className="w-4 h-4" />
              </motion.div>
              
              <div className="space-y-4">
                <motion.h1 
                  className="text-6xl md:text-7xl font-black leading-none tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Velocidad
                  <br />
                  <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
                    Sin Límites
                  </span>
                </motion.h1>
                <motion.div 
                  className="h-1 w-32 bg-gradient-to-r from-red-600 to-transparent rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: 128 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                ></motion.div>
              </div>
              
              <motion.p 
                className="text-xl text-gray-300 leading-relaxed max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Descubre la nueva generación de motos deportivas TORQUEX. 
                Diseñadas para dominar la carretera con potencia extrema y tecnología de vanguardia.
              </motion.p>

              {/* Enhanced Stats Mini Cards */}
              <motion.div 
                className="grid grid-cols-3 gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                {[
                  { value: '210', label: 'HP Potencia', icon: Zap },
                  { value: '2.7s', label: '0-100 km/h', icon: Target },
                  { value: '310', label: 'km/h Max', icon: TrendingUp }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className="relative group overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all cursor-pointer"
                    whileHover={{ y: -5, scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <stat.icon className="w-5 h-5 text-red-600 mb-2" />
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-400 uppercase">{stat.label}</div>
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(220, 38, 38, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-10 py-5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-xl font-bold text-lg transition-all shadow-2xl shadow-red-600/40 flex items-center justify-center space-x-3"
                  onClick={() => document.getElementById('modelos')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span>Explorar Modelos</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:bg-white hover:text-black rounded-xl font-bold text-lg transition-all flex items-center justify-center space-x-3"
                  onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Play className="w-5 h-5" />
                  <span>Ver Video</span>
                </motion.button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              {/* Enhanced Glow effect */}
              <motion.div 
                className="absolute -inset-12 bg-gradient-to-r from-red-600/30 via-red-500/40 to-orange-600/30 blur-3xl opacity-50"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              ></motion.div>
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-transparent rounded-full blur-2xl"></div>
              
              {/* Main Image with Parallax */}
              <motion.div 
                className="relative"
                style={{ y: scrollY * -0.1 }}
              >
                <motion.img 
                  src={motoSketchImg} 
                  alt="Motorcycle Sketch" 
                  className="relative w-full drop-shadow-2xl"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>

              {/* Floating Enhanced Badge */}
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-gradient-to-br from-gray-900 to-black border-2 border-red-600 rounded-2xl p-6 shadow-2xl backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="flex items-center space-x-4">
                  <motion.div 
                    className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Award className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <div className="text-2xl font-bold text-white">+15</div>
                    <div className="text-xs text-gray-400">Premios Ganados</div>
                  </div>
                </div>
              </motion.div>

              {/* Slider Navigation Dots */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex space-x-2">
                {heroImages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === currentSlide ? 'bg-red-600 w-8' : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex flex-col items-center text-gray-400"
            >
              <span className="text-sm mb-2">Scroll para explorar</span>
              <ChevronRight className="w-6 h-6 rotate-90" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section id="tecnologia" className="relative py-24 px-8 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-900/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-semibold mb-4"
            >
              TECNOLOGÍA DE PUNTA
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-black text-gray-900 mb-6"
            >
              Ingeniería de Alta<br/>
              <span className="text-red-600">Performance</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Cada TORQUEX incorpora tecnología de carreras para una experiencia de conducción excepcional
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Zap, 
                title: 'Motor Potente', 
                description: 'Motores de última generación con hasta 210 HP para acelerar de 0-100 km/h en 2.7 segundos.',
                stat: '210 HP',
                color: 'from-yellow-500 to-orange-600'
              },
              { 
                icon: Gauge, 
                title: 'Aerodinámica', 
                description: 'Diseño aerodinámico optimizado en túnel de viento para máxima estabilidad a alta velocidad.',
                stat: '0.32 Cd',
                color: 'from-blue-500 to-cyan-600'
              },
              { 
                icon: Shield, 
                title: 'Seguridad Activa', 
                description: 'Sistema ABS avanzado, control de tracción y múltiples modos de conducción electrónica.',
                stat: '100%',
                color: 'from-green-500 to-emerald-600'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ y: -12, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden h-full">
                  {/* Background decoration */}
                  <motion.div 
                    className={`absolute -right-12 -bottom-12 w-32 h-32 bg-gradient-to-br ${feature.color} rounded-full opacity-5 group-hover:opacity-10 transition-opacity blur-2xl`}
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.5 }}
                  ></motion.div>
                  
                  {/* Icon container */}
                  <div className="relative mb-8">
                    <motion.div 
                      className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg rotate-6`}
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <feature.icon className="w-10 h-10 text-white" />
                      </motion.div>
                    </motion.div>
                    {/* Stat badge */}
                    <motion.div 
                      className="absolute -bottom-2 -right-2 bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-bold"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.5, type: "spring" }}
                    >
                      {feature.stat}
                    </motion.div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  
                  {/* Learn more link */}
                  <motion.div 
                    className="flex items-center space-x-2 text-red-600 font-semibold"
                    whileHover={{ x: 5 }}
                  >
                    <span>Saber más</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Features Strip */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            {[
              { icon: Target, label: 'Precisión Extrema' },
              { icon: TrendingUp, label: 'Alto Rendimiento' },
              { icon: Award, label: 'Premiado' },
              { icon: Shield, label: 'Garantía 5 Años' }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, borderColor: 'rgb(220, 38, 38)' }}
                className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex items-center space-x-4 transition-all cursor-pointer"
              >
                <motion.div 
                  className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon className="w-6 h-6 text-red-600" />
                </motion.div>
                <div className="text-sm font-semibold text-gray-900">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Interactive Models Section */}
      <section id="modelos" className="py-24 px-8 bg-gray-900 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-2 bg-red-600/20 border border-red-600/50 text-red-400 rounded-full text-sm font-semibold mb-4"
              >
                COLECCIÓN 2026
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl font-black mb-4"
              >
                Nuestra <span className="text-red-600">Colección</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-xl text-gray-400"
              >
                Tres modelos, infinitas emociones
              </motion.p>
            </div>
            <motion.div 
              className="flex space-x-3"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <motion.button 
                onClick={prevSlide}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center transition-all"
              >
                ←
              </motion.button>
              <motion.button 
                onClick={nextSlide}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center transition-all"
              >
                →
              </motion.button>
            </motion.div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {models.map((model, index) => (
              <motion.div
                key={model.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="group relative cursor-pointer"
                onClick={() => setSelectedModel(model.id)}
              >
                <motion.div 
                  className="relative bg-gray-800 rounded-3xl overflow-hidden shadow-2xl border border-gray-700"
                  whileHover={{ y: -10, borderColor: 'rgb(220, 38, 38)' }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image Container */}
                  <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-900 to-black">
                    <motion.img 
                      src={model.image} 
                      alt={model.name} 
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.15, rotate: 2 }}
                      transition={{ duration: 0.7 }}
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                    
                    {/* Badge */}
                    {model.badge && (
                      <motion.div 
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
                        className={`absolute top-6 right-6 ${model.badgeColor || 'bg-red-600'} text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm`}
                      >
                        {model.badge}
                      </motion.div>
                    )}

                    {/* Quick specs overlay */}
                    <motion.div 
                      className="absolute bottom-4 left-4 right-4 flex justify-between"
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {model.specs.map((spec, i) => (
                        <motion.div 
                          key={i} 
                          className="bg-black/80 backdrop-blur-sm px-3 py-2 rounded-lg text-xs font-semibold"
                          initial={{ opacity: 0, y: 10 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          {spec}
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* View Details Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="bg-white text-gray-900 px-6 py-3 rounded-full font-bold flex items-center space-x-2"
                      >
                        <span>Ver Detalles</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <motion.h3 
                      className="text-2xl font-bold mb-2 group-hover:text-red-600 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {model.name}
                    </motion.h3>
                    <p className="text-gray-400 mb-6">{model.tagline}</p>
                    
                    <div className="flex justify-between items-center pt-6 border-t border-gray-700">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Desde</div>
                        <motion.div 
                          className="text-3xl font-bold text-red-600"
                          whileHover={{ scale: 1.1 }}
                        >
                          {model.price}
                        </motion.div>
                      </div>
                      <motion.button 
                        whileHover={{ scale: 1.1, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-xl font-semibold transition-all shadow-lg shadow-red-600/30 flex items-center space-x-2"
                      >
                        <span>Ver más</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Model Details Modal */}
      <AnimatePresence>
        {selectedModel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedModel(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {models.filter(m => m.id === selectedModel).map(model => (
                <div key={model.id}>
                  <div className="relative h-96">
                    <img src={model.image} alt={model.name} className="w-full h-full object-cover" />
                    <button
                      onClick={() => setSelectedModel(null)}
                      className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-2">{model.name}</h2>
                        <p className="text-xl text-gray-600">{model.tagline}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-red-600">{model.price}</div>
                        <div className="text-sm text-gray-500">Precio sugerido</div>
                      </div>
                    </div>

                    {/* Tabs */}
                    <div className="border-b border-gray-200 mb-6">
                      <div className="flex space-x-8">
                        {['especificaciones', 'características', 'colores'].map(tab => (
                          <button
                            key={tab}
                            onClick={() => setSelectedTab(tab)}
                            className={`pb-4 font-semibold capitalize transition-colors ${
                              selectedTab === tab
                                ? 'text-red-600 border-b-2 border-red-600'
                                : 'text-gray-500 hover:text-gray-700'
                            }`}
                          >
                            {tab}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Tab Content */}
                    {selectedTab === 'especificaciones' && (
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="text-3xl font-bold text-red-600 mb-1">{model.hp}</div>
                          <div className="text-sm text-gray-600">Potencia máxima</div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="text-3xl font-bold text-red-600 mb-1">{model.torque}</div>
                          <div className="text-sm text-gray-600">Torque</div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="text-3xl font-bold text-red-600 mb-1">{model.weight}</div>
                          <div className="text-sm text-gray-600">Peso</div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="text-3xl font-bold text-red-600 mb-1">{model.topSpeed}</div>
                          <div className="text-sm text-gray-600">Velocidad máxima</div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="text-3xl font-bold text-red-600 mb-1">{model.acceleration}</div>
                          <div className="text-sm text-gray-600">0-100 km/h</div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="text-3xl font-bold text-red-600 mb-1">998cc</div>
                          <div className="text-sm text-gray-600">Cilindrada</div>
                        </div>
                      </div>
                    )}

                    {selectedTab === 'características' && (
                      <div className="space-y-4">
                        {[
                          'Sistema de frenado ABS avanzado',
                          'Control de tracción electrónico',
                          'Quick shifter bidireccional',
                          'Suspensión ajustable Öhlins',
                          'Modos de conducción: Sport, Race, Street',
                          'Instrumentación TFT 6.5"',
                          'Iluminación LED completa',
                          'Conectividad Bluetooth'
                        ].map((feature, i) => (
                          <div key={i} className="flex items-center space-x-3">
                            <Star className="w-5 h-5 text-red-600" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {selectedTab === 'colores' && (
                      <div>
                        <p className="text-gray-600 mb-4">Colores disponibles para este modelo:</p>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-red-600 transition-colors cursor-pointer">
                            <div className="h-24 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mb-3"></div>
                            <div className="font-semibold">{model.color}</div>
                          </div>
                          <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-red-600 transition-colors cursor-pointer">
                            <div className="h-24 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg mb-3"></div>
                            <div className="font-semibold">Plata Titanio</div>
                          </div>
                        </div>
                      </div>
                    )}

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full mt-8 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-colors"
                      onClick={() => {
                        setSelectedModel(null);
                        document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Solicitar Test Drive
                    </motion.button>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Form Section */}
      <section id="contacto" className="py-20 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contáctanos</h2>
            <p className="text-xl text-gray-600">¿Listo para experimentar TORQUEX? Agenda tu test drive hoy</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Teléfono</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">Lun - Vie: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@torquex.com</p>
                    <p className="text-gray-600">ventas@torquex.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Showroom</h3>
                    <p className="text-gray-600">Av. Principal 1234</p>
                    <p className="text-gray-600">Ciudad, CP 12345</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                    placeholder="Juan Pérez"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                    placeholder="juan@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                    placeholder="+1 555 123 4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    required
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all resize-none"
                    placeholder="Estoy interesado en agendar un test drive..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-colors"
                >
                  Enviar mensaje
                </motion.button>

                <AnimatePresence>
                  {formSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg text-center"
                    >
                      ✓ ¡Mensaje enviado! Te contactaremos pronto.
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <img src={logoImg} alt="TORQUEX" className="h-10 mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Motos deportivas de alto rendimiento para los amantes de la velocidad.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Productos</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Motos Deportivas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accesorios</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Repuestos</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Concesionarios</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              {['FB', 'IG', 'YT'].map(social => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.1, backgroundColor: '#dc2626' }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center transition-colors"
                >
                  <span className="text-sm">{social}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          © 2026 TORQUEX. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
