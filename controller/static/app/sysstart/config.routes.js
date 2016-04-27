(function() {
	'use strict';

	angular
		.module('shipyard.sysstart')
		.config(getRoutes);

	getRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];

	function getRoutes($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('dashboard.sysstart', {
				url: '^/sysstart',
				templateUrl: 'app/sysstart/sysstart.html',
                authenticate: true
			});
	}
})();
