import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";
const Detail = () => {
  const { id } = useParams();
  const { state } = useContext(ContextGlobal);
  const doctor = state.doctors.find((d) => d.id.toString() === id);

  return (
    <div className={state.theme === "light" ? "card-grid-dark" : "card-grid"}>
      <Card
        id={doctor.id}
        username={doctor.username}
        name={doctor.name}
        email={doctor.email}
        phone={doctor.phone}
        website={doctor.website}
        isDetails={true}
      />
    </div>
  );
};

export default Detail;
