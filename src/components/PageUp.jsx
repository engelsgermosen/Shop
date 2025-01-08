import { useState, useEffect } from "react";
import ArrowUp from "../icons/ArrowUp.svg";
import throttle from "lodash.throttle";

export const PageUp = () => {
  const [scroll, setScroll] = useState();
  const [hasScrolled, setHasScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = throttle(() => {
      const currentScroll = window.scrollY;

      if (currentScroll > 1000) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }

      setScroll(currentScroll);
    }, 500);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const ScroolToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className={`${
        hasScrolled
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } fixed bottom-4 right-4 md:bottom-8 md:right-8 size-14 bg-gray-800 p-2 rounded-full flex items-center justify-center border-2 border-transparent transition-all duration-300 hover:scale-110 hover:bg-gray-700`}
    >
      <button
        onClick={ScroolToTop}
        className="w-full h-full flex items-center justify-center"
        aria-label="Subir al inicio"
      >
        <img
          className="w-8 h-8 md:w-10 md:h-10"
          src={ArrowUp}
          alt="Flecha hacia arriba"
        />
      </button>
    </div>
  );
};
