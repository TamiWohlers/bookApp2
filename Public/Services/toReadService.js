var app = angular.module("bookApp2");
    
    // app.service('homeService', function(){

app.service('toReadService', function($http, $q) {
    this.buildCart = function(book) {
        // console.log('in addToCart', book)
        var dfd = $q.defer()
        var cart = {};
        cart.Product = "Book";
        cart.Title = book.title;
        cart.Price = book.price;
        console.log('cart', cart);
        dfd.resolve(cart)
        return dfd.promise;    
        }
	this.addToCart= function(cart){
        console.log('add to cart', cart)
        var deferred = $q.defer();      
        var url = '/api/cart/'
        // return 
        $http({
            method: 'POST',
            url: url,
            data: cart  
        }).then(function(data){
            console.log(data);
            deferred.resolve(data); 
        }) 
        return deferred.promise;
    }

 });