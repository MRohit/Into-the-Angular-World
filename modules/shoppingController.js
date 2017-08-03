mainApp.controller("shoppingController", function($scope) {
    $scope.myCart = {
      name:"Paul Walker",
      items:[
        {name:"Grocery",price:1000,category:"Kitchen"},
        {name:"Wire",price:150,category:"Electrical"},
        {name:"Charger",price:200,category:"Electrical"},
        {name:"Jeans",price:1500,category:"Clothes"},
        {name:"Combiflame",price:5,category:"Medical"},

        {name:"Rice",price:100,category:"Kitchen"},
        {name:"Laptop",price:107600,category:"Electrical"},
        {name:"Mouse",price:350,category:"Electrical"},
        {name:"Shirt",price:190,category:"Clothes"},
        {name:"Ciplex",price:10,category:"Medical"}
      ],

      totalAmount:function(){
        var sum=0;
        angular.forEach($scope.selected ,function(item){
          sum=sum+item.price;
        });
        return sum;
      }
    };
    $scope.selected=[];
});
