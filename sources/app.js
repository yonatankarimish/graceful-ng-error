/**
 * Created by Yonatan on 23/02/2017.
 */
angular.module('app', []);
angular.module('app').controller('graceController', [function(){
    var ctrl = this;

    ctrl.textTest="";
    ctrl.numTest=0;
    ctrl.passTest="";

    ctrl.validate = function(){
        console.log('test');
        console.log(ctrl.aForm);
    };
}]);