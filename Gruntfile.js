module.exports = function(grunt) {
  // 配置Grunt各种模块的参数
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    //compass编译
    compass: {
            development: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'css'
                }
            }
    },
    autoprefixer: {
       options: {
        browsers: ['last 2 version', 'ie 8', 'ie 9']
      },
      // prefix the specified file
      single_file: {
        src: 'css/style.css',
        dest: 'css/style2.css'
      }
    },
    //css压缩代码
    cssmin: {
      minify: {
        expand: true,
        cwd: 'css/',
        src: ['*.css', '!*.min.css'],
        dest: 'css/',
        ext: '.min.css'
      }
    },
    //js代码调试
    jshint: {
        options: {
            eqeqeq: true,
            trailing: true
        },
        files: ['js/custom.js']
    },
    //js代码压缩
    uglify: {
     options: {
      mangle: false
    },
    build: {
      files: {
        'js/custom.min.js': ['js/custom.js']
      }
    }
    },
    //js文件合并
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/jquery.min.js', 'js/custom.min.js'],
        dest: 'js/script.min.js'
      }
    },
    //grunt watch
    watch: {
      compass:{
        files:'sass/*',
        tasks:['compass']
      },
      autoprefixer:{
        files:'css/*',
        tasks:['autoprefixer']
      },
      cssmin:{
        files:'css/*',
        tasks:['cssmin']
      },
      jshint:{
        files:'js/*',
        tasks:['jshint']
      },
      uglify:{
        files:'js/*',
        tasks:['uglify']
      },
      concat:{
        files:'js/*',
        tasks:['concat']
      }
        //使用下面这个的话将会遍历每个人事件，即使没有改动，所以建议把事件分开来，有改动时才执行
       // files: ['sass/*','css/*', 'js/*'],
      // tasks: ['compass','cssmin','jshint', 'uglify', 'concat']
    }
  });
  // 从node_modules目录加载模块文件
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // 每行registerTask定义一个任务
  grunt.registerTask('default', ['compass','cssmin:minify','jshint','uglify','concat']);
  // grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
  grunt.registerTask('check', ['jshint']);
};