import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-background border rounded-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Image Column */}
              <motion.div
                className="w-full h-[400px] bg-zinc-900/50 rounded-lg flex items-center justify-center order-2 lg:order-1"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-white/5 text-8xl font-mono font-bold">{'<info />'}</p>
              </motion.div>

              {/* Content Column */}
              <div className="order-1 lg:order-2">
                <motion.h2
                  className="text-3xl md:text-4xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  Sobre
                </motion.h2>

                <motion.p
                  className="text-lg text-muted-foreground mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Desenvolvedor full-stack Web e Mobile, com foco atual em React Native/Expo e
React/Next.js e mais de 3 anos trabalhando na área. Experiência em idealização,
arquitetura, desenvolvimento, design e publicação de sites e aplicativos.
                </motion.p>

                <motion.p
                  className="text-lg text-muted-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Atualmente, desenvolvo com foco em front-end mobile e gerenciamento de todo o
ciclo de vida dos aplicativos, bem como revisões de código de projetos Expo.
Possuo também experiências em outras áreas que fortalecem minha comunicação,
trabalho em equipe, foco em resultados e otimização de processos.
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
