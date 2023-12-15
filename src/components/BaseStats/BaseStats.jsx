import {
  BaseStatsContainer,
  NameStats,
  ProgressBarFiller,
  ValueStats,
} from "./BaseStatsStyles";

const BaseStats = ({ nameStats, value }) => {

  console.log(nameStats.replace("especial", "sp."));

  const reduceName = nameStats.replace("special-", "sp. ");

  const nameFirstLetterCapital =
    reduceName[0].toUpperCase() + reduceName.substring(1);

  return (
    <BaseStatsContainer>
      <NameStats>{nameFirstLetterCapital}</NameStats>
      <ValueStats>{value}</ValueStats>
      <ProgressBarFiller completed={value} />
          
    </BaseStatsContainer>
  );
};

export default BaseStats;
