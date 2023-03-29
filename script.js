// Wraping all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {

    // Code to display the current date in the header of the page.
     var today = dayjs();
        $('#currentDay').text(today.format('MMM D, YYYY'));

    //  A listener for click events on the save button. This code 
    // uses the id in the containing time-block as a key to save the user input in
    // local storage. 
  
    $(".saveBtn").click(function(event) 
    {
        event.preventDefault();
        var timeSchedule = $(this).parent(".row").attr("id");
        var comment = $(this).siblings(".description").val().trim();

        var daySchedule = localStorage.setItem(timeSchedule,comment);
    
    });

    // Code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. 
    // The id attribute of each time-block is used to conditionally add or remove the
    // past, present, and future classes
    //  Day.js is used to get the
    // current hour in 24-hour time.
    
    function setHours()
    {
        var now = dayjs().hour();
        //going through each hour
        $(".time-block").each(function() 
        {
            //changing current hour in integer
            var currentTime = parseInt($(this).attr('id').split("hour-")[1]);
            if(currentTime < now)
            {
                $(this).removeClass('present');
                $(this).removeClass('future'); 
                $(this).addClass('past');
            }
            else if(currentTime === now)
            {
                $(this).removeClass('past');
                $(this).addClass('present'); 
            }
            else if(currentTime > now)
            {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future'); 
            }
        });
    }

    // code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. 
    // the id attribute of each time-block is used to do this
    
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15.description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17.description").val(localStorage.getItem("hour-17"));

    setHours();

    //clears local Storage and  reloads page.
    $("#scheduleClear").click(function ()
    {
    localStorage.clear();
    location.reload();
    });
    
});
  
  