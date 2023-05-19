// 1. Setting Locale Settings for Day.js
let localeSettingsEl = {};
  dayjs.locale(localeSettingsEl);

// 2. Document Ready Event Handler  
  $(document).ready(function() {
    $(function () {

// 3. Handling User Input      
      function userInput() {
        $('.saveBtn').on('click', function() {
          let key = $(this).parent().attr('id');
          let value = $(this).siblings('.description').val();
          localStorage.setItem(key, value);
        });
      }

// 4. Setting Current Time      
      let currentTimeEl = dayjs().format('H');
      console.log(currentTimeEl);

// 5. Setting Colors for Time Blocks      
      function colourSet() {
        $('.time-block').each(function() {
          let hourEl = parseInt(this.id);
          $(this).toggleClass('past', hourEl < currentTimeEl);
          $(this).toggleClass('present', hourEl === currentTimeEl);
          $(this).toggleClass('future', hourEl > currentTimeEl);
        });
      }

// 6. Retrieving and Setting Saved User Input      
      $('.time-block').each(function() {
        let key = $(this).attr('id');
        let value = localStorage.getItem(key);
        $(this).children('.description').val(value);
      });

// 7. Setting the Current Date      
       function setDate(){
        let todayEl = $('#currentDay'); //Im setting the variable to the id that contains the text area
       let d = new Date(); //getting a new date here which is the current one
       let thisDate = dayjs(d).format('dddd [The] DD[th] , MMM YYYY'); //formatting the date to be text

//8. Setting The Current Date Into The Top Header       
       todayEl.text(thisDate);
       }
      
      setDate();
      colourSet();
      userInput();
    });
});