var mainCtrl = function($scope){

    $scope.users = [
        { "name":"yamada","score":30.11},
        { "name":"taguchi","score":22.11},
        { "name":"tanaka","score":49.40},
        { "name":"ichiro","score":60.11},
        { "name":"ziro","score":25.11},
        { "name":"saburo","score":70.40},
        { "name":"shiro","score":99.11},
        { "name":"goro","score":48.11},
        { "name":"rokuro","score":80.40}
    ];
//    $scope.addUser = function(){
//        console.log($scope.users.length);
//        $scope.users[$scope.users.length] =$scope.user;
//    }
    $scope.addUser = function(){
        console.log($scope.users.length);
        $scope.$apply(function () {
            $scope.users[$scope.users.length] = $scope.user;
        });
    }
    $scope.today = new Date();

    $scope.usersNotYet= [
        { "name":"choi","score":77.11},
        { "name":"fugafuga","score":10.40},
        { "name":"akabane","score":1.40},
        { "name":"boss","score":90.11,"lank":1}
    ];
};
var bto= function($scope){
    $scope.pc = [
        {"part":"cpu","value":20000},
        {"part":"matherBord","value":15000},
        {"part":"memory","value":12000},
        {"part":"case","value":8000}
    ];
};
var userItemCtrl= function ($scope) {
    $scope.increment = function () {
        $scope.member.score++;
    };
};