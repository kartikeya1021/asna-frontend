import React from 'react'

export default function Card() {
  return (
    <div
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData("cardid", card.id);
              e.dataTransfer.setData("source", "started");
            }}
            className="card"
          >
            {card.taskName}
            <br />
            {card.description}
          </div>
  )
}
