var days = new Date();
var wDay = days.getDay();
var hourDays = days.getHours();
var minuteDays = days.getMinutes();
var weekday = new Array(7);

document.addEventListener('DOMContentLoaded', function() {
    var yesIDone = document.getElementById('yesIDone');
    var giveMeDaTimes = document.getElementById('giveMeDaTimes');
    var Options = document.getElementById('options');
    var docs = document.getElementById('docs');
    var take = document.getElementById('takeIt');
    var pres = document.getElementById('pres');


    take.addEventListener('click', function() {
        chrome.tabs.create({
            'url': "https://powerschool.bcdschool.org/public/"
                //'url': "chrome-extension://lfjpjanpjmhlihhlamhhhpipeljjhfia/options.html"
        });
    });

    yesIDone.addEventListener('click', function() {
      localStorage.hi = false;
    });

    docs.addEventListener('click', function() {
        chrome.tabs.create({
            'url': "https://docs.google.com/document/create"
                //'url': "chrome-extension://lfjpjanpjmhlihhlamhhhpipeljjhfia/options.html"
        });
    });

    pres.addEventListener('click', function() {
        chrome.tabs.create({
            'url': "https://docs.google.com/presentation/create"
        });
    });

    Options.addEventListener('click', function() {
        chrome.tabs.create({
          'url': "chrome-extension://lfjpjanpjmhlihhlamhhhpipeljjhfia/options.html"
        });
    });

    //Stuff with the Date and Time
    // weekday[0] = "Sunday";
    // weekday[1] = "Monday";
    // weekday[2] = "Tuesday";
    // weekday[3] = "Wednesday";
    // weekday[4] = "Thursday";
    // weekday[5] = "Friday";
    // weekday[6] = "Saturday";
  //  document.getElementById('weekDays').innerHTML = weekday[days.getDay()];
    //document.getElementById('hourThing').innerHTML = hourDays;
    //document.getElementById('minuteThing').innerHTML = minuteDays;

  //  displayNextClass();
    //hi z
    //closing things for everything. EVERYTHING
});
//Creates an alarm that goes off every .75 minutes or 45 seconds.






chrome.storage.sync.get({
  'firstClass': true,
  'secondClass': true,
  'thirdClass': true,
  'fourthClass': true,
  'fourthClass': false,
  'minutes': 5
}, function(items) {
    var classA = items.firstClass;
    var classB = items.secondClass;
    var classC = items.thirdClass;
    var classD = items.fourthClass;
    var classG = items.fifthClass;
    var minutes = items.minutes;
    var a = parseInt(minutes)
    chrome.alarms.create("Alarmssssss", {
    delayInMinutes: .5,
    periodInMinutes: a
  });
});

