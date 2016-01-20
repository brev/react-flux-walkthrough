// MODEL (Mvc)
var NameStore = {
  _name: '',
  set: function (value) {
    var nameIn = document.getElementsByTagName('input')[0];
    var nameOut = document.getElementsByTagName('span')[0];
    nameIn.value = value;
    nameOut.innerHTML = value;
    this._name = value;
  }
};

// CONTROLLER (mvC)

var form = document.getElementsByTagName('form')[0];  // handle form
form.addEventListener('submit', function(event) {
  var name = event.target.elements[0].value;
  event.preventDefault();
  NameStore.set(name);
});

NameStore.set('Brev');  // init

setTimeout(function() {
  NameStore.set('Yonkers');  // simulate network input
}, 1000 * 8);
