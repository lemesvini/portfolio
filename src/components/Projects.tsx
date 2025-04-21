import { motion } from "framer-motion";
import { useRef } from "react";

const Projects = () => {
  const projectsRef = useRef(null);

  const projects = [
    {
      title: "Horizon English Group",
      description:
        "Teacher and Student platform for online classes. Login, class records and income manager, as well as stripe integrated functionalities for subscription.",
      tags: ["Next.js", "TypeScript", "Stripe"],
      image: "/horizon.png",
      github: "https://github.com/lemesvini/horizon2",
      website: "https://horizonenglishgroup.com"
    },
    {
      title: "Junior",
      description:
        "JSON Parser, code editor with file support and realtime collaborative coding with sessions.",
      tags: ["TypeScript", "Monaco Editor", "WebSockets"],
      image: "/JUNIOR.png",
      github: "https://github.com/lemesvini/junior",
      website: "https://lemesvini.github.io/junior"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" className="py-12 md:py-32 my-10 md:my-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 heading-gradient"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Pinned Projects
          </motion.h2>
        </div>

        <motion.div
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="h-full min-h-[350px] md:min-h-[400px] flex flex-col group bg-black/40 overflow-hidden rounded-xl border border-white/10"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <div className="h-40 md:h-48 overflow-hidden rounded-t-xl p-4 md:p-6 bg-black/20">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="border-t border-white/10 w-[90%] mx-auto"/> 
              <div className="p-4 md:p-6 flex flex-col flex-grow bg-black/40">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base text-white/90 mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 md:px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 md:gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                    GitHub
                  </a>
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Website
                  </a>
                </div>
              </div>
            </motion.div>
          ))}

          <motion.a
            href="https://github.com/lemesvini?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="h-full min-h-[350px] md:min-h-[400px] flex flex-col group bg-black/20 overflow-hidden items-center justify-center text-white/60 hover:text-white/90 transition-colors border border-white/10 rounded-xl"
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          > 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mb-4"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
            <div className="flex items-center">
              <span className="text-xl font-medium">See All Projects</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
