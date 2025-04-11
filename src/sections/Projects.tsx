import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "../assets/icons/check-circle.svg"
import ArrowUpRight from "../assets/icons/arrow-up-right.svg"
import grainImage from "../assets/images/grain.jpg"
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    title: "StreamCore",
    description: "A scalable video streaming backend service with secure authentication and efficient media processing capabilities.",
    techStack: ["Node.js", "Express.js", "MongoDB", "JWT", "Docker", "AWS", "S3", "Lambda", "FFmpeg"],
    link: "https://github.com/yourusername/streamcore",
    liveLink: "https://streamcore-demo.com",
  },
  {
    title: "AdmitWise",
    description: "A comprehensive platform for college admissions guidance with personalized recommendations based on student metrics and preferences.",
    techStack: ["Node.js", "Express.js", "MySQL", "Angular", "TypeScript", "JWT"],
    link: "https://github.com/yourusername/admitwise",
    liveLink: "https://admitwise.com",
  },
  {
    title: "DevDock",
    description: "An automated deployment platform that streamlines the process from code commit to production using containerization and cloud services.",
    techStack: ["Node.js", "Docker", "AWS ECS", "S3", "Socket.io"],
    link: "https://github.com/yourusername/devdock",
    liveLink: "https://devdock-platform.com",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container max-w-5xl">
        <SectionHeader eyebrow="SHIPPED AND NOT BROKEN (YET)" title="Recent Work" description="Code that didn’t crash... this week." />
        <div className="flex flex-col mt-10 md:mt-20 gap-8">
          {
            portfolioProjects.map((project, projectIndex) => (
              <Card key={project.title}
                className="px-6 py-6 md:p-8 lg:p-10 overflow-hidden w-full"
                style={{
                  top: `calc(64px + ${projectIndex * 20}px)`
                }}
              >
                <div className="flex flex-col gap-6">
                  {/* Project Content */}
                  <div className="w-full">
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-white">{project.title}</h3>

                    <p className="mt-3 text-white/70 text-sm md:text-base">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mt-6">
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium rounded-md bg-white/10 text-white/80"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="mt-6">
                      {/* <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <button className="bg-gradient-to-r from-emerald-500 to-sky-500 h-10 px-5 rounded-lg font-medium text-sm inline-flex items-center justify-center gap-2">
                          <span>Live</span>
                          <ArrowUpRight className="size-4" />
                        </button>
                      </a> */}
                      <a href={project.link} target="_blank" rel="noopener noreferrer" >
                        <button className="bg-white/10 hover:bg-white/15 text-white h-10 px-5 rounded-lg font-medium text-sm inline-flex items-center justify-center gap-2">
                          <span>Source</span>
                          <ArrowUpRight className="size-4" />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            ))
          }
        </div>
      </div>
    </section>
  )
};
