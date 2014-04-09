(function() {
  'use strict';

  angular.module('classStuffApp')
    .controller('MainCtrl',
      function ($scope, $log, taskService) {

      $scope.tasks = taskService.getTasks();

      $scope.addTask = function(description) {
        taskService.addTask({
          complete: false,
          description: description,
          dueDate: new Date()
        });

        $log.debug('added a new task');
      };

      $scope.completeTask = function(task) {
        task.complete = true;
      };

      $scope.saveTasks = function () {
        taskService.saveTasks();
      };
    });
}());

