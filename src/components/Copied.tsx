import { useState } from "react";

const Copied = () => {
  const [copiedText, setCopiedText] = useState<string | undefined>(undefined);
  const [opacidad, setOpacidad] = useState<string>("0");

  const copiarTextoAlPortapapeles = async (texto: string) => {
    try {
      await navigator.clipboard.writeText(texto);

      if (opacidad === "1") {
        setOpacidad("0");
      }

      setCopiedText(texto);
      setOpacidad("1");
    } catch (error) {
      console.error("Error al copiar al portapapeles: " + error);
    }
  };

  return (
    <div>
      <button
        className={`${opacidad === "0" && "hover:after:content-['copiar']"}  after:text-xs after:font-normal after:pl-1`}
        onClick={() => copiarTextoAlPortapapeles("nonimamdq@gmail.com")}
      >
        nonimamdq@gmail.com
      </button>

      <p
        style={{
          display: `${opacidad === "0" ? "none" : "inline"}`,
          fontSize: "10px",
          fontStyle: "italic",
        }}
      >
        Copiado!
      </p>
    </div>
  );
};

export default Copied;
