
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2 } from "lucide-react";

const cuisines = [
  { value: "mediterranean", label: "Mediterranean" },
  { value: "asian", label: "Asian" },
  { value: "mexican", label: "Mexican" },
  { value: "italian", label: "Italian" },
  { value: "indian", label: "Indian" },
  { value: "middle-eastern", label: "Middle Eastern" },
  { value: "american", label: "American" },
  { value: "african", label: "African" }
];

const allergens = [
  { id: "nuts", label: "Nuts" },
  { id: "dairy", label: "Dairy" },
  { id: "gluten", label: "Gluten" },
  { id: "shellfish", label: "Shellfish" },
  { id: "soy", label: "Soy" },
  { id: "eggs", label: "Eggs" }
];

const deficiencies = [
  { id: "iron", label: "Iron" },
  { id: "vitamin-d", label: "Vitamin D" },
  { id: "calcium", label: "Calcium" },
  { id: "protein", label: "Protein" },
  { id: "fiber", label: "Fiber" },
  { id: "omega3", label: "Omega-3 Fatty Acids" }
];

const formSchema = z.object({
  age: z.string().min(1, "Age is required"),
  gender: z.string().min(1, "Gender is required"),
  dietType: z.string().min(1, "Diet type is required"),
  cuisine: z.string().min(1, "Cuisine is required"),
  allergies: z.array(z.string()).optional(),
  deficiencies: z.array(z.string()).optional(),
  preferences: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const RecipeForm: React.FC<{ onSubmit: (data: FormValues) => void, isLoading: boolean }> = ({ onSubmit, isLoading }) => {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      age: "",
      gender: "",
      dietType: "",
      cuisine: "",
      allergies: [],
      deficiencies: [],
      preferences: "",
    },
  });

  const handleSubmit = (values: FormValues) => {
    onSubmit(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Basic Information */}
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Age</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your age" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <FormControl>
                  <RadioGroup 
                    onValueChange={field.onChange} 
                    value={field.value}
                    className="flex space-x-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <label htmlFor="male">Male</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <label htmlFor="female">Female</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <label htmlFor="other">Other</label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {/* Diet Type */}
          <FormField
            control={form.control}
            name="dietType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Diet Type</FormLabel>
                <FormControl>
                  <RadioGroup 
                    onValueChange={field.onChange} 
                    value={field.value}
                    className="grid grid-cols-2 gap-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="omnivore" id="omnivore" />
                      <label htmlFor="omnivore">Omnivore</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="vegetarian" id="vegetarian" />
                      <label htmlFor="vegetarian">Vegetarian</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="vegan" id="vegan" />
                      <label htmlFor="vegan">Vegan</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="pescatarian" id="pescatarian" />
                      <label htmlFor="pescatarian">Pescatarian</label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {/* Cuisine */}
          <FormField
            control={form.control}
            name="cuisine"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred Cuisine</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select cuisine" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {cuisines.map((cuisine) => (
                      <SelectItem key={cuisine.value} value={cuisine.value}>
                        {cuisine.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Allergies */}
          <FormField
            control={form.control}
            name="allergies"
            render={() => (
              <FormItem>
                <FormLabel>Allergies</FormLabel>
                <div className="grid grid-cols-2 gap-2">
                  {allergens.map((allergen) => (
                    <FormField
                      key={allergen.id}
                      control={form.control}
                      name="allergies"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={allergen.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(allergen.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value || [], allergen.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== allergen.id
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {allergen.label}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </div>
              </FormItem>
            )}
          />
          
          {/* Deficiencies */}
          <FormField
            control={form.control}
            name="deficiencies"
            render={() => (
              <FormItem>
                <FormLabel>Nutritional Focuses</FormLabel>
                <div className="grid grid-cols-2 gap-2">
                  {deficiencies.map((deficiency) => (
                    <FormField
                      key={deficiency.id}
                      control={form.control}
                      name="deficiencies"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={deficiency.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(deficiency.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value || [], deficiency.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== deficiency.id
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {deficiency.label}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </div>
              </FormItem>
            )}
          />
        </div>
        
        {/* Additional Preferences */}
        <FormField
          control={form.control}
          name="preferences"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Preferences (optional)</FormLabel>
              <FormControl>
                <Input placeholder="E.g., quick meals, low-calorie, etc." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit" className="w-full bg-recipe-500 hover:bg-recipe-600" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating Recipe...
            </>
          ) : (
            "Generate Recipe"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default RecipeForm;
