import { useEffect, useState } from "preact/hooks";
import React from "react";
import "./home.css";
import "./home.clone.css";
import Card from "../../components/card";
import DropDown from "../../components/DropDown";

export default function Home() {
  const [data, setData] = useState([
    {
      columnName: "Todo",
      id: 1,
      cards: [],
    },
    { columnName: "Pending", id: 2, cards: [] },
  ]);
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
    setNewColumnName("");
    setIsCurrentlyAddingColumn();
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
  return (
    <div
      role="presentation"
      className="Scrollable--withCompositingLayer Scrollable Scrollable--horizontal DragScrollListener BoardBody-columnHorizontalScrollable--autoscrollEnabled BoardBody-columnHorizontalScrollable snipcss-XDidL"
      tabIndex={-1}
      id="main-body"
    >
      <div className="BoardBody-columns">
        <div className="DragSelectContainer">
          <div className="SortableList BoardBody-columnSortableList">
            <div className="SortableList-itemContainer SortableList-itemContainer--row">
              {data
                .sort((a, b) => a.id - b.id)
                .map(({ columnName, id, cards }) => (
                  <div
                    onDrop={(e) => {
                      if (e.dataTransfer.getData("cardId")) return null;
                      else moveColumn(e, id);
                    }}
                    onDragOver={(e) => {
                      e.preventDefault();
                    }}
                    id={id}
                    className="BoardBody-columnDraggableItemWrapper SortableList-sortableItemContainer"
                  >
                    <div className="SortableItem SortableList-sortableItem">
                      <div className="BoardColumn BoardBody-column">
                        <div
                          draggable
                          onDragStart={(e) => {
                            e.dataTransfer.setData("columnid", id);
                          }}
                          className="BoardColumn-dragHandle"
                        >
                          <div className="BoardColumnHeader BoardColumn-header">
                            {currentlyEditing == id ? (
                              <input
                                type="text"
                                value={newColumnName}
                                onChange={(e) =>
                                  setNewColumnName(e.target.value)
                                }
                                placeholder="Enter Task Name"
                                onBlur={() => {
                                  if (currentlyEditing) {
                                    editColumnName(id);
                                    setCurrentlyEditing(false);
                                  } else {
                                    addColoumn();
                                  }
                                }}
                                // className="BoardNewColumn BoardBody-column"
                              />
                            ) : (
                              <h3 className="Typography Typography--colorDefault Typography--overflowTruncate Typography--h5 Typography--fontWeightMedium BoardColumnHeaderTitle BoardColumnHeader-name">
                                {columnName}
                              </h3>
                            )}
                            <div
                              aria-label="Add task"
                              className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconButton--standardTheme SubtleIconButton BoardColumnHeader-addTaskButton BoardColumnHeader-addTaskOnClickButton"
                              role="button"
                              tabIndex={0}
                              onClick={() => addTask(id)}
                            >
                              <svg
                                className="Icon PlusIcon"
                                viewBox="0 0 32 32"
                                aria-hidden="true"
                                focusable="false"
                              >
                                <path d="M26,14h-8V6c0-1.1-0.9-2-2-2l0,0c-1.1,0-2,0.9-2,2v8H6c-1.1,0-2,0.9-2,2l0,0c0,1.1,0.9,2,2,2h8v8c0,1.1,0.9,2,2,2l0,0c1.1,0,2-0.9,2-2v-8h8c1.1,0,2-0.9,2-2l0,0C28,14.9,27.1,14,26,14z"></path>
                              </svg>
                            </div>
                            <div
                              onClick={() => {
                                if (isColumnDropDownOpen)
                                  setIsColumnDropDownOpen();
                                else setIsColumnDropDownOpen(id);
                              }}
                              aria-label="More section actions"
                              aria-expanded="false"
                              aria-haspopup="menu"
                              className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconButton--standardTheme SubtleIconButton BoardColumnHeader-dropdownButton"
                              role="button"
                              tabIndex={0}
                            >
                              {isColumnDropDownOpen == id && (
                                <DropDown
                                  isCurrenltyEditing={currentlyEditing}
                                  setIsCurrentlyEditing={
                                    setCurrentlyEditing
                                  }
                                  currentColumnName={columnName}
                                  setCurrentColumnName={setNewColumnName}
                                  columnId={id}
                                  setCurrentColumnId={setCurrentColumnId}
                                />
                              )}
                              <svg
                                className="Icon MoreIcon"
                                viewBox="0 0 32 32"
                                aria-hidden="true"
                                focusable="false"
                              >
                                <path d="M16,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S14.3,13,16,13z M3,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S1.3,13,3,13z M29,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S27.3,13,29,13z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="BoardColumnScrollableContainer--boardsRevamp BoardColumnScrollableContainer">
                          <div className="BoardColumnScrollableContainer-scrollableTopSeam"></div>
                          <div
                            role="presentation"
                            className="Scrollable--withCompositingLayer Scrollable Scrollable--vertical BoardColumnScrollableContainer-scrollable--autoscrollEnabled BoardColumnScrollableContainer-scrollable"
                            tabIndex={-1}
                          >
                            <div className="SortableList BoardColumnScrollableContainer-cardsList BoardColumnWithSortableTasks-sortableList">
                              <div
                                onDrop={(e) => moveCard(e, id)}
                                onDragOver={(e) => {
                                  e.preventDefault();
                                }}
                                className={`${id} SortableList-itemContainer SortableList-itemContainer--column `}
                              >
                                {cards.map((card) => (
                                  <Card
                                    card={card}
                                    type={columnName}
                                    editCard={editCard}
                                    columnId={id}
                                  />
                                ))}

                                <div
                                  id={id}
                                  className="BoardColumnWithSortableTasks-addCardButtonWrapper"
                                >
                                  <div
                                    id={id}
                                    className="ThemeableRectangularButtonPresentation--isEnabled ThemeableRectangularButtonPresentation ThemeableRectangularButtonPresentation--large SubtleButton--standardTheme SubtleButton BoardAddCardSubtleButton BoardColumnWithSortableTasks-addCardButton"
                                    role="button"
                                    tabIndex={0}
                                    onClick={() => addTask(id)}
                                  >
                                    <svg
                                      className="MiniIcon ThemeableRectangularButtonPresentation-leftIcon BoardAddCardSubtleButton-plusIcon PlusMiniIcon"
                                      viewBox="0 0 24 24"
                                      aria-hidden="true"
                                      focusable="false"
                                    >
                                      <path d="M10,10V4c0-1.1,0.9-2,2-2s2,0.9,2,2v6h6c1.1,0,2,0.9,2,2s-0.9,2-2,2h-6v6c0,1.1-0.9,2-2,2s-2-0.9-2-2v-6H4c-1.1,0-2-0.9-2-2s0.9-2,2-2H10z"></path>
                                    </svg>
                                    Add task
                                  </div>
                                </div>
                                <div className="SortableList-endOfListDropTarget"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              <div>
                <div className="BoardNewColumn BoardBody-column">
                  <h3 className="Typography Typography--colorDefault Typography--overflowTruncate Typography--h5 Typography--fontWeightMedium BoardColumnHeaderTitle BoardNewColumn-addColumn">
                    {isCurrentlyAddingColumn ? (
                      <input
                        type="text"
                        value={newColumnName}
                        onChange={(e) => setNewColumnName(e.target.value)}
                        placeholder="Enter Task Name"
                        onBlur={() => addColoumn()}
                        className="BoardNewColumn BoardBody-column"
                      />
                    ) : (
                      <div
                        className="ItemListAddSectionButton--xlarge ItemListAddSectionButton"
                        as="div"
                        role="button"
                        tabIndex={0}
                        // onClick={() => {
                        //   if (currentlyEditing) {
                        //     editColumnName(currentColumnName);
                        //     setCurrentlyEditing(false);
                        //     return;
                        //   } else {
                        //     addColoumn();
                        //   }
                        // }}
                        onClick={() => setIsCurrentlyAddingColumn(true)}
                      >
                        <svg
                          className="Icon ItemListAddSectionButton-plusIcon PlusIcon"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path d="M26,14h-8V6c0-1.1-0.9-2-2-2l0,0c-1.1,0-2,0.9-2,2v8H6c-1.1,0-2,0.9-2,2l0,0c0,1.1,0.9,2,2,2h8v8c0,1.1,0.9,2,2,2l0,0c1.1,0,2-0.9,2-2v-8h8c1.1,0,2-0.9,2-2l0,0C28,14.9,27.1,14,26,14z"></path>
                        </svg>
                        Add section
                      </div>
                    )}
                  </h3>
                  <div className="BoardNewColumn-placeholder"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  /*  return (
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
        {data.map(({ columnName, id, cards }) => (
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
  ); */
}
