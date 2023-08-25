import { useEffect, useState } from "preact/hooks";
import React from "react";
import "./home.css";
import Card from "../../components/card";
export default function Home() {
  const [data, setData] = useState([]);
  const [newColumnName, setNewColumnName] = useState();
  const [currentlyEditing, setCurrentlyEditing] = useState();
  const [currentColumnName, setCurrentColumnName] = useState();
  const [taskDetail, setTaskDetail] = useState({
    taskName: "Untitled",
    status: "",
    date: new Date(),
    description: "Add a description",
    currentlyEditing: false,
  });

  const addTask = (id) => {
    var dataCopy = [...data];
    var foundedColumnIndex = dataCopy.findIndex((column) => column.id == id);
    dataCopy[foundedColumnIndex].cards.push({
      ...taskDetail,
      status: dataCopy[foundedColumnIndex].columnName,
      id: Math.random(),
      currentlyEditing: false,
    });
    setData(dataCopy);
  };
  const moveCard = (e) => {
    var endColumnId = e.target.className;
    endColumnId = endColumnId.split(" ")[0];
    const cardId = e.dataTransfer.getData("cardid");
    const sourceColumnId = e.dataTransfer.getData("source");
    var dataCopy = [...data];
    var foundedSourceColumnIndex = dataCopy.findIndex(
      (column) => column?.id == sourceColumnId
    );
    var foundedCardIndex = dataCopy[foundedSourceColumnIndex].cards.findIndex(
      (card) => card?.id == cardId
    );

    var foundedCard =
      dataCopy[foundedSourceColumnIndex].cards[foundedCardIndex];
    delete dataCopy[foundedSourceColumnIndex].cards[foundedCardIndex];

    var foundedEndColumnIndex = dataCopy.findIndex(
      (column) => column.id == endColumnId
    );
    dataCopy[foundedEndColumnIndex].cards.push(foundedCard);

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
    if (!newColumnName) return;
    var dataCopy = [...data];
    var newColumn = {
      columnName: newColumnName,
      id: data.length + 1,
      cards: [],
    };
    dataCopy.push(newColumn);
    setData(dataCopy);
  };

  const editColumnName = (columnName_) => {
    var dataCopy = [...data];
    var keyCopy = dataCopy[columnName_];
    delete dataCopy[columnName_];
    dataCopy[columnName] = keyCopy;
    setData(dataCopy);
  };

  const moveColumn = (e) => {
    var endColumnId = e.target.className;
    endColumnId = endColumnId.split(" ")[0];
    const sourceColumnId = e.dataTransfer.getData("columnid");
    var dataCopy =[...data]
    dataCopy[sourceColumnId-1].id=endColumnId;
    dataCopy[endColumnId-1].id=sourceColumnId;    
    setData(dataCopy)
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
          value={newColumnName}
          onChange={(e) => setNewColumnName(e.target.value)}
        />
        <button
          className="card button"
          onClick={() => {
            if (currentlyEditing) {
              editColumnName(currentColumnName);
              setCurrentlyEditing(false);
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
      <div
        className="wrapper"
        onDrop={moveColumn}
        onDragOver={(e) => {
          e.preventDefault();
        }}
      >
        {data.sort((a,b)=>a.id-b.id).map(({ columnName, id, cards }) => (
          <div
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData("columnid", id);
            }}
            
          >
            <div className={`${id} col-row`}>
              <h2>{columnName}</h2>
              <i
                onClick={() => {
                  setCurrentlyEditing(!currentlyEditing);
                  setCurrentColumnName(columnName);
                }}
                class="fa-solid fa-pen-to-square "
              ></i>
            </div>
            <div
              className={`${id} container`}
              onDrop={moveCard}
              onDragOver={(e) => {
                e.preventDefault();
              }}
            >
              {cards.map((card) => (
                <Card
                  card={card}
                  type={columnName}
                  editCard={editCard}
                  columnId={id}
                />
              ))}
              <button onClick={() => addTask(id)} className="card button">
                + Add Card{" "}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
