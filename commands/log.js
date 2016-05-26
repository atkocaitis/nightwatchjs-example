var chalk = require('chalk');

var log = function(message, color) {

    this.perform(function() {
		switch(color) {
			case "message":
				console.log(chalk.bgGreen.bold('  ' + message +  '  '));
				break;
			case "error":
				console.log(chalk.bgRed.bold('  ' + message +  '  '));
				break;
			case "warning":
				console.log(chalk.bgYellow.bold('  ' + message +  '  '));
				break;
			default:
				console.log(chalk.bgYellow.bold('  ' + message +  '  '));
				break;
		}
    });

    return this;
};

exports.command = log;