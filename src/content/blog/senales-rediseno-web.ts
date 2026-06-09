import type { Post } from "@/lib/blog";

const post: Post = {
  slug: "senales-rediseno-web",
  title: "7 señales de que tu web está perdiendo clientes (y toca rediseñarla)",
  heading: "7 señales de que tu web está perdiendo clientes y necesita un rediseño",
  description:
    "Web lenta, no convierte, mal en móvil, imposible de actualizar… 7 síntomas claros de que tu página está costándote dinero y es hora de rediseñarla.",
  date: "2026-04-23",
  category: "Desarrollo Web",
  tags: ["rediseño web", "conversión", "UX", "velocidad web", "Core Web Vitals"],
  relatedService: { name: "Desarrollo Web", href: "/servicios/desarrollo-web" },
  faq: [
    {
      question: "¿Cada cuánto hay que rediseñar una web?",
      answer:
        "Como referencia, cada 3–4 años, o antes si la web va lenta, no convierte, se ve mal en móvil o ya no representa a tu negocio. Más que el calendario, mandan los resultados.",
    },
    {
      question: "¿Un rediseño afecta a mi posicionamiento en Google?",
      answer:
        "Si se hace bien —manteniendo URLs, redirecciones 301 y mejorando velocidad y estructura— el rediseño suele mejorar el SEO. Hecho a la ligera, sin migración cuidada, sí puede hacerte perder posiciones.",
    },
    {
      question: "¿Rediseñar es lo mismo que rehacer la web desde cero?",
      answer:
        "No siempre. A veces basta con renovar diseño y velocidad sobre la base actual; otras conviene reconstruir con tecnología moderna. Depende del estado técnico de tu web y de tus objetivos.",
    },
  ],
  content: `
<p>Tu web puede estar trabajando para ti… o en tu contra, en silencio, perdiendo clientes cada día. La mayoría de negocios no se da cuenta porque "la web funciona": carga, se ve, existe. Pero "funcionar" no es lo mismo que "vender". Estas son las 7 señales de que ha llegado el momento de rediseñar.</p>

<h2>1. Carga lenta</h2>
<p>Si tu web tarda más de 3 segundos en cargar, estás perdiendo visitas antes de que vean nada. La velocidad (Core Web Vitals) afecta tanto a la conversión como al posicionamiento en Google. Es la fuga más cara y la más invisible.</p>

<h2>2. No convierte</h2>
<p>Recibes visitas pero no llamadas, formularios ni ventas. Suele ser un problema de claridad: no se entiende qué ofreces, falta una llamada a la acción evidente o el camino hacia el contacto es un laberinto.</p>

<h2>3. Se ve mal en el móvil</h2>
<p>Más de la mitad de tu tráfico es móvil. Si en el teléfono hay que hacer zoom, los botones se solapan o el menú no funciona, estás regalando a esos clientes a la competencia.</p>

<blockquote>Una web bonita que no convierte es decoración cara. Una web que convierte es un comercial trabajando 24/7.</blockquote>

<h2>4. Es imposible de actualizar</h2>
<p>Si para cambiar un texto o un precio tienes que llamar a alguien y esperar una semana, tu web es una jaula. Una web moderna te deja editar lo básico sin depender de nadie.</p>

<h2>5. Ya no representa a tu negocio</h2>
<p>Has crecido, cambiado de servicios o de imagen, pero tu web sigue anclada a hace cinco años. Cuando la web envía un mensaje distinto al de tu marca actual, generas desconfianza.</p>

<h2>6. Tu competencia te adelanta</h2>
<p>Buscas tus servicios en Google y aparecen ellos, con webs más rápidas y claras. El posicionamiento se trabaja, sí, pero parte de una base técnica que tu web quizá ya no tiene. Aquí entra de lleno el <a href="/servicios/seo">SEO</a>.</p>

<h2>7. No puedes medir nada</h2>
<p>No sabes cuánta gente entra, por dónde se va ni qué páginas convierten. Sin analítica, navegas a ciegas. Un rediseño bien hecho instala medición desde el primer día.</p>

<h2>¿Y ahora qué?</h2>
<p>Si has marcado tres o más de estas señales, tu web te está costando dinero cada mes. La buena noticia: un rediseño orientado a conversión y velocidad se recupera solo. En <a href="/servicios/desarrollo-web">ScalifyLabs rediseñamos webs</a> para que carguen rápido, se vean perfectas en móvil y, sobre todo, vendan. <a href="/contacto">Pídenos un diagnóstico gratuito</a>.</p>
`,
};

export default post;
