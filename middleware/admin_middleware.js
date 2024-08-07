const adminMiddleware = async (req, res, next) => {
  try {
    const adminRole = req.user.isAdmin;
    if (!adminRole) {
      res
        .status(403)
        .json({ msg: "Access denied , User is not an admin." });
    }
    // if user is an admin , process to the next Middleware
    next();
  } catch (err) {
    console.log(err);
  }
};

module.exports = adminMiddleware;
