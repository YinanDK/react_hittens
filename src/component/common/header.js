import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';



const Header = () =>{
  return(

    <nav>
      <IndexLink to ="/" activeClassName = "active">
        <img className="logo" src="https://artlandapp.com/wp-content/uploads/2017/01/Artland_logo_full_pos.png" />
      </IndexLink>
    </nav>


  );
};



export default Header;
