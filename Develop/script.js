// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
let localeSettingsEl = {};
  dayjs.locale(localeSettingsEl);

  $(document).ready(function() {// your code that interacts with the DOM goes here

});

$(function () {

  function userInput() {
    $('.saveBtn').on('click', function() {
      const key = $(this).parent().attr('id');
      const value = $(this).siblings('.description').val();
      localStorage.setItem(key, value);
    });
  }

  let currentTimeEl = dayjs().format('H');
  console.log(currentTimeEl);

  function colourSet() {
    $('.time-block').each(function() { //.each instead of a for loop grabbing each timeblock class
      let theHourEl = parseInt(this.id);
      $(this).toggleClass('future', theHourEl > currentTimeEl);
      $(this).toggleClass('past', theHourEl < currentTimeEl);
      $(this).toggleClass('present', theHourEl === currentTimeEl);
    });
  }
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
   ////////////////////// Date At The Top Code Area//////////////////////////////
   function setDate(){
    let todayEl = $('#currentDay'); //Im setting the variable to the id that contains the text area
   let d = new Date(); //getting a new date here which is the current one
   let thisDate = dayjs(d).format('dddd [The] DD[th] , MMM YYYY'); //formatting the date to be text

   todayEl.text(thisDate);
   }

   setDate();
   colourSet();
   userInput();
   ////////////////////////////////////////////////////////////////////////
});