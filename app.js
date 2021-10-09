var express = require("express");
var bodyParser = require('body-parser');
var app = express();
require('dotenv').config();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get("/", (req, res) => {
    res.json({ message: "Welcome,Server is working Fine.........  " });

});
const port = process.env.PORT || 3000
require('./database/db_connection')
require("./routes/customer_route")(app);
require("./routes/admin_route")(app);
require("./routes/product_route")(app);
 require("./routes/order_route")(app);


app.all('*', (req, res) => {
    const err = new Error(`Requested URL ${req.path} not found!!`)
    res.status(404).json({
        success: 0,
        message: err.message,
        stack: err.stack
    })
})

app.listen(port, () => {
    console.log(`server running on port: ${port}`)
});

