
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, Home, BookOpen, Search } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-bold text-xl text-recipe-700">Recipe Alchemy</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="flex items-center gap-1 text-recipe-700 hover:text-recipe-500">
            <Home size={18} />
            <span>Home</span>
          </Link>
          <Link to="/create" className="flex items-center gap-1 text-recipe-700 hover:text-recipe-500">
            <Search size={18} />
            <span>Find Recipes</span>
          </Link>
          <Link to="/saved" className="flex items-center gap-1 text-recipe-700 hover:text-recipe-500">
            <Heart size={18} />
            <span>Saved</span>
          </Link>
          <Link to="/about" className="flex items-center gap-1 text-recipe-700 hover:text-recipe-500">
            <BookOpen size={18} />
            <span>About</span>
          </Link>
        </nav>
        
        <div className="flex items-center gap-3">
          <Link to="/create">
            <Button className="bg-recipe-500 hover:bg-recipe-600">Create Recipe</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