chrome.alarms.create("checkCheck", {
delayInMinutes: .5,
periodInMinutes: .25

var done = localStorage.hi;
if (!done){
    localStorage.hi = true;
}
// on alarm fire calls the function time thing
chrome.alarms.onAlarm.addListener(function(alarm)){
  if(alarm.name === "Alarmssssss"){
        attendanceAlarms();
    }

  else if(alarm.name === "checkCheck"){
      resetCheck()
    }
}


function attend(x){
var done = localStorage.hi;
  if (x){
    if(done){
  if (Notification.permission === "granted") {
                  var notification = new Notification('Attendance', {
                      icon: "icon128tr.png",
                      body: "Click on me to take attendance",
                  });
                  notification.onclick = function() {
                      window.open("https://powerschool.bcdschool.org/public/home.html");
                      setTimeout(notification.close.bind(notification), 200);
                      localStorage.hi = false;
                  };
              }
          }
        }
}

function resetCheck(){
  var days = new Date();
  var wDay = days.getDay();
  var hourDays = days.getHours();
  var minuteDays = days.getMinutes();

  if (wDay === 1) {
    if ((hourDays >= 10) && (minuteDays >= 5) && (hourDays <= 10 && minuteDays <=7)) {
      localStorage.hi = true;

      }

    if ((hourDays >= 11) && (minuteDays >= 45) && (hourDays <= 11 && minuteDays <=47)) {
      localStorage.hi = true;
      }

      //next block 3 update -C
      if ((hourDays >= 13) && (minuteDays >= 15) && (hourDays <= 13 && minuteDays <=17)) {
        localStorage.hi = true;
      }

      //next block 4 update -D
      if ((hourDays <= 17)&&(hourDays >= 14)) {
        localStorage.hi = true;
      }
    }
  if (wDay === 2) {
    if ((hourDays >= 10) && (minuteDays >= 5) && (hourDays <= 10 && minuteDays <=7)) {
      localStorage.hi = true;

      }

    if ((hourDays >= 11) && (minuteDays >= 45) && (hourDays <= 11 && minuteDays <=47)) {
      localStorage.hi = true;
      }

      //next block 3 update -C
      if ((hourDays >= 13) && (minuteDays >= 15) && (hourDays <= 13 && minuteDays <=17)) {
        localStorage.hi = true;
      }

      //next block 4 update -D
      if ((hourDays <= 17)&&(hourDays >= 14)) {
        localStorage.hi = true;
      }
  }

  if (wDay === 3) {
    if ((hourDays >= 10) && (minuteDays >= 5) && (hourDays <= 10 && minuteDays <=7)) {
      localStorage.hi = true;

      }

    if ((hourDays >= 11) && (minuteDays >= 45) && (hourDays <= 11 && minuteDays <=47)) {
      localStorage.hi = true;
      }

      //next block 3 update -C
      if ((hourDays >= 13) && (minuteDays >= 15) && (hourDays <= 13 && minuteDays <=17)) {
        localStorage.hi = true;
      }

      //next block 4 update -D
      if ((hourDays <= 17)&&(hourDays >= 14)) {
        localStorage.hi = true;
      }
  }

  if (wDay === 4) {
    if ((hourDays >= 10) && (minuteDays >= 5) && (hourDays <= 10 && minuteDays <=7)) {
      localStorage.hi = true;

      }

    if ((hourDays >= 11) && (minuteDays >= 45) && (hourDays <= 11 && minuteDays <=47)) {
      localStorage.hi = true;
      }

      //next block 3 update -C
      if ((hourDays >= 13) && (minuteDays >= 15) && (hourDays <= 13 && minuteDays <=17)) {
        localStorage.hi = true;
      }

      //next block 4 update -D
      if ((hourDays <= 17)&&(hourDays >= 14)) {
        localStorage.hi = true;
      }
  }

  if (wDay === 5) {
    if ((hourDays >= 10) && (minuteDays >= 5) && (hourDays <= 10 && minuteDays <=7)) {
      localStorage.hi = true;

      }

    if ((hourDays >= 11) && (minuteDays >= 45) && (hourDays <= 11 && minuteDays <=47)) {
      localStorage.hi = true;
      }

      //next block 3 update -C
      if ((hourDays >= 13) && (minuteDays >= 15) && (hourDays <= 13 && minuteDays <=17)) {
        localStorage.hi = true;
      }

      //next block 4 update -D
      if ((hourDays <= 17)&&(hourDays >= 14)) {
        localStorage.hi = true;
      }
  }




}
// localStorage.hi=a;
//a = localStorage.hi;

function attendanceAlarms(){
  chrome.storage.sync.get({
    'firstClass': true,
    'secondClass': true,
    'thirdClass': true,
    'fourthClass': true,
    'fourthClass': false,
    'minutes': 5
  }, function(items) {
      var classA = items.firstClass;
      var classB = items.secondClass;
      var classC = items.thirdClass;
      var classD = items.fourthClass;
      var classG = items.fifthClass;
      var minutes = items.minutes;
      console.log("alarm");
      console.log(minutes);
      var days = new Date();
      var wDay = days.getDay();
      var hourDays = days.getHours();
      var minuteDays = days.getMinutes();
if (wDay === 1) {
//9:05
//10:45
//12:10
//1:15

          if ((hourDays >= 9) && (minuteDays >= 5) && (hourDays <= 10 && minuteDays <=5)) {
            attend(classA);
            }



          if ((hourDays >= 10) && (minuteDays >= 45) && (hourDays <= 11 && minuteDays <=45)) {
            attend(classB);
            }

            //next block 3 update -C
            if ((hourDays >= 12) && (minuteDays >= 10) && (hourDays <= 13 && minuteDays <=15)) {
              attend(classG);

                          }

            //next block 4 update -D
            if ((hourDays <= 17) &&(hourDays >= 14)) {
              attend(classC);
            }
        }

if (wDay === 2) {
//8:00
//10:45
//11:50
//1:15


          if ((hourDays >= 8) && (minuteDays >= 5) && (hourDays <= 10 && minuteDays <=5)) {
            attend(classC);

            }

          if ((hourDays >= 10) && (minuteDays >= 45) && (hourDays <= 11 && minuteDays <=45)) {
            attend(classD);
            }

            //next block 3 update -C
            if ((hourDays >= 12) && (minuteDays >= 10) && (hourDays <= 13 && minuteDays <=15)) {
              attend(classG);
            }

            //next block 4 update -D
            if ((hourDays <= 17)&&(hourDays >= 14)) {
              attend(classA);
            }
}

if (wDay === 3) {
  //8:00
  //10:45
  //11:50
  //1:15
  if ((hourDays >= 8) && (minuteDays >= 5) && (hourDays <= 10 && minuteDays <=5)) {
    attend(classB);

    }

  if ((hourDays >= 10) && (minuteDays >= 45) && (hourDays <= 11 && minuteDays <=45)) {
    attend(classD);
    }

    //next block 3 update -C
    if ((hourDays >= 12) && (minuteDays >= 10) && (hourDays <= 13 && minuteDays <=15)) {
      attend(classG);
    }

    //next block 4 update -D
    if ((hourDays <= 17)&&(hourDays >= 14)) {
      attend(classA);
    }
}

if (wDay === 4) {
  //8:00
  //10:45
  //11:50
  //1:15
  if ((hourDays >= 8) && (minuteDays >= 5) && (hourDays <= 10 && minuteDays <=5)) {
    attend(classD);

    }

  if ((hourDays >= 10) && (minuteDays >= 45) && (hourDays <= 11 && minuteDays <=45)) {
    attend(classC);
    }

    //next block 3 update -C
    if ((hourDays >= 12) && (minuteDays >= 10) && (hourDays <= 13 && minuteDays <=15)) {
      attend(classG);
    }

    //next block 4 update -D
    if ((hourDays <= 17)&&(hourDays >= 14)) {
      attend(classB);
    }
}

if (wDay === 5) {
  //8:00
  //10:45
  //11:50
  //1:15
  if ((hourDays >= 8) && (minuteDays >= 5) && (hourDays <= 10 && minuteDays <=5)) {
    attend(classA);

    }

  if ((hourDays >= 10) && (minuteDays >= 45) && (hourDays <= 11 && minuteDays <=45)) {
    attend(classC);
    }

    //next block 3 update -C
    if ((hourDays >= 13) && (minuteDays >=15) && (hourDays <= 14 && minuteDays <=25)) {
      attend(classB);
    }


}


//closing over everything
    });
}



// function timeThing() {
//
//     //this is to call the infor from the storage function. This was annoying to get working but this is how to make that work.
//     chrome.storage.sync.get({
//       'firstClass': 'Block A',
//       'secondClass': 'Block B',
//       'thirdClass': 'Block C',
//       'fourthClass': 'Block D'
//     }, function(items) {
//         var classA = items.firstClass;
//         var classB = items.secondClass;
//         var classC = items.thirdClass;
//         var classD = items.fourthClass;
//         console.log("alarm");
//         var days = new Date();
//         var wDay = days.getDay();
//         var hourDays = days.getHours();
//         var minuteDays = days.getMinutes();
//         console.log(wDay);
//
//         //document.addEventListener('DOMContentLoaded', function() {
//
//
//         //Add all of the if statements here. Notifications as well as the next class push on the popup.html. Still need to add that
//         //More grunt coding in the near future.
//
//         //repeat this section to add more repeats
//
//         //Lunch notification.
//         if (hourDays == 12 && minuteDays == 5) {
//             if (Notification.permission === "granted") {
//                 var notification = new Notification('Lunch', {
//                     icon: "icon128tr.png",
//                     body: "Click on me to see what is for lunch today",
//                 });
//                 notification.onclick = function() {
//                     window.open("http://www.sagedining.com/menus/beavercountryday/");
//                     setTimeout(notification.close.bind(notification), 200);
//                 };
//             }
//         }
//
//         //Monday ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//         if (wDay === 1) {
//             //Block one - A
//             if (hourDays == 9 && minuteDays == 0) {
//                 if (Notification.permission === "granted") {
//                     var notification = new Notification(classA, {
//                         icon: "icon128tr.png",
//                         body: "Is your first class",
//                     });
//                 }
//             }
//             //Block two - B
//             if (hourDays == 10 && minuteDays == 35) {
//                 if (Notification.permission === "granted") {
//                     var notification = new Notification(classB, {
//                         icon: "icon128tr.png",
//                         body: "Is your next class",
//                     });
//                 }
//             }
//
//             //Block three - C
//             if (hourDays == 13 && minuteDays == 5) {
//                 if (Notification.permission === "granted") {
//                     var notification = new Notification(classC, {
//                         icon: "icon128tr.png",
//                         body: "Is your next class",
//                     });
//                 }
//             }
//
//
//
//             //Block four - D
//             if (hourDays == 14 && minuteDays == 10) {
//                 if (Notification.permission === "granted") {
//                     var notification = new Notification(classD, {
//                         icon: "icon128tr.png",
//                         body: "Is your X-Block class",
//                     });
//                 }
//             }
//         }
//         //Tuesday ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//         else if (wDay === 2) {
//             //Block one - C
//             if (hourDays == 8 && minuteDays == 0) {
//                 if (Notification.permission === "granted") {
//                     var notification = new Notification(classC, {
//                         icon: "icon128tr.png",
//                         body: "Is your first class",
//                     });
//                 }
//             }
//
//             //Block two - D
//             if (hourDays == 10 && minuteDays == 35) {
//                 if (Notification.permission === "granted") {
//                     var notification = new Notification(classD, {
//                         icon: "icon128tr.png",
//                         body: "Is your next class",
//                     });
//                 }
//             }
//
//             //Block three - A
//             if (hourDays == 13 && minuteDays == 5) {
//                 console.log("hello block e approaching");
//                 if (Notification.permission === "granted") {
//                     var notification = new Notification(classA, {
//                         icon: "icon128tr.png",
//                         body: "Is your next class",
//                     });
//                 }
//             }
//
//             //Block four - B
//             if (hourDays == 14 && minuteDays == 10) {
//                 if (Notification.permission === "granted") {
//                     var notification = new Notification(classB, {
//                         icon: "icon128tr.png",
//                         body: "Is your X-Block class",
//                     });
//                 }
//             }
//
//         }
//
//
//         //Wednesday ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//         else if (wDay === 3) {
//             console.log("today is Wednesday");
//             //Block one - B
//             if (hourDays == 8 && minuteDays == 0) {
//                 if (Notification.permission === "granted") {
//                     var notification = new Notification(classB, {
//                         icon: "icon128tr.png",
//                         body: "Is your first class",
//                     });
//                 }
//             }
//
//             //Block two - D
//             if (hourDays == 10 && minuteDays == 35) {
//                 if (Notification.permission === "granted") {
//                     var notification = new Notification(classD, {
//                         icon: "icon128tr.png",
//                         body: "Is your next class",
//                     });
//                 }
//             }
//
//             //Block three - A
//             if (hourDays == 13 && minuteDays == 5) {
//                 if (Notification.permission === "granted") {
//                     var notification = new Notification(classA, {
//                         icon: "icon128tr.png",
//                         body: "Is your next class",
//                     });
//                 }
//             }
//
//             //Block four - C
//             if (hourDays == 14 && minuteDays == 10) {
//                 if (Notification.permission === "granted") {
//                     var notification = new Notification(classC, {
//                         icon: "icon128tr.png",
//                         body: "Is your X-Block class",
//                     });
//                 }
//             }
//         }
//         //Thursday ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//         else if (wDay === 4) {
//             //Block one - D
//             if (hourDays == 8 && minuteDays == 0) {
//                 if (Notification.permission === "granted") {
//                     var notification = new Notification(classD, {
//                         icon: "icon128tr.png",
//                         body: "Is your first class",
//                     });
//                 }
//             }
//
//             //Block two - C
//             if (hourDays == 10 && minuteDays == 35) {
//                 if (Notification.permission === "granted") {
//                     var notification = new Notification(classC, {
//                         icon: "icon128tr.png",
//                         body: "Is your next class",
//                     });
//                 }
//             }
//
//             //Block three - B
//             if (hourDays == 13 && minuteDays == 5) {
//                 if (Notification.permission === "granted") {
//                     var notification = new Notification(classB, {
//                         icon: "icon128tr.png",
//                         body: "Is your next class",
//                     });
//                 }
//             }
//
//             //Block four - A
//             if (hourDays == 14 && minuteDays == 10) {
//                 if (Notification.permission === "granted") {
//                     var notification = new Notification(classA, {
//                         icon: "icon128tr.png",
//                         body: "Is your X-Block class",
//                     });
//                 }
//             }
//         }
//         //Friday ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//         else if (wDay === 5) {
//             //Block one - A
//             if (hourDays == 8 && minuteDays == 0) {
//                 if (Notification.permission === "granted") {
//                     var notification = new Notification(classA, {
//                         icon: "icon128tr.png",
//                         body: "Is your first class",
//                     });
//                 }
//             }
//             //Block two update -C
//
//
//
//             //Block two - C
//             if (hourDays == 10 && minuteDays == 35) {
//                 if (Notification.permission === "granted") {
//                     var notification = new Notification(classC, {
//                         icon: "icon128tr.png",
//                         body: "Is your next class",
//                     });
//                 }
//             }
//
//             //Block three - B
//             if (hourDays == 13 && minuteDays == 5) {
//                 if (Notification.permission === "granted") {
//                     var notification = new Notification(classB, {
//                         icon: "icon128tr.png",
//                         body: "Is your next class",
//                     });
//                 }
//             }
//             //Block four - D
//             if (hourDays == 14 && minuteDays == 10) {
//                 if (Notification.permission === "granted") {
//                     var notification = new Notification(classD, {
//                         icon: "icon128tr.png",
//                         body: "Is your X-Block class",
//                     });
//                 }
//             }
//         }
//
//         //  }); //closing for the load document
//     }); //Closing for the get storage sync
// } //Close for the function timeThing


// function displayNextClass() {
//     chrome.storage.sync.get({
//       'firstClass': 'Block A',
//       'secondClass': 'Block B',
//       'thirdClass': 'Block C',
//       'fourthClass': 'Block D'
//     }, function(items) {
//         var classA = items.firstClass;
//         var classB = items.secondClass;
//         var classC = items.thirdClass;
//         var classD = items.fourthClass;
//         var days = new Date();
//         var wDay = days.getDay();
//         var hourDays = days.getHours();
//         var minuteDays = days.getMinutes();
//
//         //  Monday
//         if (wDay == 1) {
//             if (((hourDays > 0) && (hourDays < 9)) || (hourDays == 9 && minuteDays < 15)) {
//                 document.getElementById('nextClass').innerHTML = classA;
//
//             }
//             if ((hourDays == 9 && minuteDays > 15) || (hourDays == 10 && hourDays >= 9)) {
//                 document.getElementById('nextClass').innerHTML = classB;
//             }
//
//             //next block 3 update -C
//             if ((hourDays >= 11) && (hourDays <= 13)) {
//                 document.getElementById('nextClass').innerHTML = classC;
//             }
//
//             //next block 4 update -D
//             if (hourDays >= 14) {
//                 document.getElementById('nextClass').innerHTML = classD;
//             }
//         }
//
//         //Tuesday
//         if (wDay == 2) {
//             if (((hourDays > 0) && (hourDays < 8)) || (hourDays == 8 && minuteDays < 15)) {
//                 document.getElementById('nextClass').innerHTML = classC;
//
//             }
//
//             if ((hourDays == 8 && minuteDays > 15) || (hourDays <= 10 && hourDays >= 9)) {
//                 document.getElementById('nextClass').innerHTML = classD;
//             }
//             //next block 3 update -A
//             if ((hourDays >= 11) && (hourDays <= 13)) {
//                 document.getElementById('nextClass').innerHTML = classA;
//             }
//
//             //next block 4 update -B
//             if (hourDays >= 14) {
//                 document.getElementById('nextClass').innerHTML = classB;
//             }
//         }
//
//         //  Wednesday
//         if (wDay == 3) {
//
//
//             if (((hourDays > 0) && (hourDays < 8)) || (hourDays == 8 && minuteDays < 15)) {
//                 document.getElementById('nextClass').innerHTML = classB;
//
//             }
//
//             //next block 2 update -D
//             if ((hourDays == 8 && minuteDays > 15) || (hourDays <= 10 && hourDays >= 9)) {
//                 document.getElementById('nextClass').innerHTML = classD;
//             }
//
//             //next block 3 update -A
//             if ((hourDays >= 11) && (hourDays <= 13)) {
//                 document.getElementById('nextClass').innerHTML = classA;
//             }
//
//             //next block 4 update -B
//             if (hourDays >= 14) {
//                 document.getElementById('nextClass').innerHTML = classC;
//             }
//         }
//
//         //Thursday
//         if (wDay == 4) {
//
//             if (((hourDays > 0) && (hourDays < 8)) || (hourDays == 8 && minuteDays < 15)) {
//                 document.getElementById('nextClass').innerHTML = classD;
//
//             }
//             //next block 2 update -C
//             if ((hourDays == 8 && minuteDays > 15) || (hourDays <= 10 && hourDays >= 9)) {
//                 document.getElementById('nextClass').innerHTML = classC;
//             }
//
//             //next block 3 update -B
//             if ((hourDays >= 11) && (hourDays <= 13)) {
//                 document.getElementById('nextClass').innerHTML = classB;
//             }
//
//             //next block 4 update -A
//             if (hourDays >= 14) {
//                 document.getElementById('nextClass').innerHTML = classA;
//             }
//         }
//
//         //    Friday
//         if (wDay == 5) {
//
//             if (((hourDays > 0) && (hourDays < 8)) || (hourDays == 8 && minuteDays < 15)) {
//                 document.getElementById('nextClass').innerHTML = classA;
//             }
//
//
//             //next block 2 update -C
//             if ((hourDays == 8 && minuteDays > 15) || (hourDays <= 10 && hourDays >= 9)) {
//                 document.getElementById('nextClass').innerHTML = classC;
//             }
//
//             //next block 3 update -B
//             if ((hourDays >= 11) && (hourDays <= 13)) {
//                 document.getElementById('nextClass').innerHTML = classB;
//             }
//
//             //next block 4 update -D
//             if (hourDays >= 14) {
//                 document.getElementById('nextClass').innerHTML = classD;
//             }
//         }
//
//     });
// }
//
//
// //function time thing contains all of the time based events. Notification popping up and such. Classes and what not.
