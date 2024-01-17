import bugElementImage from "../assets/ImagesPokemonsElements/bug-element-image.svg"
import darkElementImage from "../assets/ImagesPokemonsElements/dark-element-image.svg"
import dragonElementImage from "../assets/ImagesPokemonsElements/dragon-element-image.svg"
import electricElementImage from "../assets/ImagesPokemonsElements/electric-element-image.svg"
import fairyElementImage from "../assets/ImagesPokemonsElements/fairy-element-image.svg"
import fightingElementImage from "../assets/ImagesPokemonsElements/fighting-element-image.svg"
import fireElementImage from "../assets/ImagesPokemonsElements/fire-element-image.svg"
import flyingElementImage from "../assets/ImagesPokemonsElements/flying-element-image.svg"
import ghostElementImage from "../assets/ImagesPokemonsElements/ghost-element-image.svg"
import grassElementImage from "../assets/ImagesPokemonsElements/grass-element-image.svg"
import groundElementImage from "../assets/ImagesPokemonsElements/ground-element-image.svg"
import iceElementImage from "../assets/ImagesPokemonsElements/ice-element-image.svg"
import normalElementImage from "../assets/ImagesPokemonsElements/normal-element-image.svg"
import poisonElementImage from "../assets/ImagesPokemonsElements/poison-element-image.svg"
import psychicElementImage from "../assets/ImagesPokemonsElements/psychic-element-image.svg"
import rockElementImage from "../assets/ImagesPokemonsElements/rock-element-image.svg"
import steelElementImage from "../assets/ImagesPokemonsElements/steel-element-image.svg"
import waterElementImage from "../assets/ImagesPokemonsElements/water-element-image.svg"



  const PokemonElementTypesImages = {
    poison: poisonElementImage,
    grass: grassElementImage,
    fire: fireElementImage,
    water:waterElementImage,
    bug: bugElementImage,
    normal: normalElementImage,
    dark: darkElementImage,
    dragon: dragonElementImage,
    eletric: electricElementImage,
    fairy: fairyElementImage,
    fighting: fightingElementImage,
    ghost: ghostElementImage,
    ground: groundElementImage,
    ice: iceElementImage,
    psychic: psychicElementImage,
    rock: rockElementImage,
    steel: steelElementImage,
    flying: flyingElementImage
  };
  
export const getPokemonElementImage = (typeName) => {
    
    return typeName ? PokemonElementTypesImages[typeName]: null;
  };
  