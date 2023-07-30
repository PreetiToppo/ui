import React from "react";
import "./ImageCard.css";

function ImageCard(props) {
  return (
    <div className="image-card">
      <img src={props.src} alt={props.alt} className="image-card__img" />
      <div className="image-card__overlay">
        <h2 className="image-card__title">{props.title}</h2>
        <div className="image-card__actions">
          <button className="image-card__action-btn">
            <i className="fas fa-heart"></i>
          </button>
          <button className="image-card__action-btn">
            <i className="fas fa-save"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;