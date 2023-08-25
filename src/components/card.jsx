import React from "react";

export default function Card({ card, type, editCard, columnId }) {
  return (
    <div
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData("cardid", card.id);
        e.dataTransfer.setData("source", columnId);
      }}
      className="card"
    >
      {card.currentlyEditing ? (
        <input
          type="text"
          value={card.taskName}
          onChange={(e) =>
            editCard(
              card.id,
              {
                ...card,
                taskName: e.target.value,
              },
              type
            )
          }
        />
      ) : (
        card?.taskName
      )}
      <br />
      {card.currentlyEditing ? (
        <input
          type="text"
          value={card.description}
          onChange={(e) =>
            editCard(
              card.id,
              {
                ...card,
                description: e.target.value,
              },
              type
            )
          }
        />
      ) : (
        card?.description
      )}
      <p>{new Date(card.date).toDateString()}</p>
      <i
        onClick={() =>
          editCard(
            card.id,
            {
              ...card,
              currentlyEditing: !card.currentlyEditing,
            },
            type
          )
        }
        class="fa-solid fa-pen-to-square edit-icon"
      ></i>
    </div>
  );
}
