
var fs = require('fs'),
    path = require('path'),
    _ = require('underscore');
var UglifyJS = require("uglify-js");
var JSON2 = require('JSON2');

var tree = require('../../output/dir-info.json');

module.exports = function(grunt){
    grunt.registerTask('build', function(){
    var done = this.async();

    function make(obj){
        var html = '';
        _.each(obj, function(item){
            if(typeof item.name === 'string'){
                var innerCount = item.type === 'folder' && _.isArray(item.children) && item.children[0] ? ' ('+item.children.length+')' : item.type === 'folder' ? '(0)' : '';
                html += '<li class="'+item.type+'">';
                html += '<a>'+item.name+innerCount+'</a>';

                if(item.type==='folder' && item.children[0]){
                    html += '<ul>';
                    var list = make(item.children);
                    html += list;
                    html += '</ul>';
                }
                if(item.type==='file'){
                    var attribs = '';
                    for(var key in item){
                        attribs += '<span data-name="'+key+'">'+item[key]+'</span>';
                    }
                    html += '<div class="attributes">'+attribs+'</div>';
                }

                html += '</li>';
            }
        });

        return html;
    }


    var list = make(tree, '');

    var  res = '<html><head><link rel="stylesheet" href="main.css" /><script src="https://code.jquery.com/jquery-2.1.4.min.js"></script><script src="nav.js"></script></head><body>';
    res += '<ul id="sidebar">' + list + '</ul>';
    res += '<section id="main"></section>';
    res += '</body></html>';

    var doc = fs.writeFile('output/list-info.html', res, function (err) {
          if (err) {return console.log(err);}
          console.log('list-info.html' + ' saved');
        });
    });
}
