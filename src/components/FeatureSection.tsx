
import React from 'react';
import { Heart, FileText, ShoppingBag, Video } from 'lucide-react';

const features = [
  {
    title: "Personalized Recipes",
    description: "Recipes tailored to your unique preferences, dietary restrictions, and nutritional needs.",
    icon: Heart
  },
  {
    title: "Nutritional Information",
    description: "Detailed breakdown of macronutrients, vitamins, and minerals in each recipe.",
    icon: FileText
  },
  {
    title: "Shopping Lists",
    description: "Automatically generated shopping lists to simplify your grocery shopping experience.",
    icon: ShoppingBag
  },
  {
    title: "Video Tutorials",
    description: "Access to YouTube tutorial videos to help you master each recipe with ease.",
    icon: Video
  }
];

const FeatureSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-recipe-800 mb-12">
          Personalized Healthy Cooking Made Easy
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-recipe-50 rounded-lg p-6 shadow-sm transition-all hover:shadow-md hover:translate-y-[-5px]">
              <div className="bg-recipe-100 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-recipe-700" />
              </div>
              <h3 className="text-xl font-semibold text-recipe-800 mb-3">{feature.title}</h3>
              <p className="text-recipe-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
