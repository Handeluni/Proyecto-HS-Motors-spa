import { ArrowRight, Compass, HeartHandshake, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Compass,
    title: "Claridad para decidir",
    text: "Te ayudamos a comparar con información comprensible y atención sin presión.",
  },
  {
    icon: ShieldCheck,
    title: "Confianza en el camino",
    text: "Seleccionamos alternativas y servicios pensados para una movilidad segura.",
  },
  {
    icon: HeartHandshake,
    title: "Cercanía que continúa",
    text: "Nuestra relación no termina al elegir un vehículo: te acompañamos después.",
  },
];

export function AboutPage() {
  return (
    <section className="section container about-page">
      <p className="eyebrow">SOMOS HS MOTORS</p>
      <h1 className="page-title">
        Movilidad que se siente <em>cercana.</em>
      </h1>
      <p className="intro">
        HS Motors es una experiencia digital para descubrir vehículos, recibir
        orientación clara y avanzar con seguridad hacia tu próxima decisión.
      </p>
      <div className="about-grid">
        {values.map(({ icon: Icon, title, text }) => (
          <article key={title}>
            <Icon />
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </div>
      <div className="about-cta">
        <div>
          <p className="eyebrow">CONOCE NUESTRO CATÁLOGO</p>
          <h2>Tu próximo camino empieza con una buena conversación.</h2>
        </div>
        <Link className="button light-button" to="/quote">
          Hablar con un asesor <ArrowRight />
        </Link>
      </div>
    </section>
  );
}
