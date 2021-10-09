const execute_query = require('./db_query').execute_query
const responses = require('../common_functions/responses')
const constants = require('../constants/constants')

module.exports.order_product = async function (req, res) {
    try {
        customer_id = req["customer_id"]
        var sql_query1 = 'select product_id from product where product_id=?'
        var values1 = [req.body.product_id];
        var results1 = await execute_query(sql_query1, values1)
        if (results1.length == 0) {
            responses.sendResponse(res, "This product is Not present", constants.STATUS_CODES.SUCCESS)
        }
        else {
            var sql_query2 = 'select product_price from product where product_id=?'
            var values2 = [req.body.product_id];

            var results2 = await execute_query(sql_query2, values2)
            price = results2[0].product_price
            var sql_query = 'insert into `order` (customer_id,product_id,admin_id,product_price)values(?,?,?,?)'
            var values = [customer_id, req.body.product_id, req.body.admin_id, price];

            var results = await execute_query(sql_query, values)
            responses.sendResponse(res, `Congratulation !! Your Order_id is: ${results.insertId} `, constants.STATUS_CODES.SUCCESS)
        }
    }
    catch (err) {
        console.log(err)
        responses.sendResponse(res, "Some error in you query", constants.STATUS_CODES.NOT_FOUND)
    }
}


module.exports.check_order = async function (req, res) {
    try {
        customer_id = req["customer_id"]

        var sql_query1 = 'select order_id from  `order` where  order_id=?'
        var values1 = [req.body.order_id];
        var results1 = await execute_query(sql_query1, values1)
        if(results1.length == 0)
        {
            responses.sendResponse(res, "This Order_id InValid", constants.STATUS_CODES.SUCCESS)
        }
        else{
        var sql_query = 'select * from `order` where order_id=? and customer_id=?'
        var values = [req.body.order_id,customer_id];

        var results = await execute_query(sql_query, values)
        console.log(results)
        
        responses.sendmessResponse(res, "Your Order Details is",results, constants.STATUS_CODES.SUCCESS)
    }
}
    catch(err) {
        console.log(err)
        responses.sendResponse(res, "Some Error in Your Query", constants.STATUS_CODES.NOT_FOUND)
    }
}


module.exports.order_history = async function (req, res) {
    try {
        customer_id = req["customer_id"]

        var sql_query = 'select * from `order` where customer_id=?'
        var values = [customer_id];

        var results = await execute_query(sql_query, values)
        
        responses.sendmessResponse(res, "Successfully Your order_Details",results, constants.STATUS_CODES.SUCCESS)
    }
    catch {
        responses.sendResponse(res, "Some Error in Your Query", constants.STATUS_CODES.NOT_FOUND)
    }
}


module.exports.see_available_product = async function (req, res) {
    try {
    
        var sql_query = 'select product_title,product_price from product'
        var values = []

        var results = await execute_query(sql_query, values)
        //console.log(results)
        responses.sendmessResponse(res, "These product are available ",results, constants.STATUS_CODES.SUCCESS)
    }
    catch(err) {
        console.log(err)
        responses.sendResponse(res, "Some Error in Your Query", constants.STATUS_CODES.NOT_FOUND)
    }
}