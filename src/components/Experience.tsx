import { motion } from "framer-motion";
import { FaDownload, FaBriefcase, FaInfo, FaInfoCircle, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiJavascript, SiTypescript, SiReact, SiNodedotjs } from "react-icons/si";

const Experience = () => {
  const experiences = [
    {
      title: "Junior FullStack Software Developer",
      company: "Gama Tecnologia",
      period: "11/2024 - Present",
      technologies: [
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "React", icon: <SiReact /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Postgres", icon: <FaDatabase /> },
        { name: "Rest API", icon: <FaDatabase /> },
      ],
      achievements: [
        "Developing and maintaining enterprise-level applications",
        "Implementing responsive and accessible user interfaces",
        "Collaborating with cross-functional teams to deliver high-quality solutions",
      ],
    },
    {
      title: "Founder, Teacher and FullStack Software Developer",
      company: "Horizon English Group",
      period: "02/2024 - Present",
      technologies: [
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "React", icon: <SiReact /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Firebase", icon: <FaDatabase /> },
      ],
      achievements: [
        "Creating the whole platform from scratch",
        "Optimizing application performance and user experience",
        "Implementing secure authentication and data management systems",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey in software development
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
                    <p className="text-primary mb-1">{experience.company}</p>
                    <p className="text-muted-foreground text-sm mb-4">{experience.period}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2">Technologies</h4>
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
                      <h4 className="text-sm font-medium mb-2">Key Achievements</h4>
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
          <button onClick={() => window.open('https://www.linkedin.com/in/vinicius-lemes-ds/', '_blank')} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-background border hover:bg-accent transition-colors">
            <FaInfoCircle className="w-4 h-4" />
            <span>For more information, check my LinkedIn</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience; 