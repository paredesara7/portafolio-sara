import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import BugRunner from "./BugRunner";

const Contacto = () => {
  return (
    <>
      <div className="max-w-3xl mx-auto p-8 bg-lila-800 rounded-2xl border border-lila-700 shadow-2xl mt-10">

        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          ¡Hablemos!
        </h2>

        <p className="text-lila-200 text-center mb-10">
          ¡Me encantaría conectar contigo! Puedes encontrarme en:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* WhatsApp */}
          <a
            href="https://wa.me/595992041757"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-lila-900 rounded-xl hover:bg-lila-700 transition-all border border-lila-600 hover:border-lila-400 group"
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="text-5xl text-white mb-3 group-hover:scale-110 transition-transform"
            />

            <span className="font-semibold text-white">
              WhatsApp
            </span>

            <span className="text-xs text-lila-400 mt-1">
              Envíame un mensaje
            </span>
          </a>

          {/* Email */}
          <a
            href="mailto:saraparedesg7@gmail.com"
            className="flex flex-col items-center p-6 bg-lila-900 rounded-xl hover:bg-lila-700 transition-all border border-lila-600 hover:border-lila-400 group"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-5xl text-white mb-3 group-hover:scale-110 transition-transform"
            />

            <span className="font-semibold text-white">
              Email
            </span>

            <span className="text-xs text-lila-400 mt-1">
              Envíame un correo
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sara-paredes-4aa841228/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-lila-900 rounded-xl hover:bg-lila-700 transition-all border border-lila-600 hover:border-lila-400 group"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-5xl text-white mb-3 group-hover:scale-110 transition-transform"
            />

            <span className="font-semibold text-white">
              LinkedIn
            </span>

            <span className="text-xs text-lila-400 mt-1">
              Ver
            </span>
          </a>

        </div>
      </div>
      <BugRunner />
    </>
  );
};

export default Contacto;