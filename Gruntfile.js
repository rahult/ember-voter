module.exports = function(grunt) {

  grunt.initConfig({
    'gh-pages': {
      options: {
        base: 'dist'
      },
      src: ['**']
    },
    exec: {
      build: {
        command: 'ember build production',
        stdout: false,
        stderr: false
      }
    }
  });

  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('build',  ['exec:build']);
  grunt.registerTask('deploy', ['build', 'gh-pages']);
};
