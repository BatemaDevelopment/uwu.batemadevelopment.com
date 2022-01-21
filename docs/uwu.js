function uwu(url) {
  window.location = url;
}

function owo() {
  let randint = Math.round(Math.random()) * 3;
  var newURL;

  if (randint === 1) {
    newURL = 'https://batemadevelopment.com';
  } else if (randint === 2) {
    newURL = 'https://dev.webalina.batemadevelopment.com';
  }

  uwu(newURL);
}