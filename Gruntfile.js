module.exports = function(grunt){
    grunt.initConfig({
        htmlmin:{
            options:{
                removeComments:true,
                collapseWhiteSpace:true
            },
            files:{
                src:'./index.html',
                dest:'./dist/index.min.html'
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('default',['']);
}