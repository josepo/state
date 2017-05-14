angular.module('app').controller('main', function($scope, $state) {
   if (Object.keys($state.current.data.comments).length === 0) {
      $state.current.data.comments = {
         CID1: {
            title: 'First comment', text: 'Text for my first comment'
         },
         CID2: {
            title: 'Second comment', text: 'Text for my second comment'
         }
      }
   }

   $scope.comments = $state.current.data.comments;
});
