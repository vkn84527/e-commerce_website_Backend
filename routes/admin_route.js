module.exports = app => {
    const admin = require('../modules/controllers/admin');
    const validate = require('../middleware/register_validation')
    const loginValidation = require('../middleware/login_validation')

    app.post('/admin_register',validate.adminValidation, admin.register);
    app.post('/admin_login',loginValidation.adminloginValidation, admin.login);
    app.post('/admin_logout', admin.logout);

}