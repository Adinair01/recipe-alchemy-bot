
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CTASection: React.FC = () => {
  return (
    <section className="bg-recipe-600 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
        <p className="text-xl text-recipe-100 max-w-2xl mx-auto mb-8">
          Create your personalized recipe now and take the first step towards healthier, more enjoyable meals.
        </p>
        <Link to="/create">
          <Button className="bg-white text-recipe-600 hover:bg-recipe-50 font-medium py-2 px-6 rounded-lg text-lg">
            Create Your Recipe Now
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
