module.exports = function(grunt) {
	grunt.initConfig({
	  	less: {
			development: {
				options: {
					paths: ['app/css'],
				},
				files: {
					'app/css/style.css': 'app/less/_style.less'
				}
			}
		},
		autoprefixer: {
			dist: {
				files: {
					'app/css/style.css':'app/css/style.css'
				}
			}
		},
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'app/css',
					src: ['*.css', '!*.min.css'],
					dest: 'app/css',
					ext: '.min.css'
				}]
			}
		},
		clean: {
			css: ['app/css/style.css']
		},
		watch: {
            files: 'app/less/**/*.less',
            tasks: ['less', 'autoprefixer', 'cssmin', 'clean']
        },
		browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'app/css/*.css',
                        'app/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './app'
                }
            }
        }
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');

	grunt.registerTask('dev', ['browserSync', 'watch']);
};
