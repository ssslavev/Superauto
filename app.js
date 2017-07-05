const app = require('./config/app.config');

const PORT = require('./config/constants').port;

let data = {};

const controller = require("./controllers")(data);

require('./routers')({ app, data, controller });

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));