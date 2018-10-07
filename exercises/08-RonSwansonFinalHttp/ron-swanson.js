/**
 * use this to url to make your api calls: https://ron-swanson-quotes.herokuapp.com/v2/quotes'
 *  As a user, I should be able to click on XHR and get a quote
 *  As a user, I should be able to click on axios and get a quote
 *  As a user, I should be able to click on FETCH and get a quote
 *
 */

 // assign buttons to variables
let xhrB = document.getElementById('XHR');
let fetchB = document.getElementById('FETCH');
let axiosB = document.getElementById('AXIOS');
let url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes'

// function to render blockquote to page
function populateBlockQuote(data) {
  document.getElementsByTagName('BLOCKQUOTE')[0].innerHTML = data;
}

// **************************************************
// XHR
// **************************************************

function loadQuoteXhr() {
  var XHR = new XMLHttpRequest();
  XHR.open("GET", url);
  XHR.send();

  XHR.onreadystatechange = function() {
    if(XHR.readyState === 4  && XHR.status === 200){
      populateBlockQuote(JSON.parse(XHR.responseText));
    };
  }
}

xhrB.addEventListener('click', loadQuoteXhr)

// **************************************************
// FETCH
// **************************************************

function loadQuoteFetch() {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Problem retrieving quote');
      }
     return response.json();
    })
    .then(data => {
      return populateBlockQuote(data);
    });
}

fetchB.addEventListener("click", loadQuoteFetch);

// **************************************************
// AXIOS
// **************************************************

function loadQuoteAxios() {
  axios.get(url)
  .then((response)=>{
    populateBlockQuote(response.data);
  })
  .catch((error)=>{
    handleErrors(error);
  })
}
function handleErrors(err) {
  if (err.response) {
    console.log("Problem With Response ", err.response.status);
  } else if (err.request) {
    console.log("Problem With Request!");
  } else {
    console.log('Error', err.message);
  }
}

axiosB.addEventListener("click", loadQuoteAxios);
