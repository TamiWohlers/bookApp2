var app = angular.module('bookApp2');
var i = 0
readBooks = [];
app.controller('homeCtrl', function($scope, homeService, haveReadService) {

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
            $scope.currentFaves.splice(i -1, 1);
            i--;
            console.log('current faves', $scope.currentFaves);
            $scope.getAll();
        })

    }

    $scope.finishedBook = function(book) {
        // bookObject = {};
        console.log('in finishedbook', book);
        haveReadService.changeReadStatus(book).then(function(data) {
            $scope.getAll();
        })
    }
})

















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
