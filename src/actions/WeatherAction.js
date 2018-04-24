import axios from "axios";

export function loadWeatherSucess(data){
  return {type: 'LOAD_WEATHER_SUCCESS', data};
}

export function loadWeather(){
  return function(dispatch) {

    return  axios.get("https://api.weatherbit.io/v2.0/current?city=Raleigh,NC&key=1f397159780042faaefe8f633202bcfc")
    .then( (response)=>{
      dispatch(loadWeatherSucess(response.data));
    }).catch(error =>{
      throw(error);
    });
  };
}
