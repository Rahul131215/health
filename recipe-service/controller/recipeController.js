const recipes = [
  { 
    id: 1, 
    title: 'Mediterranean Quinoa Bowl', 
    description: 'A nutrient-packed bowl with quinoa, fresh cucumbers, cherry tomatoes, kalamata olives, and feta cheese drizzled with lemon vinaigrette.',
    calories: 380, 
    time: '15 mins', 
    image: 'https://picsum.photos/seed/quinoa/800/600' 
  },
  { 
    id: 2, 
    title: 'Grilled Salmon with Asparagus', 
    description: 'Wild-caught salmon fillet grilled to perfection alongside tender asparagus spears, seasoned with garlic and herbs.',
    calories: 450, 
    time: '25 mins', 
    image: 'https://picsum.photos/seed/salmon/800/600' 
  },
  { 
    id: 3, 
    title: 'Avocado & Egg Toast', 
    description: 'Mashed avocado on whole grain artisanal bread topped with a perfectly poached egg and red pepper flakes.',
    calories: 320, 
    time: '10 mins', 
    image: 'https://picsum.photos/seed/avocado/800/600' 
  },
];

export const getRecipes = (req, res) => {
  res.json(recipes);
};

export const addRecipe = (req, res) => {
  const newRecipe = { 
    id: Date.now(), 
    ...req.body,
    image: `https://picsum.photos/seed/${Date.now()}/800/600`
  };
  recipes.unshift(newRecipe);
  res.status(201).json({ message: 'Recipe added successfully', recipe: newRecipe });
};
