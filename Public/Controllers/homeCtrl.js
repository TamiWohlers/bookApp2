var app = angular.module('bookApp2');
var i = 0
readBooks = [];
app.controller('homeCtrl', function($scope, homeService, haveReadService, $modal, $log) {

    $scope.getAll = function() {
        homeService.getAll().then(function(data) {
            // console.log(data);
            $scope.getCurrent(data);
            // $scope.currentFaves = data;
            // console.log('in getAll on home.Ctrl', data);
            i = data.length;
        })
    }
    $scope.getCurrent = function(data) {
        var newReadArray = [];
        for (var i = 0; i < data.length; i++) {
            if (data[i].readStatus === 'currently reading') {
                newReadArray.push(data[i]);
            }
        }
        $scope.currentFaves = newReadArray;
    }
    $scope.getAll();
    $scope.inputVisible = false;
    $scope.loadArray = false;
    var dataBaseBook = {};
    $scope.currentFaves = [];
    // console.log($scope.currentFaves);
    var bookObject = {};
    var book = {};
    // var i = 0;
    // $scope.currentFaves = [];

    // $scope.getAll= function() {
    //     homeService.getAll();
    // }
    // $scope.getAll(); 
    $scope.postBook = function(book) {
        homeService.postBook(book).then(function(data) {

        })
    }
    $scope.bookObject = {};
    $scope.searchForBook = function(title, author) {

        // console.log('in controller', title, author);
        homeService.searchForBook(title, author).then(function(data) {
            // console.log(data)

            homeService.buildObject($scope.bookObject, data);

            $scope.bookObject.readStatus = 'currently reading';
            $scope.postBook($scope.bookObject);
            $scope.getAll();

            // console.log('in Search', $scope.currentFaves)
            // $scope.currentFaves.push(bookObject); 

        })
    }




    $scope.findAndDeleteBook = function(book) {
        console.log("first line in findAndDelete", book)
        homeService.findBook(book).then(function(data) {
            // console.log('in findbook', data);
            // dbBook = data;
            // console.log(dbBook)
            homeService.deleteBook(data);
            $scope.currentFaves.splice(i - 1, 1);
            i--;
            console.log('current faves', $scope.currentFaves);
            $scope.getAll();
        })

    }

    
    $scope.modalShown = false;   
    $scope.toggleModal = function() {
    $scope.modalShown = !$scope.modalShown;
}

// $scope.items = ['item1', 'item2', 'item3'];

  $scope.animationsEnabled = true;
  $scope.reviewNotFinished = true;
  $scope.open = function (size) {

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      // resolve: {
      //   items: function () {
      //     return $scope.items;
      //   }
      // }
    });

    modalInstance.result.then(function (bookReviewed) {
      // $scope.selected = selectedItem;
      console.log(bookReviewed);
      $scope.finishedBook = function(book) {
        // bookObject = {};
        console.log('in finishedbook', book);
        haveReadService.changeReadStatus(book, bookReviewed).then(function(data) {
            $scope.getAll();
        })
    }
      // console.log(bookReview);
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

});



// angular.module('bookApp2').controller('ModalInstanceCtrl', function ($scope, $modalInstance) {
//     console.log($scope.starRating)
//   // $scope.items = items;
//   // $scope.selected = {
//   //   item: $scope.items[0]
//   // };
//   // $scope.open = function (size) {

//   //   var modalInstance = $modal.open({
//   //     animation: $scope.animationsEnabled,
//   //     templateUrl: 'myModalContent.html',
//   //     controller: 'ModalInstanceCtrl',
//   //     size: size,
//   //     // resolve: {
//   //     //   items: function () {
//   //     //     return $scope.items;
//   //     //   }
//   //     // }
//   //   });

//   //   modalInstance.result.then(function (selectedItem) {
//   //     $scope.selected = selectedItem;
//   //   }, function () {
//   //     $log.info('Modal dismissed at: ' + new Date());
//   //   });
//   // };

//   $scope.ok = function () {
//     $modalInstance.close("hi there");
//   };

//   $scope.cancel = function () {
//     $modalInstance.dismiss('cancel');
//   };
// });














// app.controller('adminCtrl', function($scope, adminService) {
//     // var shirt = "t-shirt";
//     adminService.getProducts().then(function(data) {
//         console.log(data);
//         $scope.items = data;
//     })
// var _url = 'https:/Services/homeService';



// $http.post(_url, angular.toJson(data), {
//         cache: false
//     })
//     .success(function(data) {
//         success(data);
//     })
//     .error(function(data) {
//         error(data);
//     });
