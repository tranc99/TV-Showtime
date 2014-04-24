app.controller("mainController", function($scope, $http){
 
    $scope.apiKey = "8373be61e9e1dab0f66ab12753b68702";
    $scope.results = []
    $scope.init = function() {
        //API requires a start date
        var today = new Date();
        //Create the date string and ensure leading zeros if required
        var apiDate = today.getFullYear() + ("0" + (today.getMonth() + 1)).slice(-2) + "" + ("0" + today.getDate()).slice(-2);
        $http.jsonp('http://api.trakt.tv/calendar/premieres.json/' + $scope.apiKey + '/' + apiDate + '/' + 30 + '/?callback=JSON_CALLBACK').success(function(data) {
            angular.forEach(data, function(value, index) {
            	var date = value.date;
            	angular.forEach(value.episodes, function(tvshow, index) {
            		tvshow.date = date;
            		$scope.results.push(tvshow);
            	})
            })
        console.log($scope.results);

        }).error(function(error) {
 
        });
    };
 
});