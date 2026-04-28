"use client";

import { motion, useInView, AnimatePresence, animate } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  TrendingUp,
  Users,
  Target,
  BarChart3,
  Star,
  Quote,
  CheckCircle2,
  Globe,
  Megaphone,
  Search,
  Palette,
  ShoppingCart,
  Smartphone,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Award,
  Clock,
  Zap,
  LineChart,
  MousePointer,
  Eye,
} from "lucide-react";
import { ContactButton } from "@/components/ContactButton";
import {
  fadeInUp,
  fadeIn,
  scaleIn,
  staggerContainer,
  slideInLeft,
  slideInRight,
} from "@/lib/motion";

/* ═══════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════ */

const categories = [
  { id: "all", label: "Todos", icon: BarChart3 },
  { id: "web", label: "Desarrollo Web", icon: Globe },
  { id: "seo", label: "SEO", icon: Search },
  { id: "social", label: "Redes Sociales", icon: Smartphone },
  { id: "ads", label: "Publicidad", icon: Megaphone },
  { id: "branding", label: "Branding", icon: Palette },
  { id: "ecommerce", label: "E-commerce", icon: ShoppingCart },
];

const caseStudies = [
  {
    id: "masifylabs",
    title: "MasifyLabs",
    subtitle: "Plataforma de servicios tecnológicos",
    category: ["web", "seo"],
    industry: "Tecnología",
    duration: "3 meses",
    description:
      "Rediseño integral de la web corporativa con una estrategia SEO agresiva que duplicó las visitas orgánicas en solo 3 meses. Migración completa a Next.js con arquitectura optimizada para rendimiento y conversión.",
    challenge:
      "Web obsoleta con tiempos de carga de 8+ segundos, sin estrategia SEO y una tasa de rebote del 78%. Los leads orgánicos eran prácticamente inexistentes.",
    solution:
      "Rediseño completo con Next.js, implementación de SSR para SEO técnico, optimización Core Web Vitals, estrategia de contenidos y link building local.",
    results: [
      { label: "Tráfico Orgánico", before: "1.2K/mes", after: "+120%", icon: TrendingUp },
      { label: "Leads Generados", before: "8/mes", after: "+85%", icon: Target },
      { label: "PageSpeed", before: "34/100", after: "98/100", icon: Zap },
      { label: "Tasa de Rebote", before: "78%", after: "31%", icon: MousePointer },
    ],
    testimonial: {
      text: "ScalifyLabs transformó nuestra presencia digital por completo. La web nueva no solo se ve increíble, sino que los resultados en tráfico y leads superaron todas nuestras expectativas.",
      author: "Alejandro P.",
      role: "CTO, MasifyLabs",
      stars: 5,
    },
    color: "#6C3AED",
    gradient: "from-brand-primary/30 via-brand-secondary/20 to-transparent",
    tags: ["Next.js", "SEO Técnico", "Core Web Vitals", "Link Building"],
  },
  {
    id: "onixmusic",
    title: "OnixMusic",
    subtitle: "E-commerce de instrumentos y producción musical",
    category: ["ecommerce", "branding", "social"],
    industry: "Música / Retail",
    duration: "4 meses",
    description:
      "Creación de una plataforma e-commerce completa con estrategia omnicanal de redes sociales que generó una comunidad activa de +15K seguidores y multiplicó las ventas por 3.",
    challenge:
      "Negocio solo físico con cero presencia online. Sin tienda digital, sin redes sociales y sin identidad de marca definida para el entorno digital.",
    solution:
      "Desarrollo e-commerce con Shopify personalizado, identidad de marca completa, estrategia de contenido en Instagram y TikTok, y campañas de influencer marketing en el nicho musical.",
    results: [
      { label: "Ventas Online", before: "0€/mes", after: "+210%", icon: ShoppingCart },
      { label: "Comunidad", before: "0", after: "+15K", icon: Users },
      { label: "ROAS", before: "N/A", after: "5.2x", icon: BarChart3 },
      { label: "Ticket Medio", before: "45€", after: "89€", icon: TrendingUp },
    ],
    testimonial: {
      text: "Pasamos de no existir online a tener una tienda que factura más que nuestra tienda física. La comunidad que construyeron en redes es oro puro para nuestro negocio.",
      author: "Javier T.",
      role: "Fundador, OnixMusic",
      stars: 5,
    },
    color: "#3B82F6",
    gradient: "from-brand-secondary/30 via-brand-pink/20 to-transparent",
    tags: ["Shopify", "Branding", "Instagram", "TikTok", "Influencer Marketing"],
  },
  {
    id: "freshbites",
    title: "FreshBites",
    subtitle: "Cadena de restaurantes saludables",
    category: ["ads", "social"],
    industry: "Hostelería",
    duration: "2 meses",
    description:
      "Campaña integral de captación de reservas combinando Meta Ads, Google Ads y una estrategia de embudo de ventas que redujo el coste por reserva un 62% y multiplicó el ROI por 7.8x.",
    challenge:
      "Coste por adquisición de cliente demasiado alto (38€/reserva), campañas de ads sin optimizar y sin embudo de ventas definido. Las reservas dependían 100% del boca a boca.",
    solution:
      "Auditoría completa de campañas, reestructuración de audiencias, creatividades A/B testing, landing pages optimizadas y embudo automatizado con email + WhatsApp.",
    results: [
      { label: "Reservas", before: "45/mes", after: "+340%", icon: Target },
      { label: "CPA", before: "38€", after: "-62%", icon: LineChart },
      { label: "ROI", before: "1.2x", after: "7.8x", icon: TrendingUp },
      { label: "CTR Ads", before: "0.8%", after: "4.2%", icon: MousePointer },
    ],
    testimonial: {
      text: "Los números hablan solos. En dos meses pasamos de perder dinero en publicidad a tener el mejor retorno de inversión que hemos visto jamás. Equipo excepcional.",
      author: "Ana M.",
      role: "Propietaria, FreshBites",
      stars: 5,
    },
    color: "#EC4899",
    gradient: "from-brand-pink/30 via-brand-primary/20 to-transparent",
    tags: ["Meta Ads", "Google Ads", "Landing Pages", "Email Marketing"],
  },
  {
    id: "vivecanarias",
    title: "ViveCanarias",
    subtitle: "Agencia de turismo experiencial",
    category: ["seo", "web", "social"],
    industry: "Turismo",
    duration: "5 meses",
    description:
      "Estrategia SEO local + internacional para posicionar experiencias turísticas en las Islas Canarias. Web multilingüe con booking integrado que cuadruplicó las reservas directas.",
    challenge:
      "Dependencia total de plataformas como Airbnb Experiences y GetYourGuide con comisiones del 20-30%. Cero tráfico directo y sin web propia optimizada.",
    solution:
      "Web Next.js multilingüe (ES/EN/DE), SEO local con Google Business Profile, estrategia de contenido blog, integración de booking directo y campañas en redes con UGC.",
    results: [
      { label: "Reservas Directas", before: "12/mes", after: "+380%", icon: Target },
      { label: "Tráfico Orgánico", before: "200/mes", after: "+520%", icon: TrendingUp },
      { label: "Ahorro Comisiones", before: "0€", after: "4.200€/mes", icon: LineChart },
      { label: "Posiciones Top 3", before: "0", after: "18 keywords", icon: Search },
    ],
    testimonial: {
      text: "Dejamos de regalar el 25% de cada reserva a plataformas externas. La web y el SEO que hizo ScalifyLabs nos dieron independencia total. La mejor inversión de nuestro negocio.",
      author: "Carlos R.",
      role: "Director, ViveCanarias",
      stars: 5,
    },
    color: "#10B981",
    gradient: "from-emerald-500/30 via-brand-secondary/20 to-transparent",
    tags: ["SEO Local", "Multilingüe", "Booking", "Google Business", "UGC"],
  },
  {
    id: "luxderma",
    title: "LuxDerma",
    subtitle: "Clínica de dermatología estética",
    category: ["ads", "web", "branding"],
    industry: "Salud / Estética",
    duration: "3 meses",
    description:
      "Rebranding completo y estrategia de captación de pacientes con landing pages especializadas por tratamiento, publicidad segmentada y automatización de citas.",
    challenge:
      "Imagen de marca anticuada que no transmitía confianza premium. Agenda vacía entre semana, coste de adquisición de paciente insostenible y sin presencia digital profesional.",
    solution:
      "Rebranding completo con identidad premium, web con landing pages por tratamiento, campañas Meta Ads con segmentación hiper-local y sistema de booking automatizado.",
    results: [
      { label: "Pacientes Nuevos", before: "15/mes", after: "+250%", icon: Users },
      { label: "Coste por Lead", before: "42€", after: "-58%", icon: LineChart },
      { label: "Agenda Ocupada", before: "40%", after: "92%", icon: Clock },
      { label: "Facturación", before: "Base", after: "+180%", icon: TrendingUp },
    ],
    testimonial: {
      text: "La transformación fue total. Desde el nuevo branding hasta las campañas de captación, cada euro invertido ha tenido un retorno espectacular. Ahora tenemos lista de espera.",
      author: "Dra. Laura S.",
      role: "Directora, LuxDerma",
      stars: 5,
    },
    color: "#F59E0B",
    gradient: "from-amber-500/30 via-brand-pink/20 to-transparent",
    tags: ["Branding Premium", "Meta Ads", "Landing Pages", "Booking Automation"],
  },
  {
    id: "fitzone",
    title: "FitZone App",
    subtitle: "Aplicación de fitness y nutrición",
    category: ["web", "ads", "social"],
    industry: "Fitness / Tech",
    duration: "6 meses",
    description:
      "Desarrollo de la landing page de producto, estrategia de lanzamiento en redes sociales y campañas de descarga que posicionaron la app en el top 10 de salud en App Store España.",
    challenge:
      "App desarrollada sin estrategia de go-to-market. Zero descargas, sin comunidad y sin presupuesto para grandes campañas de TV o medios tradicionales.",
    solution:
      "Landing page de alta conversión, campaña de pre-lanzamiento con waitlist, estrategia de contenido fitness en Instagram/TikTok, y campañas ASO + Apple Search Ads.",
    results: [
      { label: "Descargas", before: "0", after: "+25K", icon: Smartphone },
      { label: "Coste/Descarga", before: "N/A", after: "0.82€", icon: LineChart },
      { label: "Retención D30", before: "N/A", after: "42%", icon: Users },
      { label: "Ranking App Store", before: "N/A", after: "Top 10", icon: Award },
    ],
    testimonial: {
      text: "Sin ScalifyLabs nuestra app seguiría con 0 descargas. La estrategia de lanzamiento que diseñaron fue impecable. Top 10 en App Store en solo 3 semanas.",
      author: "Miguel Á.",
      role: "Co-founder, FitZone",
      stars: 5,
    },
    color: "#8B5CF6",
    gradient: "from-violet-500/30 via-brand-secondary/20 to-transparent",
    tags: ["Landing Page", "ASO", "TikTok", "Apple Search Ads", "Pre-launch"],
  },
];

