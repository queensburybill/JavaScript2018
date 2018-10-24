/**
 * Try this in JSBin
 * @see https://jsbin.com/kitufekiki/1/edit?js,console
 */

// Your data
const users = [
  {
    name: {
      title: "mrs",
      first: "emmi",
      last: "niska"
    },
    email: "emmi.niska@example.com",
    picture: {
      large: "https://randomuser.me/api/portraits/women/81.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/81.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/81.jpg"
    }
  },
  {
    name: {
      title: "mrs",
      first: "aminata",
      last: "heersink"
    },
    email: "aminata.heersink@example.com",
    picture: {
      large: "https://randomuser.me/api/portraits/women/57.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/57.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/57.jpg"
    }
  },
  {
    name: {
      title: "mr",
      first: "marceau",
      last: "roy"
    },
    email: "marceau.roy@example.com",
    picture: {
      large: "https://randomuser.me/api/portraits/men/39.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/39.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/39.jpg"
    }
  }
];

// Set state
let state = {
  users: users
};

// Mimicking this.setState
function setState(newStateObj) {
  state = Object.assign(state, newStateObj);
  console.log(state);
}

// The event handler or other function you want to use to modify state
function search(userInput) {
  const input = userInput.replace(" ", "").toLowerCase();
  setState({
    // create your new object here
    users: users.filter(user => {
      const name = user.name.first + user.name.last;
      return name.match(input);
    })
  });
}

search("roy");
