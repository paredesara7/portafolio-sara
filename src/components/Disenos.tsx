
import post0 from "../Imagenes/post0.png";
import post1 from "../Imagenes/post1.png";
import post2 from "../Imagenes/post2.png";
import historia0 from "../Imagenes/historia0.png";
import historia1 from "../Imagenes/historia1.png";
import historia3 from "../Imagenes/historia3.png";

export const Disenos = () => {
  const disenoss = [
    {
      titulo: "Post promocional",
      descripcion: "Diseño con especificaciones clave del producto para facilitar la decisión de compra.",
      imagen: post1,
      tags: ["Diseño gráfico", "Catálogo", "Gaming"],
    },
    {
      titulo: "Post de contenido: Top Procesadores del año",
      descripcion:
        "Publicación con selección de los mejores procesadores del año, con estética anime para conectar con la comunidad gamer.",
      imagen: post0,
      tags: ["Contenido", "Engagement", "Gaming"],
    },
    {
      titulo: "Campaña temática: Setup Rosa",
      descripcion:
        "Diseño con memes y colores llamativos para promocionar una línea de productos y conectar con un público objetivo.",
      imagen: post2,
      tags: ["Campaña", "Meme marketing", "Redes sociales"],
    },
  ];

  const historias = [
    {
      titulo: "Historia de conversión: Solicitud de presupuesto",
      descripcion: "Historia con llamado a la acción para invitar a los clientes a solicitar su presupuesto, usando estética gamer para captar la atención.",
      imagen: historia0,
      tags: ["Meta Business Suite", "Stories", "Llamado a la acción"],
    },
    {
      titulo: "Historia de producto: Ficha técnica Intel",
      descripcion: "Diseño creativo para promocionar campañas y novedades.",
      imagen: historia1,
      tags: ["Meta Business Suite", "Catálogo", "Producto"],
    },
    {
      titulo: "Historia informativa: Envíos en el día",
      descripcion: "Pieza que comunica el servicio de delivery y su cobertura, destacando rapidez y envíos a todo el país para generar confianza,",
      imagen: historia3,
      tags: ["Servicio", "Confianza", "Meta Business Suite"],
    },
  ];

  return (
    <section className="py-16 max-w-6xl mx-auto px-2">
      <h2 className="text-4xl font-bold text-lila-300 mb-12">
        Diseños Adaptados
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {disenoss.map((p, index) => (
          <div
            key={index}
            className="bg-lila-800 rounded-2xl overflow-hidden border border-lila-700 hover:border-lila-300 transition-all"
          >
            {/* Imagen del proyecto */}
            <div className="w-full bg-lila-900">
              <img
                src={p.imagen}
                alt={p.titulo}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Información del proyecto */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{p.titulo}</h3>

              <p className="text-gray-300 mb-4">{p.descripcion}</p>

              {/* Etiquetas */}
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-lila-900 px-2 py-1 rounded text-lila-300 border border-lila-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="text-3xl font-bold text-lila-300 mb-8">
          Historias de Instagram
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {historias.map((h, index) => (
            <div
              key={index}
              className="bg-lila-800 rounded-2xl overflow-hidden border border-lila-700 hover:border-lila-300 transition-all"
            >
              <div className="w-full bg-lila-900">
                <img
                  src={h.imagen}
                  alt={h.titulo}
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="p-6">
                <h4 className="text-xl font-bold mb-2">{h.titulo}</h4>
                <p className="text-gray-300 mb-4">{h.descripcion}</p>

                <div className="flex flex-wrap gap-2">
                  {h.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-lila-900 px-2 py-1 rounded text-lila-300 border border-lila-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};