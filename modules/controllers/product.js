const execute_query = require('./db_query').execute_query
const responses = require('../common_functions/responses')
const constants = require('../constants/constants')

module.exports.add_product = async function (req, res) {
    try {
        admin_id = req["admin_id"]
        var sql_query1 = 'select product_title from product where product_title=?'
        var values1 = [req.body.product_title];
        var results1 = await execute_query(sql_query1, values1)
        if(results1.length !== 0)
        {
            responses.sendResponse(res, "This product Already present", constants.STATUS_CODES.SUCCESS)
        }
        else{
        var sql_query = 'insert into product (admin_id,product_title,product_description,product_price)values(?,?,?,?)'
        var values = [admin_id, req.body.product_title,req.body.product_description,req.body.product_price];

        var results = await execute_query(sql_query, values)
        
        responses.sendResponse(res, "Successfully added product", constants.STATUS_CODES.SUCCESS)
    }
}
    catch(err) {
        console.log(err)
        responses.sendResponse(res, "Some error in you query", constants.STATUS_CODES.NOT_FOUND)
    }
}


module.exports.update_product = async function (req, res) {
    try {
        admin_id = req["admin_id"]

        var sql_query1 = 'select product_title from  product where  product_id=?'
        var values1 = [req.body.product_id];
        var results1 = await execute_query(sql_query1, values1)
        if(results1.length == 0)
        {
            responses.sendResponse(res, "This product_id Not present", constants.STATUS_CODES.SUCCESS)
        }
        else{
        var sql_query = 'update product set product_title=? where admin_id=? and product_id=?'
        var values = [req.body.product_title,admin_id,req.body.product_id];

        var results = await execute_query(sql_query, values)
        console.log(results)
        
        responses.sendResponse(res, "Successfully Update product", constants.STATUS_CODES.SUCCESS)
    }
}
    catch {
        responses.sendResponse(res, "Some Error in Your Query", constants.STATUS_CODES.NOT_FOUND)
    }
}


module.exports.delete_product = async function (req, res) {
    try {
        var sql_query1 = 'select product_title from  product where  product_id=?'
        var values1 = [req.body.product_id];
        var results1 = await execute_query(sql_query1, values1)
        if(results1.length == 0)
        {
            responses.sendResponse(res, "This product_id Not present", constants.STATUS_CODES.SUCCESS)
        }
        else{
        var sql_query = 'delete from product where product_id=?'
        var values = [req.body.product_id];

        var results = await execute_query(sql_query, values)
        
        responses.sendResponse(res, "Successfully Deleted product", constants.STATUS_CODES.SUCCESS)
    }
}
    catch {
        responses.sendResponse(res, "Some Error in Your Query", constants.STATUS_CODES.NOT_FOUND)
    }
}


module.exports.see_available_product = async function (req, res) {
    try {
        admin_id = req["admin_id"]

        var sql_query = 'select product_title,product_price from product where admin_id=?'
        var values = [admin_id]

        var results = await execute_query(sql_query, values)
        //console.log(results)
        responses.sendmessResponse(res, `These product are available for this admin_id : ${admin_id}`,results, constants.STATUS_CODES.SUCCESS)
    }
    catch(err) {
        console.log(err)
        responses.sendResponse(res, "Some Error in Your Query", constants.STATUS_CODES.NOT_FOUND)
    }
}