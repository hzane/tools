
var fs = require('fs'),
    path = require('path'),
    async = require('async'),
    _ = require('underscore');
var UglifyJS = require("uglify-js");
var JSON2 = require('JSON2');

var tree = require('../output/db.json');

module.exports = function(grunt){
    grunt.registerTask('build', function(){
    var done = this.async();


    var list = make(tree, '');

    var  res = '<html><head><link rel="stylesheet" href="main.css" /><script src="https://code.jquery.com/jquery-2.1.4.min.js"></script><script src="nav.js"></script></head><body>';
    res += '<ul id="sidebar">' + list + '</ul>';
    res += '<section id="main"></section>';
    res += '</body></html>';

    var doc = fs.writeFile('output/list-info.html', res, function (err) {
          if (err) {return console.log(err);}
          console.log('list-info.html' + ' saved');
          done();
        });
    });
}

    function drilldown(obj, html){


        if(typeof html==='undefined'){var html='';}
        for(var key in obj){
            html += '<div class="attr-var">';
            if(typeof obj[key] === 'object'){
                if(isNaN(key)){html += key + ':<ul>';
            html += '<li data-name="'+key+'">';
        }
                    html += drilldown(obj[key]);
                if(isNaN(key)){ html += '</ul>';
            html += '</li>';  }

            }else if(typeof obj[key] === 'string'){
             

                html += '<div class="row"><span>'+key+': </span><span>'+obj[key]+'</span></div>';
            };
            html += '</div>';
        }
        return html;
    }
    function make(obj){
        var html = '';
        _.each(obj, function(item){
            if(typeof item.name === 'string'){
                var childCount = item.type === 'folder' && _.isArray(item.children) && item.children[0] ? ' ('+item.children.length+')' : item.type === 'folder' ? '(0)' : '';
                html += '<li class="'+item.type+'">';
                html += '<a>'+item.name+childCount+'</a>';

                if(item.type==='folder' && item.children[0]){
                    html += '<ul>';
                    var list = make(item.children);
                    html += list;
                    html += '</ul>';
                }
                if(item.type==='file'){
                    var attribs = '';
                    if(_.isObject(item.vars)){
                        attribs = drilldown(item.vars.res);
                    };
                    //attribs = drilldown(item[vars]);
                    html += '<ul class="attributes">'+attribs+'</ul>';
                }

                html += '</li>';
            }
        });

        return html;
    }