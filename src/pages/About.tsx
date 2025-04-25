
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-recipe-800 mb-6">About Recipe Alchemy</h1>
            
            <div className="prose prose-recipe max-w-none">
              <p className="text-lg text-recipe-600 mb-6">
                Recipe Alchemy is a personalized healthy recipe generator that creates custom recipes 
                based on your unique preferences, dietary restrictions, and nutritional needs.
              </p>
              
              <h2 className="text-2xl font-semibold text-recipe-700 mt-8 mb-4">Our Mission</h2>
              <p>
                Our mission is to make healthy eating accessible, enjoyable, and personalized. 
                We believe that everyone deserves access to nutritious recipes that meet their 
                specific needs and preferences, without sacrificing taste or convenience.
              </p>
              
              <h2 className="text-2xl font-semibold text-recipe-700 mt-8 mb-4">How It Works</h2>
              <ol className="list-decimal pl-5 space-y-3">
                <li>
                  <strong>Input your details:</strong> Share your preferences, allergies, 
                  nutritional needs, and cuisine preferences through our simple form.
                </li>
                <li>
                  <strong>Our algorithm works its magic:</strong> Our sophisticated algorithm 
                  analyzes your inputs to create recipes tailored specifically to you.
                </li>
                <li>
                  <strong>Receive your personalized recipe:</strong> Get a complete recipe with 
                  ingredients, instructions, nutritional information, and even a shopping list.
                </li>
                <li>
                  <strong>Save and share:</strong> Save your favorite recipes for later or share 
                  them with friends and family.
                </li>
              </ol>
              
              <h2 className="text-2xl font-semibold text-recipe-700 mt-8 mb-4">Our Technology</h2>
              <p>
                Recipe Alchemy combines nutritional science with advanced algorithms to create 
                perfectly balanced recipes. We take into account:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Dietary restrictions and allergies</li>
                <li>Nutritional deficiencies and goals</li>
                <li>Flavor preferences and cuisine types</li>
                <li>Meal complexity and preparation time</li>
                <li>Seasonal and locally available ingredients when possible</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-recipe-700 mt-8 mb-4">Future Plans</h2>
              <p>
                We're constantly improving Recipe Alchemy to provide even better personalized 
                recipe experiences. Some features we're working on include:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>AI-powered recommendations based on your cooking history and preferences</li>
                <li>Integration with grocery delivery services</li>
                <li>Meal planning for entire weeks</li>
                <li>Community features to share and discover recipes</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
