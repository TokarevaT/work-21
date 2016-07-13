module.exports = function(grunt) {

  grunt.initConfig({
     concat: {
		 options: {
			 separator: '\r\n'
		 },
		 dist: {
			 src: ['js/src/*.js'],
			 dest: 'js/dist/script.main.js'
		 },
		 dist: {
			 src: ['styles/variables.scss',
			       'styles/style.scss'],
			 dest: 'styles/main.scss'
		 }
	 },
	 uglify:{
		 dist: {
			 src: ['js/dist/script.main.js'],
			 dest: 'js/dist/script.main.min.js'
		 }
	 },
	 sass: {
		 dist: {
			 files: [{
				 expand: true,
				 cwd: 'styles',
				 src: ['main.scss'],
				 dest: 'styles',
				 ext: '.css'
			 }]
		 }
	 },
	 watch: {
		 sass: {
			 files: ['styles/*.scss'],
			 tasks: ['concat','sass']
		 },
	 },
	 cssmin: {
		  options: {
			separator: ''
		  },
		  
		  dist: {
			src: ['styles/main.css'],
			dest: 'styles/main.min.css'
		  }
		}
	 
  });
  
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');  
    grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	
	
	grunt.registerTask('default', ['concat','uglify','sass','cssmin']);

};