const app = require('./config/app.config');

const PORT = require('./config/constants').port;

let connection = require('./config/mongodb');

let data = require('./data')(connection);

require('./config/passport')({ app, data });

app.use((req, res, next) => {

    console.log(req.user + ' current user!')
    next();
})

const controller = require("./controllers")(data);

require('./routers')({ app, data, controller });

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));