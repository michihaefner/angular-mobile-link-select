module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    //Minify CSS files
    cssmin: {
      minify: {
        src: 'mobile-select.css',
        dest: 'mobile-select.min.css'
      }
    },

    // Compile from Sass to CSS
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files 
          'mobile-select.css': 'mobile-select.scss'
        }
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');


  // Default task(s).
  grunt.registerTask('css', ['sass', 'cssmin']);


};