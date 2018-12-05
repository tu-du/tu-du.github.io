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
  <p class="dateDue">${_record.daTe}</p>
  <img src="images/icons/trash.svg" class="deleteButton" data-id="${_record.id}">
  <div class="sublist">
  <p class="taskAttribute">${_record.priority} Priority</p>
  <p class="taskAttribute">${_record.percentage}%</p>
  <p class="taskAttribute">${_record.difficulty} Difficulty</p>
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
    document.querySelectorAll('.deleteButton').forEach(function(_item) {
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
      var _value = document.getElementById('assignmentValueInput').value;


      function turnRed() {
        var myPara = document.getElementById("assignmentNameInput");
        myPara.style.color = "red";
      }

      function turnRed2() {
        var myValue = document.getElementById("assignmentValueInput");
        myValue.style.color = "red";
      }

      // Check that something was set for each. If not, then set valid=false
      if (_name.length < 4) {
        valid = false;
        turnRed();
        // Pop up a message or something
      }

      if (_value.length > 2) {
        valid = false;
        turnRed2();
      }

      var _group1 = document.querySelector('input[name="group1"]:checked').value;
      var _group2 = document.querySelector('input[name="group2"]:checked').value;

      function turnRed3() {
        var myRadio = document.getElementById("difficultyTitle");
        myRadio.style.color = "red";
      }

      if (_group1 == null) {
        valid=false;
        turnRed3();
      }


      if (valid) {
        // All passed, now create the assignment
        // NOW CREATE AN ASSIGNMENT
        _assignment.push({
          id: 1000,
          name: _name,
          percentage: _value,
          difficulty: _group1,
          priority: _group2,
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
    daTe: "November 30th",
    percentage: 30,
    complete: false,
    priority: "Medium",
    difficulty: "hard"
  },
  {
    id: 2,
    name: "Something else",
    daTe: "December 3rd",
    percentage: 85,
    complete: false,
    priority: "Lowish",
    difficulty: "easy"
  },
  {
    id: 3,
    name: "Ssdfsdfsdf",
    daTe: "December 5th",
    percentage: 36,
    complete: false,
    priority: "Lowest",
    difficulty: "medium"
  },
  {
    id: 4,
    name: "Another One",
    daTe: "December 6th",
    percentage: 55,
    complete: false,
    priority: "high",
    difficulty: "hard"

  },  {
    id: 5,
    name: "DJ Khaled",
    daTe: "December 8th",
    percentage: 25,
    complete: false,
    priority: "high",
    difficulty: "easy"

  }
];
