import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { ArrowUpRight, Lock } from "lucide-react";
import { FaApple, FaGithub, FaGooglePlay } from "react-icons/fa";
import {
  SiExpo,
  SiMapbox,
  SiReact,
  SiRxdb,
  SiSqlite,
  SiSupabase,
  SiVite,
} from "react-icons/si";

type Availability = "store" | "testflight" | "production";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  /** Tile color behind the icon — matches each logo's own background so the squircle mask blends seamlessly. */
  iconBg: string;
  /** Logos delivered as a bare glyph on transparency need padding; full-bleed tiles do not. */
  iconPadded?: boolean;
  availability: Availability;
  tags: { name: string; icon: ReactNode }[];
  links: { label: string; href: string; icon: ReactNode }[];
  featured?: boolean;
};

const availabilityMeta: Record<Availability, { label: string; dot: string }> = {
  store: { label: "Publicado nas lojas", dot: "bg-emerald-400" },
  testflight: { label: "Beta · TestFlight", dot: "bg-amber-400" },
  production: { label: "Em produção", dot: "bg-emerald-400" },
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Epicora Genesis",
      subtitle: "App base da Epicora",
      description:
        "Aplicativo base da Epicora, usado como ponto de partida para novos aplicativos. Conta com as últimas features do Expo 56 e componentização pensada para replicação, além de lógica offline e uso estável de Liquid Glass no iOS.",
      icon: "/epicora.png",
      iconBg: "bg-[#6100FF]",
      availability: "testflight",
      tags: [
        { name: "Expo 56", icon: <SiExpo /> },
        { name: "RxDB", icon: <SiRxdb /> },
        { name: "SQLite", icon: <SiSqlite /> },
        { name: "Reanimated", icon: <SiReact /> },
      ],
      links: [],
      featured: true,
    },
    {
      title: "Reticar",
      subtitle: "Vendas e ordens de serviço",
      description:
        "Aplicativo de uso interno dos vendedores e sistema web de gerenciamento da Reticar Retífica de Motores, com features offline e sincronização de novos registros, controle de ordens de serviço, clientes e peças para manutenção e vendas.",
      icon: "/reticar-icon.png",
      iconBg: "bg-[#F6E911]",
      availability: "store",
      tags: [
        { name: "Expo 55", icon: <SiExpo /> },
        { name: "RxDB", icon: <SiRxdb /> },
        { name: "SQLite", icon: <SiSqlite /> },
        { name: "Reanimated", icon: <SiReact /> },
        { name: "Mapbox", icon: <SiMapbox /> },
      ],
      links: [
        {
          label: "App Store",
          href: "https://apps.apple.com/us/app/reticar-ret%C3%ADfica-de-motores/id6756629022",
          icon: <FaApple />,
        },
        {
          label: "Google Play",
          href: "https://play.google.com/store/apps/details?id=com.pedrohhcunha.reticar",
          icon: <FaGooglePlay />,
        },
      ],
    },
    {
      title: "Epicora Hercules",
      subtitle: "Consultoria esportiva",
      description:
        "Aplicativo de consultoria esportiva para atletas, com controle offline de treinos e dietas, comunidade, gamificação e chat com IA. Construído a partir do Genesis.",
      icon: "/epicora.png",
      iconBg: "bg-[#6100FF]",
      availability: "testflight",
      tags: [
        { name: "Expo 56", icon: <SiExpo /> },
        { name: "RxDB", icon: <SiRxdb /> },
        { name: "SQLite", icon: <SiSqlite /> },
        { name: "Reanimated", icon: <SiReact /> },
      ],
      links: [],
    },
    {
      title: "Mapin",
      subtitle: "Mapa social de registros",
      description:
        "Aplicativo de portfólio que conta com registros no mapa em forma de pins, timeline, likes e comentários.",
      icon: "/mapin-logo.png",
      iconBg: "bg-white",
      iconPadded: true,
      availability: "testflight",
      tags: [
        { name: "Expo 56", icon: <SiExpo /> },
        { name: "Mapbox", icon: <SiMapbox /> },
        { name: "Supabase", icon: <SiSupabase /> },
      ],
      links: [],
    },
    {
      title: "Lexicon English",
      subtitle: "Plataforma de ensino de inglês",
      description:
        "Plataforma de aulas particulares de inglês com gerenciamento de alunos, controle de agenda e monitoramento financeiro, além da plataforma do aluno com acesso ao material didático e conteúdos personalizados.",
      icon: "/lex.png",
      iconBg: "bg-[#14352A]",
      availability: "production",
      tags: [
        { name: "Vite", icon: <SiVite /> },
        { name: "Supabase", icon: <SiSupabase /> },
        { name: "Expo", icon: <SiExpo /> },
      ],
      links: [],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Projetos
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Aplicativos e plataformas que projetei, desenvolvi e publiquei
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              className={`relative flex flex-col overflow-hidden rounded-[28px] border border-white/[0.08] bg-gradient-to-b from-white/[0.055] to-white/[0.02] p-6 md:p-8 shadow-xl shadow-black/20 ${
                project.featured ? "md:col-span-2" : ""
              }`}
              variants={itemVariants}
            >
              {/* Top hairline highlight */}
              <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

              <div className="relative flex flex-col h-full">
                <div className="flex items-start gap-4 md:gap-5">
                  {/* iOS-style app icon */}
                  <div
                    className={`relative shrink-0 overflow-hidden rounded-[22%] shadow-lg shadow-black/40 ring-1 ring-inset ring-white/10 ${
                      project.iconBg
                    } ${
                      project.featured ? "h-16 w-16 md:h-20 md:w-20" : "h-14 w-14"
                    }`}
                  >
                    <img
                      src={project.icon}
                      alt=""
                      loading="lazy"
                      className={`h-full w-full ${
                        project.iconPadded ? "object-contain p-[16%]" : "object-cover"
                      }`}
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3
                      className={`font-semibold tracking-tight text-white ${
                        project.featured ? "text-2xl md:text-3xl" : "text-xl"
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {project.subtitle}
                    </p>
                  </div>

                  <span className="hidden sm:inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/70">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        availabilityMeta[project.availability].dot
                      }`}
                    />
                    {availabilityMeta[project.availability].label}
                  </span>
                </div>

                <p
                  className={`mt-5 text-[15px] leading-relaxed text-muted-foreground ${
                    project.featured ? "md:max-w-3xl" : ""
                  }`}
                >
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.name}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-white/60"
                    >
                      <span className="text-[13px]">{tag.icon}</span>
                      {tag.name}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
                  {project.links.length > 0 ? (
                    project.links.map((link) => (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black"
                        whileTap={{ scale: 0.96 }}
                      >
                        <span className="text-base">{link.icon}</span>
                        {link.label}
                      </motion.a>
                    ))
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/50">
                      {project.availability === "testflight" ? (
                        <>
                          <FaApple className="text-base" />
                          Distribuição interna via TestFlight
                        </>
                      ) : (
                        <>
                          <Lock className="h-3.5 w-3.5" />
                          Acesso restrito a alunos e professores
                        </>
                      )}
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="https://github.com/lemesvini?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white/70"
          >
            <FaGithub className="text-base" />
            Ver todos os repositórios no GitHub
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
