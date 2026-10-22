import tes0 from "../Imagenes/tes0.png";
import tes1 from "../Imagenes/tes1.png";
import tes2 from "../Imagenes/tes2.jpg";

export const Tesis = () => {
  const tecnologias = [
    { nombre: "Lenguaje", valor: "Java" },
    { nombre: "IDE", valor: "NetBeans" },
    { nombre: "Base de datos", valor: "MySQL" },
    { nombre: "Gestor", valor: "SQLyog" },
    { nombre: "Diagramas", valor: "StarUML" },
  ];

  const capturas = [
    {
      titulo: "Acceso al sistema",
      descripcion: "Pantalla de conexión a la base de datos MySQL y autenticación de usuario.",
      imagen: tes0,
    },
    {
      titulo: "Movimiento: Planificación Académica",
      descripcion: "Formulario para registrar, editar y consultar planificaciones, con calendario, tabla de resultados y botones de acción.",
      imagen: tes1,
    },
    {
      titulo: "Diagrama de secuencia",
      descripcion: "Modelado con StarUML del flujo del botón Editar, desde la interfaz hasta la base de datos.",
      imagen: tes2,
    },
  ];

  return (

    <section className="py-16 max-w-6xl mx-auto px-2">
      <h2 className="text-4xl font-bold text-lila-300 mb-12">Mi Tesis</h2>

      {/* Descripción + tecnologías */}
      <div className="bg-lila-800 rounded-2xl border border-lila-700 p-8 mb-10">
        <h3 className="text-2xl font-bold mb-4">
          Módulo académico escolar
        </h3>

        <p className="text-gray-300 mb-6">
          Mi tesis consistió en el desarrollo de un módulo académico escolar,
          diseñado para facilitar la gestión y organización de la información
          educativa. Realicé el ciclo completo: análisis de requerimientos, modelado con diagramas, 
          diseño de la base de datos, desarrollo y documentación.
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tecnologias.map((t) => (
            <span
              key={t.nombre}
              className="text-xs bg-lila-900 px-3 py-1 rounded text-lila-300 border border-lila-700"
            >
              <span className="text-gray-400">{t.nombre}:</span> {t.valor}
            </span>
          ))}
        </div>


      </div>

      {/* Capturas */}
      <h3 className="text-3xl font-bold text-lila-300 mb-8">
        Capturas del sistema
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {capturas.map((c, index) => (
          <div
            key={index}
            className="group relative bg-lila-800 rounded-2xl overflow-visible border border-lila-700 hover:border-lila-300 transition-all duration-500 hover:scale-[1.08] hover:z-10 hover:shadow-2xl hover:shadow-lila-900/50"
          >
            <div className="w-full bg-lila-900 overflow-visible">
              <img
                src={c.imagen}
                alt={c.titulo}
                className="w-full h-auto object-contain transition-transform duration-500 origin-center group-hover:scale-180"
              />
            </div>

            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">{c.titulo}</h4>
              <p className="text-gray-300">{c.descripcion}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};