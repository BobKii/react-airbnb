import "./index.css";

import Box from "../box";
import ListItem from "../list-item";

// import test from "./test.svg";

export default function AddinProperty({
  Title,
  house_rules,
  cancellation_policy,
  local_transportation,
  host_languages,
  special_offers,
  checkin_instructions,
  ...rest
}) {
  return (
    <Box className="price">
      <div className="price__header">
        <span className={"price__value"}>{Title}</span>
      </div>
      <ListAddinProperty
        {...rest}
        house_rules={house_rules}
        cancellation_policy={cancellation_policy}
        local_transportation={local_transportation}
        host_languages={host_languages}
        special_offers={special_offers}
        checkin_instructions={checkin_instructions}
      />
    </Box>
  );
}

function ListAddinProperty({
  house_rules,
  cancellation_policy,
  local_transportation,
  host_languages,
  special_offers,
  checkin_instructions,
}) {
  return (
    <ul className="price__list">
      <ListItem title="Правила дому">
        <span>{house_rules}</span>
        <span> гості</span>
      </ListItem>

      <ListItem title="Політика скасування">
        <span>{cancellation_policy}</span>
        <span> спальня</span>
      </ListItem>

      <ListItem title="Місцевий транспорт">
        <span>{local_transportation}</span>
        <span> ліжко</span>
      </ListItem>

      <ListItem title="Мови хоста" className="price__list-item">
        <span>{host_languages}</span>
        <span> ванна кімната</span>
      </ListItem>

      <ListItem title="Спеціальні пропозиції:" className="price__list-item">
        <span>{special_offers}</span>
        <span> ванна кімната</span>
      </ListItem>

      <ListItem title="Інструкції щодо реєстрації" className="price__list-item">
        <span>{checkin_instructions}</span>
        <span> ванна кімната</span>
      </ListItem>
    </ul>
  );
}
