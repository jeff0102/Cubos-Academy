// Custom middleware to convert query parameters to numbers
const toNumbers = (req, res, next) => {
  for (const key in req.query) {
    if (!isNaN(req.query[key])) {
      req.query[key] = Number(req.query[key]);
    }
  }
  next();
};

module.exports = toNumbers;
