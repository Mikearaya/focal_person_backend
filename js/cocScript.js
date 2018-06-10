// Include app dependency on ngMaterial
var app = angular.module('myApp', ['ngRoute',
'ngMessages',
'ngAria',
'ngAnimate'

]);

app.controller("mainController", ["$scope", 
function($scope){

}]);

app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('');
    $routeProvider.caseInsensitiveMatch = true;

    $routeProvider.when('/', {templateUrl: "pages/home.html"});
    $routeProvider.when('/home', {templateUrl: "pages/home.html"});
    $routeProvider.when('/payment', {templateUrl: "pages/paymentManager.html"});
    $routeProvider.when('/register', {templateUrl: "pages/registrationManager.html"});
    $routeProvider.when('/admission', {templateUrl: "pages/admissionManager.html"});
    $routeProvider.when('/schedule', {templateUrl: "pages/scheduleManager.html"});
    $routeProvider.when('/result', {templateUrl: "pages/resultManager.html"});
    $routeProvider.when('/password', {templateUrl: "pages/passwordManager.html"});
    $routeProvider.when('/logIn', {templateUrl: "pages/logIn.html"});
        

}]);

//registration page controller
app.controller("registrationController", ["$scope", function($scope){

}]);

//home page controller
app.controller("homeController", ["$scope", function($scope){

}]);


//payment managment page controller
app.controller("paymentController", ["$scope", function($scope){
  $scope.assessmentPayments = [{
    firstName : "Mikael",
    lastName: "Araya",
    occupation: "Computer Scientist",
    price: 300
  },
  {
    firstName : "Dani",
    lastName: "Belay",
    occupation: "Accountant",
    price: 300
  }];

  $scope.payment = {
    invoiceNo: "",
    date: ""
  }

}]);


//admission card printing page controller
app.controller("admissionController", ["$scope", function($scope){

}]);


//schedule page controller
app.controller("scheduleController", ["$scope", function($scope){

  $scope.assessmentSchedules = [{
        scheduleId : "SCH-001",
        groupId: "G-001",
        location: "Vision College",
        occupation: "OCC-938",
        date: "1-13-2018",
        time: "09:00 ETC"
      },
      {
        scheduleId : "SCH-002",
        groupId: "G-002",
        location: "Vision College",
        occupation: "OCC-977",
        date: "1-13-2018",
        time: "09:00 ETC"
      }];

      $scope.payment = {
        invoiceNo: "",
        date: ""
      }
}]);


//result viewing page controller
app.controller("resultController", ["$scope", function($scope){

}]);


//password reset controller
app.controller("passwordController", ["$scope", function($scope){

}]);



//search controller used for searching events
app.controller('searchCtrl',["$scope", "$http", "$q", "$location",
                            function($scope, $http, $q, $location, $route){

    var searchValue = $scope.searchText;

      $scope.searchItemSelected = function(selected) {
                                $location.path('/eventDetail/'+selected.eventId);
                              };
      $scope.showEventDetail = function(eventId) {
                              $location.path('/eventDetail/'+eventId);
                            };

      $scope.getMatches = function(searchValue ){
                            return $http({
                                            method : 'GET',
                                            url : "includes/systemController.php",
                                            params : {get : "searchEvent", value : searchValue }
                                    })
                                    .then( function mySuccess(response){
                                              return response.data;
                                          },
                                            function myError(response){
                                              return response;
                                          });

                        };

}]);
//Search Controller End

//log in Controller
app.controller('logInController', ["$scope", "$http", "$httpParamSerializerJQLike",
                            function($scope, $http, $httpParamSerializerJQLike){
    var self = this;

    self.user = {
                  password: "",
                  email: ""

              };
      self.hide = function() {
        $mdDialog.hide();
      };
      self.cancel = function() {
        $mdDialog.cancel();
      };
      self.answer = function(answer) {
        $mdDialog.hide(answer);
      };

      self.Submit = function(){
        console.log('loged in');
                      /*    return $http({
                                          method : "POST",
                                          url : "includes/systemController.php",
                                          data : $httpParamSerializerJQLike({form : "log_in", data : self.user })
                                  })
                                  .then(function(response){
                                    console.log(response);
                                    session.create(response.data.organizerId, response.data.organizerName);
                                    self.hide();
                                  });
                                  */
                      };

}]);
//log in Controller