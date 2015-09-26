var gulp = require('gulp');
var bundler = require('aurelia-bundler');

gulp.task('bundle', function() {
    return bundler.bundle({
        force: true,
        packagePath: '.',
        bundles: {
            "dist/app": {
                includes: [
                    '[*]'
                ],
                options: {
                    inject: true
                }
            }
        }
    });
});
