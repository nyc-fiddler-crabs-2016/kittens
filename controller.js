function Controller(view) {
  this.view = view;
}

Controller.prototype.index = function() {
  Cat.all().then(function(arrayOfCats){
    console.log(arrayOfCats);
    console.log(this);
    this.view.displayCats(arrayOfCats);
  }.bind(this));
}

Controller.prototype.delete = function(id) {
  Cat.deleteOnServer(id).then(function(){
    this.index();  
  }.bind(this));
}

Controller.prototype.create = function(params) {
  var cat = new Cat(params);
  Cat.createOnServer(cat).then(function(){
    this.index();  
  }.bind(this)).fail(function(){
    console.log(arguments);
    alert('Something went wrong. Check console.');
  });
  
}