const auth = (req, res, next) => {
  const correctPassword = "cubos123";
  const providedPassword = req.headers.authorization;

  // Check if the provided password matches the correct password
  if (providedPassword === correctPassword) {
    // Password is correct, allow the request to proceed
    next();
  } else {
    // Password is incorrect or not provided
    return res.status(401).json({ error: "Unauthorized - Incorrect password" });
  }
};

module.exports = auth;
