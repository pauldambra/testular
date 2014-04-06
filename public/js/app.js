(function(app) {
	app.factory('thingApi', function($resource) {
		return $resource('/api/things/:id', {id:'@id'});
	});

	app.controller('ModalInstanceCtrl', function ($scope, $modalInstance, thing) {
		$scope.thing = thing;

		$scope.ok = function () {
			$modalInstance.close('ok');
		};

		$scope.cancel = function () {
			$modalInstance.dismiss('cancel');
		};
	});

	app.controller('thingsCtrl', function($scope, $modal, thingApi) {
		$scope.things = thingApi.query();

		$scope.open = function (thing) {
			var modalInstance = $modal.open({
				templateUrl: 'modalTemplate',
				controller: 'ModalInstanceCtrl',
				resolve: {
					thing: function () {
						return thing;
					}
				}
			});
		};
	});
}(window.App = angular.module('thingApp',['ngResource', 'ui.bootstrap'])));