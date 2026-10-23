export const Navbar = ({ setPagina }: { setPagina: (p: string) => void }) => {
  return (
    <nav className="bg-lila-800 p-6 shadow-lg border-b border-lila-700 sticky top-0 z-50">
      <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-white font-medium">
        <li onClick={() => setPagina('inicio')} className="hover:text-lila-300 cursor-pointer transition-colors">Inicio</li>
        <li onClick={() => setPagina('testing')} className="hover:text-lila-300 cursor-pointer transition-colors">Testing</li>
        <li onClick={() => setPagina('disenos')} className="hover:text-lila-300 cursor-pointer transition-colors">Diseños Adaptados</li>
        <li onClick={() => setPagina('tesis')} className="hover:text-lila-300 cursor-pointer transition-colors">Tesis</li>
        <li onClick={() => setPagina('curso')} className="hover:text-lila-300 cursor-pointer transition-colors">Cursos y certificados</li>
        <li onClick={() => setPagina('contacto')} className="hover:text-lila-300 cursor-pointer transition-colors">Contacto</li>
      </ul>
    </nav>
  );
};
