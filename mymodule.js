// STEP 6: Exporting Modules
/*module.exports = function(dirname, extn, printResults){
	var fs = require('fs');
	var path = require('path');
	var results = new Array();

	fs.readdir(dirname, function(err, data){
		if(err){
			printResults(err);
		}else{
			data.forEach(function(file){
				if (path.extname(file) === '.' + extn){
					results.push(file);
				}
			});
			printResults(null, results)
		}
	});
}*/



// Approach 2:

/*var fs = require('fs')
var path = require('path')

module.exports = function (dir, filterStr, callback) {
  	fs.readdir(dir, function (err, list) {	
    	if (err)
      		return callback(err)

    	list = list.filter(function (file) {
      		return path.extname(file) === '.' + filterStr
		})

	callback(null, list)
	})
}

*/