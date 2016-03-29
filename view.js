function View() {

}

View.prototype.setupEvents = function() {
  $(document).on('click', '.delete', this.deleteCat.bind(this));
  $('#new_cat_form').on('submit', this.handleSubmit.bind(this));
}

View.prototype.deleteCat = function(event) {
  var id = event.target.dataset.id;
  this.controller.delete(id);
}

View.prototype.handleSubmit = function(event) {
  event.preventDefault();
  var params = {
    name: document.getElementById('cat_name').value,
    breed_id: document.getElementById('cat_breed_id').value,
    born_on: document.getElementById('cat_born_on').value,
    image_url: document.getElementById('cat_image_url').value
   };
   this.controller.create(params);
}

View.prototype.displayCats = function(catArray) {
  var html = '';
  catArray.forEach(function(cat){
   html += '  <div class="cat"> ';
   html += ' <h3> ' +  cat.name + '</h3> ';
   html += ' <img src="' + cat.image_url + '"> ' + cat.breed_name;
   html += ' <button class="delete" data-id="' + cat.id + '">delete</button>  ';
   html += '</div>';
  });
  $('#cat-list').html(html);

}