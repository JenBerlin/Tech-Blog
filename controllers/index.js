const router = require("express").Router();

const apiRoutes = require("./api_routes.js");
const homeRoutes = require("./home_routes.js");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);

module.exports = router;
