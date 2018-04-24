import React, {PropTypes} from 'react';
import CardListElement  from './CardListElement';

const CardList = ({cards}) => {
  return(

    <div >


      {cards.map((card)=>
        <CardListElement key={card.id} card={card} />
      )}


    </div>
  );
};

CardList.propTypes ={
  cards: PropTypes.array.isRequired
};

export default CardList;
