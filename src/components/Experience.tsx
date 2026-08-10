import { motion } from "framer-motion";
import { FaBriefcase, FaInfoCircle, FaDatabase, FaFileExcel, FaChalkboardTeacher } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiExpo,
  SiTailwindcss,
  SiReactquery,
  SiRxdb,
  SiSqlite,
  SiGraphql,
  SiExpress,
  SiPostgresql,
  SiSupabase,
  SiFirebase,
} from "react-icons/si";

const Experience = () => {
  const experiences = [
    {
      title: "Desenvolvedor FullStack (Pleno)",
      company: "Epicora",
      period: "04/2025 - Presente",
      technologies: [
        { name: "React", icon: <SiReact /> },
        { name: "React Native (Expo)", icon: <SiExpo /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
        { name: "Tanstack", icon: <SiReactquery /> },
        { name: "RxDB", icon: <SiRxdb /> },
        { name: "SQLite", icon: <SiSqlite /> },
      ],
      achievements: [
        "Estruturação e desenvolvimento de aplicações web responsivas",
        "Responsável pelo desenvolvimento mobile com Expo e React Native",
        "Criação do aplicativo base Genesis, usado como ponto de partida de novos projetos, com features local-first (offline) e design focado em componentização e replicação",
      ],
    },
    {
      title: "Desenvolvedor FullStack (Júnior)",
      company: "Gamatec",
      period: "11/2024 - 04/2025",
      technologies: [
        { name: "React", icon: <SiReact /> },
        { name: "React Native", icon: <SiReact /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "GraphQL", icon: <SiGraphql /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
      ],
      achievements: [
        "Desenvolvimento de aplicações web responsivas com React e TypeScript",
        "Desenvolvimento de soluções web e mobile sob demanda para clientes corporativos",
      ],
    },
    {
      title: "Sócio Proprietário",
      company: "Horizon English",
      period: "01/2024 - 12/2025",
      technologies: [
        { name: "React (Next.js)", icon: <SiNextdotjs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Supabase", icon: <SiSupabase /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
      ],
      achievements: [
        "Atuação como desenvolvedor full-stack, professor e responsável pela criação do material didático próprio, integrado nos sistemas web dos professores associados e dos alunos",
        "Foco em desenvolvimento web responsivo de plataforma de ensino, com dezenas de usuários ativos durante a atuação",
      ],
    },
    {
      title: "Professor de Inglês e Espanhol e Coordenador Pedagógico",
      company: "",
      period: "01/2020 - 12/2025",
      technologies: [
        { name: "Gestão de equipes", icon: <FaChalkboardTeacher /> },
      ],
      achievements: [
        "Desenvolvimento de habilidades de comunicação em múltiplas línguas",
        "Experiência como gestor de equipes, responsável por processos seletivos, treinamentos e coordenação de alunos e processos internos",
      ],
    },
    {
      title: "Jovem Aprendiz, Estagiário e Assistente de Controladoria",
      company: "Sicoob MaxiCrédito",
      period: "01/2017 - 01/2020",
      technologies: [
        { name: "Excel", icon: <FaFileExcel /> },
        { name: "Visual Basic", icon: <FaDatabase /> },
      ],
      achievements: [
        "Otimização de processos internos usando macros do Excel e desenvolvimento de aplicações em Visual Basic dentro do próprio Excel",
        "Adaptação de features com foco na redução estratégica de processos de conferência, auditoria e arquivamento",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experiências
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma parte da minha trajetória profissional
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline connector */}
          <div className="absolute top-0 left-[16px] md:left-1/2 w-px h-full bg-border md:-translate-x-px"></div>

          <div className="relative space-y-8">
            {experiences.map((experience, index) => (
              <div key={index} className="relative flex items-start gap-6 md:gap-8">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-background border-2 border-border rounded-full md:-translate-x-1/2 flex items-center justify-center">
                  <FaBriefcase className="w-4 h-4" />
                </div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-[50%] md:pr-8' : 'md:ml-[50%] md:pl-8'
                }`}>
                  <div className="bg-background border rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-1">{experience.title}</h3>
                    {experience.company && (
                      <p className="text-primary mb-1">{experience.company}</p>
                    )}
                    <p className="text-muted-foreground text-sm mb-4">{experience.period}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2">Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="inline-flex items-center gap-1.5 px-2 py-1 text-xs border rounded"
                          >
                            {tech.icon}
                            {tech.name}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-2">Principais atividades</h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <button onClick={() => window.open('https://www.linkedin.com/in/lemessvini/', '_blank')} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-background border hover:bg-accent transition-colors">
            <FaInfoCircle className="w-4 h-4" />
            <span>Para mais informações, veja meu LinkedIn</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience; 