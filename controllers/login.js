'use strict'

function LoginController() {

}

LoginController.prototype.index = function (req, res) {

  res.render('login');
};

LoginController.prototype.submit = function (req, res) {


};

module.exports = LoginController;
