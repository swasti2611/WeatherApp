




const weatherImgage=document.querySelector(".weatherImg")

const apikey="c6fc65e4501238936b02edf2835aec4a";

const Url="https://api.openweathermap.org/data/2.5/weather?q=";



const button=document.querySelector(".searchBtn");


 async function checkWeather(city){
   const response= await fetch(Url + city + `&appid=${apikey}`);
   var data= await response.json();
   console.log(data);

   document.querySelector(".city").innerHTML=data.name;
   let tempreture =document.querySelector(".temp").innerHTML=Math.round(data.main.temp)/10 + "°C";
  let humidity= document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
   let wind=document.querySelector(".wind").innerHTML=data.wind.speed;


   if(data.weather[0].main=='Clouds'){
    weatherImgage.src="app_Images/clouds.png"
   }

   if(data.weather[0].main=='Clear'){
    weatherImgage.src="app_Images/clear.png"
   }

   if(data.weather[0].main=='Rain'){
    weatherImgage.src="app_Images/rain.png"
   }
   if(data.weather[0].main=='Drizzel'){
    weatherImgage.src="app_Images/drizeel.png"
   }
   if(data.weather[0].main=='Mist'){
    weatherImgage.src="app_Images/mist.png"
   }
   

}
const SearchBox=document.querySelector(".inputSearch");
button.addEventListener("click",()=>{
    
    checkWeather(SearchBox.value);
})



