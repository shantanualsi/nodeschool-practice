// console.log("HELLO WORLD");

// STEP 2:  Command line parameters can be accessed through the global process object. The process object has a argv property that is an array containing all the command-line command
/* var length = process.argv.length;
var result = 0;
for(var i=2;i<length;i++){
	result = result+Number(process.argv[i]);
}

 console.log(result);
*/
//STEP 3 - Synchronus file IO. This snippet will count the number of newlines in a given file
// The readFileSync object returns a buffer object. The buffer object is node's way of efficiently representing arbitrary array of data whether the data is binary, ascii, etc.
// If you pass UTF-8 as the second argument to readfilesync, you'll get a buffer instead of a string
// Async functions in fs take callback as the last argument. Usually, callbacks are passed as anonymuos functions function(err,data)
/*
var fs = require('fs');
var filename = process.argv[2];
var filecontents = fs.readFileSync(filename)
console.log(filecontents.toString().split('\n').length-1);
*/

//STEP 4 - Asynchronus file IO. This snippet will count the number of newlines in a given file

/*var fs = require('fs');
var filename = process.argv[2];
var filecontents = fs.readFile(filename, function(err,filecontents){
	if(err)
		console.log('error occured' + err);
	console.log(filecontents.toString().split('\n').length-1);	
});*/


// STEP 5: Print only those filenames that have extension given in args[2]
/*var fs = require('fs');
var dirname = process.argv[2];
fs.readdir(dirname, function(err, data){
	for(var i=0;i<data.length;i++){
		extension = data[i].split('.')[1];
		if(extension == process.argv[3])
			console.log(data[i]);
	}
});*/

// STEP 5: Approach 2:
/*var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err, list){
	list.forEach(function(file){
		if(path.extname(file) === '.' + process.argv[3]){
			console.log(file)
		}
	});
});*/



// STEP 6: Exporting modules
/*var path = require('path');
var mymodule = require('./mymodule');

function printResults(err, data){
	data.forEach(function(file){
		console.log(file);
	});
}
mymodule(process.argv[2], process.argv[3], printResults);*/

// STEP 6: Approach 2 (Solution)
/*var filterFn = require('./solution_filter.js')
var dir = process.argv[2]
var filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
  if (err)
    return console.error('There was an error:', err)

  list.forEach(function (file) {
    console.log(file)
  })
})
*/


// STEP 7: Log data of an http get request
/*http = require('http');
http.get(process.argv[2], function(response){
	response.setEncoding('utf-8')
	response.on('data', function(data){
		console.log(data.toString());
	});
});
*/
// STEP 7: Approach 2 (Solution)
/*var http = require('http')
http.get(process.argv[2], function (response) {
  response.setEncoding('utf8')
  response.on('data', console.log)
  response.on('error', console.error)
})
*/

// STEP 8 :Capture the entire get stream
/*var http = require('http');
var string="";
http.get(process.argv[2], function(response){
	response.on('data', function(data){
		string+=data.toString();
	});
	response.on('error', console.error);
	response.on('end', function(){
		console.log(string.length);
		console.log(string);
	});
});
*/

// STEP 8: Approach 2(Solution)
/*var http = require('http')
    var bl = require('bl')
    
    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err)
          return console.error(err)
        data = data.toString()
        console.log(data.length)
        console.log(data)
	}));
});*/


// STEP 9: Juggling Async
/*var http = require('http');
var string1 = "", string2 = "", string3 = "";
var count = 0;
for (var i=2, i<5;i++){
	http.get(proces.argv[i],function(response){
		response.on('data', function(data){
			string1+=data.toString();
		});
		response.on('end', callback)
	});	
}
callback = function(resp_string){
	count++;
	if(count == 3){
		console.log(string1 + '\n' + string2 + '\n'+ string3);
	}
}*/

// STEP 9: Approach 2 (Solution)
/*var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
  for (var i = 0; i < 3; i++)
    console.log(results[i])
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err)
        return console.error(err)

      results[index] = data.toString()
      count++

      if (count == 3) // yay! we are the last one!
        printResults()
    }))
  })
}

for (var i = 0; i < 3; i++)
  httpGet(i)
*/