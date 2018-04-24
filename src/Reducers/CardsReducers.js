import initialState from './InitialState';

export default function cardsReducer(state=initialState.cards, action){


  switch(action.type){
    case 'LOAD_CARDS_SUCCESS':
      return action.cards;


    case 'DISPLAY_CARD_SUCCESS':
      return [
        ...state.filter(course => course.id !== action.course.id),
        Object.assign({}, action.course)
      ];



    default :
      return state;
  }

}
