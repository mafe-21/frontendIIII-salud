import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

const Card = ({ name, username, id, email, phone, website, isDetails }) => {
  const { state, dispatch } = useContext(ContextGlobal);

  const fav = state.favs.some((d) => d.id === id);

  const addFavorites = () => {
    console.log("clicked Favorites");
    fav
      ? dispatch({ type: "REMOVE_FAVORITE", payload: id })
      : dispatch({
          type: "ADD_FAVORITE",
          payload: { name, username, id, email, phone, website },
        });
  };
  return (
    <div className="card-info">
      <button onClick={addFavorites}>
          <img src={fav ? "/images/ico-fav.png" : "/images/ico-no-fav.png"} alt="favorite" width={15} height={15} />
      </button>
      <div className="card-img">      
        <img src="/images/doctor.jpg" alt="logo-DH" />
      </div>
      
      <div className="card-box">
        {name && <p>{name}</p>}
        {username && <p>{username}</p>}
        {email && <p>{email}</p>}
        {phone && <p>{phone}</p>}
        {website && <p>{website}</p>}
        <Link
          to={`/doctor/${id}`}
          className={isDetails ? "detail-on" : "detail-off"}
        >
          More info
        </Link>
      </div>
      
     
    </div>
  );
};

export default Card;
