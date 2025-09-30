import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import offerLetterCognifyz from "../assets/projects/certificates/Offerletter.pdf";
import certificateCognifyz from "../assets/projects/certificates/Completion_certificate.pdf";
import Nullclass_ol from "../assets/projects/certificates/NULLCLASS_OL.pdf";
import Nullclass_cc from "../assets/projects/certificates/NULLCLASS_CC.pdf";
import "../index.css";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        id="experience"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Education & <span className="text-neutral-500">Experience</span>
      </motion.h2>

      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{experience.role}</h6>
              <span className="text-sm text-purple-200">{experience.company}</span>
            </motion.div>
          </div>
        ))}

        {/* Cognifyz Internship */}
        <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <p className="mb-2 text-sm text-neutral-400">May 2025 - Jul 2025</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h6 className="mb-2 font-semibold">Data Science Intern</h6>
            <span className="text-sm text-purple-200">Cognifyz Technologies</span>
            <p className="mb-2 mt-2 text-sm">
              Contributed to data visualization and data science projects to deliver data-driven solutions improving client insights and reporting.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => window.open(offerLetterCognifyz, "_blank")}
                className="px-4 py-2 rounded text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:opacity-90 transition-transform transform hover:scale-105"
              >
                Offer Letter
              </button>
              <button
                onClick={() => window.open(certificateCognifyz, "_blank")}
                className="px-4 py-2 rounded text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:opacity-90 transition-transform transform hover:scale-105"
              >
                Completion Certificate
              </button>
            </div>
          </motion.div>
        </div>

        {/* NullClass Internship */}
        <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <p className="mb-2 text-sm text-neutral-400">Jul 2023 - Aug 2023</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h6 className="mb-2 font-semibold">Full Stack Developer Intern</h6>
            <span className="text-sm text-purple-200">NullClass</span>
            <p className="mb-2 mt-2 text-sm">
              Built two major projects: a chatbot with OTP authentication for programming questions, and a subscription system with integrated payment gateways for tiered access plans.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => window.open(Nullclass_ol, "_blank")}
                className="px-4 py-2 rounded text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:opacity-90 transition-transform transform hover:scale-105"
              >
                Offer Letter
              </button>
              <button
                onClick={() => window.open(Nullclass_cc, "_blank")}
                className="px-4 py-2 rounded text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:opacity-90 transition-transform transform hover:scale-105"
              >
                Completion Certificate
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
