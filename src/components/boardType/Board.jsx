import React from "react";
import DropDown from "../DropDown";
import Card from "../card";

export default function Board({
  data,
  currentlyEditing,
  moveColumn,
  setNewColumnName,
  editColumnName,
  setCurrentlyEditing,
  addColoumn,
  addTask,
  setIsColumnDropDownOpen,
  isColumnDropDownOpen,
  deleteColumn,
  setCurrentColumnId,
  moveCard,
  editCard,
  isCurrentlyAddingColumn,
  setIsCurrentlyAddingColumn,
  newColumnName,
}) {
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
              {data?.columns
                ?.sort((a, b) => a.id - b.id)
                ?.map(({ columnName, id, cards }) => (
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
                                  setIsCurrentlyEditing={setCurrentlyEditing}
                                  currentColumnName={columnName}
                                  setCurrentColumnName={setNewColumnName}
                                  columnId={id}
                                  setCurrentColumnId={setCurrentColumnId}
                                  deleteColumn={deleteColumn}
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
                        ref={(ref) => ref && ref.focus()}
                        type="text"
                        value={newColumnName}
                        onChange={(e) => setNewColumnName(e.target.value)}
                        placeholder="Enter Section Name"
                        onBlur={() => {
                          if (newColumnName != "" && newColumnName) {
                            addColoumn();
                          } else {
                            setNewColumnName("");
                            setIsCurrentlyAddingColumn();
                          }
                        }}
                        onKeyDown={(e) => {
                          if (e.key == "Enter") addColoumn();
                        }}
                        className="BoardNewColumn BoardBody-column newColumnNameInput"
                      />
                    ) : (
                      <div
                        className="ItemListAddSectionButton--xlarge ItemListAddSectionButton"
                        as="div"
                        role="button"
                        tabIndex={0}
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
}
