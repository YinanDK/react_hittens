import initialState from './InitialState';

export default function cardsReducer(state=initialState.weather, action){


  switch(action.type){

    case 'LOAD_WEATHER_SUCCESS':
      return action.data.data;
    default :
      return state;
  }

}
