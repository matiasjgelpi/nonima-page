import { useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

export default function Form() {
  const form = useRef<HTMLFormElement>(null);
  const [sendStatus, setSendStatus] = useState<"error" | "success" | null>(
    null,
  );

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    setSendStatus(null);
    e.preventDefault();

    const {
      PUBLIC_EMAILJS_PUIBLIC_KEY: publicKey,
      PUBLIC_EMAILJS_SERVICE_ID: serviceId,
      PUBLIC_EMAILJS_TEMPLATE_ID: templateId,
    } = import.meta.env;

    if (form.current) {
      emailjs
        .sendForm(serviceId, templateId, form.current, {
          publicKey,
        })
        .then(
          () => {
            setSendStatus("success");
            if (form.current) form.current.reset();
          },
          () => {
            setSendStatus("error");
          },
        );
    }
  };

  return (
    <div>
      <p>Envíame un mensaje</p>
      {sendStatus === "success" && (
        <p
          className="animate-jump-in p-1 rounded-xl bg-light-green text-center"
          style={{ color: "green" }}
        >
          El mensaje envío correctamente! 😊
        </p>
      )}
      {sendStatus === "error" && (
        <p
          className="animate-jump-in p-1 rounded-xl bg-light-red text-center"
          style={{ color: "red" }}
        >
          Hubo un error al enviar el mensaje. 🥲{" "}
        </p>
      )}
      <form className="flex flex-col gap-2" ref={form} onSubmit={sendEmail}>
        <label className="flex flex-col font-normal gap-1">
          Nombre:
          <input
            className="rounded-md"
            type="text"
            name="from_name"
            id="from_name"
            required
          />
        </label>
        <label className="flex flex-col font-normal gap-1">
          Correo electrónico:
          <input
            className="rounded-md"
            type="email"
            name="email_id"
            id="email_id"
            required
          />
        </label>
        <label className="flex flex-col font-normal gap-1">
          Mensaje:
          <textarea
            className="rounded-md"
            name="message"
            id="message"
            required
            minLength={6}
          ></textarea>
        </label>
        <button className="bg-light-violet rounded-md p-1">Enviar</button>
      </form>
    </div>
  );
}
