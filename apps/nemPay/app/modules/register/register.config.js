function RegisterConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('app.register', {
            url: '/register',
            controller: 'RegisterCtrl',
            controllerAs: '$ctrl',
            templateUrl: 'modules/register/register.html',
            title: 'Register'
        });

};

export default RegisterConfig;