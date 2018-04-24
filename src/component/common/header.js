import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import Weather from '../picture/Weather';

const Header = () =>{
  return(

    <nav>
      <IndexLink to ="/" activeClassName = "active">
        <img className="logo" src="https://artlandapp.com/wp-content/uploads/2017/01/Artland_logo_full_pos.png" />
      </IndexLink>
      {" | "}
      <Link to = "/" activeClassName = "active"> TestApp </Link>
      <Weather weather={Weather} />
    </nav>

  );
};



export default Header;
