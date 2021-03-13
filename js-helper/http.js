const fetch = (cityName, apiToken) => {
  return new Promise((resolve, reject) => {
    const Http = new XMLHttpRequest();
    const url =
      'https://api.openweathermap.org/data/2.5/weather?q=' +
      cityName +
      '&units=metric&appid=' +
      apiToken;
    Http.open('GET', url);

    Http.onreadystatechange = (e) => {
      if (Http.readyState == XMLHttpRequest.DONE && Http.status == 200) {
        const RESPONSE_DATA = JSON.parse(Http.responseText);
        resolve(RESPONSE_DATA);
      } else if (Http.readyState == XMLHttpRequest.DONE) {
        reject('Something went wrong');
      }
    };
    Http.send();
  });
};

export default fetch;
