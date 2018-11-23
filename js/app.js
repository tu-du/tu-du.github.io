if ('serviceWorker' in navigator) {
  window.addEventListener('load', () =>
    navigator.serviceWorker.register('service-worker.js')
      .then(registration => console.log('Service Worker registered'))
      .catch(err => 'Service Worker registration failed')
  );
}


// Where can we go?
const routes = {
  '/home': login,
  '/clickMe': navigation,
  '/whatDay': calendarView,
  '/taskPage': eventSelect,
  '/newTask': addTask,
  '/profilePage': aboutMe,
  '/remindMe': reminderPage
  // ADD NEW ROUTES HERE THAT POINT TO VIEWS
};


function oneAssignment(_record) {
  return `
    <div class="listItem" data-id="${_record.id}">
      <p class="listItemName">${_record.name}</p>
      <p class="dateDue">October 26</p>
      <div class="sublist">
        <p class="taskAttribute">High Priority</p>
        <p class="taskAttribute">30%</p>
        <p class="taskAttribute">Difficult</p>
      </div>
    </div>
  `
}




// DATA UPDATER:
// Fires every time a page changes
document.getElementById('page').addEventListener('page', function (e) {

  // If the current page is the todoListPage, grab the data for it
  // This needs some improvement
  if (currPage == '/clickMe') {
    // Find the main task list
    var assignmentList = document.getElementById('assignment-list');
    // For each task, call createTask and join them all together with a linebreak between
    assignmentList.innerHTML = _assignment.map(oneAssignment).join('\n');

    // Loop through them all querySelectorAll('.listItem')
    document.querySelectorAll('.listItem').forEach(function(_item) {
      _item.addEventListener('click', function() {
        // DELETE IT
        var deleteRecord = _assignment.find( _record => _record.id == this.getAttribute('data-id') );
        _assignment = _assignment.filter(e => e !== deleteRecord);
        drawPage();
      })
    })
  }

  else if (currPage == '/newTask') {

    // Create a new task based on the values
    document.getElementById('createNewTaskBtn').addEventListener('click', function() {
      var valid = true;
      // Get all the data from the fields.
      var _name = document.getElementById('assignmentNameInput').value;

      // Check that something was set for each. If not, then set valid=false
      if (_name.length < 4) {
        valid = false;
        // Pop up a message or something
      }

      if (valid) {
        // All passed, now create the assignment
        // NOW CREATE AN ASSIGNMENT
        _assignment.push({
          id: 1000,
          name: _name,
          percentage: 30,
          complete: false
        })

        goToPage('/clickMe');
      } // is valid

    }); // create task

  } // /newTask


  // When you show the reminders, FILTER the main list to only have items with complete:false
  // https://blog.mariusschulz.com/2016/07/16/removing-elements-from-javascript-arrays




}, false);





// FAKE DATA
var _assignment = [
  {
    id: 1,
    name: "Whatever",
    percentage: 30,
    complete: false
  },
  {
    id: 2,
    name: "Something else",
    percentage: 30,
    complete: false
  },
  {
    id: 3,
    name: "Ssdfsdfsdf",
    percentage: 30,
    complete: false
  }
];
