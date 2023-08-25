import { useEffect, useState } from "preact/hooks";
import React from "react";
import "./home.css";
import Card from "../../components/card";
export default function Home() {
  const [data, setData] = useState(
    localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData"))
      : {}
  );
  const [columnName, setColumnName] = useState();
  const [currentlyEditing, setCurrentlyEditing] = useState();
  const [currentColumnName, setCurrentColumnName] = useState();
  const [taskDetail, setTaskDetail] = useState({
    taskName: "Untitled",
    status: "",
    date: new Date(),
    description: "Add a description",
    currentlyEditing: false,
  });

  const addTask = (type) => {
    var dataCopy = { ...data };
    dataCopy[type].push({
      ...taskDetail,
      status: type,
      id: Math.random(),
      currentlyEditing: false,
    });
    setData(dataCopy);
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
    /* console.log(sourceStatus,endStatus,cardId) */
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

  const addColoumn = () => {
    if (!columnName) return;

    var dataCopy = { ...data };
    dataCopy[columnName] = [];
    setData(dataCopy);
    setColumnName("");
  };

  const editColumnName = (columnName_) => {
    var dataCopy = { ...data };
    var keyCopy = dataCopy[columnName_];
    delete dataCopy[columnName_];
    dataCopy[columnName] = keyCopy;
    setData(dataCopy);
  };

  /* useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(data));
  }, [data]); */

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
      <div>
        <input
          type="text"
          value={columnName}
          onChange={(e) => setColumnName(e.target.value)}
        />
        <button
          className="card button"
          onClick={() => {
            if (currentlyEditing) {
              editColumnName(currentColumnName);
              setCurrentlyEditing(false);
              setColumnName("");
              return;
            } else {
              addColoumn();
            }
          }}
        >
          {""}
          {currentlyEditing ? "Update Column" : "+ Add Section"}
        </button>
      </div>
      <div className="wrapper">
        {Object.keys(data).map((key) => (
          <div>
            <div className="col-row">
              <h2>{key}</h2>
              <i
                onClick={() => {
                  setCurrentlyEditing(!currentlyEditing);
                  setCurrentColumnName(key);
                  setColumnName(key);
                }}
                class="fa-solid fa-pen-to-square "
              ></i>
            </div>
            <div
              className={`${key} container`}
              onDrop={moveCard}
              onDragOver={(e) => {
                e.preventDefault();
              }}
            >
              {data[key].map((card) => (
                <Card card={card} type={key} editCard={editCard} />
              ))}
              <button onClick={() => addTask(key)} className="card button">
                + Add Card{" "}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
