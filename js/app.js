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
  var date = moment(_record.date, "YYYYMMDD").fromNow();

  return `
  <div class="listItem" data-id="${_record.id}">
  <p class="listItemName">${_record.name}</p>
    <img src="images/icons/trash.svg" class="deleteButton" data-id="${_record.id}">
  <p class="dateDue">${date}</p>
  <div class="sublist">
  <p class="taskAttribute">${_record.priority} Priority</p>
  <p class="taskAttribute">${_record.percentage}%</p>
  <p class="taskAttribute">${_record.difficulty} Difficulty</p>
  </div>
  </div>
  `
}

// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// function simpleAssignment(_record) {
//   return `<div class="reminderslistItem">
//             <h3>${_record.name}</h3>
//             <p>${months[_record.date.m - 1]} ${_record.date.d}</p>
//           </div>`;
// }

function simpleAssignment(_record) {
  var date = moment().add(1, `${_record.date.d}`).calendar();
  return `<div class="reminderslistItem">
            <h3>${_record.name}</h3>
            <p>${date}</p>
          </div>`;
}


// DATA UPDATER:
// Fires every time a page changes
document.getElementById('page').addEventListener('page', function (e) {

  $('[data-toggle="datepicker"]').datepicker({ format: 'yyyy-mm-dd', autoHide: true });

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

      // var _year = document.getElementById('yearInput').value;
      // var _month = document.getElementById('monthInput').value;
      // var _day = document.getElementById('dayInput').value;

      var _date = document.querySelector('input[name="dueDate"]').value;

      if (valid) {
        // All passed, now create the assignment
        // NOW CREATE AN ASSIGNMENT
        _assignment.push({
          id: 1000,
          name: _name,
          date: _date,
          percentage: _value,
          difficulty: _group1,
          priority: _group2,
          complete: false
        })

        goToPage('/clickMe');
      } // is valid

    }); // create task

  } // /newTask

  else if (currPage == '/remindMe') {

    var reminderList = document.getElementById('all-reminders');
    // For each reminder, call createTask and join them all together with a linebreak between
    reminderList.innerHTML = _assignment.map(simpleAssignment).join('\n');


  }

  // When you show the reminders, FILTER the main list to only have items with complete:false
  // https://blog.mariusschulz.com/2016/07/16/removing-elements-from-javascript-arrays




}, false);




// FAKE DATA
var _assignment = [
  {
    id: 1,
    name: "Interactive Video Final",
    date: "2018-12-05",
    percentage: 30,
    complete: false,
    priority: "Medium",
    difficulty: "Hard"
  },
  {
    id: 2,
    name: "Ergonomics Assignment 6",
    date: "2018-12-05",
    percentage: 20,
    complete: false,
    priority: "Low",
    difficulty: "Easy"
  },
  {
    id: 3,
    name: "Interactive Systems Final",
    date: "2018-12-05",
    percentage: 50,
    complete: false,
    priority: "Low",
    difficulty: "Med"
  },

];
