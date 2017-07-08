const app = require('./config/app.config');

const PORT = require('./config/constants').port;

const connectionString = require('./config/constants').connectionString;

const db = require('./config/db')(connectionString);

let data = require('./data')(db);

require('./config/passport')({ app, data });

const controller = require("./controllers")(data);

require('./routers')({ app, data, controller });


app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));