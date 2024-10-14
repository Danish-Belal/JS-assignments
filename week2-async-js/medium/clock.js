// Using 1-counter.md or 2-counter.md from the easy section, can you create a clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

// HH:MM::SS (Eg. 13:45:23)

// HH:MM::SS AM/PM (Eg 01:45:23 PM)




function clock(){
     setInterval(() => {
          const currentTime = new Date();
          const hour = currentTime.getHours().toString()
          const minute = currentTime.getMinutes().toString()
          const second = currentTime.getSeconds().toString()
          const twelveHourTimeZone = hour%13+1;
          const ampm = hour>12? 'PM' : 'AM'
          console.log("24 Hour Time Zone ",hour+":"+minute+":"+second+" ", ampm);
          console.log("12 Hour Time Zone ",twelveHourTimeZone+":"+minute+":"+second+" ", ampm);
          
     }, 1000);

}
clock();

