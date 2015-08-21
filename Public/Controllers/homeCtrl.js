var app = angular.module('bookApp2');
app.controller('homeCtrl', function($scope, homeService) {
    $scope.inputVisible = false;
    $scope.loadArray = false;
    var dataBaseBook = {};
    $scope.currentFaves = [];
    console.log($scope.currentFaves);
    var bookObject = {};
    var book = {};
    var i = 0;
    // $scope.currentFaves = [];

    $scope.searchForBook = function(title, author) {
        console.log('in controller', title, author);
        homeService.searchForBook(title, author).then(function(data) {
            // console.log(data);
            bookObject = {};
            // $scope.books = data;

            bookObject.author = data.items[0].volumeInfo.authors[0];
            // console.log(bookObject.author);
            bookObject.title = data.items[0].volumeInfo.title;
            bookObject.image = data.items[0].volumeInfo.imageLinks.smallThumbnail;
            bookObject.review = data.items[0].searchInfo.textSnippet;
            bookObject.rating= data.items[0].averageRatings;
            // console.log($scope.bookObject.review);
            bookObject.id = data.items[0].id;
            $scope.currentFaves[i] = (bookObject);
            i++;
            console.log('in Search', $scope.currentFaves)
            // $scope.currentFaves.push(bookObject);
     
     })  
    
    }
    
    $scope.postBook = function(book){
        homeService.postBook(book).then(function(data){
        console.log('in postbook', data);
        })
    }

    $scope.findAndDeleteBook = function(book){
        console.log("first line in findAndDelete", book)
        homeService.findBook(book).then(function(data){
            // console.log('in findbook', data);
            // dbBook = data;
            // console.log(dbBook)
        homeService.deleteBook(data);
        $scope.currentFaves.splice(i-1, 1);
        i = i-1;
        console.log('current faves', $scope.currentFaves);
        })
    }

    // $scope.getAll = function() {
    //     homeService.getAll().then(function(data){
    //         $scope.currentFaves = data;
    //         console.log('in getAll', data);
    //     })
    // }

})






    // app.controller('teamCtrl', function($scope, $routeParams, teamService, teamData){
    //   $scope.teamData = teamData;
    //   console.log($scope.teamData);
    //   $scope.newGame = {};
    //   $scope.showNewGame = false;
    //   $scope.toggleNewGameForm = function() {
    //     $scope.showNewGame = true;
    //     }
    //    var teamId = $routeParams.team;
    //     if(teamId === 'utahjazz') {
    //         $scope.teamName = 'Utah Jazz';
    //         $scope.logoPath = 'images/jazz-logo.png';
    //     }
    //     else if(teamId === 'losangeleslakers') {
    //         $scope.teamName = 'Los Angeles Lakers';
    //         $scope.logoPath = 'images/lakers-logo.png';
    //     }
    //     else if(teamId === 'miamiheat') {
    //         $scope.teamName = 'Miami Heat';
    //         $scope.logoPath = 'images/heat-logo.png'
    //     }
    //     $scope.submitGame = function(){

    //     }
    //     });





    // app.controller('adminCtrl', function($scope, adminService) {
    //     // var shirt = "t-shirt";
    //     adminService.getProducts().then(function(data) {
    //         console.log(data);
    //         $scope.items = data;
    //     })
    // var _url = 'https:/Services/homeService';

    // var data = {
    //     rating: rating
    // };

    // $http.post(_url, angular.toJson(data), {
    //         cache: false
    //     })
    //     .success(function(data) {
    //         success(data);
    //     })
    //     .error(function(data) {
    //         error(data);
    //     });

