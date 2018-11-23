// Where in the page will the content be?
const pageContent = document.getElementById('page');
var pageChangeEvent = new Event('page');
var currPage = '/home';


// Do we need a Page routing Class here?
//  registerPage()
//  currPage()
//  assign data loading to page changes

// On load of the application
window.addEventListener('load', (e) => {

  // Draw the first page
  goToPage(currPage);

  // If we hit our history button, redraw the page
  window.addEventListener('popstate', event => {
    drawPage();
  });

  // If we clich an Anchor (<a>) in HTML, route to it's HREF value without reloading
  document.addEventListener('click', (e) => {
    console.log(e)
    if (e.target.nodeName == 'A') {
      // alert(e.target.pathname)
      e.preventDefault();
      goToPage(e.target.pathname);
    }
    else {
      for (var a in e.path) {
        if (e.path[a].nodeName == 'A') {
          e.preventDefault();
          console.log(e.path[a].pathname);
          goToPage(e.path[a].pathname);
          break;
        }
      }
    }
  })
});


function goToPage(pagePath) {
  history.pushState(null, '', pagePath);
  drawPage();
}


function drawPage() {
  pageContent.innerHTML = routes[window.location.pathname];
  currPage = window.location.pathname;
  // Dispatch the event
  document.getElementById('page').dispatchEvent(pageChangeEvent);
}
