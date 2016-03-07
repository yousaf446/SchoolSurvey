require.config({
    paths: {
        'domReady': 'lib/domReady/domReady',
        'angular': 'lib/angular/angular',
        'angular-route': 'lib/angular-route/angular-route',
        'angular-messages': 'lib/angular-messages/angular-messages',
        'coreModule': 'coreModule'
    },

    shim: {
        'angular': {
            deps: ['domReady']
        },

        'angular-route': {
            deps: ['angular']
        },

        'angular-messages': {
            deps: ['angular']
        },

        'coreModule': {
            deps: ['angular']
        }
    }
});

require(['coreModule']);