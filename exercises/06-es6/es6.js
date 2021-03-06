/**
 * Refactor the following to use ES6. You will use all of the following ES6 features at least once:
 * - Let declarations
 * - Constants
 * - String interpolation
 * - Destructuring (of objects)
 * - Spread operator (of arrays)
 * - Shallowing copying (with Object.assign)
 *
 * Do not declare anything with "var"
 *
 * Reference
 * Slides: @see https://slides.com/jamaltaylor/es6/
 * ES6 Chart: @see http://es6-features.org/#Constants
 */

// What can we put in place of "var"?
let messageBox = document.getElementById("message");

// What can we put in place of "var"?
let guestNetworkStatus = {
  location: "Sunnyside Hotel",
  networkName: "Guest Network",
  uptime: 90,
  lastPinged: new Date()
};

// What can we put in place of "var"?
for (let i = 0; i < 5; i++) {
  // What can we put in place of "function"?
  setTimeout(() => {
    // Let's make this a constant, because we are not going to ever change it
    const serverData = [
      {
        networkName: "Guest Network",
        lastPinged: new Date(),
        uptime: generateFakeUptime()
      },
      {
        networkName: "Lobby Network",
        lastPinged: new Date(),
        uptime: 97
      },
      {
        networkName: "Staff Network",
        lastPinged: new Date(),
        uptime: generateFakeUptime()
      }
    ];
    // "Spread" this out so you are only passing in one argument
    process(...serverData);
  }, i * 3000);
}

function process(guestNetwork, lobbyNetwork, staffNetwork) {
  // Replace the next two lines by destructuring an object instead
  let { lastPinged, uptime } = guestNetwork;

  // Let's set the properties of guestNetworkStatus by shallow copying
  // one object onto another. What object method can we use to do this?
  // The first object copied will be guestNetworkStatus
  // The second object copied will be constructed with object shorthand

  guestNetworkStatus = Object.assign(guestNetworkStatus, { lastPinged, uptime });

  console.log(guestNetworkStatus);

  // Does this need to use "var"?
  let isBestNetwork =
    uptime > lobbyNetwork.uptime && uptime > staffNetwork.uptime;

  render(guestNetworkStatus, isBestNetwork);
}

function render(guestNetworkStatus, betterThanStaffNetwork) {
  // Set message with string interpolation
  var message =
    `${guestNetworkStatus.networkName} : ${guestNetworkStatus.uptime}% uptime${betterThanStaffNetwork ? "\nThis is outperforming every other network." : ""}`;
  console.log(message);
  messageBox.innerHTML = message; 
}

function generateFakeUptime() {
  return Math.floor(Math.random() * (100 - 98 + 1) + 98);
}
