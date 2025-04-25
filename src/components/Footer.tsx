
import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">À propos</h3>
            <p className="text-gray-300">
              Bechir Chaieb est un développeur tunisien passionné par la création 
              d'applications web modernes et intuitives. Spécialisé en React, 
              TypeScript et design UX/UI, il offre des solutions techniques 
              créatives et performantes.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Accueil</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Produits</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Catégories</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact</h3>
            <p className="text-gray-300">Vous avez des questions ? N'hésitez pas à me contacter.</p>
            <div className="flex space-x-4">
              <a href="https://github.com/bechirchaieb" className="text-gray-300 hover:text-white transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/in/bechirchaieb" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://twitter.com/bechirchaieb" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="mailto:contact@bechirchaieb.com" className="text-gray-300 hover:text-white transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SportyGear. Tous droits réservés. Développé par Bechir Chaieb.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
