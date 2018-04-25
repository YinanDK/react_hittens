
import React, {PropTypes} from 'react';
import {Link} from 'react-router';
const ItemList = ({item})=>{

  return (

    <div>
      <div className="weather_head">
        <h3> {item.city_name}</h3>
              {item.datetime}<br/>
              {item.weather.description}
      </div>
        <h3 className="temperature"> {item.temp}˚C</h3>

    </div>
  );
};

ItemList.propTypes = {
  item: PropTypes.object
};

export default ItemList;
