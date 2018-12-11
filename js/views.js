let login = `

<div>
  <img class="loginGraphic" src="img/logingraphic.png"></img>
</div>

<div class="loginContainer">
  <p class="loginWelcome">Welcome Back</p>

  <p class="emailField">EMAIL
    <input type="email"></input>
  </p>

  <p class="passwordField">PASSWORD
    <input type="password"></input>
  </p>
</div>

<a href="/clickMe" style="color: #FFFDF5"><p class="loginButtonContainer"><button class="loginButton">SIGN IN</button></p></a>
`;

let navigation = `

<div class="header">
  <h1>MY ASSIGNMENTS</h1>
</div>

<div class="container">
  <a href="/newTask"><input type="image" class="newTaskButton" src="img/icons/addtask-button.svg"></input></a>

  <div class="list" id="assignment-list">
    <!--
    <div class="listItem">
    <p class="listItemName">Interactive Systems Timeline</p>
    <p class="dateDue">October 26</p>
    <div class="sublist">
    <p class="taskAttribute">High Priority</p>
    <p class="taskAttribute">30%</p>
    <p class="taskAttribute">Difficult</p>
  </div>
</div>

<div class="listItem">
<p class="listItemName">Ergonomics Video Presentation</p>
<p class="dateDue">November 2</p>
<div class="sublist">
<p class="taskAttribute">High Priority</p>
<p class="taskAttribute">30%</p>
<p class="taskAttribute">Difficult</p>
</div>
</div>

<div class="listItem">
<p class="listItemName">Portfolio Rough Draft Resume</p>
<p class="dateDue">November 14</p>
<div class="sublist">
<p class="taskAttribute">High Priority</p>
<p class="taskAttribute">30%</p>
<p class="taskAttribute">Difficult</p>
</div>
</div>
-->
</div>
<ul class="bottom">
  <li><a href="/whatDay"><img src="img/nav/calendar.svg"></a></li>
  <li><img src="img/nav/list-selected.svg"></li>
  <li><a href="/newTask"><img src="img/nav/add-task.svg"></a></li>
  <li><a href="/remindMe"><img src="img/nav/reminder.svg"></a></li>
  <li><a href="/profilePage"><img src="img/nav/profile.svg"></a></li>
</ul>
`;

let eventSelect = `
<div class="navMenu">
  <p class="closeMenu"><button><a href="/clickMe">Close</button></p></a>


  <div class="navSection">
    <h2>Pitch Presentation</h2>
    <p>Due Today</p>
    <p>9:00AM</p>
  </div>

  <div class="navSection">
    <h2>Tasks</h2>
  </div>

  <div class="navSection">
    <h2>Calendar</h2>
  </div>
</div>
`;

let calendarView = `
<div class="calendarTitle">
    <!-- <p>&#9776;</p> -->
    <p>CALENDAR</p>
  </div>

  <div class="month">
    <ul>
    <li class="monthname sec">October</li>
    <li class="monthname sec">November</li>
      <li id="demo1"></li>
    </ul>
  </div>

<ul class="weekdays">
<li week-day="sun">S</li>
<li week-day="mon">M</li>
<li week-day="tue">T</li>
<li week-day="wed">W</li>
<li week-day="thu">T</li>
<li week-day="fri">F</li>
<li week-day="sat">S</li>
</ul>



  <ul class="calendar">
    <li data-date="blank"></li>
    <li data-date="blank"></li>
    <li data-date="blank"></li>
    <li data-date="blank"></li>
    <li data-date="blank"></li>
    <li data-date="blank"></li>
    <li data-date="2018-10-1">1</li>
    <li data-date="2018-10-2">2</li>
    <li data-date="2018-10-3">3</li>
    <li data-date="2018-10-4">4</li>
    <li data-date="2018-10-5">5</li>
    <li data-date="2018-10-6">6</li>
    <li data-date="2018-10-7">7</li>
    <li data-date="2018-10-8">8</li>
    <li data-date="2018-10-9">9</li>
    <li data-date="2018-10-10">10</li>
    <li data-date="2018-10-11">11</li>
    <li data-date="2018-10-12">12</li>
    <li data-date="2018-10-13">13</li>
    <li data-date="2018-10-14">14</li>
    <li data-date="2018-10-15">15</li>
    <li data-date="2018-10-16">16</li>
    <li data-date="2018-10-17">17</li>
    <li data-date="2018-10-18">18</li>
    <li data-date="2018-10-19">19</li>
    <li data-date="2018-10-20">20</li>
    <li data-date="2018-10-21">21</li>
    <li data-date="2018-10-22">22</li>
    <li data-date="2018-10-23">23</li>
    <li data-date="2018-10-24">24</li>
    <li data-date="2018-10-25">25</li>
    <li data-date="2018-10-26">26</li>
    <li data-date="2018-10-27">27</li>
    <li data-date="2018-10-28">28</li>
    <li data-date="2018-10-29">29</li>
    <li data-date="2018-10-30">30</li>
    <li data-date="blank"></li>
  </ul>
  <ul class="bottom">
      <li><a href="/whatDay"><img src="img/nav/calendar.svg"></a></li>
      <li><a href="/clickMe"><img src="img/nav/list.svg"></a></li>
      <li><a href="/newTask"><img src="img/nav/add-task.svg"></a></li>
      <li><img src="img/nav/reminder-selected.svg"></a></li>
      <li><a href="/profilePage"><img src="img/nav/profile.svg"></a></li>
  </ul>

`;

