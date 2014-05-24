// Based on @zenorocha's Gruntfile for <voice-elements>, 
// https://github.com/zenorocha/voice-elements/blob/master/Gruntfile.js

module.exports = function(grunt) {

    grunt.initConfig({
        // 'connect': {
        //     demo: {
        //         options: {
        //             open: true,
        //             keepalive: true
        //         }
        //     }
        // },
        // 'gh-pages': {
        //     options: {
        //         clone: 'bower_components/x-life'
        //     },
        //     src: [
        //         'bower_components/**/*',
        //         '!bower_components/x-life/**/*',
        //         'demo/*', 'src/*', 'demo/demo.html'
        //     ]
        // },
        'replace': {
            example: {
                src: ['src/*'],
                dest: 'dist/',
                replacements: [{
                    from: 'bower_components',
                    to: '..'
                }]
            }
        }
    });

    // grunt.loadNpmTasks('grunt-contrib-connect');
    // grunt.loadNpmTasks('grunt-gh-pages');
    grunt.loadNpmTasks('grunt-text-replace');

    grunt.registerTask('build',  ['replace']);
    // grunt.registerTask('deploy', ['gh-pages']);
    // grunt.registerTask('server', ['connect']);
    grunt.registerTask('default', 'replace');

};