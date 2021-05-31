import React from "react";
import './CardList.css';

 

const CardList = ({ item }) => {
  return (
    <div class="col-md-5 " style={{ marginRight: "15px" }}>
      <div className="cardList-part">
        <div class="d-flex justify-content-end">
          <img
            className="cardList-img"
            src={`${item.imageURL}`}
            alt=""
          />
         
        </div>
        <div class="justify-content-start">
          <h6 style={{ fontWeight: "700", marginTop: "20px" }}>
            {item.status}
          </h6>
          <p
            style={{
              color: "#000000b3",
              paddingRight: "22px",
              textAlign: "inherit",
            }}
            class="card-text"
          >
            {item.description}
          </p>
          {/* <button className="btn btn-primary"> Pending</button> */}
        </div>
      </div>
    </div>
  );
};
export default CardList;