import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () =>{
  return(
    <nav>
      <IndexLink to ="/" activeClassName = "active">Artland</IndexLink>
      {" | "}
      <Link to = "/" activeClassName = "active"> TestApp </Link>


    </nav>
  );
};



export default Header;
