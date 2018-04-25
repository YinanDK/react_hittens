
import React, {PropTypes} from 'react';
import {Link} from 'react-router';
const CardListElement = ({card})=>{

  return (

      <div className="col-sm-4 card-container card-element-container">
        <div className="card-content-container">
          <div className="picture_container" >
            <img src = {card.image} className="resultImage" />
          </div>
          <div className="titleNameBlock"><h3>Title: {card.title}</h3></div>
          <div className="bottom_btn">
            <Link className="btn btn-primary" to={'/'+card.id}>View</Link>
          </div>
        </div>
    </div>
  );
};

CardListElement.propTypes = {
  card: PropTypes.object
};

export default CardListElement;
