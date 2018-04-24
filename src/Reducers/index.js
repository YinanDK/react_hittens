import {combineReducers} from 'redux';
import cards from './CardsReducers';
import weather from './WeatherReducer';


const rootReducer = combineReducers({
  cards,
  weather

});

export default rootReducer;
