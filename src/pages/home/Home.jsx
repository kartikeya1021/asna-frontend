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
  return (
    <div>
      <div className="AsanaBaseTopbar AsanaBaseTopbar--withoutShadow AsanaBaseTopbar--zIndexIncluded">
        <div className="AsanaBaseTopbar--showingBreadcrumbs" />
        <div className="AsanaBaseTopbar-pageHeader">
          <div className="TopbarPageHeaderStructureWithBreadcrumbs--withNavMenu TopbarPageHeaderStructureWithBreadcrumbs">
            <div className="TopbarPageHeaderStructureWithBreadcrumbs-leftChildrenWrapper ProjectPageHeader">
              <div className="TopbarPageHeaderStructureWithBreadcrumbs-topSection">
                <div className="TopbarPageHeaderStructureWithBreadcrumbs-leftElement">
                  <div
                    className="PageHeaderChipButton DesignTokenThemeSelectors-deprecatedComponent"
                    role="button"
                    tabIndex={0}
                  >
                    <div className="ScreenReaderOnly">
                      Change color and icon of Cross-functional project plan
                    </div>
                    <div className="ChipWithIcon--withChipFill ChipWithIcon--colorAqua ChipWithIcon">
                      <svg
                        className="MultiColorIcon MultiColorIcon BoardMultiColorIcon MultiColorIcon--medium"
                        viewBox="0 0 24 24"
                        title="board"
                        services="[object Object]"
                      >
                        <path
                          className="MultiColorIcon-path--fadedBlack"
                          d="M5,21H1c-0.6,0-1-0.4-1-0.9v-7.2C0,12.4,0.4,12,1,12h4c0.6,0,1,0.4,1,0.9v7.2C6,20.6,5.6,21,5,21z"
                        />
                        <path
                          className="MultiColorIcon-path--white"
                          d="M5,9H1C0.4,9,0,8.6,0,8V4c0-0.5,0.4-1,1-1h4c0.6,0,1,0.5,1,1v4C6,8.6,5.6,9,5,9z M14,3h-4C9.4,3,9,3.5,9,4v12  c0,0.5,0.4,1,1,1h4c0.6,0,1-0.5,1-1V4C15,3.5,14.6,3,14,3z M23,3h-4c-0.5,0-1,0.5-1,1v4c0,0.6,0.5,1,1,1h4c0.5,0,1-0.4,1-1V4  C24,3.5,23.5,3,23,3z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="LayerContext-layerContainer" />
                </div>
                <div className="TopbarPageHeaderStructureWithBreadcrumbs-titleAndBreadcrumbs">
                  <div className="TopbarPageHeaderStructureWithBreadcrumbs-titleRow">
                    <h1
                      className="Typography Typography--colorDefault Typography--h4 Typography--fontWeightMedium TopbarPageHeaderStructureWithBreadcrumbsHeading--withEditableProjectName TopbarPageHeaderStructureWithBreadcrumbsHeading"
                      id="lui_398"
                    >
                      <div className="ProjectPageHeaderProjectTitle-container">
                        <input
                          className="TextInputBase SizedTextInput SizedTextInput--medium TextInput TextInput--medium ProjectPageHeaderProjectTitle-input"
                          type="text"
                          tabIndex={0}
                          defaultValue="Cross-functional project plan"
                        />
                        <div
                          className="ProjectPageHeaderProjectTitle-shadow"
                          aria-hidden="true"
                        >
                          Cross-functional project plan
                        </div>
                      </div>
                    </h1>
                    <div
                      aria-label="Show options"
                      aria-expanded="false"
                      className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconButton--standardTheme SubtleIconButton PageHeaderDropdownMenuButton"
                      role="button"
                      tabIndex={0}
                    >
                      <svg
                        className="Icon DownIcon"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M16,22.5c-0.3,0-0.7-0.1-0.9-0.3l-11-9c-0.6-0.5-0.7-1.5-0.2-2.1s1.5-0.7,2.1-0.2l10,8.2l10-8.2c0.6-0.5,1.6-0.4,2.1,0.2c0.5,0.6,0.4,1.6-0.2,2.1l-11,9C16.7,22.4,16.3,22.5,16,22.5z" />
                      </svg>
                    </div>
                    <div className="TopbarPageHeaderStructureWithBreadcrumbs-icons">
                      <div
                        aria-label="Add to Starred"
                        className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleFavoriteStarButton--notFavorited SubtleFavoriteStarButton SubtleFavoriteStarButton--colorAqua"
                        role="button"
                        tabIndex={0}
                      >
                        <svg
                          className="Icon StarIcon"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path d="M8.2,30c-0.4,0-0.7-0.1-1-0.3c-0.5-0.4-0.8-1-0.7-1.7l1.3-7.8l-5.7-5.5c-0.5-0.5-0.6-1.2-0.4-1.8c0.2-0.6,0.7-1.1,1.4-1.2l7.8-1.1l3.5-7.1c0.3-0.6,0.9-1,1.6-1c0,0,0,0,0,0c0.7,0,1.3,0.4,1.6,1v0l3.5,7.1l7.8,1.1c0.7,0.1,1.2,0.6,1.4,1.2c0.2,0.6,0,1.3-0.4,1.8l-5.7,5.5l1.3,7.8c0.1,0.7-0.2,1.3-0.7,1.7c-0.5,0.4-1.2,0.4-1.8,0.1l-7-3.7l-7,3.7C8.8,30,8.5,30,8.2,30z M16,23.9l7.5,3.9l-1.4-8.3l6.1-5.9l-8.4-1.2L16,4.8l-3.7,7.6l-8.4,1.2l6.1,5.9l-1.4,8.3L16,23.9z" />
                        </svg>
                      </div>
                    </div>
                    <div className="TopbarPageHeaderStructureWithBreadcrumbs-titleRightElement">
                      <div
                        aria-controls="lui_64"
                        aria-expanded="false"
                        id="lui_63"
                        className="ThemeableRectangularButtonPresentation--isEnabled ThemeableRectangularButtonPresentation ThemeableRectangularButtonPresentation--medium SubtleButton--standardTheme SubtleButton DesignTokenThemeSelectors-deprecatedComponent StatusUpdateColorSelectDropdownButtonV2 StatusUpdateHeaderWidget StatusUpdateHeaderWidget-subtleButton DesignTokenThemeSelectors-deprecatedComponent"
                        role="button"
                        tabIndex={0}
                      >
                        <div className="ThemeableRectangularButtonPresentation-leftIcon StatusUpdateHeaderWidget-addStatusPromptDot" />
                        Set status
                        <svg
                          className="MiniIcon ThemeableRectangularButtonPresentation-rightIcon StatusUpdateHeaderWidget-arrowDownIcon ArrowDownMiniIcon"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path d="M3.5,8.9c0-0.4,0.1-0.7,0.4-1C4.5,7.3,5.4,7.2,6,7.8l5.8,5.2l6.1-5.2C18.5,7.3,19.5,7.3,20,8c0.6,0.6,0.5,1.5-0.1,2.1 l-7.1,6.1c-0.6,0.5-1.4,0.5-2,0L4,10.1C3.6,9.8,3.5,9.4,3.5,8.9z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="TopbarPageHeaderStructureWithBreadcrumbs-navMenuRow">
                <div className="PotCustomTabNavigationBarWithOverflow PotCustomTabNavigationBar ProjectPageHeader-navigationBar">
                  <div className="ResizeListener">
                    <div className="ResizeListener-expand">
                      <div className="ResizeListener-expandChild" />
                    </div>
                    <div className="ResizeListener-shrink">
                      <div className="ResizeListener-shrinkChild" />
                    </div>
                  </div>
                  <div className="PotCustomTabNavigationBarWithOverflow-hiddenMeasuringArea">
                    <div className="PotCustomTabNavigationBarWithOverflow-measuringBox">
                      <li className="PotTabNavigationBarItemWithMenu">
                        <div className="PotTabNavigationBarItemWithMenu-linkAndMenuContainer--isClickable PotTabNavigationBarItemWithMenu-linkAndMenuContainer--hasDropdownButton PotTabNavigationBarItemWithMenu-linkAndMenuContainer">
                          <a
                            aria-current="false"
                            href="https://app.asana.com/0/1205343526438001/1205343438426085"
                            className="PotTabNavigationBarItemWithMenu-link BaseLink"
                          >
                            <span className="PotTabNavigationBarItemWithMenu-selectableTabContainer">
                              <span className="Typography PotTabNavigationBarItemWithMenu-selectableTab">
                                <svg
                                  className="MiniIcon--small MiniIcon PotTabNavigationBarItemWithMenu-icon ProjectMiniIcon"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                  focusable="false"
                                >
                                  <path d="M 18 2 h -2 c 0 -1.1 -0.9 -2 -2 -2 h -4 C 8.9 0 8 0.9 8 2 H 6 C 3.8 2 2 3.8 2 6 v 14 c 0 2.2 1.8 4 4 4 h 12 c 2.2 0 4 -1.8 4 -4 V 6 C 22 3.8 20.2 2 18 2 Z M 10 2 h 4 l 0 1 c 0 0 0 0 0 0 s 0 0 0 0 l 0 1 h -4 V 2 Z M 20 20 c 0 1.1 -0.9 2 -2 2 H 6 c -1.1 0 -2 -0.9 -2 -2 V 6 c 0 -1.1 0.9 -2 2 -2 h 2 c 0 1.1 0.9 2 2 2 h 4 c 1.1 0 2 -0.9 2 -2 h 2 c 1.1 0 2 0.9 2 2 V 20 Z M 17 11 c 0 0.6 -0.4 1 -1 1 h -3.5 c -0.6 0 -1 -0.4 -1 -1 s 0.4 -1 1 -1 H 16 C 16.6 10 17 10.4 17 11 Z M 17 15 c 0 0.6 -0.4 1 -1 1 h -3.5 c -0.6 0 -1 -0.4 -1 -1 s 0.4 -1 1 -1 H 16 C 16.6 14 17 14.4 17 15 Z M 10 11 c 0 0.8 -0.7 1.5 -1.5 1.5 S 7 11.8 7 11 s 0.7 -1.5 1.5 -1.5 S 10 10.2 10 11 Z M 10 15 c 0 0.8 -0.7 1.5 -1.5 1.5 S 7 15.8 7 15 s 0.7 -1.5 1.5 -1.5 S 10 14.2 10 15 Z" />
                                </svg>
                                <span className="Typography Typography--overflowTruncate Typography--m PotTabNavigationBarItemWithMenu-bodyText">
                                  Overview
                                </span>
                              </span>
                            </span>
                          </a>
                        </div>
                      </li>
                    </div>
                    <div className="PotCustomTabNavigationBarWithOverflow-measuringBox">
                      <li className="PotTabNavigationBarItemWithMenu">
                        <div className="PotTabNavigationBarItemWithMenu-linkAndMenuContainer--isSelected PotTabNavigationBarItemWithMenu-linkAndMenuContainer--isClickable PotTabNavigationBarItemWithMenu-linkAndMenuContainer--hasDropdownButton PotTabNavigationBarItemWithMenu-linkAndMenuContainer">
                          <a
                            aria-current="true"
                            href="https://app.asana.com/0/1205343526438001/1205343438426086"
                            className="PotTabNavigationBarItemWithMenu-link--isSelected PotTabNavigationBarItemWithMenu-link BaseLink"
                          >
                            <span className="PotTabNavigationBarItemWithMenu-selectableTabContainer">
                              <span className="Typography PotTabNavigationBarItemWithMenu-selectableTab--isSelected PotTabNavigationBarItemWithMenu-selectableTab">
                                <svg
                                  className="MiniIcon--small MiniIcon PotTabNavigationBarItemWithMenu-icon ListViewMiniIcon"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                  focusable="false"
                                >
                                  <path d="m6,10H2c-1.103,0-2-.897-2-2v-4c0-1.103.897-2,2-2h4c1.103,0,2,.897,2,2v4c0,1.103-.897,2-2,2ZM2,4v4h4.001v-4H2Zm4,18H2c-1.103,0-2-.897-2-2v-4c0-1.103.897-2,2-2h4c1.103,0,2,.897,2,2v4c0,1.103-.897,2-2,2Zm-4-6v4h4.001v-4H2ZM24,6c0-.552-.447-1-1-1h-12c-.552,0-1,.448-1,1s.448,1,1,1h12c.553,0,1-.448,1-1Zm0,12c0-.553-.447-1-1-1h-12c-.552,0-1,.447-1,1s.448,1,1,1h12c.553,0,1-.447,1-1Z" />
                                </svg>
                                <span className="Typography Typography--overflowTruncate Typography--m PotTabNavigationBarItemWithMenu-bodyText">
                                  List
                                </span>
                              </span>
                            </span>
                          </a>
                          <div className="PotTabNavigationBarItemWithMenu-dropdownMenuButton--isSelected PotTabNavigationBarItemWithMenu-dropdownMenuButton--isClickable PotTabNavigationBarItemWithMenu-dropdownMenuButton">
                            <div
                              aria-expanded="false"
                              aria-haspopup="menu"
                              aria-label="Tab actions"
                              className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--small SubtleMiniIconButton--standardTheme SubtleMiniIconButton"
                              role="button"
                              tabIndex={0}
                            >
                              <svg
                                className="MiniIcon MoreMiniIcon"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                focusable="false"
                              >
                                <path d="M5,12c0,1.4-1.1,2.5-2.5,2.5S0,13.4,0,12s1.1-2.5,2.5-2.5S5,10.6,5,12z M12,9.5c-1.4,0-2.5,1.1-2.5,2.5s1.1,2.5,2.5,2.5s2.5-1.1,2.5-2.5S13.4,9.5,12,9.5z M21.5,9.5c-1.4,0-2.5,1.1-2.5,2.5s1.1,2.5,2.5,2.5S24,13.4,24,12S22.9,9.5,21.5,9.5z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </li>
                    </div>
                    <div className="PotCustomTabNavigationBarWithOverflow-measuringBox">
                      <li className="PotTabNavigationBarItemWithMenu">
                        <div className="PotTabNavigationBarItemWithMenu-linkAndMenuContainer--isClickable PotTabNavigationBarItemWithMenu-linkAndMenuContainer--hasDropdownButton PotTabNavigationBarItemWithMenu-linkAndMenuContainer">
                          <a
                            aria-current="false"
                            href="https://app.asana.com/0/1205343526438001/1205343438426087"
                            className="PotTabNavigationBarItemWithMenu-link BaseLink"
                          >
                            <span className="PotTabNavigationBarItemWithMenu-selectableTabContainer">
                              <span className="Typography PotTabNavigationBarItemWithMenu-selectableTab">
                                <svg
                                  className="MiniIcon--small MiniIcon PotTabNavigationBarItemWithMenu-icon BoardMiniIcon"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                  focusable="false"
                                >
                                  <path d="M21,2h-4h-2H9H7H3C1.3,2,0,3.3,0,5v10c0,1.7,1.3,3,3,3h4v1c0,1.7,1.3,3,3,3h4c1.7,0,3-1.3,3-3v-3h4c1.7,0,3-1.3,3-3V5  C24,3.3,22.7,2,21,2z M3,16c-0.6,0-1-0.4-1-1V5c0-0.6,0.4-1,1-1h4v12H3z M15,19c0,0.6-0.4,1-1,1h-4c-0.6,0-1-0.4-1-1v-0.9V4h6v12.2  V19z M22,13c0,0.6-0.4,1-1,1h-4V4h4c0.6,0,1,0.4,1,1V13z" />
                                </svg>
                                <span className="Typography Typography--overflowTruncate Typography--m PotTabNavigationBarItemWithMenu-bodyText">
                                  Board
                                </span>
                              </span>
                            </span>
                          </a>
                        </div>
                      </li>
                    </div>
                    <div className="PotCustomTabNavigationBarWithOverflow-measuringBox">
                      <li className="PotTabNavigationBarItemWithMenu">
                        <div className="PotTabNavigationBarItemWithMenu-linkAndMenuContainer--isClickable PotTabNavigationBarItemWithMenu-linkAndMenuContainer--hasDropdownButton PotTabNavigationBarItemWithMenu-linkAndMenuContainer">
                          <a
                            aria-current="false"
                            href="https://app.asana.com/0/1205343526438001/1205343438426088"
                            className="PotTabNavigationBarItemWithMenu-link BaseLink"
                          >
                            <span className="PotTabNavigationBarItemWithMenu-selectableTabContainer">
                              <span className="Typography PotTabNavigationBarItemWithMenu-selectableTab">
                                <svg
                                  className="MiniIcon--small MiniIcon PotTabNavigationBarItemWithMenu-icon TimelineMiniIcon"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                  focusable="false"
                                >
                                  <path d="M7,14h3v2H7c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1h3v2H7c-1.7,0-3-1.3-3-3v-2C4,15.3,5.3,14,7,14z M24,17v2c0,1.7-1.3,3-3,3  h-7v1c0,0.6-0.4,1-1,1s-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v1h3c1.7,0,3,1.3,3,3v2c0,1.7-1.3,3-3,3h-3v4h7C22.7,14,24,15.3,24,17  z M14,8h3c0.6,0,1-0.4,1-1V5c0-0.6-0.4-1-1-1h-3V8z M22,17c0-0.6-0.4-1-1-1h-7v4h7c0.6,0,1-0.4,1-1V17z M0,5v2c0,1.7,1.3,3,3,3h7V8  H3C2.4,8,2,7.6,2,7V5c0-0.6,0.4-1,1-1h7V2H3C1.3,2,0,3.3,0,5z" />
                                </svg>
                                <span className="Typography Typography--overflowTruncate Typography--m PotTabNavigationBarItemWithMenu-bodyText">
                                  Timeline
                                </span>
                              </span>
                            </span>
                          </a>
                        </div>
                      </li>
                    </div>
                    <div className="PotCustomTabNavigationBarWithOverflow-measuringBox">
                      <li className="PotTabNavigationBarItemWithMenu">
                        <div className="PotTabNavigationBarItemWithMenu-linkAndMenuContainer--isClickable PotTabNavigationBarItemWithMenu-linkAndMenuContainer--hasDropdownButton PotTabNavigationBarItemWithMenu-linkAndMenuContainer">
                          <a
                            aria-current="false"
                            href="https://app.asana.com/0/1205343526438001/1205343438426089"
                            className="PotTabNavigationBarItemWithMenu-link BaseLink"
                          >
                            <span className="PotTabNavigationBarItemWithMenu-selectableTabContainer">
                              <span className="Typography PotTabNavigationBarItemWithMenu-selectableTab">
                                <svg
                                  className="MiniIcon--small MiniIcon PotTabNavigationBarItemWithMenu-icon CalendarMiniIcon"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                  focusable="false"
                                >
                                  <path d="M19.1,2H18V1c0-0.6-0.4-1-1-1s-1,0.4-1,1v1H8V1c0-0.6-0.4-1-1-1S6,0.4,6,1v1H4.9C2.2,2,0,4.2,0,6.9v12.1  C0,21.8,2.2,24,4.9,24h14.1c2.7,0,4.9-2.2,4.9-4.9V6.9C24,4.2,21.8,2,19.1,2z M4.9,4H6v1c0,0.6,0.4,1,1,1s1-0.4,1-1V4h8v1  c0,0.6,0.4,1,1,1s1-0.4,1-1V4h1.1C20.7,4,22,5.3,22,6.9V8H2V6.9C2,5.3,3.3,4,4.9,4z M19.1,22H4.9C3.3,22,2,20.7,2,19.1V10h20v9.1  C22,20.7,20.7,22,19.1,22z" />
                                </svg>
                                <span className="Typography Typography--overflowTruncate Typography--m PotTabNavigationBarItemWithMenu-bodyText">
                                  Calendar
                                </span>
                              </span>
                            </span>
                          </a>
                        </div>
                      </li>
                    </div>
                    <div className="PotCustomTabNavigationBarWithOverflow-measuringBox">
                      <li className="PotTabNavigationBarItemWithMenu">
                        <div className="PotTabNavigationBarItemWithMenu-linkAndMenuContainer--isClickable PotTabNavigationBarItemWithMenu-linkAndMenuContainer--hasDropdownButton PotTabNavigationBarItemWithMenu-linkAndMenuContainer">
                          <a
                            aria-current="false"
                            href="https://app.asana.com/0/1205343526438001/1205343438426090"
                            className="PotTabNavigationBarItemWithMenu-link BaseLink"
                          >
                            <span className="PotTabNavigationBarItemWithMenu-selectableTabContainer">
                              <span className="Typography PotTabNavigationBarItemWithMenu-selectableTab">
                                <svg
                                  className="MiniIcon--small MiniIcon PotTabNavigationBarItemWithMenu-icon WorkflowMiniIcon"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                  focusable="false"
                                >
                                  <path d="M17.25 9H20.25C21.4875 9 22.5 7.9875 22.5 6.75V3.75C22.5 2.5125 21.4875 1.5 20.25 1.5H17.25C16.0125 1.5 15 2.5125 15 3.75V4.5H9.3C8.9475 2.58 7.2675 1.125 5.25 1.125C2.9775 1.125 1.125 2.9775 1.125 5.25C1.125 7.2675 2.58 8.9475 4.5 9.3V15H3.75C2.5125 15 1.5 16.0125 1.5 17.25V20.25C1.5 21.4875 2.5125 22.5 3.75 22.5H6.75C7.9875 22.5 9 21.4875 9 20.25V19.5H19.95L17.4675 21.9825C17.175 22.275 17.175 22.7475 17.4675 23.04C17.6175 23.19 17.805 23.2575 18 23.2575C18.195 23.2575 18.3825 23.1825 18.5325 23.04L22.2825 19.29C22.4325 19.14 22.5 18.945 22.5 18.7575C22.5 18.7575 22.5 18.7575 22.5 18.75C22.5 18.525 22.395 18.33 22.245 18.195L18.5175 14.4675C18.225 14.175 17.7525 14.175 17.46 14.4675C17.1675 14.76 17.1675 15.2325 17.46 15.525L19.9275 18H9V17.25C9 16.0125 7.9875 15 6.75 15H6V9.3C7.6725 8.9925 8.9925 7.6725 9.3 6H15V6.75C15 7.9875 16.0125 9 17.25 9ZM16.5 3.75C16.5 3.3375 16.8375 3 17.25 3H20.25C20.6625 3 21 3.3375 21 3.75V6.75C21 7.1625 20.6625 7.5 20.25 7.5H17.25C16.8375 7.5 16.5 7.1625 16.5 6.75V3.75ZM6.75 16.5C7.1625 16.5 7.5 16.8375 7.5 17.25V20.25C7.5 20.6625 7.1625 21 6.75 21H3.75C3.3375 21 3 20.6625 3 20.25V17.25C3 16.8375 3.3375 16.5 3.75 16.5H6.75ZM5.25 7.875C3.8025 7.875 2.625 6.6975 2.625 5.25C2.625 3.8025 3.8025 2.625 5.25 2.625C6.6975 2.625 7.875 3.8025 7.875 5.25C7.875 6.6975 6.6975 7.875 5.25 7.875Z" />
                                </svg>
                                <span className="Typography Typography--overflowTruncate Typography--m PotTabNavigationBarItemWithMenu-bodyText">
                                  Workflow
                                </span>
                              </span>
                            </span>
                          </a>
                        </div>
                      </li>
                    </div>
                    <div className="PotCustomTabNavigationBarWithOverflow-measuringBox">
                      <li className="PotTabNavigationBarItemWithMenu">
                        <div className="PotTabNavigationBarItemWithMenu-linkAndMenuContainer--isClickable PotTabNavigationBarItemWithMenu-linkAndMenuContainer--hasDropdownButton PotTabNavigationBarItemWithMenu-linkAndMenuContainer">
                          <a
                            aria-current="false"
                            href="https://app.asana.com/0/1205343526438001/1205343438426091"
                            className="PotTabNavigationBarItemWithMenu-link BaseLink"
                          >
                            <span className="PotTabNavigationBarItemWithMenu-selectableTabContainer">
                              <span className="Typography PotTabNavigationBarItemWithMenu-selectableTab">
                                <svg
                                  className="MiniIcon--small MiniIcon PotTabNavigationBarItemWithMenu-icon ReportsMiniIcon"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                  focusable="false"
                                >
                                  <path d="M24,3c0-1.7-1.3-3-3-3s-3,1.3-3,3c0,1,0.5,1.8,1.2,2.4L16.9,12c-0.8,0-1.5,0.3-2,0.8l-3-1.5c0-0.1,0-0.2,0-0.4 c0-1.7-1.3-3-3-3s-3,1.3-3,3c0,0.7,0.3,1.4,0.7,1.9l-3.1,5.2C3.4,18,3.2,18,3,18c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3 c0-0.7-0.3-1.4-0.7-1.9l3.1-5.2C8.6,14,8.8,14,9,14c0.8,0,1.5-0.3,2.1-0.8l3,1.5c0,0.1,0,0.2,0,0.4c0,1.7,1.3,3,3,3s3-1.3,3-3 c0-1-0.5-1.8-1.2-2.4L21.1,6C22.7,6,24,4.6,24,3z M21,2c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S20.4,2,21,2z M3,22c-0.6,0-1-0.4-1-1 s0.4-1,1-1s1,0.4,1,1S3.6,22,3,22z M9,12c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S9.6,12,9,12z M17,16c-0.6,0-1-0.4-1-1s0.4-1,1-1 s1,0.4,1,1S17.6,16,17,16z" />
                                </svg>
                                <span className="Typography Typography--overflowTruncate Typography--m PotTabNavigationBarItemWithMenu-bodyText">
                                  Dashboard
                                </span>
                              </span>
                            </span>
                          </a>
                        </div>
                      </li>
                    </div>
                    <div className="PotCustomTabNavigationBarWithOverflow-measuringBox">
                      <li className="PotTabNavigationBarItemWithMenu">
                        <div className="PotTabNavigationBarItemWithMenu-linkAndMenuContainer--isClickable PotTabNavigationBarItemWithMenu-linkAndMenuContainer--hasDropdownButton PotTabNavigationBarItemWithMenu-linkAndMenuContainer">
                          <a
                            aria-current="false"
                            href="https://app.asana.com/0/1205343526438001/1205343438426092"
                            className="PotTabNavigationBarItemWithMenu-link BaseLink"
                          >
                            <span className="PotTabNavigationBarItemWithMenu-selectableTabContainer">
                              <span className="Typography PotTabNavigationBarItemWithMenu-selectableTab">
                                <svg
                                  className="MiniIcon--small MiniIcon PotTabNavigationBarItemWithMenu-icon CommentMiniIcon"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                  focusable="false"
                                >
                                  <path d="M4.2,24.1c-0.2,0-0.3,0-0.5-0.1c-0.3-0.2-0.5-0.5-0.5-0.9v-5.2C1.1,16.1,0,13.7,0,11c0-5,4-9,9-9h6c5,0,9,4,9,9 c0,5-4,9-9,9h-4.1l-6.3,3.9C4.5,24,4.3,24.1,4.2,24.1z M9,4c-3.9,0-7,3.1-7,7c0,2.2,1,4.2,2.8,5.6C5,16.8,5.2,17,5.2,17.4v3.9 l5-3.1c0.2-0.1,0.3-0.2,0.5-0.2H15c3.9,0,7-3.1,7-7c0-3.9-3.1-7-7-7H9z" />
                                </svg>
                                <span className="Typography Typography--overflowTruncate Typography--m PotTabNavigationBarItemWithMenu-bodyText">
                                  Messages
                                </span>
                              </span>
                            </span>
                          </a>
                        </div>
                      </li>
                    </div>
                    <div className="PotCustomTabNavigationBarWithOverflow-measuringBox">
                      <li className="PotTabNavigationBarItemWithMenu">
                        <div className="PotTabNavigationBarItemWithMenu-linkAndMenuContainer--isClickable PotTabNavigationBarItemWithMenu-linkAndMenuContainer--hasDropdownButton PotTabNavigationBarItemWithMenu-linkAndMenuContainer">
                          <a
                            aria-current="false"
                            href="https://app.asana.com/0/1205343526438001/1205343438426093"
                            className="PotTabNavigationBarItemWithMenu-link BaseLink"
                          >
                            <span className="PotTabNavigationBarItemWithMenu-selectableTabContainer">
                              <span className="Typography PotTabNavigationBarItemWithMenu-selectableTab">
                                <svg
                                  className="MiniIcon--small MiniIcon PotTabNavigationBarItemWithMenu-icon AttachVerticalMiniIcon"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                  focusable="false"
                                >
                                  <path d="M14,24C10.7,24,8,21.3,8,18V8C8,5.8,9.8,4,12,4C14.2,4,16,5.8,16,8V16.9C16,17.5,15.6,17.9,15,17.9C14.4,17.9,14,17.5,14,16.9V8C14,6.9,13.1,6,12,6C10.9,6,10,6.9,10,8V18C10,20.2,11.8,22,14,22C16.2,22,18,20.2,18,18V8C18,4.7,15.3,2,12,2C8.7,2,6,4.7,6,8V13C6,13.6,5.6,14,5,14C4.4,14,4,13.6,4,13V8C4,3.6,7.6,0,12,0C16.4,0,20,3.6,20,8V18C20,21.3,17.3,24,14,24Z" />
                                </svg>
                                <span className="Typography Typography--overflowTruncate Typography--m PotTabNavigationBarItemWithMenu-bodyText">
                                  Files
                                </span>
                              </span>
                            </span>
                          </a>
                        </div>
                      </li>
                    </div>
                    <div className="PotCustomTabNavigationBarWithOverflow-measuringBox">
                      <li className="PotTabNavigationBarItemWithMenu PotCustomTabNavigationBar ProjectPageHeader-navigationBar">
                        <div className="PotTabNavigationBarItemWithMenu-linkAndMenuContainer PotTabNavigationBarItemWithMenu-selectableTab--colorAqua">
                          <div
                            aria-expanded="false"
                            aria-haspopup="menu"
                            className="PotTabNavigationBarItemWithMenu-link"
                            role="button"
                            tabIndex={0}
                          >
                            <span className="PotTabNavigationBarItemWithMenu-selectableTabContainer">
                              <span className="Typography PotTabNavigationBarItemWithMenu-selectableTab PotTabNavigationBarItemWithMenu-selectableTab--colorAqua">
                                <span className="Typography Typography--overflowTruncate Typography--m PotTabNavigationBarItemWithMenu-bodyText">
                                  WW More...
                                </span>
                              </span>
                            </span>
                          </div>
                        </div>
                      </li>
                    </div>
                  </div>
                  <nav className="TabNavigationBar" aria-labelledby="lui_398">
                    <ul className="TabNavigationBar-list TabNavigationBar-list--defaultTabWidth">
                      <li className="PotTabNavigationBarItemWithMenu">
                        <div className="PotTabNavigationBarItemWithMenu-linkAndMenuContainer--isClickable PotTabNavigationBarItemWithMenu-linkAndMenuContainer--hasDropdownButton PotTabNavigationBarItemWithMenu-linkAndMenuContainer">
                          <a
                            aria-current="false"
                            href="https://app.asana.com/0/1205343526438001/1205343438426085"
                            className="PotTabNavigationBarItemWithMenu-link BaseLink"
                          >
                            <span className="PotTabNavigationBarItemWithMenu-selectableTabContainer">
                              <span className="Typography PotTabNavigationBarItemWithMenu-selectableTab">
                                <svg
                                  className="MiniIcon--small MiniIcon PotTabNavigationBarItemWithMenu-icon ProjectMiniIcon"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                  focusable="false"
                                >
                                  <path d="M 18 2 h -2 c 0 -1.1 -0.9 -2 -2 -2 h -4 C 8.9 0 8 0.9 8 2 H 6 C 3.8 2 2 3.8 2 6 v 14 c 0 2.2 1.8 4 4 4 h 12 c 2.2 0 4 -1.8 4 -4 V 6 C 22 3.8 20.2 2 18 2 Z M 10 2 h 4 l 0 1 c 0 0 0 0 0 0 s 0 0 0 0 l 0 1 h -4 V 2 Z M 20 20 c 0 1.1 -0.9 2 -2 2 H 6 c -1.1 0 -2 -0.9 -2 -2 V 6 c 0 -1.1 0.9 -2 2 -2 h 2 c 0 1.1 0.9 2 2 2 h 4 c 1.1 0 2 -0.9 2 -2 h 2 c 1.1 0 2 0.9 2 2 V 20 Z M 17 11 c 0 0.6 -0.4 1 -1 1 h -3.5 c -0.6 0 -1 -0.4 -1 -1 s 0.4 -1 1 -1 H 16 C 16.6 10 17 10.4 17 11 Z M 17 15 c 0 0.6 -0.4 1 -1 1 h -3.5 c -0.6 0 -1 -0.4 -1 -1 s 0.4 -1 1 -1 H 16 C 16.6 14 17 14.4 17 15 Z M 10 11 c 0 0.8 -0.7 1.5 -1.5 1.5 S 7 11.8 7 11 s 0.7 -1.5 1.5 -1.5 S 10 10.2 10 11 Z M 10 15 c 0 0.8 -0.7 1.5 -1.5 1.5 S 7 15.8 7 15 s 0.7 -1.5 1.5 -1.5 S 10 14.2 10 15 Z" />
                                </svg>
                                <span className="Typography Typography--overflowTruncate Typography--m PotTabNavigationBarItemWithMenu-bodyText">
                                  Overview
                                </span>
                              </span>
                            </span>
                          </a>
                        </div>
                      </li>
                      <li className="PotTabNavigationBarItemWithMenu">
                        <div className="PotTabNavigationBarItemWithMenu-linkAndMenuContainer--isSelected PotTabNavigationBarItemWithMenu-linkAndMenuContainer--isClickable PotTabNavigationBarItemWithMenu-linkAndMenuContainer--hasDropdownButton PotTabNavigationBarItemWithMenu-linkAndMenuContainer">
                          <a
                            aria-current="true"
                            onClick={()=>setBoardType('table')}

                            className="PotTabNavigationBarItemWithMenu-link--isSelected PotTabNavigationBarItemWithMenu-link BaseLink"
                          >
                            <span className="PotTabNavigationBarItemWithMenu-selectableTabContainer">
                              <span className="Typography PotTabNavigationBarItemWithMenu-selectableTab--isSelected PotTabNavigationBarItemWithMenu-selectableTab">
                                <svg
                                  className="MiniIcon--small MiniIcon PotTabNavigationBarItemWithMenu-icon ListViewMiniIcon"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                  focusable="false"
                                >
                                  <path d="m6,10H2c-1.103,0-2-.897-2-2v-4c0-1.103.897-2,2-2h4c1.103,0,2,.897,2,2v4c0,1.103-.897,2-2,2ZM2,4v4h4.001v-4H2Zm4,18H2c-1.103,0-2-.897-2-2v-4c0-1.103.897-2,2-2h4c1.103,0,2,.897,2,2v4c0,1.103-.897,2-2,2Zm-4-6v4h4.001v-4H2ZM24,6c0-.552-.447-1-1-1h-12c-.552,0-1,.448-1,1s.448,1,1,1h12c.553,0,1-.448,1-1Zm0,12c0-.553-.447-1-1-1h-12c-.552,0-1,.447-1,1s.448,1,1,1h12c.553,0,1-.447,1-1Z" />
                                </svg>
                                <span className="Typography Typography--overflowTruncate Typography--m PotTabNavigationBarItemWithMenu-bodyText">
                                  List
                                </span>
                              </span>
                            </span>
                          </a>
                          <div className="PotTabNavigationBarItemWithMenu-dropdownMenuButton--isSelected PotTabNavigationBarItemWithMenu-dropdownMenuButton--isClickable PotTabNavigationBarItemWithMenu-dropdownMenuButton">
                            <div
                              aria-expanded="false"
                              aria-haspopup="menu"
                              aria-label="Tab actions"
                              className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--small SubtleMiniIconButton--standardTheme SubtleMiniIconButton"
                              role="button"
                              tabIndex={0}
                            >
                              <svg
                                className="MiniIcon MoreMiniIcon"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                focusable="false"
                              >
                                <path d="M5,12c0,1.4-1.1,2.5-2.5,2.5S0,13.4,0,12s1.1-2.5,2.5-2.5S5,10.6,5,12z M12,9.5c-1.4,0-2.5,1.1-2.5,2.5s1.1,2.5,2.5,2.5s2.5-1.1,2.5-2.5S13.4,9.5,12,9.5z M21.5,9.5c-1.4,0-2.5,1.1-2.5,2.5s1.1,2.5,2.5,2.5S24,13.4,24,12S22.9,9.5,21.5,9.5z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="PotTabNavigationBarItemWithMenu">
                        <div className="PotTabNavigationBarItemWithMenu-linkAndMenuContainer--isClickable PotTabNavigationBarItemWithMenu-linkAndMenuContainer--hasDropdownButton PotTabNavigationBarItemWithMenu-linkAndMenuContainer">
                          <a
                            aria-current="false"
                           onClick={()=>setBoardType('board')}
                            className="PotTabNavigationBarItemWithMenu-link BaseLink"
                          >
                            <span className="PotTabNavigationBarItemWithMenu-selectableTabContainer">
                              <span className="Typography PotTabNavigationBarItemWithMenu-selectableTab">
                                <svg
                                  className="MiniIcon--small MiniIcon PotTabNavigationBarItemWithMenu-icon BoardMiniIcon"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                  focusable="false"
                                >
                                  <path d="M21,2h-4h-2H9H7H3C1.3,2,0,3.3,0,5v10c0,1.7,1.3,3,3,3h4v1c0,1.7,1.3,3,3,3h4c1.7,0,3-1.3,3-3v-3h4c1.7,0,3-1.3,3-3V5  C24,3.3,22.7,2,21,2z M3,16c-0.6,0-1-0.4-1-1V5c0-0.6,0.4-1,1-1h4v12H3z M15,19c0,0.6-0.4,1-1,1h-4c-0.6,0-1-0.4-1-1v-0.9V4h6v12.2  V19z M22,13c0,0.6-0.4,1-1,1h-4V4h4c0.6,0,1,0.4,1,1V13z" />
                                </svg>
                                <span className="Typography Typography--overflowTruncate Typography--m PotTabNavigationBarItemWithMenu-bodyText">
                                  Board
                                </span>
                              </span>
                            </span>
                          </a>
                        </div>
                      </li>
                      <li className="PotTabNavigationBarItemWithMenu">
                        <div className="PotTabNavigationBarItemWithMenu-linkAndMenuContainer--isClickable PotTabNavigationBarItemWithMenu-linkAndMenuContainer--hasDropdownButton PotTabNavigationBarItemWithMenu-linkAndMenuContainer">
                          <a
                            aria-current="false"
                            href="https://app.asana.com/0/1205343526438001/1205343438426088"
                            className="PotTabNavigationBarItemWithMenu-link BaseLink"
                          >
                            <span className="PotTabNavigationBarItemWithMenu-selectableTabContainer">
                              <span className="Typography PotTabNavigationBarItemWithMenu-selectableTab">
                                <svg
                                  className="MiniIcon--small MiniIcon PotTabNavigationBarItemWithMenu-icon TimelineMiniIcon"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                  focusable="false"
                                >
                                  <path d="M7,14h3v2H7c-0.6,0-1,0.4-1,1v2c0,0.6,0.4,1,1,1h3v2H7c-1.7,0-3-1.3-3-3v-2C4,15.3,5.3,14,7,14z M24,17v2c0,1.7-1.3,3-3,3  h-7v1c0,0.6-0.4,1-1,1s-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v1h3c1.7,0,3,1.3,3,3v2c0,1.7-1.3,3-3,3h-3v4h7C22.7,14,24,15.3,24,17  z M14,8h3c0.6,0,1-0.4,1-1V5c0-0.6-0.4-1-1-1h-3V8z M22,17c0-0.6-0.4-1-1-1h-7v4h7c0.6,0,1-0.4,1-1V17z M0,5v2c0,1.7,1.3,3,3,3h7V8  H3C2.4,8,2,7.6,2,7V5c0-0.6,0.4-1,1-1h7V2H3C1.3,2,0,3.3,0,5z" />
                                </svg>
                                <span className="Typography Typography--overflowTruncate Typography--m PotTabNavigationBarItemWithMenu-bodyText">
                                  Timeline
                                </span>
                              </span>
                            </span>
                          </a>
                        </div>
                      </li>
                      <li className="PotTabNavigationBarItemWithMenu">
                        <div className="PotTabNavigationBarItemWithMenu-linkAndMenuContainer--isClickable PotTabNavigationBarItemWithMenu-linkAndMenuContainer--hasDropdownButton PotTabNavigationBarItemWithMenu-linkAndMenuContainer">
                          <a
                            aria-current="false"
                            href="https://app.asana.com/0/1205343526438001/1205343438426089"
                            className="PotTabNavigationBarItemWithMenu-link BaseLink"
                          >
                            <span className="PotTabNavigationBarItemWithMenu-selectableTabContainer">
                              <span className="Typography PotTabNavigationBarItemWithMenu-selectableTab">
                                <svg
                                  className="MiniIcon--small MiniIcon PotTabNavigationBarItemWithMenu-icon CalendarMiniIcon"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                  focusable="false"
                                >
                                  <path d="M19.1,2H18V1c0-0.6-0.4-1-1-1s-1,0.4-1,1v1H8V1c0-0.6-0.4-1-1-1S6,0.4,6,1v1H4.9C2.2,2,0,4.2,0,6.9v12.1  C0,21.8,2.2,24,4.9,24h14.1c2.7,0,4.9-2.2,4.9-4.9V6.9C24,4.2,21.8,2,19.1,2z M4.9,4H6v1c0,0.6,0.4,1,1,1s1-0.4,1-1V4h8v1  c0,0.6,0.4,1,1,1s1-0.4,1-1V4h1.1C20.7,4,22,5.3,22,6.9V8H2V6.9C2,5.3,3.3,4,4.9,4z M19.1,22H4.9C3.3,22,2,20.7,2,19.1V10h20v9.1  C22,20.7,20.7,22,19.1,22z" />
                                </svg>
                                <span className="Typography Typography--overflowTruncate Typography--m PotTabNavigationBarItemWithMenu-bodyText">
                                  Calendar
                                </span>
                              </span>
                            </span>
                          </a>
                        </div>
                      </li>
                      <li className="PotTabNavigationBarItemWithMenu">
                        <div className="PotTabNavigationBarItemWithMenu-linkAndMenuContainer--isClickable PotTabNavigationBarItemWithMenu-linkAndMenuContainer--hasDropdownButton PotTabNavigationBarItemWithMenu-linkAndMenuContainer">
                          <a
                            aria-current="false"
                            href="https://app.asana.com/0/1205343526438001/1205343438426090"
                            className="PotTabNavigationBarItemWithMenu-link BaseLink"
                          >
                            <span className="PotTabNavigationBarItemWithMenu-selectableTabContainer">
                              <span className="Typography PotTabNavigationBarItemWithMenu-selectableTab">
                                <svg
                                  className="MiniIcon--small MiniIcon PotTabNavigationBarItemWithMenu-icon WorkflowMiniIcon"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                  focusable="false"
                                >
                                  <path d="M17.25 9H20.25C21.4875 9 22.5 7.9875 22.5 6.75V3.75C22.5 2.5125 21.4875 1.5 20.25 1.5H17.25C16.0125 1.5 15 2.5125 15 3.75V4.5H9.3C8.9475 2.58 7.2675 1.125 5.25 1.125C2.9775 1.125 1.125 2.9775 1.125 5.25C1.125 7.2675 2.58 8.9475 4.5 9.3V15H3.75C2.5125 15 1.5 16.0125 1.5 17.25V20.25C1.5 21.4875 2.5125 22.5 3.75 22.5H6.75C7.9875 22.5 9 21.4875 9 20.25V19.5H19.95L17.4675 21.9825C17.175 22.275 17.175 22.7475 17.4675 23.04C17.6175 23.19 17.805 23.2575 18 23.2575C18.195 23.2575 18.3825 23.1825 18.5325 23.04L22.2825 19.29C22.4325 19.14 22.5 18.945 22.5 18.7575C22.5 18.7575 22.5 18.7575 22.5 18.75C22.5 18.525 22.395 18.33 22.245 18.195L18.5175 14.4675C18.225 14.175 17.7525 14.175 17.46 14.4675C17.1675 14.76 17.1675 15.2325 17.46 15.525L19.9275 18H9V17.25C9 16.0125 7.9875 15 6.75 15H6V9.3C7.6725 8.9925 8.9925 7.6725 9.3 6H15V6.75C15 7.9875 16.0125 9 17.25 9ZM16.5 3.75C16.5 3.3375 16.8375 3 17.25 3H20.25C20.6625 3 21 3.3375 21 3.75V6.75C21 7.1625 20.6625 7.5 20.25 7.5H17.25C16.8375 7.5 16.5 7.1625 16.5 6.75V3.75ZM6.75 16.5C7.1625 16.5 7.5 16.8375 7.5 17.25V20.25C7.5 20.6625 7.1625 21 6.75 21H3.75C3.3375 21 3 20.6625 3 20.25V17.25C3 16.8375 3.3375 16.5 3.75 16.5H6.75ZM5.25 7.875C3.8025 7.875 2.625 6.6975 2.625 5.25C2.625 3.8025 3.8025 2.625 5.25 2.625C6.6975 2.625 7.875 3.8025 7.875 5.25C7.875 6.6975 6.6975 7.875 5.25 7.875Z" />
                                </svg>
                                <span className="Typography Typography--overflowTruncate Typography--m PotTabNavigationBarItemWithMenu-bodyText">
                                  Workflow
                                </span>
                              </span>
                            </span>
                          </a>
                        </div>
                      </li>
                      <li className="PotTabNavigationBarItemWithMenu PotCustomTabNavigationBar ProjectPageHeader-navigationBar">
                        <div className="PotTabNavigationBarItemWithMenu-linkAndMenuContainer PotTabNavigationBarItemWithMenu-selectableTab--colorAqua">
                          <div
                            aria-expanded="false"
                            aria-haspopup="menu"
                            className="PotTabNavigationBarItemWithMenu-link"
                            role="button"
                            tabIndex={0}
                          >
                            <span className="PotTabNavigationBarItemWithMenu-selectableTabContainer">
                              <span className="Typography PotTabNavigationBarItemWithMenu-selectableTab PotTabNavigationBarItemWithMenu-selectableTab--colorAqua">
                                <span className="Typography Typography--overflowTruncate Typography--m PotTabNavigationBarItemWithMenu-bodyText">
                                  3 more…
                                </span>
                              </span>
                            </span>
                          </div>
                        </div>
                      </li>
                      <div className="PotCustomTabNavigationBar-plusDropdown">
                        <div
                          aria-expanded="false"
                          aria-haspopup="menu"
                          label="Add tab"
                          aria-label="Add tab"
                          className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconButton--standardTheme SubtleIconButton PotCustomTabNavigationBar-plusButton"
                          aria-disabled="false"
                          role="button"
                          tabIndex={0}
                        >
                          <svg
                            className="Icon PlusIcon"
                            viewBox="0 0 32 32"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <path d="M26,14h-8V6c0-1.1-0.9-2-2-2l0,0c-1.1,0-2,0.9-2,2v8H6c-1.1,0-2,0.9-2,2l0,0c0,1.1,0.9,2,2,2h8v8c0,1.1,0.9,2,2,2l0,0c1.1,0,2-0.9,2-2v-8h8c1.1,0,2-0.9,2-2l0,0C28,14.9,27.1,14,26,14z" />
                          </svg>
                        </div>
                      </div>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="TopbarPageHeaderStructureWithBreadcrumbs-rightChildrenWrapper">
              <div className="ProjectHeaderFacepile">
                <span className="ProjectHeaderFacepile-facepileWithPlaceholderMembers">
                  <div
                    aria-label="Manage project members"
                    className="AvatarButton--standardTheme AvatarButton AvatarButton--sizeSmall ProjectHeaderFacepile-avatar"
                    role="button"
                    tabIndex={0}
                  >
                    <div
                      className="Avatar AvatarPhoto AvatarPhoto--default AvatarPhoto--small AvatarPhoto--color6"
                      aria-hidden="true"
                    >
                      <div className="AvatarPhoto-image" />
                      Ay
                    </div>
                  </div>
                  <div
                    aria-label="Add members"
                    className="AvatarButton--standardTheme AvatarButton AvatarButton--sizeSmall ProjectHeaderFacepile-avatar"
                    role="button"
                    tabIndex={0}
                  >
                    <div className="PlaceholderAvatar PlaceholderAvatar--small">
                      <svg
                        className="MiniIcon UserMiniIcon"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M12,14c-3.859,0-7-3.14-7-7S8.141,0,12,0s7,3.14,7,7-3.141,7-7,7Zm0-12c-2.757,0-5,2.243-5,5s2.243,5,5,5,5-2.243,5-5-2.243-5-5-5Zm10,21v-2c0-2.757-2.243-5-5-5H7c-2.757,0-5,2.243-5,5v2c0,.552,.447,1,1,1s1-.448,1-1v-2c0-1.654,1.346-3,3-3h10c1.654,0,3,1.346,3,3v2c0,.552,.447,1,1,1s1-.448,1-1Z" />
                      </svg>
                    </div>
                  </div>
                  <div
                    aria-label="Add members"
                    className="AvatarButton--standardTheme AvatarButton AvatarButton--sizeSmall ProjectHeaderFacepile-avatar"
                    role="button"
                    tabIndex={0}
                  >
                    <div className="PlaceholderAvatar PlaceholderAvatar--small">
                      <svg
                        className="MiniIcon UserMiniIcon"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M12,14c-3.859,0-7-3.14-7-7S8.141,0,12,0s7,3.14,7,7-3.141,7-7,7Zm0-12c-2.757,0-5,2.243-5,5s2.243,5,5,5,5-2.243,5-5-2.243-5-5-5Zm10,21v-2c0-2.757-2.243-5-5-5H7c-2.757,0-5,2.243-5,5v2c0,.552,.447,1,1,1s1-.448,1-1v-2c0-1.654,1.346-3,3-3h10c1.654,0,3,1.346,3,3v2c0,.552,.447,1,1,1s1-.448,1-1Z" />
                      </svg>
                    </div>
                  </div>
                </span>
                <div
                  className="ThemeableRectangularButtonPresentation--isEnabled ThemeableRectangularButtonPresentation ThemeableRectangularButtonPresentation--medium PrimaryButton--standardTheme PrimaryButton ProjectHeaderFacepile-joinOrShareButton"
                  role="button"
                  tabIndex={0}
                >
                  <svg
                    className="MiniIcon ThemeableRectangularButtonPresentation-leftIcon UsersFillMiniIcon"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M16,13.5c-3.59,0-6.5-2.91-6.5-6.5S12.41,.5,16,.5s6.5,2.91,6.5,6.5-2.91,6.5-6.5,6.5Zm-10,7.5c0-1.287,.348-2.492,.955-3.527,.383-.653-.122-1.473-.878-1.473h-1.076C2.239,16,0,18.239,0,21v2C0,23.552,.448,24,1,24H5c.552,0,1-.448,1-1v-2Zm18,2v-2c0-2.761-2.239-5-5-5h-6c-2.761,0-5,2.239-5,5v2c0,.552,.448,1,1,1h14c.552,0,1-.448,1-1ZM7.5,7c0-1.834,.584-3.53,1.573-4.917,.461-.646,.016-1.539-.777-1.576-.662-.031-1.351,.041-2.057,.239C3.67,1.466,1.753,3.767,1.525,6.424c-.331,3.849,2.695,7.076,6.475,7.076,.102,0,.204-.002,.305-.007,.789-.038,1.227-.933,.768-1.575-.989-1.387-1.573-3.083-1.573-4.917Z" />
                  </svg>
                  Share
                </div>
              </div>
              <div className="ProjectPageHeader-customizeMenuButtonContainer">
                <div className="CustomizeMenuButton-notificationIndicatorButtonContainer">
                  <div
                    aria-expanded="false"
                    className="ThemeableRectangularButtonPresentation--isEnabled ThemeableRectangularButtonPresentation ThemeableRectangularButtonPresentation--medium SecondaryButton--standardTheme SecondaryButton CustomizeMenuButton"
                    aria-disabled="false"
                    role="button"
                    tabIndex={0}
                  >
                    <img
                      className="MiniIllustration MiniIllustration--smallMiniIcon ThemeableRectangularButtonPresentation-leftIcon"
                      alt=""
                      src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/ce625ef5536516f31458c34d0c9d41457cae8470/customize_12.svg"
                    />
                    Customize
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="TopbarPageHeaderGlobalActions AsanaBaseTopbar-globalActions" />
      </div>
      {boardType == "board" ? (
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
      ) : boardType == "table" ? (
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
      ) : null}
    </div>
  );
}
