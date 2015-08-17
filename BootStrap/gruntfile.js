/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-web-server');

	grunt.initConfig({
	  web_server: {
		options: {
		  cors: true,
		  port: 8000,
		  nevercache: true,
		  logRequests: true
		},
		foo: 'bar' // For some reason an extra key with a non-object value is necessary 
	  },
	});
};