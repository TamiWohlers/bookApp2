// app.service('homeService', function() {
    var app = angular.module("bookApp2");
    
    // app.service('homeService', function(){

app.service('homeService', function($http, $q) {
    this.currentFaves = [];
    this.searchForBook = function(title, author) {
        var deferred = $q.defer();
        var url = 'https://www.googleapis.com/books/v1/volumes?q=' + title + '+inauthor:' + author + '&key=AIzaSyClPKaQQ-2oJbYfY_R9Rh3R5asYjevI9BQ';
        console.log(url);
        $http({
            method: 'GET',
            url: url
        }).then(function(data) {
            deferred.resolve(data.data)
        })
        return deferred.promise;
}

    this.findBook= function(book) {
        // console.log("first line of findBook", book);
        var deferred = $q.defer();
        book.title = book.title.toLowerCase(); 
        // console.log(book.title);  
        var url = '/api/books?title=' + book.title;
        $http({
            method: 'GET',
            url: url
        }).then(function(data) {
            deferred.resolve(data.data)
        })
        return deferred.promise;
    }

    this.postBook = function(book){
        var deferred = $q.defer();      
        var url = '/api/books/'
        // return 
        $http({
            method: 'POST',
            url: url,
            data: book   
        }).then(function(data){
            console.log(data);
            deferred.resolve(data); 
        }) 
        return deferred.promise;
 }

    this.deleteBook = function(dataBaseBook){
        var deferred = $q.defer();
        var url = '/api/books/' + dataBaseBook._id;
        // return 
        $http({
            method: 'DELETE',
            url: url,
        }).then(function(data){
            console.log(data);
            deferred.resolve(data);
        })
        return deferred.promise;
}

    

 this.getAll= function() {
        console.log('in getAll on service')
        var deferred = $q.defer();  
        var url = '/api/books/all';
        $http({
            method: 'GET',
            url: url
        }).then(function(data) {
            deferred.resolve(data.data)
            console.log(data);
        })
        return deferred.promise;
    }

});

