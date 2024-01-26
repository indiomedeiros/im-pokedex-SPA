import { SubTitleText } from "../../Pages/PokemonDetailPage/PokemonDetailPageStyles";
import AttributeProgressBar from "../AttributeProgressBar/AttributeProgressBar";
import { BaseStatsContainer } from "./BaseStatsStyles";

const BaseStats = ({ stats }) => {
  let totalStatusPoints = 0;

  const baseStatsMapped =
    stats &&
    stats.map((atribute) => {
      totalStatusPoints = totalStatusPoints + atribute["base_stat"];
      return (
        <AttributeProgressBar
          key={atribute.stat.name}
          name={atribute.stat.name.replace("special-", "Sp. ")}
          value={atribute["base_stat"]}
        />
      );
    });

  return (
    <>
      <SubTitleText>Base Stats:</SubTitleText>
      <BaseStatsContainer>
        {baseStatsMapped}

        <AttributeProgressBar name={"Total"} total={totalStatusPoints} />
      </BaseStatsContainer>
    </>
  );
};

export default BaseStats;
