import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaReact, FaNodeJs, FaCss3Alt, FaJs, FaGitAlt, FaGithub, FaDatabase, FaMicrosoft } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiFigma,
  SiFirebase,
  SiPostgresql,
  SiSupabase,
  SiPostman,
  SiExpo,
  SiVite,
  SiExpress,
  SiSqlite,
  SiReactquery,
  SiNestjs,
  SiPrisma,
  SiMongodb,
  SiVercel,
} from "react-icons/si";
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
        { name: "Vite", icon: <SiVite className="text-purple-500" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
        { name: "TanStack Query", icon: <SiReactquery className="text-red-500" /> },
      ],
    },
    {
      title: "Mobile",
      skills: [
        { name: "Expo", icon: <SiExpo className="text-black dark:text-white" /> },
        { name: "React Native", icon: <IoLogoReact className="text-blue-500" /> },
        { name: "Expo Router", icon: <SiExpo className="text-blue-400" /> },
        { name: "NativeWind", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "Reanimated", icon: <FaReact className="text-pink-500" /> },
        { name: "RxDB", icon: <FaDatabase className="text-cyan-500" /> },
        { name: "SQLite", icon: <SiSqlite className="text-blue-600" /> },
        { name: "TanStack Query", icon: <SiReactquery className="text-red-500" /> },
      ],
    },
    {
      title: "Back-End",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "NestJS", icon: <SiNestjs className="text-red-600" /> },
        { name: "Express", icon: <SiExpress className="text-black dark:text-white" /> },
        { name: "Prisma", icon: <SiPrisma className="text-teal-600" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
        { name: "Supabase", icon: <SiSupabase className="text-green-600" /> },
      ],
    },
    {
      title: "Ferramentas",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
        { name: "GitHub", icon: <FaGithub className="text-black dark:text-white" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
        { name: "Figma", icon: <SiFigma className="text-purple-500" /> },
        { name: "DBeaver", icon: <FaDatabase className="text-blue-500" /> },
        { name: "Excel Macros", icon: <FaMicrosoft className="text-green-600" /> },
        { name: "Vercel", icon: <SiVercel className="text-black dark:text-white" /> },
        { name: "EAS", icon: <SiExpo className="text-blue-500" /> },
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
            Stack
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Tecnologias e ferramentas que utilizo no meu dia a dia de desenvolvimento
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
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
              <ul className="divide-y divide-border">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center gap-3 py-2.5">
                    <div className="text-xl shrink-0">{skill.icon}</div>
                    <span>{skill.name}</span>
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
