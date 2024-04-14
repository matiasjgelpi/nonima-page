import React, { useState } from "react";
import mail from "../assets/images/Mail.png";

const Copied = () => {
  const [copiedText, setCopiedText] = useState<string | undefined>(undefined);
  const [opacidad, setOpacidad] = useState<string>("0");

  const copiarTextoAlPortapapeles = async (texto: string) => {
    try {
      await navigator.clipboard.writeText(texto);

      setCopiedText(texto);
      setOpacidad("1");
    } catch (error) {
      console.error("Error al copiar al portapapeles: " + error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "nowrap",
        alignItems: "center",
        gap: "10px",
        paddingBottom: "4px",
      }}
    >
      <p>Ecríbenos </p>
      <img
        style={{ cursor: "pointer" }}
        onClick={() => copiarTextoAlPortapapeles("nonimamdq@gmail.com")}
        src={mail.src}
        alt="mail-icon"
        width={25}
      />

      <p style={{ opacity: opacidad }}>Copiado!</p>
    </div>
  );
};

export default Copied;
