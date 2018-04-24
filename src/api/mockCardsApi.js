import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const cards = [
  { id : 0 ,
    title: "Talk to the hand",
    description: "A complex situation",
    image: "https://thumbs.dreamstime.com/b/talk-to-hand-7411962.jpg"
  },
  {
    id : 1 ,
    title: "Life is a roller coaster",
    description: "An up and down whirlwind",
    image: "https://img00.deviantart.net/7a10/i/2013/182/7/a/life_is_like_a_roller_coaster_by_cyanidemachine-d6bhk5a.jpg"
  },
  {
    id : 2 ,
    title: "Northern Lights",
    description: "A trip to norway",
    image: "https://www.w3schools.com/w3images/lights.jpg"
  },
  {
    id : 3,
    title: "A Trip of a lifetime",
    description: "Just flying to nowhere",
    image: "https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/icebridge_201705_arctic2.jpg"
  },
  {
    id : 4 ,
    title: "Ride the wave",
    description: "Don't look down",
    image: "https://www.irishtimes.com/polopoly_fs/1.2614603.1461003507!/image/image.jpg_gen/derivatives/box_620_330/image.jpg"
  },
  {
    id : 5 ,
    title: "Star Man",
    description: "My type of driving",
    image: "https://www.gannett-cdn.com/-mm-/3b715c01d576bb42423d1b1b680ea5daba5d2811/c=246-0-3230-2243&r=x404&c=534x401/local/-/media/2018/02/07/USATODAY/USATODAY/636535922769046087-AFP-AFP-YY6VW.jpg"
  },
  {
    id : 6,
    title: "Taking a moment",
    description: "Stop and breathe",
    image: "https://www.planwallpaper.com/static/images/121.jpg"
  }
];


class CardApi {
  static getAllCards() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], cards));
      }, delay);
    });
  }
  static getCardByID(card){
    card = Object.assign({}, card); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {

        if (card.id) {
          const existingCardIndex = cards.findIndex(a => a.id == card.id);
          cards.splice(existingCardIndex, 1, card);
        }

        resolve(card);
      }, delay);
    });
  }

}

export default CardApi;
