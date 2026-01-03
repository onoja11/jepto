import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, Mail, MapPin, 
  ArrowRight, Instagram, 
  MessageCircle, CheckCircle2, Star,
  ChevronDown
} from 'lucide-react';
import './App.css'

const JeptoLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle Scroll Effect for Navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Custom Smooth Scroll Function
  const handleNavClick = (e, href) => {
    // If it's an external link (starts with http), let it behave normally
    if (href.startsWith('http')) return;

    e.preventDefault();
    const targetElement = document.querySelector(href);
    
    if (targetElement) {
      // Close mobile menu if open
      setIsMenuOpen(false);

      // Calculate position adjusting for sticky header height
      const headerOffset = 100; // Height of navbar + some breathing room
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
    { name: 'Blog', href: 'https://blog.jeptoent.com.ng/', external: true },
  ];

  return (
    <div className="font-sans text-slate-800 bg-slate-50 overflow-x-hidden selection:bg-amber-500 selection:text-white">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          
          {/* Logo Section */}
          <a 
            href="#page-top" 
            onClick={(e) => handleNavClick(e, '#page-top')} 
            className="flex items-center gap-3 group"
          >
            <div className="relative overflow-hidden rounded-lg shadow-md border border-white/20">
              <img 
                src="https://jeptoent.com.ng/img/logo.jpeg" 
                alt="Jepto Logo" 
                className="w-12 h-12 object-cover transform group-hover:scale-110 transition-transform duration-500" 
              />
            </div>
            <div>
              <h4 className={`font-serif text-2xl font-bold leading-none ${scrolled ? 'text-slate-900' : 'text-white'} drop-shadow-md`}>
                Jepto
              </h4>
              <span className={`text-[10px] tracking-[0.2em] uppercase font-semibold ${scrolled ? 'text-slate-500' : 'text-slate-200'}`}>
                Enterprises Ltd.
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                target={link.external ? "_blank" : "_self"}
                onClick={(e) => !link.external && handleNavClick(e, link.href)}
                className={`text-sm font-medium hover:text-amber-500 transition-colors relative group ${scrolled ? 'text-slate-600' : 'text-white'}`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
            
            <div className="hidden lg:flex flex-col items-end text-right border-l pl-6 border-amber-500/30">
              <span className={`text-xs uppercase tracking-wider ${scrolled ? 'text-slate-400' : 'text-slate-300'}`}>Call Today</span>
              <a href="tel:+2348028298683" className={`font-bold font-mono ${scrolled ? 'text-slate-900' : 'text-amber-400'}`}>+234-802-829-8683</a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`md:hidden p-2 rounded-lg backdrop-blur-sm ${scrolled ? 'text-slate-900 bg-slate-100' : 'text-white bg-white/10'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-slate-100 p-6 flex flex-col gap-2 md:hidden animate-in slide-in-from-top-5">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                target={link.external ? "_blank" : "_self"}
                onClick={(e) => !link.external && handleNavClick(e, link.href)}
                className="text-lg font-medium text-slate-800 hover:text-amber-600 hover:bg-slate-50 px-4 py-3 rounded-lg transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header id="page-top" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image: Luxury Modern Villa */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop" 
            alt="Luxury Architecture" 
            className="w-full h-full object-cover scale-105 animate-ken-burns"
          />
          {/* Cinematic Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-transparent"></div>
        </div>

        <div className="container relative z-10 px-6 pt-20">
          <div className="max-w-4xl">
            
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-[1.1] mb-8">
              Real Estate, <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">Redefined.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 font-light max-w-2xl leading-relaxed border-l-4 border-amber-600 pl-6">
              We offer expert services in real estate buying & selling, property development, management, and general contracts. Let us bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#about" 
                onClick={(e) => handleNavClick(e, '#about')}
                className="px-10 py-4 bg-amber-600 text-white rounded-none font-semibold text-lg hover:bg-amber-700 transition-all hover:shadow-[0_10px_20px_rgba(217,119,6,0.3)] flex items-center justify-center gap-2 group cursor-pointer"
              >
                Learn More <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, '#contact')}
                className="px-10 py-4 bg-transparent border border-white/30 text-white rounded-none font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center backdrop-blur-sm cursor-pointer"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <a 
          href="#get-touch" 
          onClick={(e) => handleNavClick(e, '#get-touch')}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce cursor-pointer"
        >
          <ChevronDown size={32} />
        </a>
      </header>

      {/* CTA Strip */}
      <div id="get-touch" className="bg-slate-50 relative z-20 py-20">
        <div className="container mx-auto px-6">
          <div className="bg-slate-900 rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
             {/* Decorative blob */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
             
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Cost for your home renovation?</h3>
              <p className="text-slate-400 text-lg max-w-xl">Get started today and complete our form to request your free estimate.</p>
            </div>
            <div className="relative z-10">
               <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, '#contact')}
                className="inline-flex h-14 animate-shimmer items-center justify-center rounded-full border border-amber-600 bg-[linear-gradient(110deg,#000103,45%,#d97706,55%,#000103)] bg-[length:200%_100%] px-8 font-medium text-amber-500 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-50 cursor-pointer"
               >
                  Contact Us Now
                </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            
            {/* Image Column */}
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-amber-600 hidden md:block"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-amber-600 hidden md:block"></div>
              
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop" 
                className="w-full h-auto object-cover rounded-xl shadow-2xl z-10 relative grayscale hover:grayscale-0 transition-all duration-700" 
                alt="About Jepto" 
              />
              
              {/* Floating Card */}
              <div className="absolute -bottom-10 -left-6 md:left-10 bg-white p-6 rounded-lg shadow-xl max-w-xs z-20 hidden md:block border border-slate-100">
                <p className="font-serif font-bold text-slate-900 text-xl">Integrity. Innovation. Satisfaction.</p>
              </div>
            </div>

            {/* Content Column */}
            <div className="w-full lg:w-1/2">
              <div className="mb-8">
                <h4 className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-2">Who We Are</h4>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                  Expertise Meets <br/>Dedication.
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                  At Jepto, we specialize in real estate buying and selling, land & property development, management, and general contracts & merchandise. Our goal is to provide tailored solutions that meet the unique needs of our clients.
                </p>
                <p className="text-slate-500 leading-relaxed">
                  With a strong focus on integrity, innovation, and client satisfaction, we bring expertise and dedication to every project. From consultation to execution, we strive to exceed expectations.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 mt-8">
                <h3 className="font-serif font-bold text-2xl mb-4">Why Choose Us?</h3>
                <ul className="space-y-4">
                  {[
                    { title: "Expertise & Experience", text: "Professional guidance in Abuja real estate." },
                    { title: "Verified & Secure", text: "Thorough background checks on all properties." },
                    { title: "Comprehensive Services", text: "Personalized consultation and ongoing support." },
                    { title: "Affordable Pricing", text: "Cost-effective solutions tailored to you." },
                  ].map((item, index) => (
                    <li key={index} className="flex gap-4 items-start">
                      <div className="min-w-[24px] pt-1">
                        <CheckCircle2 size={24} className="text-amber-600" />
                      </div>
                      <div>
                        <strong className="block text-slate-900">{item.title}</strong>
                        <span className="text-slate-500 text-sm">{item.text}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-3">Our Services</h2>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">We Build & Manage Your Dreams</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Service 1: Real Estate */}
            <div className="group relative overflow-hidden rounded-3xl bg-slate-800 border border-slate-700 hover:border-amber-600/50 transition-all duration-500">
              <div className="h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop" alt="Real Estate" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-8 relative">
                <div className="absolute -top-8 right-8 w-16 h-16 bg-amber-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:rotate-12 transition-transform">01</div>
                <h3 className="text-2xl font-bold mb-4 font-serif">Real Estate Services</h3>
                <p className="text-slate-400 leading-relaxed mb-6">Discover the perfect property with our expert solutions. Whether you’re buying, selling, or seeking investment advice, we provide comprehensive support.</p>
                <span className="inline-block border-b border-amber-600 text-amber-500 pb-1 text-sm font-semibold uppercase tracking-wider">Consultation & Sales</span>
              </div>
            </div>

            {/* Service 2: Development */}
            <div className="group relative overflow-hidden rounded-3xl bg-slate-800 border border-slate-700 hover:border-amber-600/50 transition-all duration-500">
              <div className="h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop" alt="Developers" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-8 relative">
                <div className="absolute -top-8 right-8 w-16 h-16 bg-slate-700 group-hover:bg-amber-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg transition-colors">02</div>
                <h3 className="text-2xl font-bold mb-4 font-serif">Developers</h3>
                <p className="text-slate-400 leading-relaxed mb-6">Transform properties and land into thriving spaces. We specialize in land and property development, renovating old houses, and completing unfinished projects.</p>
                <span className="inline-block border-b border-slate-600 group-hover:border-amber-600 text-slate-400 group-hover:text-amber-500 pb-1 text-sm font-semibold uppercase tracking-wider transition-colors">Construction & Renovation</span>
              </div>
            </div>

            {/* Service 3: Management */}
            <div className="group relative overflow-hidden rounded-3xl bg-slate-800 border border-slate-700 hover:border-amber-600/50 transition-all duration-500">
              <div className="h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1000&auto=format&fit=crop" alt="Property Management" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-8 relative">
                <div className="absolute -top-8 right-8 w-16 h-16 bg-slate-700 group-hover:bg-amber-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg transition-colors">03</div>
                <h3 className="text-2xl font-bold mb-4 font-serif">Property Management</h3>
                <p className="text-slate-400 leading-relaxed mb-6">Managing assets with care and professionalism. We take the headache out of property ownership with reliable and efficient management services.</p>
                <span className="inline-block border-b border-slate-600 group-hover:border-amber-600 text-slate-400 group-hover:text-amber-500 pb-1 text-sm font-semibold uppercase tracking-wider transition-colors">Asset Care</span>
              </div>
            </div>

            {/* Service 4: General Contracts */}
            <div className="group relative overflow-hidden rounded-3xl bg-slate-800 border border-slate-700 hover:border-amber-600/50 transition-all duration-500">
              <div className="h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop" alt="General Contracts" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-8 relative">
                <div className="absolute -top-8 right-8 w-16 h-16 bg-slate-700 group-hover:bg-amber-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg transition-colors">04</div>
                <h3 className="text-2xl font-bold mb-4 font-serif">General Contracts</h3>
                <p className="text-slate-400 leading-relaxed mb-6">Count on us for reliable supply and service solutions. From providing quality products to handling general contracts and merchandise.</p>
                <span className="inline-block border-b border-slate-600 group-hover:border-amber-600 text-slate-400 group-hover:text-amber-500 pb-1 text-sm font-semibold uppercase tracking-wider transition-colors">Merchandise & Supply</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects / Gallery */}
      <section id="portfolio" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">Our Works</span>
              <h2 className="text-4xl font-serif font-bold text-slate-900 mt-2">Latest Projects</h2>
              <p className="text-slate-500 mt-4">A glimpse into the properties we have transformed and developed.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600", title: "Luxury Villa" },
              { img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=600", title: "Modern Apartments" },
              { img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600", title: "Commercial Hub" },
              { img: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=600", title: "Urban Estate" },
              { img: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=600", title: "Renovation Project" },
              { img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=600", title: "Interior Design" },
              { img: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=600", title: "Kitchen Remodel" },
              { img: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=600", title: "Duplex Build" },
              { img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=600", title: "Family Home" },
            ].map((item, index) => (
              <a href="#" key={index} className="group relative overflow-hidden rounded-xl cursor-pointer block h-80 shadow-md">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h4 className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h4>
                  <p className="text-amber-400 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">View Details</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-slate-900">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200", name: "Chijioke A.", role: "Homebuyer", text: "I couldn't have asked for a better experience with Jepto. Their team expertly guided me through every step of buying my first home." },
              { img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200", name: "Amina M.", role: "Property Investor", text: "As an investor, Jepto truly stands out. They provided expert advice and delivered great returns on my investments." },
              { img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200", name: "Tunde D.", role: "Developer", text: "Working with Jepto on our recent property development project was a game changer. Exceptional attention to detail." },
              { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200", name: "Adebimpe R.", role: "Property Owner", text: "Managing multiple properties can be a headache, but Jepto has taken that burden off my shoulders. Safe hands." },
              { img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200", name: "Tolu A.", role: "Property Owner", text: "I’ve been working with Jepto for years. From leasing to maintenance, they provide exceptional service." },
              { img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200", name: "Seyi O.", role: "Real Estate Investor", text: "Jepto’s investment strategies have been a game-changer. I trust them with my real estate investments every time." }
            ].map((t, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <img src={t.img} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-amber-500" />
                  <div>
                    <h5 className="font-bold text-slate-900">{t.name}</h5>
                    <p className="text-xs text-amber-600 font-semibold uppercase">{t.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 text-amber-500 mb-4 text-xs">
                   {[...Array(5)].map((_,i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-slate-600 italic leading-relaxed text-sm">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden">
            
            {/* Form Side */}
            <div className="w-full lg:w-2/3 p-8 md:p-16">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-2">Get In Touch</h2>
              <p className="text-slate-500 mb-8">Send us an email and we will get back to you as soon as possible.</p>
              
              <form action="https://formspree.io/f/xnnnwvpz" method="POST" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <input type="text" name="name" required className="w-full bg-slate-50 border-b-2 border-slate-200 px-4 py-3 text-slate-900 focus:border-amber-600 focus:bg-white outline-none transition-colors" placeholder="Name" />
                  </div>
                  <div className="group">
                    <input type="email" name="email" required className="w-full bg-slate-50 border-b-2 border-slate-200 px-4 py-3 text-slate-900 focus:border-amber-600 focus:bg-white outline-none transition-colors" placeholder="Email" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <input type="text" name="phone" required className="w-full bg-slate-50 border-b-2 border-slate-200 px-4 py-3 text-slate-900 focus:border-amber-600 focus:bg-white outline-none transition-colors" placeholder="Phone Number" />
                  </div>
                  <div className="group">
                    <select name="category" id="category" required className="w-full bg-slate-50 border-b-2 border-slate-200 px-4 py-3 text-slate-900 focus:border-amber-600 focus:bg-white outline-none transition-colors">
                      <option value="" disabled selected>Select a Category</option>
                      <option value="estate">Real estate</option>
                      <option value="develop">Development</option>
                      <option value="management">Property management</option>
                      <option value="general">General contract</option>
                    </select>
                  </div>
                </div>

                <div className="group">
                  <textarea name="message" id="message" rows="4" required className="w-full bg-slate-50 border-b-2 border-slate-200 px-4 py-3 text-slate-900 focus:border-amber-600 focus:bg-white outline-none transition-colors" placeholder="Message"></textarea>
                </div>

                <button type="submit" className="px-10 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg transition-colors shadow-lg w-full md:w-auto">
                  Send Message
                </button>
              </form>
            </div>

            {/* Info Side */}
            <div className="w-full lg:w-1/3 bg-slate-950 p-10 md:p-16 text-white flex flex-col justify-between relative overflow-hidden">
               {/* Pattern Overlay */}
               <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
               
               <div className="relative z-10">
                 <h3 className="text-xl font-bold mb-8 border-b border-slate-800 pb-4">Contact Info</h3>
                 <div className="space-y-8">
                   <div className="flex items-start gap-4">
                     <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 text-amber-500">
                        <MapPin size={20} />
                     </div>
                     <div>
                       <span className="block text-slate-400 text-xs uppercase tracking-wider mb-1">Address</span>
                       <p className="text-white text-sm leading-relaxed">Off Funtaj Int'l School Road, Lifecamp, FCT, Abuja.</p>
                     </div>
                   </div>
                   <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 text-amber-500">
                        <Phone size={20} />
                     </div>
                     <div>
                       <span className="block text-slate-400 text-xs uppercase tracking-wider mb-1">Phone</span>
                       <p className="text-white text-sm">+234-802-829-8683</p>
                     </div>
                   </div>
                   <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 text-amber-500">
                        <Mail size={20} />
                     </div>
                     <div>
                       <span className="block text-slate-400 text-xs uppercase tracking-wider mb-1">Email</span>
                       <p className="text-white text-sm">info@jeptoent.com.ng</p>
                     </div>
                   </div>
                 </div>
               </div>

               <div className="relative z-10 mt-12">
                 <div className="flex gap-4">
                   <a href="https://www.instagram.com/jepto_ent/" target="_blank" className="w-12 h-12 rounded-full border border-slate-700 hover:bg-amber-600 hover:border-amber-600 flex items-center justify-center transition-all">
                     <Instagram size={20} />
                   </a>
                   <a href="mailto:info@jeptoent.com.ng" className="w-12 h-12 rounded-full border border-slate-700 hover:bg-amber-600 hover:border-amber-600 flex items-center justify-center transition-all">
                     <Mail size={20} />
                   </a>
                   <a href="https://wa.me/+2348028298683" target="_blank" className="w-12 h-12 rounded-full border border-slate-700 hover:bg-amber-600 hover:border-amber-600 flex items-center justify-center transition-all">
                     <MessageCircle size={20} />
                   </a>
                   <a href="tel:+2348028298683" className="w-12 h-12 rounded-full border border-slate-700 hover:bg-amber-600 hover:border-amber-600 flex items-center justify-center transition-all">
                     <Phone size={20} />
                   </a>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 border-t border-slate-900">
        <div className="container mx-auto px-6 text-center">
           <div className="mb-6 flex flex-col items-center justify-center gap-2">
              <img src="https://jeptoent.com.ng/img/logo.jpeg" alt="Jepto Logo" className="w-16 h-16 rounded-lg opacity-80" />
              <span className="text-white font-serif text-2xl font-bold">Jepto Enterprises</span>
           </div>
          <p className="text-slate-500 text-sm">
            &copy; 2024 | Developed by <a href="http://www.gtc.com.ng" className="text-amber-600 hover:text-amber-500 transition-colors">GlobalTech Computers</a>
          </p>
        </div>
      </footer>

      {/* Sticky Whatsapp Button (Using Official WhatsApp CDN Asset) */}
      <a 
        href="https://wa.me/+2348028298683" 
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-full h-full object-cover" />
      </a>
    </div>
  );
};

export default JeptoLanding;