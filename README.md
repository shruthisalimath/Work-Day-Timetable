# Work-Day-Timetable
Creating a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

## User Story
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively.

## Acceptance Criteria
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

## Mock Up
The following animation demonstrates the application functionality:
[!Work-Day-Scheduler](./assets/images/05-third-party-apis-homework-demo.gif)

## Screen Shot
[!Work-Day-TimeTable](./assets/images/Screen-Shot-Work-Day-Scheduler.png)

##  Discription of the Challenge: Work-Day-TimeTable

1. Initailly commited the stared code of HTML,CSS .
2. In HTML linked the refernce of the CSS styl sheet.
3. Implemented code in the JavaScript along with the starter code.
4. Added Code to display the current date in the header of the page using dayjs().
5. Added timeblocks for standard business hours.
6. Added input text area, When clicked onto a timeblock then we can enter an event.
7. Added  listener for click events on the save button, When clicked on the save button for that  timeblock then the text for that event is saved in local storage. 
   This is coded using the id in the containing time-block as a key to save the user input in
   local storage.
7. Added Code to apply the past, present, or future class to each time block by comparing the id to the current hour.
8. The id attribute of each time-block is used to conditionally add or remove the past, present, and future classes. so when we view the timeblocks for that day then each timeblock is color coded to indicate whether it is in the past, present, or future.
8. Day.js is used to get the current hour in 24-hour time.
9. Added code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements.The id attribute of each time-block is used to do this.So when we refresh the page then the saved events persist.
10. Added Clear My Schedule button in the header. When clicked it clears data in the local Storage and input text ares and also reloads to homepage.
11. Finally deployed the application.

    