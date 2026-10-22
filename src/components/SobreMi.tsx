import escritorio from "../Imagenes/escritorio.jpeg";

export const SobreMi = () => {
  return (
    <section className="py-16 max-w-4xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-lila-300 mb-8">Sobre mí</h2>
      
      <p className="text-lg mb-8 leading-relaxed">
        Mi nombre es Sara, soy de la ciudad de San Lorenzo. Me considero una persona empática, detallista y serena, 
        disfruto tener todo bien organizado (¡amo anotar! 📝) <br></br>
        
        Actualmente colaboro con Mastertechsl en tareas relacionadas 
        con diseño y marketing, principalmente en la creación de contenido y comunicación visual. Estoy abierta a nuevas oportunidades laborales en QA,
        que me permitan seguir aprendiendo, creciendo y aportando.
      </p>


      <h3 className="text-2xl font-bold text-lila-300 mb-6">Experiencia Profesional</h3>
      
      <div className="space-y-6">

        {/* MASTERRR */}
        <div className="bg-lila-800 p-6 rounded-xl border border-lila-700">
          <h4 className="text-xl font-bold">Diseño y Marketing | Mastertechsl</h4>
          <p className="text-sm text-lila-300 italic">Junio 2026 – Actualidad (Reincorporación) · Remoto</p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-200">
            <li>Diseño de piezas gráficas y contenido visual.</li>
            <li>Aplicación de identidad visual y criterios de diseño para mantener una comunicación coherente de la marca.</li>
            <li>Desarrollo de contenido promocional y visual enfocado en la presentación de productos.</li>
            <li>Reporte de métricas de redes sociales para analizar alcance, visualizaciones, y crecimiento de la comunidad.</li>
            <li>Creación y edición de contenido para redes sociales.</li>
          </ul>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-1 text-sm bg-lila-700 rounded-full text-lila-200">
              CapCut
            </span>
            <span className="px-3 py-1 text-sm bg-lila-700 rounded-full text-lila-200">
              Canva
            </span>
            <span className="px-3 py-1 text-sm bg-lila-700 rounded-full text-lila-200">
              IA
            </span>
            <span className="px-3 py-1 text-sm bg-lila-700 rounded-full text-lila-200">
              Meta Business Suite
            </span>
        </div>
        </div>

        {/* UTIC*/}
        <div className="bg-lila-800 p-6 rounded-xl border border-lila-700">
          <h4 className="text-xl font-bold">Control de calidad de la información. | UTIC</h4>
          <p className="text-sm text-lila-300 italic">Marzo - Mayo 2026 · Presencial</p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-200">
            <li>Validación y verificación de la consistencia de datos académicos.</li>
            <li>Detección y reporte de errores o diferencias en registros académicos.</li>
            <li>Comunicación de incidencias de datos al área de Decanato para su revisión y seguimiento.</li>
            <li>Verificación de la información corregida para asegurar la consistencia de los registros.</li>
          </ul>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="px-3 py-1 text-sm bg-lila-700 rounded-full text-lila-200">
              Verificación de datos
            </span>
            <span className="px-3 py-1 text-sm bg-lila-700 rounded-full text-lila-200">
              Análisis de requisitos
            </span>
            <span className="px-3 py-1 text-sm bg-lila-700 rounded-full text-lila-200">
              Documentación
            </span>
          </div>
        </div>
        
        {/* MASTER */}
        <div className="bg-lila-800 p-6 rounded-xl border border-lila-700">
          <h4 className="text-xl font-bold">QA Tester Jr | Mastertechsl</h4>
          <p className="text-sm text-lila-300 italic">Enero - Marzo 2026 · Remoto</p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-200">
            <li>Ejecución de pruebas funcionales de API REST (GET, POST, PUT) en entorno WooCommerce, usando Postman para validar endpoints.</li>
            <li>Elaboración de casos de prueba y ejecución de smoke tests para verificar la disponibilidad de la API.</li>
            <li>Elaboración de documentación de resultados de pruebas en Jira - Confluence.</li>
          </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 text-sm bg-lila-700 rounded-full text-lila-200">
                Pruebas funcionales
              </span>
              <span className="px-3 py-1 text-sm bg-lila-700 rounded-full text-lila-200">
                Postman
              </span>
              <span className="px-3 py-1 text-sm bg-lila-700 rounded-full text-lila-200">
                API REST
              </span>
              <span className="px-3 py-1 text-sm bg-lila-700 rounded-full text-lila-200">
                Jira
              </span>        
              <span className="px-3 py-1 text-sm bg-lila-700 rounded-full text-lila-200">
                Casos de prueba
              </span> 
              <span className="px-3 py-1 text-sm bg-lila-700 rounded-full text-lila-200">
                Smoke Test
              </span>       
              <span className="px-3 py-1 text-sm bg-lila-700 rounded-full text-lila-200">
                Reporte de bugs
              </span>                                           
            </div>
        </div>


        {/* Master desingss*/}
        <div className="bg-lila-800 p-6 rounded-xl border border-lila-700">
          <h4 className="text-xl font-bold">Diseño y Marketing | Mastertechsl</h4>
          <p className="text-sm text-lila-300 italic">2024 - 2025 · Híbrida</p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-200">
            <li>Edición de contenido para redes sociales.</li>
            <li>Apoyo en tareas relacionadas con marketing y comunicación visual.</li>
            <li>Apoyo en la creación de piezas gráficas y contenido visual.</li>
          </ul>
        </div>

        {/* Distribuidora FG */}
        <div className="bg-lila-800 p-6 rounded-xl border border-lila-700">
          <h4 className="text-xl font-bold">Soporte en Recursos Humanos | Distribuidora FG SACI</h4>
          <p className="text-sm text-lila-300 italic">2023 · Presencial</p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-200">
            <li>Organización y actualización de legajos.</li>
            <li>Carga y gestión de datos en IPS REI 2.0 y MTESS.</li>
            <li>Control de asistencia del personal.</li>
            <li>Registro y actualización de notas de crédito en el sistema interno de la empresa.</li>
            <li>Actualización y mantenimiento básico de equipos con sistema operativo Windows.</li>
            <li>Diseño de flyers para comunicaciones internas.</li>
          </ul>
        </div>

        {/* A&SLook */}
        <div className="bg-lila-800 p-6 rounded-xl border border-lila-700">
          <h4 className="text-xl font-bold">Atención al Cliente | A&SLook</h4>
          <p className="text-sm text-lila-300 italic">2021 - 2023 · Presencial</p>
          <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-200">
            <li>Atención personalizada, asesoramiento en ventas.</li>
            <li>Ventas presenciales, online y control de stock.</li>
          </ul>
        </div>
      </div>

      {/* Mi Espacio */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-lila-300 mb-6">Mi rincón favv✨</h3>
        <div className="w-1/2 mx-auto rounded-2xl overflow-hidden border-4 border-lila-700 shadow-2xl">
        <img 
          src={escritorio}
          alt="Mi lugar favorito" 
          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
        />
        </div>
      </div>
    </section>
  );
};
