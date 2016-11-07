var days = new Date();
var wDay = days.getDay();
var hourDays = days.getHours();
var minuteDays = days.getMinutes();
var weekday = new Array(7);

document.addEventListener('DOMContentLoaded', function() {
    var yesIDone = document.getElementById('yesIDone');
    var giveMeDaTimes = document.getElementById('giveMeDaTimes');
    var Options = document.getElementById('Options');


    yesIDone.addEventListener('click', function() {
        chrome.tabs.create({
            'url': "https://docs.google.com/document/create"
                //'url': "chrome-extension://lfjpjanpjmhlihhlamhhhpipeljjhfia/options.html"
        });
    });
    giveMeDaTimes.addEventListener('click', function() {
        chrome.tabs.create({
            'url': "https://docs.google.com/presentation/create"
        });
    });


    //Stuff with the Date and Time
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    document.getElementById('weekDays').innerHTML = weekday[days.getDay()];
    //document.getElementById('hourThing').innerHTML = hourDays;
    //document.getElementById('minuteThing').innerHTML = minuteDays;

    displayNextClass();
    //hi z
    //closing things for everything. EVERYTHING
});
//Creates an alarm that goes off every .75 minutes or 45 seconds.
chrome.alarms.create("Alarmssssss", {
    delayInMinutes: 0.25,
    periodInMinutes: 0.5
});

// on alarm fire calls the function time thing
chrome.alarms.onAlarm.addListener(timeThing);


function displayNextClass() {
    chrome.storage.sync.get({
      'firstClass': 'Block A',
      'secondClass': 'Block B',
      'thirdClass': 'Block C',
      'fourthClass': 'Block D'
    }, function(items) {
        var classA = items.firstClass;
        var classB = items.secondClass;
        var classC = items.thirdClass;
        var classD = items.fourthClass;
        var days = new Date();
        var wDay = days.getDay();
        var hourDays = days.getHours();
        var minuteDays = days.getMinutes();

        //  Monday
        if (wDay == 1) {
            if (((hourDays > 0) && (hourDays < 9)) || (hourDays == 9 && minuteDays < 15)) {
                document.getElementById('nextClass').innerHTML = classA;

            }
            if ((hourDays == 9 && minuteDays > 15) || (hourDays == 10 && hourDays >= 9)) {
                document.getElementById('nextClass').innerHTML = classB;
            }

            //next block 3 update -C
            if ((hourDays >= 11) && (hourDays <= 13)) {
                document.getElementById('nextClass').innerHTML = classC;
            }

            //next block 4 update -D
            if (hourDays >= 14) {
                document.getElementById('nextClass').innerHTML = classD;
            }
        }

        //Tuesday
        if (wDay == 2) {
            if (((hourDays > 0) && (hourDays < 8)) || (hourDays == 8 && minuteDays < 15)) {
                document.getElementById('nextClass').innerHTML = classC;

            }

            if ((hourDays == 8 && minuteDays > 15) || (hourDays <= 10 && hourDays >= 9)) {
                document.getElementById('nextClass').innerHTML = classD;
            }
            //next block 3 update -A
            if ((hourDays >= 11) && (hourDays <= 13)) {
                document.getElementById('nextClass').innerHTML = classA;
            }

            //next block 4 update -B
            if (hourDays >= 14) {
                document.getElementById('nextClass').innerHTML = classB;
            }
        }

        //  Wednesday
        if (wDay == 3) {


            if (((hourDays > 0) && (hourDays < 8)) || (hourDays == 8 && minuteDays < 15)) {
                document.getElementById('nextClass').innerHTML = classB;

            }

            //next block 2 update -D
            if ((hourDays == 8 && minuteDays > 15) || (hourDays <= 10 && hourDays >= 9)) {
                document.getElementById('nextClass').innerHTML = classD;
            }

            //next block 3 update -A
            if ((hourDays >= 11) && (hourDays <= 13)) {
                document.getElementById('nextClass').innerHTML = classA;
            }

            //next block 4 update -B
            if (hourDays >= 14) {
                document.getElementById('nextClass').innerHTML = classC;
            }
        }

        //Thursday
        if (wDay == 4) {

            if (((hourDays > 0) && (hourDays < 8)) || (hourDays == 8 && minuteDays < 15)) {
                document.getElementById('nextClass').innerHTML = classD;

            }
            //next block 2 update -C
            if ((hourDays == 8 && minuteDays > 15) || (hourDays <= 10 && hourDays >= 9)) {
                document.getElementById('nextClass').innerHTML = classC;
            }

            //next block 3 update -B
            if ((hourDays >= 11) && (hourDays <= 13)) {
                document.getElementById('nextClass').innerHTML = classB;
            }

            //next block 4 update -A
            if (hourDays >= 14) {
                document.getElementById('nextClass').innerHTML = classA;
            }
        }

        //    Friday
        if (wDay == 5) {

            if (((hourDays > 0) && (hourDays < 8)) || (hourDays == 8 && minuteDays < 15)) {
                document.getElementById('nextClass').innerHTML = classA;
            }


            //next block 2 update -C
            if ((hourDays == 8 && minuteDays > 15) || (hourDays <= 10 && hourDays >= 9)) {
                document.getElementById('nextClass').innerHTML = classC;
            }

            //next block 3 update -B
            if ((hourDays >= 11) && (hourDays <= 13)) {
                document.getElementById('nextClass').innerHTML = classB;
            }

            //next block 4 update -D
            if (hourDays >= 14) {
                document.getElementById('nextClass').innerHTML = classD;
            }
        }

    });
}


