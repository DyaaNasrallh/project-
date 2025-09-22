

function showweatherDetails(event){
    event.preventDefault();
    const city=document.getElementById('city').value;
    const apiKey='1005e794133c328e736bf8b5a0685864';
    const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                  <p>Temperature: ${Math.floor(data.main.temp-273)} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
        })
}
 document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );


 function weatheDetails(event){
    event.preventDefault();
    var lon=document.getElementById('lon').value;
  var lat=  document.getElementById('lat').value;
  const apiKey='1005e794133c328e736bf8b5a0685864';
  const apiurl=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
    fetch(apiurl)
    .then(response=>response.json())
    .then(data=>{
        document.getElementById('weatherInfo').innerHTML=`<h2>Weather in ${data.name}</h2>
                                  <p>Temperature: ${Math.floor(data.main.temp-273)} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
 })
 }
 document.getElementById('weatherForm1').addEventListener('submit',weatheDetails);