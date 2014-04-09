(function() {
  'use strict';

  angular.module('classStuffApp')
    .factory('taskService', function($log) {
      function loadTasks() {
        if (tasks === undefined) {
          if (localStorage === undefined) {
            tasks = [];
            $log.debug('no local storage');
          } else {
            var taskData = localStorage.tasks;
            if (taskData === undefined) {
              $log.debug('no task data - creating.');
              tasks = [];
            } else {
              $log.debug('loaded tasks', taskData);
              tasks = JSON.parse(taskData);
            }
          }
        }
      }
      var tasks,
          service = {};

      service.getTasks = function() {
        loadTasks();
        return tasks;
      };

      service.addTask = function(task) {
        tasks.push(task);
        this.saveTasks();
      };

      service.saveTasks = function() {
        if (localStorage !== undefined) {
          localStorage.tasks = JSON.stringify(tasks);
        }
      }

      return service;

    });

}());