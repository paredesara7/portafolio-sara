import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SobreMi } from './components/SobreMi';
import { Testing } from './components/Testing';
import { Disenos } from './components/Disenos';
import Contacto from './components/Contacto'; 
import { Tesis } from './components/Tesis'; 

function App() {
  const [paginaActual, setPaginaActual] = useState('inicio');

  useEffect(() => {
    window.history.replaceState({ pagina: 'inicio' }, '');

    const volverAPaginaAnterior = (event: PopStateEvent) => {
      setPaginaActual(event.state?.pagina ?? 'inicio');
    };

    window.addEventListener('popstate', volverAPaginaAnterior);
    return () => window.removeEventListener('popstate', volverAPaginaAnterior);
  }, []);

  const cambiarPagina = (pagina: string) => {
    if (pagina === paginaActual) return;

    window.history.pushState({ pagina }, '');
    setPaginaActual(pagina);
  };

  return (
    <div className="flex min-h-screen flex-col bg-lila-900 text-white">
      <Navbar setPagina={cambiarPagina} />
      
      <main className="flex-1 p-8">
        {paginaActual === 'inicio' && (
          <>
            <Hero setPagina={cambiarPagina} />
            <SobreMi />
          </>
        )}
        {paginaActual === 'testing' && <Testing />}
        {paginaActual === 'contacto' && <Contacto />} 
        {paginaActual === 'disenos' && <Disenos />}
        {paginaActual === 'tesis' && <Tesis />}
      </main>

      <footer className="border-t border-lila-700 px-4 py-6 text-center text-sm text-lila-300">
        <p>© 2026 Sara Paredes. Todos los derechos reservados.</p>
        <p className="mt-1">Desarrollado con React, TypeScript, Tailwind CSS & asistido por IA.</p>
      </footer>
    </div>
  );
}

export default App;
