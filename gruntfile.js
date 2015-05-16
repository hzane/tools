module.exports = function(grunt){
/*
make json of dir structure
use json to create deep probe files
use json to create uglify source map
to create html 
*/

	grunt.initConfig({
	pkg:grunt.file.readJSON('package.json')
	});

  grunt.loadTasks('tasks');
 // grunt.loadTasks('tasks/build');
//  grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('grunt-exec');
	grunt.registerTask('default', ['scan']);
}