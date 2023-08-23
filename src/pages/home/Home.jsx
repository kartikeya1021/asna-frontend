import { useEffect, useState } from "preact/hooks";
import React from "react";
import "./home.css";
import Card from "../../components/card";
export default function Home() {
  const [data, setData] = useState(
    localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData"))
      : {
          started: [
          ],
          inProgress: [],
          done: [],
        }
  );

  const [taskDetail, setTaskDetail] = useState({
    taskName: "Untitled",
    status: "",
    date: new Date(),
    description: "Add a description",
    currentlyEditing: false,
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
      (card) => card?.id == cardId
    );
    var newCard = dataCopy[sourceStatus][foundedCardIndex];
    delete dataCopy[sourceStatus][foundedCardIndex];
    dataCopy[endStatus].push(newCard);
    setData(dataCopy);
  };

  const editCard = (cardId, newCardData, type) => {
    var dataCopy = { ...data };
    var foundedCardIndex = dataCopy[type].findIndex(
      (card) => card?.id == cardId
    );
    dataCopy[type][foundedCardIndex] = newCardData;
    setData(dataCopy);
  };
  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(data));
  }, [data]);

  return (
    <div>
         <button
        onClick={() => {
          localStorage.clear();
          window.location.reload();
        }}
      >
        Clear
      </button>
      <div className="wrapper">
     
     <div
       className="started container"
       onDrop={moveCard}
       onDragOver={(e) => {
         e.preventDefault();
       }}
     >
       {data.started.map((card) => (
         <Card card={card} type={"started"} editCard={editCard} />
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
         <Card card={card} type={"inProgress"} editCard={editCard} />
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
         <Card card={card} type={"done"} editCard={editCard} />
       ))}
       <button onClick={() => addTask("done")} className="card button">
         + Add Card{" "}
       </button>
     </div>
   </div>
    </div>
   
  );
}
