import cursoQaClt from "../Imagenes/cursoqaclt.jpg";
import cursoUdemy3 from "../Imagenes/cursoudemy3.jpg";
import cursoUdemy2 from "../Imagenes/cursoudemy2.jpg";
import cursoBig1 from "../Imagenes/cursobig1.jpg";
import cursoDesafioLatam4 from "../Imagenes/cursodesafiolatam4.jpg";
import cursoDesafioLatam5 from "../Imagenes/cursodesafiolatam5.jpg";
import cursoDesafioLatam6 from "../Imagenes/cursodesafiolatam6.jpg";
import cursoDesafioLatam3 from "../Imagenes/cursodesafiolatam3.jpg";
import cursoDesafioLatam2 from "../Imagenes/cursodesafiolatam2.jpg";
import cursoCodigoFacilito1 from "../Imagenes/cursocodigofac1.jpg";
import cursoDesafioLatam1 from "../Imagenes/cursodesafiolatam1.jpg";
import cursoSnpp3 from "../Imagenes/cursosnpp3.jpg";

type Certificado = {
  titulo: string;
  institucion: string;
  fecha?: string;
  imagen: string;
};

const certificados: Certificado[] = [
  {
    titulo: "Fundamentos de Pruebas en QA",
    institucion: "Bootcamp QA CLT",
    fecha: "Junio de 2026",
    imagen: cursoQaClt,
  },
  {
    titulo: "Software Testing desde cero: MasterClass todo en 1 (2025)",
    institucion: "Udemy",
    fecha: "Noviembre de 2025",
    imagen: cursoUdemy3,
  },
  {
    titulo: "API Testing con POSTMAN: Masterclass todo en 1 (2025)",
    institucion: "Udemy",
    fecha: "Octubre de 2025",
    imagen: cursoUdemy2,
  },
  {
    titulo: "Desarrollo con IA: de 0 a Producción",
    institucion: "BIG school",
    fecha: "Marzo de 2026",
    imagen: cursoBig1,
  },
  {
    titulo: "QA desde cero: Principios, habilidades y el futuro con IA",
    institucion: "Ecosistema Tech by Desafío Latam y GlobalLogic",
    fecha: "Septiembre de 2025",
    imagen: cursoDesafioLatam4,
  },
  {
    titulo: "IA Generativa: Desafíos y oportunidades.",
    institucion: "Ecosistema Tech by Desafío Latam",
    fecha: "Mayo de 2025",
    imagen: cursoDesafioLatam6,
  },
  {
    titulo: "IA para la productividad - Taller en vivo",
    institucion: "Ecosistema Tech by Desafío Latam",
    fecha: "Marzo de 2025",
    imagen: cursoDesafioLatam5,
  },
  {
    titulo: "Git y GitHub para principiantes: Controla tu código como un profesional",
    institucion: "Desafío Latam y Coding Dojo",
    fecha: "Noviembre de 2024",
    imagen: cursoDesafioLatam3,
  },
  {
    titulo: "Programación y productividad: Chat GPT para profesionales TI",
    institucion: "Ecosistema Tech by Desafío Latam",
    fecha: "Agosto de 2024",
    imagen: cursoDesafioLatam2,
  },
  {
    titulo: "Curso Profesional de UML",
    institucion: "Código Facilito",
    fecha: "Noviembre de 2024",
    imagen: cursoCodigoFacilito1,
  },
  {
    titulo: "Aprende Power BI desde cero",
    institucion: "Ecosistema Tech by Desafío Latam.",
    fecha: "Octubre de 2024",
    imagen: cursoDesafioLatam1,
  },
  {
    titulo: "Marketing Operativo y Estratégico",
    institucion: "Servicio Nacional de Promoción Profesional (SNPP)",
    fecha: "Abril a mayo de 2024",
    imagen: cursoSnpp3,
  },
];

export const Curso = () => {
  return (
    <section className="mx-auto max-w-6xl px-2 py-16">
      <h2 className="mb-4 text-4xl font-bold text-lila-300">
        Cursos y certificados
      </h2>
      <p className="mb-12 max-w-2xl text-gray-300">
        
      </p>

      {certificados.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certificados.map((certificado) => (
            <article
              key={`${certificado.titulo}-${certificado.institucion}`}
              className="overflow-hidden rounded-2xl border border-lila-700 bg-lila-800 transition-colors hover:border-lila-300"
            >
              <img
                src={certificado.imagen}
                alt={`Certificado de ${certificado.titulo}`}
                className="aspect-[4/3] w-full bg-lila-900 object-contain"
              />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">{certificado.titulo}</h3>
                <p className="text-gray-300">{certificado.institucion}</p>
                {certificado.fecha && (
                  <p className="mt-2 text-sm text-lila-300">
                    {certificado.fecha}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-lila-700 bg-lila-800/50 px-6 py-16 text-center">
          <h3 className="mb-3 text-2xl font-semibold text-lila-300">
            Próximamente
          </h3>
          <p className="mx-auto max-w-xl text-gray-300">
           
          </p>
        </div>
      )}
    </section>
  );
};
