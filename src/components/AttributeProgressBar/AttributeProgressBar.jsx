import { BaseStatsContainer } from "../BaseStats/BaseStatsStyles";
import {
  AttributeProgressBarContainer,
  NameStats,
  ProgressBarFiller,
  ValueStats,
} from "./AttributeProgressBarStyles";

const AttributeProgressBar = ({ name, value, total }) => {
  const reduceName = name.replace("special-", "sp. ");

  const nameFirstLetterCapital =
    reduceName[0].toUpperCase() + reduceName.substring(1);

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
