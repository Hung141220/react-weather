import { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          e.target as HTMLFormElement,
          import.meta.env.VITE_PUBLIC_KEY,
        )
        .then((result) => {
          console.log(result);

          alert("Message Sent Success.");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        })
        .catch((e) => {
          console.log({ errorSend: e });
          alert("Oop! Something went wrong. Please try again.");
        });
    } catch (error) {
      console.log({ errorSend: e });
      alert("Oop! Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="flex min-h-screen items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="w-150 px-4">
          <h2 className="mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-center text-3xl font-bold text-transparent">
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={(e) => handleSubmit(e)}>
            <div className="relative">
              <input
                type="text"
                required
                id="name"
                name="name"
                className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-blue-500 focus:bg-blue-500/5 focus:outline-none"
                placeholder="Name..."
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-blue-500 focus:bg-blue-500/5 focus:outline-none"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            </div>
            <div className="relative">
              <textarea
                id="messsage"
                name="messsage"
                rows={5}
                required
                className="w-full rounded border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-blue-500 focus:bg-blue-500/5 focus:outline-none"
                placeholder="Your message..."
                value={formData.message}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, message: e.target.value }))
                }
              />
            </div>
            <button
              type="submit"
              className="hover:shadow[0_0_15px_rgba(59,130,246,0.4)] relative w-full overflow-hidden rounded bg-blue-500 px-6 py-3 font-medium text-white transition hover:-translate-y-0.5"
            >
              Send message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
