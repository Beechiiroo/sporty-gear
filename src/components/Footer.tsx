import React from "react";
import { Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <Trophy className="h-8 w-8 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">SportyGear</h2>
            </div>
            <p className="text-gray-400">
              Votre boutique en ligne pour tout équipement sportif de qualité professionnelle.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="rounded-full hover:bg-blue-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full hover:bg-blue-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full hover:bg-blue-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Button>
            </div>
          </div>

          {/* Categories */}
          <div className="col-span-1 space-y-4">
            <h3 className="text-lg font-medium text-white">Catégories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Football
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Basketball
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Tennis
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Fitness
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Accessoires
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div className="col-span-1 space-y-4">
            <h3 className="text-lg font-medium text-white">À Propos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Notre Histoire
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Developer Info */}
          <div className="col-span-1 space-y-4">
            <h3 className="text-lg font-medium text-white">Développeur</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="flex flex-col space-y-2">
                <span className="text-white font-medium">Bechir Chaieb</span>
                <span className="text-blue-400">Développeur Full Stack Tunisien</span>
                <p className="text-gray-400 text-sm mt-2">
                  Passionné par le développement web et la création d'applications intuitives et performantes.
                </p>
                <div className="flex mt-2 pt-2 border-t border-gray-700">
                  <Button variant="link" className="text-blue-400 p-0">
                    Portfolio
                  </Button>
                  <Button variant="link" className="text-blue-400 p-0 ml-4">
                    LinkedIn
                  </Button>
                  <Button variant="link" className="text-blue-400 p-0 ml-4">
                    GitHub
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© 2025 SportyGear. Tous droits réservés.</p>
          <div className="flex justify-center mt-4 space-x-6">
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">Conditions d'utilisation</a>
            <a href="#" className="hover:text-white transition-colors">Livraisons</a>
            <a href="#" className="hover:text-white transition-colors">Retours</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