const allTestimonials = [
  {
    text: "Nos rediseñaron la web y gestionaron el SEO. En 3 meses duplicamos las visitas. Equipo cercano y siempre disponible.",
    author: "María G.",
    role: "CEO, Marca de Moda",
    location: "Tenerife",
    stars: 5,
    service: "Web + SEO",
  },
  {
    text: "El enfoque estratégico de ScalifyLabs marcó la diferencia. Todo el contenido alineado con nuestros objetivos. Conversiones arriba significativamente.",
    author: "Carlos R.",
    role: "Director, Agencia de Viajes",
    location: "Canarias",
    stars: 5,
    service: "Estrategia Digital",
  },
  {
    text: "Pasamos de no tener presencia en redes a tener una comunidad activa con reservas semanales directas desde Instagram.",
    author: "Ana M.",
    role: "Propietaria, Restaurante",
    location: "Las Palmas",
    stars: 5,
    service: "Redes Sociales",
  },
  {
    text: "Solución integral: web, redes, SEO y soporte técnico. Un acompañamiento real que se nota en los resultados.",
    author: "David L.",
    role: "Emprendedor Digital",
    location: "Barcelona",
    stars: 5,
    service: "Paquete Integral",
  },
  {
    text: "Triplicamos las ventas de nuestra tienda online en 4 meses. La estrategia de email marketing y retargeting fue clave.",
    author: "Sofía V.",
    role: "Directora, E-commerce de Moda",
    location: "Madrid",
    stars: 5,
    service: "E-commerce + Ads",
  },
  {
    text: "La mejor decisión fue confiar en ScalifyLabs para nuestras campañas de Google Ads. El ROI habla por sí solo: 6.4x en el primer trimestre.",
    author: "Roberto F.",
    role: "CEO, Inmobiliaria",
    location: "Málaga",
    stars: 5,
    service: "Google Ads",
  },
  {
    text: "Nos posicionaron en primera página de Google para 12 keywords clave en 5 meses. El tráfico orgánico creció un 400%.",
    author: "Elena R.",
    role: "Directora de Marketing, Clínica Dental",
    location: "Valencia",
    stars: 5,
    service: "SEO",
  },
  {
    text: "El rebranding que hicieron le dio una identidad totalmente nueva a nuestro negocio. Los clientes ahora nos perciben como una marca premium.",
    author: "Marcos D.",
    role: "Fundador, Estudio de Arquitectura",
    location: "Sevilla",
    stars: 5,
    service: "Branding",
  },
];

