export const getOrders = (req, res) => {
  res.json([{ id: 101, recipeId: 2, status: 'Delivered' }]);
};

export const createOrder = (req, res) => {
  res.status(201).json({ message: 'Order created', orderId: Date.now() });
};
