angular.module('bookApp2').controller('ModalInstanceCtrl', function ($scope, $modalInstance) {

  // $scope.items = items;
  // $scope.selected = {
  //   item: $scope.items[0]
  // };

  console.log("star rating", $scope.starRating)
  $scope.ok = function () {
    var bookReviewed = {};
    bookReviewed.rating = $scope.rating;
    bookReviewed.review = $scope.review;
    $modalInstance.close(bookReviewed);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});