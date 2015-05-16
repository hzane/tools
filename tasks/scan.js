
var fs = require('fs'),
    _ = require('underscore'),
    path = require('path')
var UglifyJS = require("uglify-js");

var Deep = require("../../node_modules/deep-js/lib/deep.js");
var renderer = require("../../node_modules/deep-js/lib/render.js");
var async = require('async');
var acorn = require('acorn-jsx');

var scanDir = 'public';
var saveFilePath = 'output/db.json';
var ignoreList = ["node_modules", "public/js/lib/angular"];

function 

function getDeepVars(filename){
    deep = new Deep(filename);
    deep.parse();
    var output = renderer.render("./template/markdown.MD", {definitions: deep.definitions});
    
    output = unescape(output.replace(/\\"/g, '"').replace(/\t/g, "").replace(/\r/g, "").replace(/\n/g, "").replace(/'/g, '"'));
    return JSON.parse(output);
};
function dirTree(filename) {

    if(ignoreList.indexOf(filename) > -1){
        return false;
    }
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
            info.vars = getDeepVars(filename);
            info.notes = '';
            info.todo = '';
            info.contributors = [];

        }

    }
    return info;
}
function writeResult(res, callback){
    res = JSON.stringify([res]);
          fs.writeFile(saveFilePath, res, function (err) {
          if (err) {return console.log(err);}
          console.log(saveFilePath + ' ok');
          callback(null, saveFilePath + ' saved');
        });


}
module.exports = function(grunt){

    grunt.registerTask('scan', function(){
    var done = this.async();

async.waterfall([
    function(callback) {
        var res = dirTree(scanDir, writeResult);
        callback(null, res);
    },
    function(res, callback) {
        writeResult(res, callback);
    }
], function (err, res) {
    console.log("+!+!+!");
    console.log(res);
    done();
});



    });

}