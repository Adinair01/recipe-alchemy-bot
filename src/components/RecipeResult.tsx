
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, Download, Video, ShoppingBag } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export interface RecipeData {
  title: string;
  image: string;
  preparationTime: string;
  servings: number;
  ingredients: string[];
  instructions: string[];
  nutritionalInfo: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    [key: string]: number;
  };
}

interface RecipeResultProps {
  recipe: RecipeData;
  onSave: () => void;
}

const RecipeResult: React.FC<RecipeResultProps> = ({ recipe, onSave }) => {
  return (
    <Card className="w-full shadow-lg">
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl font-bold text-recipe-700">{recipe.title}</CardTitle>
        <CardDescription>
          <div className="flex items-center gap-4 text-sm text-recipe-600">
            <span>Preparation: {recipe.preparationTime}</span>
            <span>•</span>
            <span>Servings: {recipe.servings}</span>
          </div>
        </CardDescription>
      </CardHeader>
      
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <CardContent className="pt-6">
        <Tabs defaultValue="recipe">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="recipe">Recipe</TabsTrigger>
            <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
            <TabsTrigger value="shopping">Shopping List</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>
          
          <TabsContent value="recipe" className="pt-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-recipe-700 mb-3">Ingredients</h3>
                <ul className="list-disc pl-5 space-y-1.5">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-recipe-700 mb-3">Instructions</h3>
                <ol className="list-decimal pl-5 space-y-2">
                  {recipe.instructions.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="nutrition" className="pt-4">
            <div className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-recipe-50 p-4 rounded-lg text-center">
                  <p className="text-sm text-recipe-600">Calories</p>
                  <p className="text-xl font-semibold text-recipe-700">{recipe.nutritionalInfo.calories} kcal</p>
                </div>
                <div className="bg-recipe-50 p-4 rounded-lg text-center">
                  <p className="text-sm text-recipe-600">Protein</p>
                  <p className="text-xl font-semibold text-recipe-700">{recipe.nutritionalInfo.protein}g</p>
                </div>
                <div className="bg-recipe-50 p-4 rounded-lg text-center">
                  <p className="text-sm text-recipe-600">Carbs</p>
                  <p className="text-xl font-semibold text-recipe-700">{recipe.nutritionalInfo.carbs}g</p>
                </div>
                <div className="bg-recipe-50 p-4 rounded-lg text-center">
                  <p className="text-sm text-recipe-600">Fat</p>
                  <p className="text-xl font-semibold text-recipe-700">{recipe.nutritionalInfo.fat}g</p>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div>
                <h3 className="text-lg font-semibold text-recipe-700 mb-3">Vitamins & Minerals</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {Object.entries(recipe.nutritionalInfo)
                    .filter(([key]) => !['calories', 'protein', 'carbs', 'fat'].includes(key))
                    .map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-recipe-600 capitalize">{key}</span>
                        <span className="font-medium">{value}mg</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="shopping" className="pt-4">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-recipe-700">Shopping List</h3>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Download size={16} />
                  <span>Download</span>
                </Button>
              </div>
              
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <input type="checkbox" id={`item-${index}`} className="h-4 w-4 rounded border-gray-300" />
                    <label htmlFor={`item-${index}`} className="text-recipe-700">{ingredient}</label>
                  </li>
                ))}
              </ul>
            </div>
          </TabsContent>
          
          <TabsContent value="video" className="pt-4">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-recipe-700">Video Tutorial</h3>
              <div className="bg-recipe-50 rounded-lg p-8 text-center">
                <Video className="mx-auto h-16 w-16 text-recipe-400 mb-4" />
                <p className="text-recipe-600 mb-4">Connect to YouTube API to display related cooking tutorials</p>
                <Button variant="outline" className="bg-white">
                  Find on YouTube
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      
      <CardFooter className="flex justify-between items-center pt-2">
        <span className="text-sm text-recipe-600">Recipe tailored to your profile</span>
        <Button variant="outline" className="flex items-center gap-2" onClick={onSave}>
          <Heart className="h-5 w-5" />
          <span>Save Recipe</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RecipeResult;
