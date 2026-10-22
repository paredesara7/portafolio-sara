import { useState } from "react";
import testing1 from "../Imagenes/Casos1Buggy.png";
import testing2 from "../Imagenes/Casos2Smoke.png";
import testing3 from "../Imagenes/Casos2PostF.png";
import postmanAuth from "../Imagenes/postman-auth.png.png";
import postmanCrear from "../Imagenes/postman-crear.png";
import postman500 from "../Imagenes/postman-500.png";
import reportebug from "../Imagenes/reportebug.png";
import bugpostman from "../Imagenes/bugpostman.png";

export const Testing = () => {
  const proyectos = [
    {
      titulo: "Casos de prueba: Registro de usuario",
      descripcion:
        "Pruebas funcionales de interfaz sobre el formulario de registro de Buggy Cars Rating, un sitio de práctica con bugs intencionales. Incluye escenarios positivos y negativos (contraseñas distintas, campos vacíos, registro válido), con resultados y evidencia.",
      imagenes: [testing1],
      tags: ["Pruebas funcionales", "Casos de prueba", "Validación de datos"]
    },
    {
      titulo: "Smoke test: API Restful-booker",
      descripcion:
        "Verificación rápida de que la API está disponible y entrega datos antes de iniciar las pruebas funcionales. Incluye health check (GET /ping) y consulta de reservas (GET /booking), con tests automáticos en Postman.",
      imagenes: [testing2],
      tags: ["Postman", "API REST", "Smoke test"]
    },
    {
      titulo: "Pruebas funcionales de API: Restful-booker",
      descripcion:
        "Casos de autenticación (POST /auth) y creación de reservas (POST /booking), incluyendo un caso negativo con un campo obligatorio faltante que revela un bug. Cada caso documenta el resultado esperado vs obtenido y su evidencia.",
      imagenes: [testing3, postmanAuth, postmanCrear, postman500],
      tags: ["Postman", "Pruebas negativas", "Documentación"]
    },
    {
      titulo: "Reporte de bug en Jira",
      descripcion:
        "POST /booking devuelve 500 en lugar de 400 al omitir un campo obligatorio. Incluye pasos para reproducir, resultado esperado vs obtenido, impacto y evidencia de Postman.",
      imagenes: [reportebug, bugpostman],
      tags: ["Jira", "Gestión de incidencias", "API REST"]
    }
  ];

  const [proyectoAmpliado, setProyectoAmpliado] = useState<{
    titulo: string;
    imagenes: string[];
  } | null>(null);

  return (
    <section className="py-16 max-w-5xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-lila-300 mb-12">Prácticas Testing</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {proyectos.map((p, index) => (
          <div key={index} className="bg-lila-800 rounded-2xl overflow-hidden border border-lila-700 hover:border-lila-300 transition-all">
            <button
              type="button"
              onClick={() =>
                setProyectoAmpliado({ titulo: p.titulo, imagenes: p.imagenes })
              }
              aria-label={`Ampliar imágenes de ${p.titulo}`}
              className="group relative block h-72 w-full overflow-hidden text-left"
            >
              <img
                src={p.imagenes[0]}
                alt={`${p.titulo} - vista previa`}
                className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
              />
              <span className="absolute bottom-3 right-3 rounded border border-lila-700 bg-lila-900 px-2 py-1 text-xs text-lila-300">
                {p.imagenes.length > 1
                  ? `Ver ${p.imagenes.length} imágenes`
                  : "Clic para ampliar"}
              </span>
            </button>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{p.titulo}</h3>
              <p className="text-gray-300 mb-4">{p.descripcion}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map(tag => (
                  <span key={tag} className="text-xs bg-lila-900 px-2 py-1 rounded text-lila-300 border border-lila-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {proyectoAmpliado && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="testing-modal-title"
        >
          <div className="flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-lila-700 bg-lila-800">
            <div className="flex items-center justify-between gap-4 border-b border-lila-700 p-4">
              <h3 id="testing-modal-title" className="text-xl font-bold">
                {proyectoAmpliado.titulo}
              </h3>
              <button
                type="button"
                onClick={() => setProyectoAmpliado(null)}
                className="rounded border border-lila-700 bg-lila-900 px-3 py-1 text-lila-300 hover:border-lila-300"
              >
                Cerrar
              </button>
            </div>
            <div className="overflow-y-auto p-4">
              {proyectoAmpliado.imagenes.map((imagen, imageIndex) => (
                <img
                  key={imagen}
                  src={imagen}
                  alt={`${proyectoAmpliado.titulo} - imagen ${imageIndex + 1}`}
                  className="mb-4 h-auto w-full last:mb-0"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
