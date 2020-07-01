import React from "react";
import StarRating from "./StarRating";
import { FaTrash } from "react-icons/fa";
import { useColors } from "./ColorProvider";
import { css } from "emotion";

export default function Color({ id, title, color, rating }) {
  const { rateColor, removeColor } = useColors();
  return (
    <section className="color-box">
      <div
        className={css`
          position: relative;
        `}
      >
        <h1>{title}</h1>
        <button className="button" onClick={() => removeColor(id)}>
          <FaTrash />
        </button>
      </div>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating
        className="star-rating"
        selectedStars={rating}
        onRate={(rating) => rateColor(id, rating)}
      />
    </section>
  );
}