const globalStats = [
  { value: 340, suffix: "%", label: "Aumento Promedio en Conversiones" },
  { value: 98, suffix: "%", label: "Clientes Satisfechos" },
  { value: 5.2, suffix: "x", label: "ROAS Medio de Campañas", isDecimal: true },
  { value: 100, suffix: "+", label: "Proyectos Completados" },
];

const industries = [
  { name: "Tecnología", count: 18, icon: Globe },
  { name: "Hostelería", count: 22, icon: ShoppingCart },
  { name: "Salud", count: 15, icon: Users },
  { name: "Turismo", count: 12, icon: Target },
  { name: "Retail", count: 20, icon: Megaphone },
  { name: "Fitness", count: 8, icon: Zap },
];

/* ═══════════════════════════════════════════════════
   COMPONENTS
   ═══════════════════════════════════════════════════ */

function AnimatedCounter({
  target,
  suffix = "",
  duration = 2,
  isDecimal = false,
}: {
  target: number;
  suffix?: string;
  duration?: number;
  isDecimal?: boolean;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setCount(isDecimal ? parseFloat(v.toFixed(1)) : Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, target, duration, isDecimal]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* Browser Mockup - enhanced version */
function CaseBrowserMockup({
  color,
  title,
  variant = "default",
}: {
  color: string;
  title: string;
  variant?: "default" | "dashboard" | "ecommerce";
}) {
  return (
    <div className="rounded-xl overflow-hidden border border-white/[0.08] bg-white/[0.02] shadow-xl">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/5 bg-white/[0.02]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/40" />
        </div>
        <div className="flex-1 mx-3">
          <div className="max-w-[200px] mx-auto h-5 rounded-lg bg-white/5 flex items-center justify-center px-3">
            <div className="w-2 h-2 rounded-full mr-1.5" style={{ background: `${color}70` }} />
            <span className="text-[9px] text-gray-500">{title.toLowerCase().replace(/\s/g, "")}.es</span>
          </div>
        </div>
      </div>

      <div className="p-5 space-y-3 aspect-[16/10]">
        {variant === "ecommerce" ? (
          <>
            <div className="flex items-center justify-between">
              <div className="w-20 h-4 rounded" style={{ background: `${color}40` }} />
              <div className="flex gap-3">
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className="w-10 h-2 rounded bg-white/10" />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-4">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div key={n} className="rounded-lg border border-white/5 overflow-hidden" style={{ background: `${color}05` }}>
                  <div className="aspect-square" style={{ background: `${color}${10 + n * 3}` }} />
                  <div className="p-2">
                    <div className="w-full h-1.5 rounded bg-white/10 mb-1" />
                    <div className="w-1/2 h-1.5 rounded" style={{ background: `${color}30` }} />
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : variant === "dashboard" ? (
          <>
            <div className="flex items-center justify-between mb-2">
              <div className="w-24 h-4 rounded" style={{ background: `${color}40` }} />
              <div className="w-16 h-5 rounded-lg" style={{ background: `${color}30` }} />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="rounded-lg p-2 border border-white/5" style={{ background: `${color}08` }}>
                  <div className="w-6 h-1.5 rounded bg-white/10 mb-2" />
                  <div className="w-10 h-3 rounded" style={{ background: `${color}30` }} />
                </div>
              ))}
            </div>
            <div className="mt-3 rounded-lg border border-white/5 p-3" style={{ background: `${color}05` }}>
              <div className="flex items-end gap-1 h-16">
                {[30, 45, 35, 60, 50, 75, 65, 80, 70, 90, 85, 95].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t"
                    style={{ height: `${h}%`, background: `${color}${30 + i * 3}` }}
                  />
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center justify-between">
              <div className="w-16 h-3 rounded" style={{ background: `${color}40` }} />
              <div className="flex gap-3">
                {[1, 2, 3].map((n) => (
                  <div key={n} className="w-10 h-2 rounded bg-white/10" />
                ))}
              </div>
            </div>
            <div className="mt-6 flex flex-col items-center gap-2">
              <div className="w-3/4 h-4 rounded" style={{ background: `${color}30` }} />
              <div className="w-1/2 h-4 rounded" style={{ background: `${color}20` }} />
              <div className="w-2/3 h-2 rounded bg-white/5 mt-2" />
              <div className="w-1/2 h-2 rounded bg-white/5" />
              <div className="w-24 h-6 rounded-lg mt-3" style={{ background: `${color}50` }} />
            </div>
            <div className="grid grid-cols-3 gap-2 mt-4">
              {[1, 2, 3].map((n) => (
                <div key={n} className="aspect-[4/3] rounded-lg border border-white/5" style={{ background: `${color}08` }}>
                  <div className="p-2 flex flex-col gap-1">
                    <div className="w-4 h-4 rounded" style={{ background: `${color}20` }} />
                    <div className="w-full h-1.5 rounded bg-white/5 mt-1" />
                    <div className="w-2/3 h-1.5 rounded bg-white/5" />
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/* Before/After metric card */
function MetricCard({
  result,
  color,
  index,
}: {
  result: { label: string; before: string; after: string; icon: React.ElementType };
  color: string;
  index: number;
}) {
  const Icon = result.icon;
  return (
    <motion.div
      variants={fadeInUp}
      custom={index * 0.1}
      className="glass-card rounded-lg sm:rounded-xl p-3 sm:p-5 group hover:bg-white/[0.06] transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-3">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ background: `${color}15` }}
        >
          <Icon size={18} style={{ color }} />
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] text-gray-600 line-through">{result.before}</span>
          <ArrowRight size={10} className="text-gray-600" />
          <span className="text-sm font-bold font-heading" style={{ color }}>
            {result.after}
          </span>
        </div>
      </div>
      <p className="text-xs text-gray-400">{result.label}</p>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════ */

export default function CasosDeExitoPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedCase, setExpandedCase] = useState<string | null>(null);

  const filteredCases =
    activeCategory === "all"
      ? caseStudies
      : caseStudies.filter((c) => c.category.includes(activeCategory));

  return (
    <div className="relative">
      {/* ─── HERO ─── */}
      <HeroSection />

      {/* ─── GLOBAL STATS ─── */}
      <StatsBar />

      {/* ─── FILTER + CASES ─── */}
      <CaseStudiesSection
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        filteredCases={filteredCases}
        expandedCase={expandedCase}
        setExpandedCase={setExpandedCase}
      />

      {/* ─── INDUSTRIES ─── */}
      <IndustriesSection />

      {/* ─── TESTIMONIALS WALL ─── */}
      <TestimonialsWall />

      {/* ─── CTA ─── */}
      <FinalCTA />
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════════ */

function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative pt-28 sm:pt-40 pb-12 sm:pb-16 overflow-hidden" ref={ref}>
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-brand-primary/8 blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-brand-pink/6 blur-[120px]" />
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0}
          className="text-center"
        >
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <Award size={14} className="text-brand-pink" />
            <span className="text-xs text-gray-300">+100 proyectos exitosos</span>
          </motion.div>

          <h1 className="font-heading font-bold text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl text-white mb-5 sm:mb-6 leading-tight">
            Casos de{" "}
            <span className="text-gradient">Éxito</span>
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-xl text-gray-400 leading-relaxed mb-6 sm:mb-8 px-2 sm:px-0">
            Resultados reales de negocios reales. Cada proyecto es una historia de
            transformación digital con métricas verificables y clientes satisfechos.
          </p>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0.3}
            className="flex flex-wrap justify-center gap-6 text-sm text-gray-500"
          >
            {[
              { icon: CheckCircle2, text: "Métricas reales verificables" },
              { icon: Star, text: "98% clientes satisfechos" },
              { icon: TrendingUp, text: "ROI medio de 5.2x" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <item.icon size={16} className="text-brand-primary" />
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   STATS BAR
   ═══════════════════════════════════════════════════ */

function StatsBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="relative py-12" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-brand-secondary/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {globalStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={i * 0.1}
              className="text-center"
            >
              <div className="font-heading font-bold text-2xl sm:text-4xl md:text-5xl text-gradient mb-1 sm:mb-2">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  isDecimal={stat.isDecimal}
                />
              </div>
              <p className="text-xs sm:text-sm text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   CASE STUDIES SECTION
   ═══════════════════════════════════════════════════ */

function CaseStudiesSection({
  activeCategory,
  setActiveCategory,
  filteredCases,
  expandedCase,
  setExpandedCase,
}: {
  activeCategory: string;
  setActiveCategory: (id: string) => void;
  filteredCases: typeof caseStudies;
  expandedCase: string | null;
  setExpandedCase: (id: string | null) => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative section-padding" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_20%,rgba(108,58,237,0.06),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium text-brand-primary bg-brand-primary/10 rounded-full mb-4">
            PORTFOLIO
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Proyectos{" "}
            <span className="text-gradient">destacados</span>
          </h2>
          <p className="max-w-xl mx-auto text-gray-400">
            Explora nuestros casos de éxito por categoría y descubre cómo hemos transformado negocios como el tuyo.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0.15}
          className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-2 mb-10 sm:mb-16 overflow-x-auto pb-2 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap shrink-0 ${
                  isActive
                    ? "bg-gradient-brand text-white shadow-lg shadow-brand-primary/25"
                    : "glass text-gray-400 hover:text-white hover:bg-white/[0.08]"
                }`}
              >
                <Icon size={14} />
                {cat.label}
              </button>
            );
          })}
        </motion.div>

        {/* Case Studies */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-24"
          >
            {filteredCases.map((project, i) => (
              <CaseStudyCard
                key={project.id}
                project={project}
                index={i}
                isExpanded={expandedCase === project.id}
                onToggle={() =>
                  setExpandedCase(expandedCase === project.id ? null : project.id)
                }
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredCases.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No hay casos en esta categoría todavía.</p>
          </div>
        )}
      </div>
    </section>
  );
}

/* ─── Individual Case Study Card ─── */

function CaseStudyCard({
  project,
  index,
  isExpanded,
  onToggle,
}: {
  project: (typeof caseStudies)[0];
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;
  const mockupVariant =
    project.category.includes("ecommerce")
      ? "ecommerce"
      : project.category.includes("ads")
      ? "dashboard"
      : "default";

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={0}
    >
      {/* Main Card */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Mockup */}
        <div className={isEven ? "" : "lg:order-2"}>
          <div
            className={`absolute inset-0 -inset-x-4 -inset-y-4 bg-gradient-to-br ${project.gradient} rounded-3xl blur-[40px] opacity-30`}
            style={{ position: "relative", display: "none" }}
          />
          <div className="relative">
            <div
              className={`absolute -inset-4 bg-gradient-to-br ${project.gradient} rounded-3xl blur-[50px] opacity-30`}
            />
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
              className="relative"
            >
              <CaseBrowserMockup
                color={project.color}
                title={project.title}
                variant={mockupVariant as "default" | "dashboard" | "ecommerce"}
              />
            </motion.div>
          </div>
        </div>

        {/* Info */}
        <div className={isEven ? "" : "lg:order-1"}>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span
              className="inline-block text-xs font-medium px-3 py-1 rounded-full"
              style={{ color: project.color, background: `${project.color}15` }}
            >
              {project.industry}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-gray-500 px-3 py-1 rounded-full bg-white/5">
              <Clock size={10} />
              {project.duration}
            </span>
          </div>

          <h3 className="font-heading font-bold text-xl sm:text-3xl md:text-4xl text-white mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-gray-500 mb-4">{project.subtitle}</p>
          <p className="text-gray-400 leading-relaxed mb-6">{project.description}</p>

          {/* Results Grid */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-5 sm:mb-6">
            {project.results.map((result, j) => (
              <MetricCard key={result.label} result={result} color={project.color} index={j} />
            ))}
          </div>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 text-gray-500 border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Expand Button */}
          <button
            onClick={onToggle}
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors group"
            style={{ color: project.color }}
          >
            {isExpanded ? "Ver menos" : "Ver caso completo"}
            <ArrowUpRight
              size={16}
              className={`transition-transform ${isExpanded ? "rotate-90" : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"}`}
            />
          </button>
        </div>
      </div>

      {/* Expanded Details */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {/* Challenge */}
              <div className="glass-card rounded-2xl p-6">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
                  <Target size={18} className="text-red-400" />
                </div>
                <h4 className="font-heading font-semibold text-white mb-3">El Reto</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{project.challenge}</p>
              </div>

              {/* Solution */}
              <div className="glass-card rounded-2xl p-6">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: `${project.color}15` }}
                >
                  <Zap size={18} style={{ color: project.color }} />
                </div>
                <h4 className="font-heading font-semibold text-white mb-3">La Solución</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{project.solution}</p>
              </div>

              {/* Testimonial */}
              <div className="glass-card rounded-2xl p-6 relative overflow-hidden">
                <Quote size={32} className="absolute top-4 right-4 text-white/5" />
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: project.testimonial.stars }).map((_, i) => (
                    <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-300 italic leading-relaxed mb-4">
                  &ldquo;{project.testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center font-heading font-bold text-white text-xs"
                    style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}80)` }}
                  >
                    {project.testimonial.author[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{project.testimonial.author}</p>
                    <p className="text-[11px] text-gray-500">{project.testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════
   INDUSTRIES SECTION
   ═══════════════════════════════════════════════════ */

function IndustriesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative section-padding" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_70%_50%,rgba(59,130,246,0.05),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium text-brand-secondary bg-brand-secondary/10 rounded-full mb-4">
            INDUSTRIAS
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Experiencia en{" "}
            <span className="text-gradient">tu sector</span>
          </h2>
          <p className="max-w-xl mx-auto text-gray-400">
            Hemos trabajado con empresas de todos los sectores. Conocemos los retos y las oportunidades de cada industria.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4"
        >
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.name}
                variants={fadeInUp}
                custom={i * 0.08}
                className="glass-card rounded-2xl p-5 text-center group hover:bg-white/[0.06] transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-brand-primary/20 transition-colors">
                  <Icon size={22} className="text-brand-primary" />
                </div>
                <h3 className="font-heading font-semibold text-white text-sm mb-1">{ind.name}</h3>
                <p className="text-xs text-gray-500">{ind.count}+ proyectos</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   TESTIMONIALS WALL
   ═══════════════════════════════════════════════════ */

function TestimonialsWall() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative section-padding" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_30%_50%,rgba(236,72,153,0.06),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0}
          className="text-center mb-8 sm:mb-12"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium text-brand-pink bg-brand-pink/10 rounded-full mb-4">
            TESTIMONIOS
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Lo que dicen{" "}
            <span className="text-gradient">nuestros clientes</span>
          </h2>
          <p className="max-w-xl mx-auto text-gray-400">
            Más de 100 negocios confían en nosotros. Estas son algunas de sus historias.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          {allTestimonials.map((t, i) => (
            <motion.div
              key={t.author}
              variants={fadeInUp}
              custom={i * 0.08}
              className="glass-card rounded-2xl p-6 relative overflow-hidden group hover:bg-white/[0.06] transition-all duration-300"
            >
              <Quote size={28} className="absolute top-4 right-4 text-white/[0.03]" />

              {/* Service Badge */}
              <span className="inline-block text-[10px] px-2 py-0.5 rounded-full bg-brand-primary/10 text-brand-primary mb-4">
                {t.service}
              </span>

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={12} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-gray-300 leading-relaxed mb-5 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center font-heading font-bold text-white text-xs">
                  {t.author[0]}
                </div>
                <div>
                  <p className="font-heading font-semibold text-white text-sm">{t.author}</p>
                  <p className="text-[11px] text-gray-500">
                    {t.role} · {t.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════
   FINAL CTA
   ═══════════════════════════════════════════════════ */

function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative section-padding" ref={ref}>
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-brand-secondary/10 to-brand-pink/10" />
          <div className="absolute inset-0 glass" />

          {/* Animated orbs */}
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-brand-primary/20 blur-[80px] animate-cta-orb-1" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-brand-secondary/20 blur-[80px] animate-cta-orb-2" />

          {/* Content */}
          <div className="relative z-10 p-6 sm:p-16 text-center">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.1}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6"
            >
              <Sparkles size={14} className="text-yellow-400" />
              <span className="text-xs text-gray-300">Tu historia de éxito empieza aquí</span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.2}
              className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4"
            >
              ¿Quieres ser el próximo{" "}
              <span className="text-gradient">caso de éxito?</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.3}
              className="max-w-lg mx-auto text-gray-400 mb-8"
            >
              Cuéntanos tu proyecto y te mostraremos exactamente cómo podemos
              transformar tu negocio. Consulta gratuita, sin compromiso.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0.4}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-2 sm:px-0"
            >
              <ContactButton className="btn-primary text-sm sm:text-base w-full sm:w-auto">
                <span>Solicitar consulta gratuita</span>
                <ArrowRight size={18} className="relative z-10" />
              </ContactButton>
              <a
                href="https://wa.me/34604561592"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm sm:text-base w-full sm:w-auto"
              >
                WhatsApp directo
              </a>
            </motion.div>
          </div>

          {/* Gradient border */}
          <div className="absolute inset-0 rounded-3xl gradient-border pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
