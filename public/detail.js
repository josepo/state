angular.module('app').controller('detail', function($scope, $state, $stateParams) {
   $scope.comment = angular.copy($state.current.data.comments[$stateParams.id]);

   $scope.save = function() {
      $state.current.data.comments[$stateParams.id] = $scope.comment;
      $state.go('^');
   };
});
