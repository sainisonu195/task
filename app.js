 var app= angular.module("myApp",[]);
app.controller("myCtr",function($scope, $http){
    $http.get("data.json").then(function(item){
        $scope.Students=item.data;
    })

    $scope.removeStudent=function(User){
        var removedStudent=$scope.Students.indexOf(User);
        $scope.Students.splice(removedStudent,1)
    }
    $scope.addStudents=function(){
        $scope.Students.push({
            name:$scope.newName,
            age:$scope.newAge,
            company:$scope.newCompany
        })
    
    }
 
});
