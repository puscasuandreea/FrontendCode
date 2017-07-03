/**
 * Created by Andreea.Puscasu on 6/30/2017.
 */
$scope.title='Title Two Binding Demo';
$scope.childTemplate='templates.childscope.html';
$scope.resetFirstVariable=function () {
        $scope.firstVariable=undefined;
    
};
$scope.setFirstVariable=function () {
        $scope.firstVariable = val;
};