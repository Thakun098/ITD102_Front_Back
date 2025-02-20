const controller = require('../controllers/user.controller');

module.exports = (app) => {
    app.get('/', controller.findAllUser);
    app.post('/create-user', controller.createUser);
    app.get('/user/:id', controller.findUserById);
    app.put('/update-user/:id', controller.updateUserById);
    app.delete('/delete-user/:id', controller.deleteUserById);
};