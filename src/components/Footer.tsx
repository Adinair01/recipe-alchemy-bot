
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-recipe-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Recipe Alchemy</h3>
            <p className="text-gray-300 mb-4">
              Creating healthy, personalized recipes based on your preferences, dietary needs, and nutritional goals.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/create" className="text-gray-300 hover:text-white">Create Recipe</Link></li>
              <li><Link to="/saved" className="text-gray-300 hover:text-white">Saved Recipes</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <p className="text-gray-300">Have questions or feedback? Reach out to us.</p>
            <a href="mailto:info@recipealchemy.com" className="text-recipe-300 hover:text-white">
              info@recipealchemy.com
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Recipe Alchemy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
