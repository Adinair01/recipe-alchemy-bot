
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RecipeForm from '@/components/RecipeForm';
import RecipeResult, { RecipeData } from '@/components/RecipeResult';
import { useToast } from "@/components/ui/use-toast";

// This is mock data for the demo
const mockRecipe: RecipeData = {
  title: "Mediterranean Quinoa Bowl with Roasted Vegetables",
  image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
  preparationTime: "30 minutes",
  servings: 2,
  ingredients: [
    "1 cup quinoa, rinsed",
    "2 cups vegetable broth",
    "1 medium zucchini, diced",
    "1 red bell pepper, diced",
    "1 small eggplant, diced",
    "2 tbsp olive oil",
    "2 cloves garlic, minced",
    "1 tsp dried oregano",
    "1/2 tsp ground cumin",
    "1/4 cup chopped fresh parsley",
    "2 tbsp lemon juice",
    "1/4 cup crumbled feta cheese (optional)"
  ],
  instructions: [
    "Preheat oven to 425°F (220°C)",
    "Toss zucchini, bell pepper, and eggplant with 1 tbsp olive oil, garlic, oregano, and cumin",
    "Spread vegetables on a baking sheet and roast for 20-25 minutes until tender and slightly caramelized",
    "Meanwhile, cook quinoa in vegetable broth according to package instructions until fluffy",
    "In a large bowl, combine quinoa and roasted vegetables",
    "Drizzle with remaining olive oil and lemon juice",
    "Fold in fresh parsley and top with feta cheese if using",
    "Season with salt and pepper to taste and serve warm"
  ],
  nutritionalInfo: {
    calories: 380,
    protein: 12,
    carbs: 58,
    fat: 14,
    fiber: 8,
    iron: 4,
    calcium: 120,
    vitamin_c: 75,
    vitamin_a: 1500,
    potassium: 650,
    magnesium: 120
  }
};

const CreateRecipe: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [recipeResult, setRecipeResult] = useState<RecipeData | null>(null);
  const { toast } = useToast();
  
  const handleFormSubmit = async (data: any) => {
    setIsLoading(true);
    
    // Simulate API call with a timeout
    setTimeout(() => {
      setRecipeResult(mockRecipe);
      setIsLoading(false);
    }, 2000);
  };
  
  const handleSaveRecipe = () => {
    // In a real app, this would save to a database or localStorage
    toast({
      title: "Recipe saved!",
      description: "The recipe has been saved to your collection."
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-recipe-800 mb-2">Create Your Personalized Recipe</h1>
            <p className="text-recipe-600 mb-8">
              Tell us about your preferences and dietary needs, and we'll generate a perfect recipe just for you.
            </p>
            
            {recipeResult ? (
              <div className="space-y-6">
                <RecipeResult recipe={recipeResult} onSave={handleSaveRecipe} />
                <div className="text-center">
                  <button 
                    onClick={() => setRecipeResult(null)} 
                    className="text-recipe-600 hover:text-recipe-800 underline"
                  >
                    Create another recipe
                  </button>
                </div>
              </div>
            ) : (
              <RecipeForm onSubmit={handleFormSubmit} isLoading={isLoading} />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CreateRecipe;
