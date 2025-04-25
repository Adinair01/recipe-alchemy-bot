
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <div className="hero-gradient py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-recipe-900 mb-4">
              Transform Your Kitchen Experience
            </h1>
            <p className="text-xl text-recipe-700 mb-6">
              Get personalized, healthy recipes tailored to your preferences, allergies, and nutritional needs.
              Cook smarter, eat better, and fuel your body with exactly what it needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/create">
                <Button className="bg-recipe-500 hover:bg-recipe-600 text-white font-medium py-2 px-6 rounded-lg text-lg">
                  Create Your Recipe
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="border-recipe-500 text-recipe-600 hover:bg-recipe-50 font-medium py-2 px-6 rounded-lg text-lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" 
              alt="Healthy food preparation" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
