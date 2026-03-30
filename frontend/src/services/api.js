const BASE_URL = '/api';

export const api = {
  getRecipes: async (retries = 5) => {
    try {
      const res = await fetch(`${BASE_URL}/recipes`);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return await res.json();
    } catch (err) {
      if (retries > 0) {
        console.log('Retrying fetch recipes...', retries);
        await new Promise(resolve => setTimeout(resolve, 1000));
        return api.getRecipes(retries - 1);
      }
      throw new Error('Failed to fetch recipes');
    }
  },
  addRecipe: async (data) => {
    const res = await fetch(`${BASE_URL}/recipes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error('Failed to add recipe');
    return res.json();
  }
};
