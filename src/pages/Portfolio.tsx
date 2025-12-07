import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { X } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const categories = [
  { id: "all", name: "Всички" },
  { id: "full", name: "Цялостен ремонт" },
  { id: "bathroom", name: "Баня" },
  { id: "kitchen", name: "Кухня" },
  { id: "bedroom", name: "Спалня" },
  { id: "living", name: "Дневна" },
];

const projects = [
  {
    id: 1,
    title: "Модерен апартамент в София",
    category: "full",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    description: "Цялостен ремонт на апартамент 120 кв.м. с модерен дизайн и висококачествени материали.",
  },
  {
    id: 2,
    title: "Луксозна баня с мрамор",
    category: "bathroom",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
    description: "Баня с мраморни плочки, дъждовна душ система и LED осветление.",
  },
  {
    id: 3,
    title: "Минималистична бяла кухня",
    category: "kitchen",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    description: "Кухня в бял цвят с интегрирани уреди и каменен плот.",
  },
  {
    id: 4,
    title: "Уютна спалня",
    category: "bedroom",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=800&q=80",
    description: "Спалня с топли тонове и вградено осветление.",
  },
  {
    id: 5,
    title: "Просторна дневна",
    category: "living",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    description: "Дневна с отворен план и минималистичен дизайн.",
  },
  {
    id: 6,
    title: "Баня с геометрични плочки",
    category: "bathroom",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80",
    description: "Компактна баня с интересен дизайн на плочките.",
  },
  {
    id: 7,
    title: "Индустриална кухня",
    category: "kitchen",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80",
    description: "Кухня в индустриален стил с открити елементи.",
  },
  {
    id: 8,
    title: "Апартамент в центъра",
    category: "full",
    image: "https://images.unsplash.com/photo-1600566752734-2a0cd66c42b9?auto=format&fit=crop&w=800&q=80",
    description: "Цялостен ремонт на апартамент с класически елементи.",
  },
  {
    id: 9,
    title: "Модерна спалня",
    category: "bedroom",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80",
    description: "Спалня с модерен дизайн и функционално осветление.",
  },
];

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Портфолио | Renovivo - Нашите завършени проекти</title>
        <meta 
          name="description" 
          content="Разгледайте нашето портфолио от завършени ремонтни проекти - бани, кухни, апартаменти и още. Качество, което говори само за себе си." 
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="relative py-20 bg-foreground">
          <div className="container-custom relative z-10">
            <div className="max-w-2xl">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Портфолио</span>
              <h1 className="text-4xl md:text-5xl font-bold text-background mt-3 mb-6">
                Нашите проекти
              </h1>
              <p className="text-background/80 text-lg">
                Разгледайте някои от нашите завършени проекти и се убедете в качеството на нашата работа.
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b sticky top-[72px] bg-background z-40">
          <div className="container-custom">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  className={activeCategory === category.id 
                    ? "bg-primary text-primary-foreground" 
                    : ""}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-primary text-sm font-medium mb-2">
                      {categories.find(c => c.id === project.category)?.name}
                    </span>
                    <h3 className="text-background text-xl font-semibold">
                      {project.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden">
            {selectedProject && (
              <>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-auto"
                />
                <div className="p-6">
                  <span className="text-primary text-sm font-medium">
                    {categories.find(c => c.id === selectedProject.category)?.name}
                  </span>
                  <h3 className="text-2xl font-bold mt-2 mb-3">{selectedProject.title}</h3>
                  <p className="text-muted-foreground">{selectedProject.description}</p>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </Layout>
    </>
  );
};

export default PortfolioPage;
