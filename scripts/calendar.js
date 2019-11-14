document.addEventListener("DOMContentLoaded", function (event) {

   let eventHere = document.getElementById("event-here");
   let dayMonth = document.getElementById("day-month");
   let newEvent;

   loadEventsOnCalendar();

   // Set addListener to all buttons
   for (let i = 1; i <= 30; i++) {
      let tempElement = document.getElementById("day" + i);
      tempElement.addEventListener("click", showEvent);
   }
   

   /*
      Read all events on MockApi - AJAX
      Choose event that has the year-month wished.
      Take the day from that event and show/color it on calendar.
   */
   function loadEventsOnCalendar() {
      $.ajax({
         method: "GET",
         url: "https://5da7897d23fa740014697829.mockapi.io/events",
      })
         .done(function (msg) {
            for (const iterator of msg) {
               // .date from API are strings. Parsing to Date for easier handling.
               let tempDate = new Date(iterator.date);

               // Filter. Look after events for October (months index 0-11) 2019
               if (tempDate.getFullYear() == "2019" && tempDate.getMonth() == "10") {

                  // Add class "event-day" to days on calendar.
                  let fakeElement = eval("day" + tempDate.getDate());
                  fakeElement.classList.add("event-day");
               }
            }
         });
   }


   /*
      When clicking on a day:
      Read all events on MockApi - AJAX
      Choose event that has the year-month-[day-clicked]
      Take the description from that event and print it.
   */
   function showEvent() {
      let clicked = this.innerHTML; // innerHTML of the clicked button
      showDayMonth(clicked);
      clearBox(eventHere); // Clear div before printing     

      $.ajax({
         method: "GET",
         url: "https://5da7897d23fa740014697829.mockapi.io/events",
      })
         .done(function (msg) {
            for (const iterator of msg) {
               // .date from API are strings. Parsing to Date for easier handling.
               let tempDate = new Date(iterator.date);

               // Filter for 2019 - October - day clicked
               if (tempDate.getFullYear() == "2019" && tempDate.getMonth() == "10" && tempDate.getDate() == clicked) {
                  newEvent = document.createElement("p");
                  newEvent.innerHTML = iterator.description;
                  newEvent.classList.add("event");
                  eventHere.appendChild(newEvent);
               }
            }
         });
   }

   // Show day and month as subtitle when clicking a day on calendar
   function showDayMonth(day) {
      dayMonth.innerHTML = "November " + day;
   }

   // Clear an element from child elements
   function clearBox(elementID) {
      while (elementID.firstChild) {
         elementID.removeChild(elementID.firstChild);
      }
   }

})
