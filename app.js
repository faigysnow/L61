// Define the` module
var bookName = angular.module('bookName', []);

bookName.service('cartService', function(){
    this.booksInCart = [];
    this.addToCart = function (x) {
     this.booksInCart.push(x);
     console.log(this.booksInCart);   
    };
    this.getItemsFromCart = function(){
        return JSON.stringify(this.booksInCart);
    }
});



bookName.controller('booksCtrl', function booksCtrl($scope, cartService) {
    $scope.books = [
        {
            isbn: 123,
            name: 'Little House On The Praire',
            img: {
                src: 'img/1.jpg',
                width: '250px'
            }
        },
        {
            isbn: 234,
            name: 'Pride and Prejudice',
            img: {
                src: 'img/2.jpg',
                width: '250px'
            }
        },
        {
            isbn: 345,
            name: 'The Adventures of Huckleberry Fin',
            img: {
                src: 'img/3.jpg',
                width: '250px'
            }
        }
    ];

    
  
$scope.addItem = function(isbn) {
        cartService.addToCart(isbn);
    }

});
``
bookName.controller('showCartCtrl', function showCartCtrl($scope, cartService) {
    $scope.getCart = function() {
        $scope.items = cartService.getItemsFromCart();
    }
    
});

bookName.controller('buyCtrl', function showCartCtrl($scope, cartService, orderService) {
    $scope.user = {
        firstname: '',
        lastname: ''
    }

    $scope.order = function() {
        orderService.placeOrder($scope.user, cartService.getItemsFromCart())
    }
});