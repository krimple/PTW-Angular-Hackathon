'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('classStuffApp'));

  var scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    console.log('before each test we...');
    scope = $rootScope.$new();
    // we will mock the task service to hold the tasks
    // in memory so the controller acts predictibly.
    $controller('MainCtrl', {
      $scope: scope,
      taskService: {
        tasks: [{
          description: 'do the wash',
          complete: false
        }],
        getTasks: function() {
          return this.tasks;
        },
        addTask: function(task) {
          this.tasks.push(task);
        }
      }
    });
  }));

  it('should add a task array to scope', function () {
    expect(scope.tasks).toBeDefined();
    expect(scope.tasks.length).toBe(1);
  });

  it('should add a task when we call addTask',
    inject(function($log) {
    scope.addTask('a new task');
    expect(scope.tasks.length).toBe(2);
    var task = scope.tasks[1];
    expect(task.description).toBe('a new task');
    expect(task.complete).toBeFalsy();
    expect($log.debug.logs.length).toBe(1);
    expect($log.debug.logs[0][0]).toEqual('added a new task');
  }));
});
