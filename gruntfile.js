module.exports = function (grunt) {

	grunt.initConfig({
		//Opciones CSS
		stylus: {
			compile: {
				options: {
					compress: false
				},
				files: {
					'assets/main.css': 'css/main.styl'
				}
			}
		},
		autoprefixer: {
			options: {
				browsers: ["Android 2.3", "Android >= 4", "Chrome >= 20", "Firefox >= 24", "Explorer >= 8", "iOS >= 6", "Opera >= 12", "Safari >= 6"]
			},
			core: {
				options: {
					map: true
				},
				src: ['assets/main.css']
			}
		},
		cssmin: {
			options: {
				report: 'gzip',
				compatibility: 'ie10',
				keepSpecialComments: '*',
				advanced: false
			},
			minifyCore: {
				src: 'css/main.css',
				dest: 'css/main.min.css'
			}
		},
		//Opciones JS
		concat: {
			options: {
				stripBanners: false,
				sourceMap: true
			},
			core: {
				src: ['ng/lib/**/*.js', 'ng/module.js', 'ng/**/*'],
				dest: 'assets/main.js'
			}
		},
		uglify: {
			options: {
				preserveComments: 'some',
				report: 'gzip'
			},
			core: {
				src: 'assets/main.js',
				dest: 'assets/main.min.js'
			}
		},

		//Utilidades
		supervisor: {
			target: {
				script: 'main.js'
			}
		},
		browserSync: {
			dev: {
				bsFiles: {
					src: ['assets/*.css', 'templates/*.html', 'layouts/*.html', 'assets/*.js']
				},
				options: {
					watchTask: true
				}
			}
		},
		notify_hooks: {
			options: {
				enabled: true,
				windowsVerbatimArguments: true,
				max_jshint_notifications: 5, // maximum number of notifications from jshint output
				title: '"kisstagram"', // defaults to the name in package.json, or will use project directory's name
				success: true, // whether successful grunt executions should be notified automatically
				duration: 2 // the duration of notification in seconds, for `notify-send only
			}
		},
		watch: {
			cssFront: {
				files: 'css/**/*',
				tasks: ['stylus-compile']
			},
			js: {
				files: 'ng/**/*',
				tasks: 'concat'
			}
		}
	});


	// Cargamos las dependencias necesarias
	require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

	//Procesos para compilar sin minificar
	grunt.registerTask('js-compile', ['concat']);

	grunt.registerTask('stylus-compile', ['stylus:compile', 'autoprefixer:core']);
	//Para comenzar a trabajar
	grunt.registerTask('default', ['notify_hooks', 'stylus-compile', 'js-compile', 'browserSync', 'watch']);

	//Proesos para crear los archivos min
	grunt.registerTask('dist', ['stylus-compile', 'cssmin:minifyCore', 'js-compile', 'uglify']);

};
