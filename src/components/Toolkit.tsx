import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub, FaDatabase, FaTabletAlt, FaMicrosoft, FaRobot } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiRedux, SiGraphql, SiSequelize, SiNextdotjs, SiFigma, SiFirebase, SiPostgresql, SiMysql, SiSupabase, SiBlender, SiPostman, SiBootstrap, SiMaterialdesign } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";

const Toolkit = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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

  const skillCategories = [
    {
      title: "Front-End",
      skills: [
        { name: "React", icon: <FaReact className="text-blue-500" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-500" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
        { name: "Shadcn", icon: <SiMaterialdesign className="text-blue-400" /> },
        { name: "Material UI", icon: <SiMaterialdesign className="text-blue-600" /> },
      ],
    },
    {
      title: "Back-End",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "GraphQL", icon: <SiGraphql className="text-pink-600" /> },
        { name: "Sequelize", icon: <SiSequelize className="text-blue-400" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
        { name: "Supabase", icon: <SiSupabase className="text-green-600" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
        { name: "DBeaver", icon: <FaDatabase className="text-blue-500" /> },
        { name: "REST API", icon: <FaJs className="text-green-600" /> },
      ],
    },
    {
      title: "Others",
      skills: [
        { name: "React Native", icon: <IoLogoReact className="text-blue-500" /> },
        { name: "Figma", icon: <SiFigma className="text-purple-500" /> },
        { name: "Procreate", icon: <FaTabletAlt className="text-orange-500" /> },
        { name: "Nomad", icon: <FaRobot className="text-blue-400" /> },
        { name: "Blender", icon: <SiBlender className="text-orange-600" /> },
        { name: "Excel Macros", icon: <FaMicrosoft className="text-green-600" /> },
        { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
        { name: "GitHub", icon: <FaGithub className="text-black dark:text-white" /> },
      ],
    },
  ];

  return (
    <section id="toolkit" className="py-20 md:py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My Toolkit
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Technologies and tools I work with
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg bg-background border"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <h3 className="text-xl font-bold mb-4 text-center">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center gap-3">
                    <div className="text-2xl">{skill.icon}</div>
                    <span className="text-lg">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Toolkit; 