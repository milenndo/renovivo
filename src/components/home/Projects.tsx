import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects as allProjects } from "@/data/projects";

const displayProjects = allProjects.slice(0, 4);

const Projects = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-primary" />
              <span className="text-label text-muted-foreground">Портфолио</span>
            </div>
            <h2 className="text-heading-lg text-foreground mb-4">
              Нашите проекти
            </h2>
            <p className="text-muted-foreground max-w-xl text-lg">
              Разгледайте завършени проекти и се убедете в качеството на нашата работа.
            </p>
          </div>
          <Link to="/portfolio" className="mt-8 lg:mt-0">
            <Button variant="outline" className="rounded-full px-6 group">
              Всички проекти
              <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* Projects Grid - Luxe asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProjects.map((project, index) => (
            <Link
              key={project.id}
              to={`/portfolio/${project.id}`}
              className="group relative overflow-hidden rounded-2xl block image-zoom opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s`, aspectRatio: "3/4" }}
            >
              <img
                src={project.mainImage}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="text-label text-primary mb-2">{project.category}</span>
                <h3 className="text-primary-foreground text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
