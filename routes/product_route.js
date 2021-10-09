
module.exports = app => {

    const product = require('../modules/controllers/product');
    const checkAuth = require('../middleware/checkAuth')

    app.post('/add_product', checkAuth.admin,product.add_product )
    app.post('/update_product', checkAuth.admin,product.update_product )
    app.post('/delete_product', checkAuth.admin,product.delete_product)
    app.post('/admin/see_available_product',checkAuth.admin,product.see_available_product)

}