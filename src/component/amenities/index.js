import "./index.css";

import Box from "../box";
import ListItem from "../list-item";

import hasPool_svg from "./Pool.svg";
import hasGym_svg from "./Gym.svg";
import hasFreeBreakfast_svg from "./FreeBreakfast.svg";
import hasFreeWiFi_svg from "./FreeWiFi.svg";
import hasParking_svg from "./Parking.svg";
import hasPetsAllowed_svg from "./PetsAllowed.svg";
import hasAirportShuttle_svg from "./AirportShuttle.svg";
import hasConciergeService_svg from "./ConciergeService.svg";
import hasRoomService_svg from "./RoomService.svg";
import hasChildFriendly_svg from "./ChildFriendly.svg";

// import test from "./test.svg";

export default function Amenities({
  title,
  hasPool,
  hasGym,
  hasFreeBreakfast,
  hasFreeWiFi,
  hasParking,
  hasPetsAllowed,
  hasAirportShuttle,
  hasConciergeService,
  hasRoomService,
  hasChildFriendly,
  ...rest
}) {
  return (
    <Box className="price">
      <div className="price__header">
        <span className={"price__value"}>{title}</span>
      </div>

      <ListAmenities
        {...rest}
        hasPool={hasPool}
        hasGym={hasGym}
        hasFreeBreakfast={hasFreeBreakfast}
        hasFreeWiFi={hasFreeWiFi}
        hasParking={hasParking}
        hasPetsAllowed={hasPetsAllowed}
        hasAirportShuttle={hasAirportShuttle}
        hasConciergeService={hasConciergeService}
        hasRoomService={hasRoomService}
        hasChildFriendly={hasChildFriendly}
      />
    </Box>
  );
}

function ListAmenities({
  hasPool,
  hasGym,
  hasFreeBreakfast,
  hasFreeWiFi,
  hasParking,
  hasPetsAllowed,
  hasAirportShuttle,
  hasConciergeService,
  hasRoomService,
  hasChildFriendly,
}) {
  return (
    <ul className="price__list">
      <ListItem>
        <img src={hasPool_svg} alt="hasPool" height={24} />
        <span className={`${hasPool ? "" : "not-alloved"}`}> Басейн</span>
      </ListItem>

      <ListItem>
        <img src={hasGym_svg} alt="hasGym" height={24} />
        <span className={`${hasGym ? "" : "not-alloved"}`}>
          {" "}
          Спортивний зал
        </span>
      </ListItem>

      <ListItem>
        <img src={hasFreeBreakfast_svg} alt="hasFreeBreakfast" height={24} />
        <span className={`${hasFreeBreakfast ? "" : "not-alloved"}`}>
          {" "}
          Безкоштовний сніданок
        </span>
      </ListItem>

      <ListItem className="price__list-item">
        <img src={hasFreeWiFi_svg} alt="hasFreeWiFi" height={24} />
        <span className={`${hasFreeWiFi ? "" : "not-alloved"}`}>
          {" "}
          Безкоштовний Wi-Fi
        </span>
      </ListItem>

      <ListItem>
        <img src={hasParking_svg} alt="hasParking" height={24} />
        <span className={`${hasParking ? "" : "not-alloved"}`}>
          {" "}
          Безкоштовний вуличний паркінг
        </span>
      </ListItem>

      <ListItem>
        <img src={hasPetsAllowed_svg} alt="hasPetsAllowed" height={24} />

        <span className={`${hasPetsAllowed ? "" : "not-alloved"}`}>
          {" "}
          Дозволено розміщення з домашніми тваринами
        </span>
      </ListItem>

      <ListItem>
        <img src={hasAirportShuttle_svg} alt="hasAirportShuttle" height={24} />
        <span className={`${hasAirportShuttle ? "" : "not-alloved"}`}>
          {" "}
          Трансфер до/з аеропорту
        </span>
      </ListItem>

      <ListItem className="price__list-item">
        <img
          src={hasConciergeService_svg}
          alt="hasConciergeService"
          height={24}
        />
        <span className={`${hasConciergeService ? "" : "not-alloved"}`}>
          {" "}
          Консьєрж-сервіс
        </span>
      </ListItem>

      <ListItem>
        <img src={hasRoomService_svg} alt="hasRoomService" height={24} />
        <span className={`${hasRoomService ? "" : "not-alloved"}`}>
          {" "}
          Обслуговування номерів
        </span>
      </ListItem>

      <ListItem>
        <img src={hasChildFriendly_svg} alt="hasChildFriendly" height={24} />
        <span className={`${hasChildFriendly ? "" : "not-alloved"}`}>
          {" "}
          Підходить для дітей
        </span>
      </ListItem>
    </ul>
  );
}
