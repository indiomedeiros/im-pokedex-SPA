import { changeFirstLetterToCapital } from "../../utils/pokemonUtils";
import {
  AttributeProgressBarContainer,
  NameStats,
  ProgressBarFiller,
  ValueStats,
} from "./AttributeProgressBarStyles";

const AttributeProgressBar = ({ name, value, total }) => {
  const nameFirstLetterCapital = changeFirstLetterToCapital(name);

  return (
    <>
      <AttributeProgressBarContainer>
        <NameStats>{nameFirstLetterCapital}</NameStats>

        {total ? (
          <ValueStats>{total}</ValueStats>
        ) : (
          <ValueStats>{value}</ValueStats>
        )}

        {!total && <ProgressBarFiller completed={value} />}
      </AttributeProgressBarContainer>
    </>
  );
};

export default AttributeProgressBar;
