
function save_options() {
  var Class1 = document.getElementById('first').value;
  var Class2 = document.getElementById('second').value;
  var Class3 = document.getElementById('third').value;
  var Class4 = document.getElementById('fourth').value;
  //var likesColor = document.getElementById('like').checked;

  chrome.storage.sync.set({
    'firstClass': Class1,
    'secondClass': Class2,
    'thirdClass': Class3,
    'fourthClass': Class4
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
    'firstClass': 'Block A',
    'secondClass': 'Block B',
    'thirdClass': 'Block C',
    'fourthClass': 'Block D'
  }, function(items) {
    document.getElementById('first').value = items.firstClass;
    document.getElementById('second').value = items.secondClass;
    document.getElementById('third').value = items.thirdClass;
    document.getElementById('fourth').value = items.fourthClass;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
