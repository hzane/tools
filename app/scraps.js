







function uglifythis(filename){
var fname = filename.substr(filename.lastIndexOf('/')+1, filename.indexOf('.'));
var result = UglifyJS.minify([ filename ], {
    outSourceMap: fname+".map"
});

var mapObj = JSON.parse(result.map);
var res = {path:mapObj.sources, objects:mapObj.names};

        fs.writeFile(fname+'.map', JSON.stringify(res), function (err) {
        });

}
function platothis(filename){

    var plato = require('plato');
console.log("heey");
    var files = [
      'public/js/controllers.js'
    ];

    var outputDir = './output/dir';
    // null options for this example
    var options = {
      title: 'Your title here'
    };

    var callback = function (report){
        console.log(report);
    };

    plato.inspect(filename, outputDir, {}, callback);
}



//utils.scan('public');
//utils.build('./json/public.json');

var fs = require('fs'),
    path = require('path')
var UglifyJS = require("uglify-js");




var jsScriptList = [];
var html = '';
function dirTree(filename) {
    var stats = fs.lstatSync(filename),
        info = {
            path: filename,
            name: path.basename(filename)
        };

    if (stats.isDirectory()) {
        info.type = "folder";
        info.children = fs.readdirSync(filename).map(function(child) {
            return dirTree(filename + '/' + child);
        });
    } else {
        var ext = filename.substr(filename.lastIndexOf('.')+1);
        info.type = "file";
        info.filetype = ext;
        info.filesize = stats["size"];

        if(ext==='js'){
    		jsScriptList.push(filename);
        }

    }

    return info;
}
var j = dirTree('views');

/*


		  fs.writeFile('ok.json', JSON.stringify(j), function (err) {
		  if (err) {return console.log(err);}

		  console.log('ok.json' + ' saved');
		});



		  fs.writeFile('ok3.json', JSON.stringify(jsScriptList), function (err) {
		  if (err) {return console.log(err);}

		  console.log('ok3.json' + ' saved');
		});
*/

/*
var path = 'public/js/controllers.js';
	fs.readFile(path, 'utf8', function (err, data) {


var toplevel = null;
    toplevel = UglifyJS.parse(data, {
        filename: path,
        toplevel: toplevel
    });
toplevel.figure_out_scope();
toplevel.globals.each(function(g) {
	console.log("***");
	var jx =  
//	console.log(g.scope.body[0].scope.body)
});		
var source_map = UglifyJS.SourceMap();
var stream = UglifyJS.OutputStream({
    source_map: source_map
});
compressed_ast.print(stream);

var code = stream.toString();
var map = source_map.toString()
*/
//var parsed = UglifyJS.parse(data);
//parsed.figure_out_scope();
//parsed.globals.each(function(g) {console.log(g.name)});		  
//var f = 'hm.js';
//var log = [];

//fs.writeFile(f, JSON.stringify(parsed.globals), function (err) {});

/*
var ast = UglifyJS.parse(data, {outSourceMap: "out.js.map"});
console.log(ast);
ast.figure_out_scope();
ast.compute_char_frequency();
ast.mangle_names();
*/
//console.log(ast);
//var code = ast.print_to_string();

//fs.writeFile('ba.js', ast, function (err) {});








	});

/*
var esprima = require('esprima');
var dfatool = require('dfatool');

var path = 'public/js/controllers.js';
	fs.readFile(path, 'utf8', function (err, data) {

		var ast = esprima.parse(data, {
		    loc : true
		});

var globalScope = dfatool.newGlobalScope();
dfatool.buildScope(ast, globalScope);
globalScope.initialize();
globalScope.derivation();

var variable = globalScope.getDefine("name");
console.log(variable);

var outline = {};
for(var name in globalScope._defines){
    var variable = globalScope._defines[name];
    var value = variable.inference();
    if( value ){
        outline[variable.name] = value.toJSON();
    }
}

	});



var plato = require('plato');

var files = [
  'public/js/controllers.js'
];

var outputDir = './output/dir';
// null options for this example
var options = {
  title: 'Your title here'
};

var callback = function (report){
	console.log(report);
// once done the analysis,
// execute this
};

//plato.inspect(files, outputDir, {}, callback);
*/



    fs.readFile(filename, 'utf8', function (err, data) {



        /*
        var toplevel = null,
            ast = UglifyJS.parse(data, {
                filename: filename,
                toplevel: ast
            });
        ast.figure_out_scope();

        var walker = new UglifyJS.TreeWalker(function(node){
            if (node instanceof UglifyJS.AST_Function) {
                console.log(node.variables);
                console.log(">>>>>>>>>>>>>");
                console.log(UglifyJS.string_template("{name} - {variables} - {functions} at {line},{col}", {
                    name: node.name,
                    variables: node.variables,
                    functions: node.functions,
                    line: node.start.line,
                    col: node.start.col
                }));
            }
        });
        ast.walk(walker);
*/

/*
        var ast = UglifyJS.parse(data, {outSourceMap: "out2.js.map", sourceRoot: "output"});
        ast.figure_out_scope();
        ast.compute_char_frequency();
        console.log("************************************************");
        JSON.stringify(ast.globals);
        console.log("************************************************");
        */
        //console.log(ast);
        //var code = ast.print_to_string();

        //fs.writeFile('ba.js', ast, function (err) {});  
    });

}




return false;
