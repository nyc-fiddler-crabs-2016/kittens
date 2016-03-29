$(document).ready(function(){
  var view = new View();
  var controller = new Controller(view);
  view.controller = controller;
  controller.index();
  view.setupEvents();
});