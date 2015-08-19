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

// app.get('app', function($http, $q) {
//     this.searchForBook = function(title, author) {
//         console.log('in search', title, ' ', author)
//         var deferred = $q.defer();
//         console.log('url ', url);
//       $http({
//             method: 'GET',
//             url: url
//         }).then(function(data) {
//             deferred.resolve(data.data)
//         })
//         return deferred.promise;
//  }



    this.deleteBook = function(title) {
        var found = false;
        for (var i = 0; i < this.currentFaves.length; i++)
            if (this.currentFaves[i].title ===title) {
                found = true;
                this.currentFaves.splice(i, 1);
                break;
            }
          if (!found) console.log('Book not found');

}
});
//     this.searchForBook = function(title, author) {
//         console.log('in Service');
//         console.log('book array', this.currentFaves);
//         var found = false;
//         for (var i = 0; i < this.currentFaves.length; i++)
//             if ((this.currentFaves[i].title === title) && (this.currentFaves[i].author === author)) {
//                 found = true;
//                 console.log("found it")
//                 var newBook = this.currentFaves[i];
//                 this.currentFaves.push(newBook);
//                 break;
//             }
//         if (!found) console.log('Book not found');
// }



    // this.postProducts = function(item){
    //     var deferred = $q.defer();      
    //     var url = '/api/books'
    //     return $http({
    //         method: 'POST',
    //         url: url,
    //         data: item    
    //     }).then(function(data){
    //         console.log(data);
    //         deferred.resolve(data); 
    //     }) 
    //     return deferred.promise;
 //}

 //    this.deleteProducts = function(item){
 //        var deferred = $q.defer();
 //        var url = '/api/products/' + item
 //        return $http({
 //            method: 'DELETE',
 //            url: url,
 //            data: item
 //        }).then(function(data){
 //            console.log(data);
 //            deferred.promise;
 //        })
 //    }
 //app.service('homeService', function(){
// this.currentFaves = [{
//         title: "The Nightingale",
//         author: "Kristin Hannah",
//         image: 'https://d.gr-assets.com/books/1422580224s/21853621.jpg',
//         rating: 5
//     }, {
//         title: "Big, Little Lies",
//         author: "Liane Moriarty",
//         image: 'https://d.gr-assets.com/books/1399582436s/19486412.jpg',
//         rating: 5
//     }, {
//         title: "Girl on the Train",
//         author: "Paula Hawkins",
//         image: 'https://d.gr-assets.com/books/1421709869s/22557272.jpg',
//         rating: 5
//     }]

    















    