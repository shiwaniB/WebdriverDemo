require("babel-register");

var path = require('path');

exports.config = {
    specs: [
        path.join(__dirname, '/specs/*.spec.js')
    ],
    capabilities: [{
        browserName: 'internet explorer',
        ignoreProtectedModeSettings: true
    }],
    sync: true,
    logLevel: 'verbose',
    coloredLogs: true,
    baseUrl: 'https://shop.polymer-project.org/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    plugins: {
        'wdio-webcomponents': {}
    },
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 120000,
        compilers: [
            'js:babel-register'
        ],
    },
    services: ['iedriver','selenium-standalone'],
    seleniumArgs: {
        version: '3.0.1'
    },
    seleniumInstallArgs: {
        version: '3.0.1',
        logger: console.log
    },


    port: '5555',
    path: '/',
    ieDriverLogs: './',
    killInstances: false
};