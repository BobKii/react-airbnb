import "./index.css";

import Box from "../box";
import ListItem from "../list-item";

import guests_svg from "./guests.svg";
import bedrooms_svg from "./bedrooms.svg";
import beds_svg from "./beds.svg";
import baths_svg from "./baths.svg";

// import test from "./test.svg";

export default function DetailsProperty({
  Title,
  guests,
  bedrooms,
  beds,
  baths,
  ...rest
}) {
  return (
    <Box className="price">
      <div className="price__header">
        <span className={"price__value"}>{Title}</span>
      </div>

      <ListDetailsProperty
        {...rest}
        guests={guests}
        bedrooms={bedrooms}
        beds={beds}
        baths={baths}
      />
    </Box>
  );
}

function ListDetailsProperty({ guests, bedrooms, beds, baths }) {
  return (
    <ul className="price__list">
      <ListItem>
        <img src={guests_svg} alt="guests" height={24} />
        <span>{guests}</span>
        <span> гості</span>
      </ListItem>

      <ListItem>
        <img src={bedrooms_svg} alt="bedrooms" height={24} />
        <span>{bedrooms}</span>
        <span> спальня</span>
      </ListItem>

      <ListItem>
        <img src={beds_svg} alt="beds" height={24} />
        <span>{beds}</span>
        <span> ліжко</span>
      </ListItem>

      <ListItem className="price__list-item">
        <img src={baths_svg} alt="baths" height={24} />
        <span>{baths}</span>
        <span> ванна кімната</span>
      </ListItem>
    </ul>
  );
}
