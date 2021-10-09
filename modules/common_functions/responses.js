const { json } = require("body-parser")

const sendResponse = (res, msg, status) => {
    return res.json({
        message: msg,
        status: status
    })
}

const sendmessResponse = (res, msg, data, status) => {
    
    return res.json({
        message: msg,
        Details: data,
        status: status
    })
}

const sendtokencustomerResponse = (res, msg, token, customer_email, customer_id, status) => {
    return res.json({
        Message: msg,
        Token: token,
        customer_email: customer_email,
        customer_ID: customer_id,
        Status: status
    })
}

const sendtokenadminResponse = (res, msg, token, admin_email, admin_id, status) => {
    return res.json({
        Message: msg,
        Token: token,
        admin_email: admin_email,
        admin_ID: admin_id,
        Status: status
    })
}

module.exports = { sendResponse, sendmessResponse, sendtokencustomerResponse, sendtokenadminResponse }
