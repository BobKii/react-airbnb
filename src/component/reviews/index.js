import { Fragment } from "react";

import Heading from "../heading";
import Box from "../box";
import "./index.css";

export default function ReviewList({ list, Title }) {
  return (
    <div className="room__block">
      <Heading border>{Title}</Heading>

      <div className="room__list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <ItemReviewList {...rest} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

function ItemReviewList({ id, guestName, rating, review }) {
  return (
    <Box className="room">
      <div className="room__header-box">
        <span className="room__title"> {guestName} </span>
        <span className="room__info">Рейтинг {rating} </span>
      </div>

      <span className="room__info">{review}</span>
    </Box>
  );
}
