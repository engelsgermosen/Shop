export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-800 text-white text-center p-8">
      <p>&copy; {year} - Todos los derechos reservados</p>
    </footer>
  );
};
