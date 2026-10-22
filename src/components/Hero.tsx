import cvSara from '../Imagenes/SaraParedes_CV.pdf';

// Hero.tsx
export const Hero = ({ setPagina }: { setPagina: (p: string) => void }) => {
  return (
    <div className="text-center py-20">
      <h1 className="text-5xl font-bold text-white mb-4">
        Hola, soy Sara
      </h1>

      <p className="text-lila-300 text-xl mb-8">
        QA Tester Jr | Analista de sistemas & Marketing.
      </p>

      <button
        onClick={() => setPagina('contacto')}
        className="bg-lila-700 hover:bg-lila-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
      >
        Contactar
      </button>

      <a
        href={cvSara}
        download="SaraParedes_CV.pdf"
        className="ml-4 border border-lila-700 hover:bg-lila-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
      >
        Descargar CV
      </a>
    </div>
  );
};
