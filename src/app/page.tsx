import React from "react";
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const resumeData = {
  name: "Anna Julia da Silva Madeira",
  title: "Front-End Developer | React | TypeScript",
  Contact: {
    email: "anna.madeira@icloud.com",
    phone: "(11) 98897-3221",
    location: "São Paulo, SP",
    linkedin: "anna-madeira",
    github: "Anna-Madeira",
  },
  Summary:
    "Desenvolvedora Front-End com experiência em aplicações web em produção utilizando React e TypeScript. Atuação na implementação de funcionalidades, integração com APIs REST, debugging e testes E2E. Experiência no ciclo completo de desenvolvimento, com foco em usabilidade, responsividade e validação de fluxos de usuário. Background em análise de sistemas e trabalho em metodologias ágeis (Scrum/Kanban).",

  experience: [
    {
      title: "Desenvolvedora Front-End",
      company: "Groopin — plataforma web de organização de grupos e eventos",
      period: "Fevereiro de 2025 – Atual",
      bullets: [
        "Implementação e manutenção de funcionalidades da interface web",
        "Construção de fluxos de navegação do usuário",
        "Integração com APIs REST",
        "Debugging e correção de bugs",
        "Escrita de testes automatizados E2E (Playwright)",
        "Validação de funcionalidades antes de release e colaboração com backend",
        "Investigação e reprodução de erros reportados por usuários",
      ],
    },
    {
      title: "Analista de Sistemas Jr.",
      company: "MC1 Tecnologia LTDA",
      period: "",
      bullets: [
        "Levantamento de requisitos e documentação funcional",
        "Apoio à equipe de desenvolvimento e entendimento de regras de negócio",
        "Utilização de metodologias ágeis (Scrum/Kanban) e Jira",
      ],
    },
    {
      title: "Atuação administrativa e atendimento ao cliente",
      company: "",
      period: "2019 – 2025",
      bullets: [
        "Desenvolvimento de organização, comunicação e autonomia em trabalho remoto",
      ],
    },
  ],

  education: [
    {
      degree: "Tecnologia em Análise e Desenvolvimento de Sistemas",
      institution: "UNINOVE",
      period: "Concluído em 2022",
    },
  ],

  certifications: ["Scrum Foundation", "Kanban Essentials", "Business Intelligence Foundation"],

  languages: ["Inglês — Intermediário", "Espanhol — Intermediário"],

  skills: [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Material UI",
    "APIs REST",
    "SPA",
    "Playwright",
    "Git",
    "GitHub",
    "Jira",
    "Azure Boards",
    "Responsividade",
    "Mobile-first",
    "Debugging",
    "Scrum",
    "Kanban",
  ],
};

const Header = () => (
  <div className="text-center mb-10">
    <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
      {resumeData.name}
    </h1>
    <h2 className="text-lg text-neutral-300 font-medium mt-1">{resumeData.title}</h2>
    <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 mt-4 text-neutral-400 text-sm">
      <a
        href={`mailto:${resumeData.Contact.email}`}
        className="flex items-center gap-1.5 hover:text-pink-400 transition-colors"
      >
        <Mail size={16} />
        <span>{resumeData.Contact.email}</span>
      </a>
      <a
        href={`https://wa.me/${resumeData.Contact.phone.replace(/[\s()-]/g, "")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 hover:text-pink-400 transition-colors"
      >
        <Phone size={16} />
        <span>{resumeData.Contact.phone}</span>
      </a>
      <span className="flex items-center gap-1.5">
        <MapPin size={16} />
        <span>{resumeData.Contact.location}</span>
      </span>
      <a
        href={`https://github.com/${resumeData.Contact.github}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 hover:text-pink-400 transition-colors"
      >
        <Github size={16} />
        <span>GitHub</span>
      </a>
      <a
        href={`https://linkedin.com/in/${resumeData.Contact.linkedin}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 hover:text-pink-400 transition-colors"
      >
        <Linkedin size={16} />
        <span>LinkedIn</span>
      </a>
      <a
        href="https://anna-madeira.github.io"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 hover:text-pink-400 transition-colors"
      >
        <ExternalLink size={16} />
        <span>Portfólio</span>
      </a>
    </div>
  </div>
);

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold text-white border-b border-white/10 pb-2 mb-4">
      {title}
    </h3>
    {children}
  </div>
);

const Resume = () => {
  return (
    <div className="bg-neutral-900 border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl shadow-black/40 max-w-4xl w-full mx-auto my-8">
      <Header />

      <Section title="Resumo">
        <p className="text-neutral-300 leading-relaxed">{resumeData.Summary}</p>
      </Section>

      <Section title="Experiência Profissional">
        {resumeData.experience.map((job, index) => (
          <div key={index} className="mb-6 last:mb-0">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3">
              <h4 className="text-base font-semibold text-white">{job.title}</h4>
              {job.period && (
                <span className="text-xs text-pink-400 font-mono">{job.period}</span>
              )}
            </div>
            {job.company && <p className="text-neutral-400 text-sm mt-0.5">{job.company}</p>}
            {job.bullets && job.bullets.length > 0 && (
              <ul className="mt-2 space-y-1">
                {job.bullets.map((bullet, i) => (
                  <li key={i} className="text-neutral-300 text-sm flex gap-2">
                    <span className="text-violet-400 mt-1.5 shrink-0 block w-1 h-1 rounded-full bg-violet-400" />
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </Section>

      <Section title="Educação">
        {resumeData.education.map((edu, index) => (
          <div key={index} className="mb-4 last:mb-0">
            <h4 className="text-base font-semibold text-white">{edu.degree}</h4>
            <p className="text-neutral-400 text-sm">
              {edu.institution} · {edu.period}
            </p>
          </div>
        ))}
      </Section>

      <div className="grid sm:grid-cols-2 gap-8">
        <Section title="Certificações">
          <ul className="space-y-1.5">
            {resumeData.certifications.map((cert, index) => (
              <li key={index} className="text-neutral-300 text-sm flex gap-2">
                <span className="text-pink-400 mt-1.5 shrink-0 block w-1 h-1 rounded-full bg-pink-400" />
                {cert}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Idiomas">
          <ul className="space-y-1.5">
            {resumeData.languages.map((lang, index) => (
              <li key={index} className="text-neutral-300 text-sm flex gap-2">
                <span className="text-pink-400 mt-1.5 shrink-0 block w-1 h-1 rounded-full bg-pink-400" />
                {lang}
              </li>
            ))}
          </ul>
        </Section>
      </div>

      <Section title="Habilidades">
        <div className="flex flex-wrap gap-2">
          {resumeData.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-neutral-800 border border-pink-500/25 text-pink-300 text-xs font-mono px-3 py-1.5 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default function app() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 font-inter">
      <Resume />
    </div>
  );
}
