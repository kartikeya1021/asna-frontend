import { useEffect, useState } from "preact/hooks";
import React from "react";
import "./home.css";
import "./home.clone.css";
import Card from "../../components/card";
import DropDown from "../../components/DropDown";
import Board from "../../components/boardType/Board";
import Table from "../../components/boardType/Table";

export default function Home() {
  const [data, setData] = useState([
    {
      columnName: "Todo",
      id: 1,
      cards: [],
    },
    { columnName: "Pending", id: 2, cards: [] },
  ]);
  const [boardType, setBoardType] = useState("board");
  const [newColumnName, setNewColumnName] = useState();
  const [currentlyEditing, setCurrentlyEditing] = useState();
  const [currentColumnId, setCurrentColumnId] = useState();
  const [isColumnDropDownOpen, setIsColumnDropDownOpen] = useState();
  const [isCurrentlyAddingColumn, setIsCurrentlyAddingColumn] = useState();
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
  const moveCard = (e, id) => {
    var endColumnId = id;

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

  const editCard = (cardId, newCardData, columnId) => {
    var dataCopy = [...data];
    var foundedColumnIndex = dataCopy.findIndex(
      (column) => column.id == columnId
    );
    var foundedCardIndex = dataCopy[foundedColumnIndex].cards.findIndex(
      (card) => (card.id = cardId)
    );
    dataCopy[foundedColumnIndex].cards[foundedCardIndex] = newCardData;
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
    setNewColumnName("");
    setIsCurrentlyAddingColumn();
  };

  const deleteColumn = (columnId) => {
    var dataCopy = [...data];
    var foundedColumnIndex = dataCopy.findIndex(
      (column) => column.id == columnId
    );
    dataCopy.splice(foundedColumnIndex, 1);
    setData(dataCopy);
  };

  const editColumnName = (columnId) => {
    var dataCopy = [...data];
    var foundedColumnIndex = dataCopy.findIndex(
      (column) => column.id == columnId
    );
    dataCopy[foundedColumnIndex].columnName = newColumnName;
    setData(dataCopy);
    setNewColumnName("");
    setCurrentColumnId();
  };

  const moveColumn = (e, id) => {
    var endColumnId = id;
    const sourceColumnId = e.dataTransfer.getData("columnid");
    var dataCopy = [...data];
    dataCopy[sourceColumnId - 1].id = endColumnId;
    dataCopy[endColumnId - 1].id = sourceColumnId;
    setData(dataCopy);
  };

  /* useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(data));
  }, [data]); */
  switch (boardType) {
    case "board":
      return (
        <Board
          data={data}
          currentlyEditing={currentlyEditing}
          moveColumn={moveColumn}
          setNewColumnName={setNewColumnName}
          editColumnName={editColumnName}
          setCurrentlyEditing={setCurrentlyEditing}
          addColoumn={addColoumn}
          addTask={addTask}
          setIsColumnDropDownOpen={setIsColumnDropDownOpen}
          deleteColumn={deleteColumn}
          setCurrentColumnId={setCurrentColumnId}
          moveCard={moveCard}
          editCard={editCard}
          isColumnDropDownOpen={isColumnDropDownOpen}
          setIsCurrentlyAddingColumn={setIsCurrentlyAddingColumn}
          newColumnName={newColumnName}
        />
      );
    case "table":
      return (
        <Table
          data={data}
          currentlyEditing={currentlyEditing}
          moveColumn={moveColumn}
          setNewColumnName={setNewColumnName}
          editColumnName={editColumnName}
          setCurrentlyEditing={setCurrentlyEditing}
          addColoumn={addColoumn}
          addTask={addTask}
          setIsColumnDropDownOpen={setIsColumnDropDownOpen}
          deleteColumn={deleteColumn}
          setCurrentColumnId={setCurrentColumnId}
          moveCard={moveCard}
          editCard={editCard}
          isColumnDropDownOpen={isColumnDropDownOpen}
          setIsCurrentlyAddingColumn={setIsCurrentlyAddingColumn}
          newColumnName={newColumnName}
        />
      );

    default:
      break;
  }
}
