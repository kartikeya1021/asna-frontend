import { useEffect, useState } from "preact/hooks";
import React from "react";
import "./home.css";
export default function Home() {
  const [data, setData] = useState({
    started: [
      {
        taskName: "Task 1",
        status: "started",
        date: new Date(),
        id: 1,
        description: "Hello world",
      },
    ],
    inProgress: [],
    done: [],
  });

  const [taskDetail, setTaskDetail] = useState({
    taskName: "Untitled",
    status: "",
    date: new Date(),
    description: "Add a description",
  });
  const addTask = (type) => {
    if (type == "started") {
      var dataCopy = { ...data };
      dataCopy.started.push({
        ...taskDetail,
        status: type,
        id: Math.random(),
      });
      setData(dataCopy);
    } else if (type == "inProgress") {
      var dataCopy = { ...data };
      dataCopy.inProgress.push({
        ...taskDetail,
        status: type,
        id: Math.random(),
      });
      setData(dataCopy);
    } else if (type == "done") {
      var dataCopy = { ...data };
      dataCopy.done.push({
        ...taskDetail,
        status: type,
        id: Math.random(),
      });
      setData(dataCopy);
    }
  };
  const moveCard = (e) => {
    var endStatus = e.target.className;
    endStatus = endStatus.split(" ")[0];
    const cardId = e.dataTransfer.getData("cardid");
    const sourceStatus = e.dataTransfer.getData("source");
    var dataCopy = { ...data }; //deep copy
    var foundedCardIndex = dataCopy[sourceStatus].findIndex(
      (card) => card.id == cardId
    );
    var newCard = dataCopy[sourceStatus][foundedCardIndex];
    delete dataCopy[sourceStatus][foundedCardIndex];
    dataCopy[endStatus].push(newCard);
    setData(dataCopy);
  };

  return (
    <div className="wrapper">
      <div
        className="started container"
        onDrop={moveCard}
        onDragOver={(e) => {
          e.preventDefault();
        }}
      >
        {data.started.map((card) => (
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
        ))}
        <button onClick={() => addTask("started")} className="card button">
          + Add Card{" "}
        </button>
      </div>

      <div
        className="inProgress container"
        onDrop={moveCard}
        onDragOver={(e) => {
          e.preventDefault();
        }}
      >
        {data.inProgress.map((card) => (
          <div
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData("cardid", card.id);
              e.dataTransfer.setData("source", "inProgress");
            }}
            className="card"
          >
            {card.taskName}
            <br />
            {card.description}
          </div>
        ))}
        <button onClick={() => addTask("inProgress")} className="card button">
          + Add Card{" "}
        </button>
      </div>
      <div
        className="done container"
        onDrop={moveCard}
        onDragOver={(e) => {
          e.preventDefault();
        }}
      >
        {data.done.map((card) => (
          <div
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData("cardid", card.id);
              e.dataTransfer.setData("source", "done");
            }}
            className="card"
          >
            {card.taskName}
            <br />
            {card.description}
          </div>
        ))}
        <button onClick={() => addTask("done")} className="card button">
          + Add Card{" "}
        </button>
      </div>
    </div>
  );
}
