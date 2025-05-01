
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, Linkedin, Mail, Globe, Code, Star, Award, Briefcase } from "lucide-react";
import Footer from "@/components/Footer";

const Portfolio = () => {
  const skills = [
    { name: "React", level: "Avancé" },
    { name: "TypeScript", level: "Avancé" },
    { name: "Node.js", level: "Intermédiaire" },
    { name: "MongoDB", level: "Intermédiaire" },
    { name: "Express", level: "Intermédiaire" },
    { name: "Next.js", level: "Intermédiaire" },
    { name: "Tailwind CSS", level: "Avancé" },
    { name: "GraphQL", level: "Débutant" },
    { name: "Docker", level: "Débutant" },
  ];

  const projects = [
    {
      title: "SportyGear",
      description: "Boutique en ligne d'équipements sportifs avec système de gestion des commandes.",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800",
      url: "#"
    },
    {
      title: "TaskFlow",
      description: "Application de gestion de tâches avec fonctionnalités collaboratives.",
      technologies: ["React", "TypeScript", "Express", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800",
      url: "#"
    },
    {
      title: "WeatherNow",
      description: "Application météo avec prévisions en temps réel et notifications.",
      technologies: ["React Native", "Redux", "APIs externes"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800",
      url: "#"
    }
  ];

  const experiences = [
    {
      title: "Développeur Frontend",
      company: "TechStart Tunisie",
      period: "2024 - Présent",
      description: "Développement d'interfaces utilisateur modernes avec React et TypeScript."
    },
    {
      title: "Stagiaire Développeur Web",
      company: "Digital Solutions Sfax",
      period: "2023 - 2024",
      description: "Conception et développement de sites web responsives pour divers clients."
    },
    {
      title: "Freelance",
      company: "Projets Indépendants",
      period: "2022 - 2023",
      description: "Réalisation de projets web pour des petites entreprises locales."
    }
  ];

  const education = [
    {
      degree: "Licence en Informatique",
      institution: "Institut Supérieur d'Informatique et de Multimédia de Sfax",
      period: "2022 - Présent"
    },
    {
      degree: "Baccalauréat en Sciences Techniques",
      institution: "Lycée Technique de Sfax",
      period: "2021"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-lg bg-white/80 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Button variant="link" asChild>
              <a href="/" className="flex items-center gap-2">
                <Code className="h-5 w-5 text-blue-600" />
                <span className="font-bold text-xl">Portfolio</span>
              </a>
            </Button>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <a href="/">Accueil</a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="/portfolio">Portfolio</a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="/#products-section">Projets</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 text-white py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1800')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
            <div className="w-64 h-64 rounded-full border-4 border-white shadow-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800" 
                alt="Bechir Chaieb" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
          <div className="md:w-1/2 space-y-6">
            <div className="animate-fade-in space-y-2">
              <Badge className="bg-white/20 text-white hover:bg-white/30 mb-2">Développeur Full Stack</Badge>
              <h1 className="text-4xl md:text-6xl font-bold">Bechir Chaieb</h1>
              <p className="text-xl text-blue-100">
                Développeur Full Stack passionné basé à Sfax, Tunisie
              </p>
            </div>
            
            <p className="text-blue-100 max-w-lg animate-fade-in delay-100">
              Jeune développeur de 21 ans spécialisé dans la création d'applications web modernes 
              et performantes. Toujours à la recherche de nouveaux défis techniques.
            </p>
            
            <div className="flex gap-3 animate-fade-in delay-200">
              <Button size="sm" variant="default" className="bg-white text-blue-700 hover:bg-blue-50">
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </Button>
              <Button size="sm" variant="outline" className="bg-transparent border-white text-white hover:bg-white/20">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Button size="sm" variant="outline" className="bg-transparent border-white text-white hover:bg-white/20">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <Tabs defaultValue="about" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-4">
              <TabsTrigger value="about">À Propos</TabsTrigger>
              <TabsTrigger value="skills">Compétences</TabsTrigger>
              <TabsTrigger value="projects">Projets</TabsTrigger>
              <TabsTrigger value="experience">Expérience</TabsTrigger>
            </TabsList>
          </div>
          
          {/* About Tab */}
          <TabsContent value="about" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-blue-600" />
                      À Propos de Moi
                    </CardTitle>
                    <CardDescription>Développeur Full Stack</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Je suis Bechir Chaieb, un développeur tunisien de 21 ans originaire de Sfax, passionné par la création 
                      d'applications web et mobiles innovantes. J'ai commencé ma carrière en développement logiciel dès l'âge de 18 ans.
                    </p>
                    <p>
                      Actuellement étudiant en informatique, je combine mes études avec des projets freelance et des stages professionnels
                      pour enrichir mon expérience et développer mes compétences techniques.
                    </p>
                    <p>
                      Je suis spécialisé dans le développement d'applications avec React, Node.js, et les technologies modernes du web.
                      Mon objectif est de créer des expériences utilisateur fluides et des solutions techniques robustes.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="h-5 w-5 text-blue-600" />
                      Informations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-2">
                        <span className="font-medium min-w-[100px]">Âge:</span>
                        <span>21 ans</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-medium min-w-[100px]">Résidence:</span>
                        <span>Sfax, Tunisie</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-medium min-w-[100px]">Langues:</span>
                        <span>Arabe (natif), Français (courant), Anglais (professionnel)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-medium min-w-[100px]">Disponibilité:</span>
                        <span>Freelance / Temps partiel</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="#" download>
                        Télécharger CV
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
                
                <Card className="mt-4">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-blue-600" />
                      Éducation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {education.map((edu, index) => (
                        <li key={index} className="border-l-2 border-blue-600 pl-4 py-1">
                          <p className="font-medium">{edu.degree}</p>
                          <p className="text-sm text-gray-500">{edu.institution}</p>
                          <p className="text-xs text-gray-500">{edu.period}</p>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          {/* Skills Tab */}
          <TabsContent value="skills" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-blue-600" />
                  Compétences Techniques
                </CardTitle>
                <CardDescription>Mes compétences et technologies</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Technical Skills */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Langages & Frameworks</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {skills.map((skill) => (
                        <div key={skill.name} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                          <span>{skill.name}</span>
                          <Badge className={
                            skill.level === "Avancé" ? "bg-green-100 text-green-800 hover:bg-green-200" : 
                            skill.level === "Intermédiaire" ? "bg-blue-100 text-blue-800 hover:bg-blue-200" : 
                            "bg-orange-100 text-orange-800 hover:bg-orange-200"
                          }>
                            {skill.level}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Soft Skills */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Compétences Personnelles</h3>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Résolution de problèmes</span>
                          <span>90%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" style={{ width: "90%" }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Communication</span>
                          <span>85%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" style={{ width: "85%" }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Travail d'équipe</span>
                          <span>90%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" style={{ width: "90%" }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Adaptabilité</span>
                          <span>95%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" style={{ width: "95%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Projects Tab */}
          <TabsContent value="projects" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-all">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild className="w-full">
                      <a href={project.url}>Voir le projet</a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Voir plus de projets sur GitHub
                </a>
              </Button>
            </div>
          </TabsContent>
          
          {/* Experience Tab */}
          <TabsContent value="experience" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-blue-600" />
                  Expérience Professionnelle
                </CardTitle>
                <CardDescription>Mon parcours professionnel</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <div key={index} className="relative pl-8 pb-8 border-l-2 border-blue-100 last:border-0 last:pb-0">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 bg-white rounded-full border-2 border-blue-600"></div>
                      <div className="mb-1 text-sm text-gray-500">{exp.period}</div>
                      <h3 className="text-xl font-medium text-gray-900">{exp.title}</h3>
                      <div className="text-blue-600">{exp.company}</div>
                      <p className="mt-2 text-gray-600">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Contact
            </h2>
            <p className="text-gray-600 max-w-lg mx-auto">
              Vous avez un projet intéressant ou une opportunité ? N'hésitez pas à me contacter !
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-blue-50 w-12 h-12 flex items-center justify-center rounded-full mb-2">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-600">bechir.chaieb@example.com</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-blue-50 w-12 h-12 flex items-center justify-center rounded-full mb-2">
                  <Linkedin className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>LinkedIn</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-600">linkedin.com/in/bechir-chaieb</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-blue-50 w-12 h-12 flex items-center justify-center rounded-full mb-2">
                  <Github className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>GitHub</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-600">github.com/bechir-chaieb</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Portfolio;
