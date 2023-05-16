// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


  $(document).ready(function() {// your code that interacts with the DOM goes here
     ////////////////////// Date At The Top Code Area//////////////////////////////
    let todayEl = $('#currentDay'); //Im setting the variable to the id that contains the text area
    let d = new Date(); //getting a new date here which is the current one
    let thisDate = dayjs(d).format('dddd [The] DD[th] , MMM YYYY'); //formatting the date to be text

    todayEl.text(thisDate);// setting the text of the text area to my formatted date
    ////////////////////////////////////////////////////////////////////////

});

$(function () {

  $("button").click(function() {
    var id = $(this).closest(".time-block").attr("id");
    var userInput = $("textarea").val();
    localStorage.setItem(id, userInput);
    console.log("Saved event to local storage");
  });
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});