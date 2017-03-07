import angular from 'angular';

// Create the module where our functionality can attach to
let registerModule = angular.module('app.register', []);

// Include our UI-Router config settings
import RegisterConfig from './register.config';
registerModule.config(RegisterConfig);

// Controllers
import RegisterCtrl from './register.controller';
registerModule.controller('RegisterCtrl', RegisterCtrl);

export default registerModule;