//function time thing contains all of the time based events. Notification popping up and such. Classes and what not.
function timeThing() {

    //this is to call the infor from the storage function. This was annoying to get working but this is how to make that work.
    chrome.storage.sync.get({
      'firstClass': 'Block A',
      'secondClass': 'Block B',
      'thirdClass': 'Block C',
      'fourthClass': 'Block D'
    }, function(items) {
        var classA = items.firstClass;
        var classB = items.secondClass;
        var classC = items.thirdClass;
        var classD = items.fourthClass;
        console.log("alarm");
        var days = new Date();
        var wDay = days.getDay();
        var hourDays = days.getHours();
        var minuteDays = days.getMinutes();
        console.log(wDay);

        //document.addEventListener('DOMContentLoaded', function() {


        //Add all of the if statements here. Notifications as well as the next class push on the popup.html. Still need to add that
        //More grunt coding in the near future.

        //repeat this section to add more repeats

        //Lunch notification.
        if (hourDays == 12 && minuteDays == 5) {
            if (Notification.permission === "granted") {
                var notification = new Notification('Lunch', {
                    icon: "icon128tr.png",
                    body: "Click on me to see what is for lunch today",
                });
                notification.onclick = function() {
                    window.open("http://www.sagedining.com/menus/beavercountryday/");
                    setTimeout(notification.close.bind(notification), 200);
                };
            }
        }

        //Monday ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        if (wDay === 1) {
            //Block one - A
            if (hourDays == 9 && minuteDays == 0) {
                if (Notification.permission === "granted") {
                    var notification = new Notification(classA, {
                        icon: "icon128tr.png",
                        body: "Is your first class",
                    });
                }
            }
            //Block two - B
            if (hourDays == 10 && minuteDays == 35) {
                if (Notification.permission === "granted") {
                    var notification = new Notification(classB, {
                        icon: "icon128tr.png",
                        body: "Is your next class",
                    });
                }
            }

            //Block three - C
            if (hourDays == 13 && minuteDays == 5) {
                if (Notification.permission === "granted") {
                    var notification = new Notification(classC, {
                        icon: "icon128tr.png",
                        body: "Is your next class",
                    });
                }
            }



            //Block four - D
            if (hourDays == 14 && minuteDays == 10) {
                if (Notification.permission === "granted") {
                    var notification = new Notification(classD, {
                        icon: "icon128tr.png",
                        body: "Is your X-Block class",
                    });
                }
            }
        }
        //Tuesday ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        else if (wDay === 2) {
            //Block one - C
            if (hourDays == 8 && minuteDays == 0) {
                if (Notification.permission === "granted") {
                    var notification = new Notification(classC, {
                        icon: "icon128tr.png",
                        body: "Is your first class",
                    });
                }
            }

            //Block two - D
            if (hourDays == 10 && minuteDays == 35) {
                if (Notification.permission === "granted") {
                    var notification = new Notification(classD, {
                        icon: "icon128tr.png",
                        body: "Is your next class",
                    });
                }
            }

            //Block three - A
            if (hourDays == 13 && minuteDays == 5) {
                console.log("hello block e approaching");
                if (Notification.permission === "granted") {
                    var notification = new Notification(classA, {
                        icon: "icon128tr.png",
                        body: "Is your next class",
                    });
                }
            }

            //Block four - B
            if (hourDays == 14 && minuteDays == 10) {
                if (Notification.permission === "granted") {
                    var notification = new Notification(classB, {
                        icon: "icon128tr.png",
                        body: "Is your X-Block class",
                    });
                }
            }

        }


        //Wednesday ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        else if (wDay === 3) {
            console.log("today is Wednesday");
            //Block one - B
            if (hourDays == 8 && minuteDays == 0) {
                if (Notification.permission === "granted") {
                    var notification = new Notification(classB, {
                        icon: "icon128tr.png",
                        body: "Is your first class",
                    });
                }
            }

            //Block two - D
            if (hourDays == 10 && minuteDays == 35) {
                if (Notification.permission === "granted") {
                    var notification = new Notification(classD, {
                        icon: "icon128tr.png",
                        body: "Is your next class",
                    });
                }
            }

            //Block three - A
            if (hourDays == 13 && minuteDays == 5) {
                if (Notification.permission === "granted") {
                    var notification = new Notification(classA, {
                        icon: "icon128tr.png",
                        body: "Is your next class",
                    });
                }
            }

            //Block four - C
            if (hourDays == 14 && minuteDays == 10) {
                if (Notification.permission === "granted") {
                    var notification = new Notification(classC, {
                        icon: "icon128tr.png",
                        body: "Is your X-Block class",
                    });
                }
            }
        }
        //Thursday ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        else if (wDay === 4) {
            //Block one - D
            if (hourDays == 8 && minuteDays == 0) {
                if (Notification.permission === "granted") {
                    var notification = new Notification(classD, {
                        icon: "icon128tr.png",
                        body: "Is your first class",
                    });
                }
            }

            //Block two - C
            if (hourDays == 10 && minuteDays == 35) {
                if (Notification.permission === "granted") {
                    var notification = new Notification(classC, {
                        icon: "icon128tr.png",
                        body: "Is your next class",
                    });
                }
            }

            //Block three - B
            if (hourDays == 13 && minuteDays == 5) {
                if (Notification.permission === "granted") {
                    var notification = new Notification(classB, {
                        icon: "icon128tr.png",
                        body: "Is your next class",
                    });
                }
            }

            //Block four - A
            if (hourDays == 14 && minuteDays == 10) {
                if (Notification.permission === "granted") {
                    var notification = new Notification(classA, {
                        icon: "icon128tr.png",
                        body: "Is your X-Block class",
                    });
                }
            }
        }
        //Friday ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        else if (wDay === 5) {
            //Block one - A
            if (hourDays == 8 && minuteDays == 0) {
                if (Notification.permission === "granted") {
                    var notification = new Notification(classA, {
                        icon: "icon128tr.png",
                        body: "Is your first class",
                    });
                }
            }
            //Block two update -C



            //Block two - C
            if (hourDays == 10 && minuteDays == 35) {
                if (Notification.permission === "granted") {
                    var notification = new Notification(classC, {
                        icon: "icon128tr.png",
                        body: "Is your next class",
                    });
                }
            }

            //Block three - B
            if (hourDays == 13 && minuteDays == 5) {
                if (Notification.permission === "granted") {
                    var notification = new Notification(classB, {
                        icon: "icon128tr.png",
                        body: "Is your next class",
                    });
                }
            }
            //Block four - D
            if (hourDays == 14 && minuteDays == 10) {
                if (Notification.permission === "granted") {
                    var notification = new Notification(classD, {
                        icon: "icon128tr.png",
                        body: "Is your X-Block class",
                    });
                }
            }
        }

        //  }); //closing for the load document
    }); //Closing for the get storage sync
} //Close for the function timeThing
