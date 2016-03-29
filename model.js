var API_BASE='https://stark-harbor-5038.herokuapp.com/cats'

function Cat(json) {
  Object.assign(this, json);
  this.bornOn = new Date(json.born_on);
}

Cat.prototype.age = function() {
  return "I was born on " + this.bornOn;
}

Cat.deleteOnServer = function(id) {
   return $.ajax({
    url: API_BASE + '/' + id,
    type: 'DELETE',
    dataType: 'json'
   });
}

Cat.createOnServer = function(cat) {
   return $.ajax({
    url: API_BASE,
    type: 'POST',
    data: cat,
    dataType: 'json'
   });
}

Cat.all = function() {
  return $.get(API_BASE).then(function(response){
    return response.map(function(catJson){
      return new Cat(catJson);
    });
  });
}
