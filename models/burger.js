var orm = require('../config/orm.js');

var burger = {
	// orm to show all values in the burger database.
	all: function (cb) {
		orm.all('burgers', function (res) {
			cb(res);
		});
	},
	// orm to add values to the burger database
	// cols and vals are arrays
	create: function (cols, vals, cb) {
		orm.create('burgers', cols, vals, function (res) {
			cb(res);
		});
	},
	// orm to update values in the burger database
	// objColVals would be the columns and values that you want to update	
	update: function (objColVals, condition, cb) {
		orm.update('burgers', objColVals, condition, function (res) {
			cb(res);
		});
	},
	// orm to delete from the burger database - future use.
	delete: function (condition, cb) {
		orm.delete('burgers', condition, function (res) {
			cb(res);
		});
	}
};

module.exports = burger;