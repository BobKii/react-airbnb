import "./index.css";

export default function ContactInfo({
  Title,
  name,
  image,
  response_rate,
  response_time,
  info,
  phone,
  ...rest
}) {
  return (
    <ItemContactInfo
      {...rest}
      name={name}
      image={image}
      response_rate={response_rate}
      response_time={response_time}
      info={info}
      phone={phone}
    />
  );
}

function ItemContactInfo({
  name,
  image,
  response_rate,
  response_time,
  info,
  phone,
}) {
  return (
    <div className="frame1">
      <div className="frame1__1">
        <div className="frame1__1-1">
          <img
            height={80}
            width={80}
            src={image}
            className="frame1__photo"
            alt="Icon"
          />
        </div>
        <div className="frame1__1-2">
          <span className="frame1__1-2-name">Господар - {name}</span>
          <div className="title__sub-block">
            <span className="title__sub-value">{phone}</span>

            <span className="title__sub-value">{response_time}</span>

            <span className="title__sub-value">
              {response_rate}
              {" percent response rate "}
            </span>
          </div>
        </div>
      </div>
      <span>{info}</span>
    </div>
  );
}
