'use strict';

var yeoman  = require( 'yeoman-generator' ),
    yosay   = require( 'yosay' );

var DashGenerator = yeoman.generators.Base.extend( {
    initializing: function() {
        this.pkg = require( '../../package.json' );
    },

    prompting: function() {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log( yosay(
            'Welcome to the world-class Dash generator!'
        ) );

        var prompts = [ {
            type: 'confirm',
            name: 'someOption',
            message: 'Would you like to enable this option?',
            default: true
        } ];

        this.prompt( prompts, function( props ) {
            this.someOption = props.someOption;

            done();
        }.bind( this ) );
    },

    writing: {
        app: function() {
            this.dest.mkdir( 'app' );
            this.dest.mkdir( 'app/templates' );

            this.src.copy( '_package.json' , 'package.json' );
            this.src.copy( '_bower.json', 'bower.json' );
        },

        projectfiles: function() {
        }
    },

    end: function() {
        this.installDependencies();
    }
} );

module.exports = DashGenerator;
