export const getUsers = (req, res) => {
  res.json([{ id: 1, name: 'John Doe', email: 'john@example.com' }]);
};

export const registerUser = (req, res) => {
  res.status(201).json({ message: 'User registered successfully', user: req.body });
};
