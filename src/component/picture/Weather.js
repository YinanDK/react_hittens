import React, {PropTypes} from 'react';
import { OpenWeatherMap } from 'react-weather';
import ItemList from './ItemList';



const Weather = ({weather}) => {

  return(

    <div >

      {weather.map((weatherItem)=>

          <ItemList key={weatherItem.id} item={weatherItem} />
      )}
    </div>
  );
};


Weather.propTypes = {

  weather: PropTypes.array.isRequired
};

export default Weather;