let addTask = `
<div class="newTaskForm">

  <a href="/clickMe"><input type="image" class="closeWindow" src="img/icons/no.png"></input></a>

  <div class="taskInput" id="taskInputError">
    <input type="text" placeholder="ENTER ASSIGNMENT NAME" id="assignmentNameInput">
  </div>

  <div class="taskInput">
    <input type="number" class="taskInput" placeholder="ENTER PERCENTAGE VALUE" id="assignmentValueInput">
  </div>

    <p class="formSectionTitle">SELECT PRIORITY LEVEL</p>

    <div class="checkboxContainer">
      <div class="difficultySelect">
        <input type="radio" id="radioSelection4" name="group2" value="Low">
        <label for="radioSelection4">LOW</label>
      </div>

      <div class="difficultySelect">
        <input type="radio" id="radioSelection5" name="group2" value="Medium">
        <label for="radioSelection5">MEDIUM</label>
      </div>

      <div class="difficultySelect">
        <input type="radio" id="radioSelection6" name="group2" value="High">
        <label for="radioSelection6">HIGH</label>
      </div>
    </div>


  <p class="formSectionTitle">SELECT DIFFICULTY LEVEL</p>

  <div class="checkboxContainer" id="radioSelection">
    <div class="difficultySelect">
      <input type="radio" id="radioSelection1" name="group1" value="Easy">
      <label for="radioSelection1">EASY</label>
    </div>

    <div class="difficultySelect">
      <input type="radio" id="radioSelection2" name="group1" value="Moderate">
      <label for="radioSelection2">MODERATE</label>
    </div>

    <div class="difficultySelect">
      <input type="radio" id="radioSelection3" name="group1" value="Hard">
      <label for="radioSelection3">HARD</label>
    </div>
  </div>

  <p class="formSectionTitle">SELECT DEADLINE</p>

  <!-- <div class="taskInput">
    <input type="number" class="taskInput" placeholder="ENTER MONTH (MM)" id="monthInput">
  </div>
  <div class="taskInput">
    <input type="number" class="taskInput" placeholder="ENTER DAY (DD)" id="dayInput">
  </div>
  <div class="taskInput">
    <input type="number" class="taskInput" placeholder="ENTER YEAR (YYYY)" id="yearInput">
  </div> -->

  <input name="dueDate" data-toggle="datepicker" placeholder="SELECT ASSIGNMENT DEADLINE">

  </div>


</div>

<p class="createTaskButtonContainer"><button class="createTaskButton" id="createNewTaskBtn">Create Task</button></p>
`;

let reminderPage = `

<div class="header"><h1>REMINDERS</h1></header>
  <div class="container">
    <div class="remindersContainer">

      <div class="remindersList">

        <div class="reminderslistItemTitle">
          <h2>HELLO BEATRICE,
            <P>HERE IS WHAT IS DUE TODAY:</P></H2>
          </div>

          <div id="all-reminders">
            <!-- <div class="reminderslistItem">
              <h3>Pitch Presentation</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>

            <div class="reminderslistItem">
              <h3>Device Development HTML Code</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>

            <div class="reminderslistItem">
              <h3>Ergonomics Paper</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div> -->
          </div>


        </div>
      </div>
    </div>
    <ul class="bottom">
      <li><a href="/whatDay"><img src="img/nav/calendar.svg"></a></li>
      <li><a href="/clickMe"><img src="img/nav/list.svg"></a></li>
      <li><a href="/newTask"><img src="img/nav/add-task.svg"></a></li>
      <li><img src="img/nav/reminder-selected.svg"></a></li>
      <li><a href="/profilePage"><img src="img/nav/profile.svg"></a></li>
    </ul>
    `;

    var aboutMe = `
    <div class="header"><h1>PROFILE</h1></div>

    <div class="container">
      <div class="profileContainer">
        <div class="profileName"> BEATRICE FLORES
        </div>
        <div class="profilePic">
          <img src="images/icons/beatrice.png"></img>
        </div>
        <div class="profileEmail">beatriceflores@georgebrown.ca
        </div>
        <div class="profileSchool">GEORGE BROWN COLLEGE
        </div>
      </div>
    </div>

    <ul class="bottom">
      <li><a href="/whatDay"><img src="img/nav/calendar.svg"></a></li>
      <li><a href="/clickMe"><img src="img/nav/list.svg"></a></li>
      <li><a href="/newTask"><img src="img/nav/add-task.svg"></a></li>
      <li><a href="/remindMe"><img src="img/nav/reminder.svg"></a></li>
      <li><img src="img/nav/profile-selected.svg"></a></li>
    </ul>
    `;
