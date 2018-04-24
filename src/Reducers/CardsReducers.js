import initialState from './InitialState';

export default function cardsReducer(state=initialState.cards, action){


  switch(action.type){
    case 'LOAD_CARDS_SUCCESS':
      return action.cards;


    case 'UPDATE_CARD_SUCCESS':
      return [
        ...state.filter(card => card.id !== action.card.id),
        Object.assign({}, action.card)
      ];



    default :
      return state;
  }

}
