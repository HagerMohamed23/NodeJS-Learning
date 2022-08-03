(function () {
  'use strict';

angular.module('Assignment1', []).controller('CalcItems', CalcItems);

CalcItems.$inject = ['$scope'];

 function CalcItems($scope) {
   //$scope.items = "";
  //let msg = Check($scope.items);
  //$scope.message = msg;
  let msg;
  $scope.Check = function ()
   {
     let item = $scope.items;
     if(!item) {
       msg = "Please enter data first";
       $scope.message = msg;
       return;
    }
     const str = item.split(',');
     console.log(str);
     let count = str.length;
     if(count >= 1 && count <= 3) {
       console.log("enjoy");
       msg = "Enjoy!";
    }
    else if(count > 3) {
      console.log("too much");
       msg = "Too much!";
    }
    $scope.message = msg;
   }
  }

}) ();
