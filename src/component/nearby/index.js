import { Fragment } from "react";

import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";

import "./index.css";

export default function NearbyList({ list, Title }) {
  return (
    <div className="room__block">
      <Heading border>{Title}</Heading>

      <Box className="room__list-nearby">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <ItemNearbyList {...rest} />
          </Fragment>
        ))}
      </Box>
    </div>
  );
}

function ItemNearbyList({ id, name, link }) {
  return (
    <ListItem>
      <a href={link}>{name}</a>
    </ListItem>
  );
}
