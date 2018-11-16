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


// DATA UPDATER:
// Fires every time a page changes
document.getElementById('page').addEventListener('page', function (e) {

  // If the current page is the todoListPage, grab the data for it
  // This needs some improvement
  if (currPage == '/clickMe') {
    // Find the main task list
    var taskList = document.getElementById('taskList');
    // For each task, call createTask and join them all together with a linebreak between
    taskList.innerHTML = tasks.map(createTask).join('\n');

    // Now setup the click listener on the button to add a new task
    document.getElementById('addtask').addEventListener('click', function() {
      // Create a new task based on the user's input value (this is ugly)
      var newTask = {name:document.getElementById('newtask').value, complete:0};
      // Add to our "dataset"
      tasks.push(newTask);
      // createTask creates a new task
      taskList.innerHTML += createTask(newTask);

      // Could also trigger a refresh when the task data is changed (then task data should be a class!!)
    });
  }

}, false);
