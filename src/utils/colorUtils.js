export const getColorElementalType = (type) => {
    switch (type) {
      case "grass":
        return "#729F92";
      case "fire":
        return "#EAAB7D";
      case "water":
        return "#71C3FF";
      case "bug":
        return "#76A866";
      case "normal":
        return "#BF9762;";
      case "poison":
        return "#AD61AE";
      case "flying":
        return "#6892B0";
      case "dark":
        return "#5C5365";
      case "dragon":
        return "#0A6CBF";
      case "eletric":
        return "#F4D23B";
      case "fairy":
        return "#EC8FE6";
      case "ghost":
        return "#5269AC";
      case "ground":
        return "#D97745";
      case "ice":
        return "#74CEC0";
      case "psychic":
        return "#F67176";
      case "rock":
        return "#C7B78B";
      case "Steel":
        return "#BBBBBB";
      default:
        return "";
    }
  };
  