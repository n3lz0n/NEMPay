import angular from 'angular';
import $ from 'jquery';

// Import our app config files
import constants from './config/app.constants';
import appConfig from './config/app.config';
import appRun from './config/app.run';

// Import Angular modules
import 'angular-ui-router';
import 'angular-animate';
import 'angular-sanitize';
import 'ng-toast';
import 'ngstorage';
import 'angular-translate';
import 'angular-chart.js';

// Testing
import 'angular-mocks';

// Import our templates file (generated by Gulp)
import './app.templates';

// Import our app functionalities
import '../../nanowallet/src/app/layout';
import '../../nanowallet/src/app/components';
import '../../nanowallet/src/app/filters';
import '../../nanowallet/src/app/services';


// Import our app modules
//import '../../nanowallet/src/app/modules/home';
import '../../nanowallet/src/app/modules/dashboard';
import '../../nanowallet/src/app/modules/signup';
import '../../nanowallet/src/app/modules/login';
import '../../nanowallet/src/app/modules/languages';
import '../../nanowallet/src/app/modules/transferTransaction';
import '../../nanowallet/src/app/modules/portal';
import '../../nanowallet/src/app/modules/apostille';
import '../../nanowallet/src/app/modules/account';
import '../../nanowallet/src/app/modules/multisignature';
import '../../nanowallet/src/app/modules/namespaces';
import '../../nanowallet/src/app/modules/mosaics';
import '../../nanowallet/src/app/modules/explorer';
import '../../nanowallet/src/app/modules/importanceTransfer';
import '../../nanowallet/src/app/modules/changelly';
import '../../nanowallet/src/app/modules/faq';


import './components/';
import './filters/';

/* CUSTOM */
import './modules/loadWallet';
import './modules/balance';
import './modules/transactions';
import './modules/transfer';
import './modules/transferConfirm';
import './modules/account';

// Create and bootstrap application
const requires = [
    'ui.router',
    'templates',
    'app.layout',
    'ionic-material', 
    'ionMdInput',
    'app.components',
    'app.filters',
    //'app.home',
    'app.dashboard',
    'app.transferTransaction',
    'app.createMultisig',
    'app.editMultisig',
    'app.namespaces',
    'app.renewNamespaces',
    'app.createMosaic',
    'app.editMosaic',
    'app.portal',
    'app.explorerHome',
    'app.explorerApostilles',
    'app.explorerNamespacesMosaics',
    'app.accountsExplorer',
    'app.signup',
    'app.login',
    'app.services',
    'app.faq',
    'app.account',
    'app.createApostille',
    'app.auditApostille',
    'app.apostilleHistory',
    'app.apostilleMessage',
    'app.transferApostille',
    'app.updateApostille',
    'app.importanceTransfer',
    'app.multisigImportanceTransfer',
    'ngAnimate',
    'ngSanitize',
    'ngToast',
    'ngStorage',
    'chart.js',
    'pascalprecht.translate',
    'app.lang',
    'app.changelly',


    /* CUSTOM */
    'app.componentsnempay',
    'app.filtersnempay',
    'app.loadWallet',
    'app.balance',
    'app.transactions',
    'app.transfer',
    'app.account',
    'app.transferConfirm',

];

window.$ = window.jQuery = $;

// Load twitter bootstrap with require or jQuery is not defined
require('bootstrap');

// Mount on window
window.app = angular.module('app', requires);

angular.module('app').constant('AppConstants', constants);
angular.module('app').config(appConfig);
angular.module('app').run(appRun);

angular.bootstrap(document, ['app'], {
    strictDi: true
});
