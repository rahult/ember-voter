module.exports = function(grunt) {

  grunt.initConfig({
    clean: ['dist'],
    rsync: {
      deploy: {
        options: {
          args: ["--verbose"],
          exclude: [".DS_Store"],
          recursive: true,
          src:  "dist/",
          dest: "/home/30874/users/.home/domains/ember-voter.rahultrikha.com/html",
          host: "ember-voter.rahultrikha.com",
          syncDestIgnoreExcl: true
        }
      }
    },
    exec: {
      build: {
        command: 'ember build --environment=production',
        stdout: false,
        stderr: false
      }
    }
  });

  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-rsync');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('build',  ['clean', 'exec:build']);
  grunt.registerTask('deploy', ['build', 'rsync:deploy']);
};
