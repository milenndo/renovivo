import { Link } from "react-router-dom";
import { ArrowRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects as allProjects } from "@/data/projects";

// Вземаме първите 4 проекта от портфолиото за показване в Hero секцията
const displayProjects = allProjects.slice(0, 4);

const Projects = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-foreground font-semibold text-sm uppercase tracking-wider">Портфолио</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
              Нашите скорошни проекти
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Разгледайте някои от нашите завършени проекти и се убедете в качеството на нашата работа.
            </p>
          </div>
          <Link to="/portfolio" className="mt-6 md:mt-0">
            <Button variant="outline" className="font-semibold">
              Всички проекти
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProjects.map((project, index) => (
            <Link
              key={project.id}
              to={`/portfolio/${project.id}`}
              className="group relative overflow-hidden rounded-xl block"
              style={{ animationDelay: `${index * 100}ms`, aspectRatio: '4/5' }}
            >
              <img
                src={project.mainImage}
                alt={project.title}
                width={400}
                height={500}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                style={{ aspectRatio: '4/5' }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="text-primary text-sm font-medium mb-2">{project.category}</span>
                <h3 className="text-background text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Hover icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                <Eye className="h-5 w-5 text-primary-foreground" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
