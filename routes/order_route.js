
module.exports = app => {

    const order = require('../modules/controllers/order');
    const checkAuth = require('../middleware/checkAuth')

    app.post('/order_product',checkAuth.customer,order.order_product)
    app.post('/check_order',checkAuth.customer,order.check_order)
    app.post('/order_history',checkAuth.customer,order.order_history)
    app.post('/customer/see_available_product',checkAuth.customer,order.see_available_product)

}

