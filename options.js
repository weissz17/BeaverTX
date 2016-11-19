
function save_options() {
  var Class1 = document.getElementById('first').checked;
  var Class2 = document.getElementById('second').checked;
  var Class3 = document.getElementById('third').checked;
  var Class4 = document.getElementById('fourth').checked;
  var Class5 = document.getElementById('fifth').checked;
  var minute = document.getElementById('number').value;

  //var likesColor = document.getElementById('like').checked;

  chrome.storage.sync.set({
    'firstClass': Class1,
    'secondClass': Class2,
    'thirdClass': Class3,
    'fourthClass': Class4,
    'fifthClass': Class5,
    'minutes': minute
    //likesColor: likesColor
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}


// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    'firstClass': true,
    'secondClass': true,
    'thirdClass': true,
    'fourthClass': true,
    'fifthClass': false,
    'minutes': 15
  }, function(items) {
    document.getElementById('first').checked = items.firstClass;
    document.getElementById('second').checked = items.secondClass;
    document.getElementById('third').checked = items.thirdClass;
    document.getElementById('fourth').checked = items.fourthClass;
    document.getElementById('fifth').checked = items.fifthClass;
    document.getElementById('number').value = items.minutes;

  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
