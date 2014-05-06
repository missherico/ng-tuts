app.controller("MainController", function($scope) {

	$scope.selectedPerson = 0;
	$scope.selectedGenre = null;
	$scope.people = [
		{
			id: 0,
			name: 'Leon',
			music: [
				'Rock',
				'Metal',
				'Dubstep',
				'Electro'
			],
			live: true
		},
		{
			id: 1,
			name: 'Chris',
			music: [
				'Indie',
				'Drumstep',
				'Dubstep',
				'Electro'
			],
			live: true
		},
		{
			id: 2,
			name: 'Harry',
			music: [
				'Rock',
				'Metal',
				'Thrash Metal',
				'Heavy Metal'
			],
			live: false
		},
		{
			id: 3,
			name: 'Allyce',
			music: [
				'Pop',
				'RnB',
				'Hip Hop'
			],
			live: true
		}
	];

	// this is creating an event listening, adding new person
	$scope.newPerson = null;
	$scope.addNew = function() {
		if ($scope.newPerson != null && $scope.newPerson != "") {
			$scope.people.push({
				id: $scope.people.length,
				name: $scope.newPerson,
				live: true,
				music: []
			});
		}
	};

	// seeing real-time changes on web page
	$scope.inputValue = "";

	// data binding like a method
	$scope.understand = "I now understand how $scope works. not really.";


});