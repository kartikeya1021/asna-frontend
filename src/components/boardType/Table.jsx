import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
export default function Table({
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
  setCurrentColumnName,
  currentColumnName,
}) {
  return (
    <div className="PotListPage ProjectPage-listInner">
      <div className="FullWidthPageStructureWithDetailsOverlay PotListPageContent">
        <div className="FullWidthPageStructureWithDetailsOverlay-fullWidth">
          <div className="FullWidthPageStructureWithDetailsOverlay-mainContent">
            <div className="PageToolbarStructure--withoutBottomBorder PageToolbarStructure PageToolbarStructure--large ProjectSpreadsheetGridPageToolbar">
              <div className="PageToolbarStructure-leftChildren">
                <div className="SecondarySplitDropdownMenuButtonA11y AddTaskDropdownButton">
                  <div
                    className="ThemeableRectangularButtonPresentation--isEnabled ThemeableRectangularButtonPresentation ThemeableRectangularButtonPresentation--medium SecondarySplitDropdownMenuButtonA11y-leftButton"
                    role="button"
                    tabIndex={0}
                  >
                    <svg
                      className="MiniIcon ThemeableRectangularButtonPresentation-leftIcon PlusMiniIcon"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M10,10V4c0-1.1,0.9-2,2-2s2,0.9,2,2v6h6c1.1,0,2,0.9,2,2s-0.9,2-2,2h-6v6c0,1.1-0.9,2-2,2s-2-0.9-2-2v-6H4c-1.1,0-2-0.9-2-2s0.9-2,2-2H10z" />
                    </svg>
                    Add task
                  </div>
                  <div
                    aria-expanded="false"
                    aria-haspopup="menu"
                    aria-label="More actions"
                    className="ThemeableRectangularButtonPresentation--isEnabled ThemeableRectangularButtonPresentation--withNoLabel ThemeableRectangularButtonPresentation ThemeableRectangularButtonPresentation--medium SecondarySplitDropdownMenuButtonA11y-rightButton"
                    role="button"
                    tabIndex={0}
                  >
                    <svg
                      className="MiniIcon ThemeableRectangularButtonPresentation-leftIcon ArrowDownMiniIcon"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M3.5,8.9c0-0.4,0.1-0.7,0.4-1C4.5,7.3,5.4,7.2,6,7.8l5.8,5.2l6.1-5.2C18.5,7.3,19.5,7.3,20,8c0.6,0.6,0.5,1.5-0.1,2.1 l-7.1,6.1c-0.6,0.5-1.4,0.5-2,0L4,10.1C3.6,9.8,3.5,9.4,3.5,8.9z" />
                    </svg>
                  </div>
                </div>
                <div
                  aria-pressed="false"
                  aria-expanded="false"
                  className="ThemeableRectangularButtonPresentation--isEnabled ThemeableRectangularButtonPresentation ThemeableRectangularButtonPresentation--medium SubtleToggleButton--isNotPressed SubtleToggleButton--standardTheme SubtleToggleButton"
                  role="button"
                  tabIndex={0}
                >
                  <svg
                    className="MiniIcon ThemeableRectangularButtonPresentation-leftIcon FilterMiniIcon"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M20,8H4C3.4,8,3,7.6,3,7s0.4-1,1-1h16c0.6,0,1,0.4,1,1S20.6,8,20,8z M18,13c0-0.6-0.4-1-1-1H7c-0.6,0-1,0.4-1,1s0.4,1,1,1h10C17.6,14,18,13.6,18,13z M15,19c0-0.6-0.4-1-1-1h-4c-0.6,0-1,0.4-1,1s0.4,1,1,1h4C14.6,20,15,19.6,15,19z" />
                  </svg>
                  Filter
                </div>
                <div
                  aria-pressed="false"
                  aria-expanded="false"
                  className="ThemeableRectangularButtonPresentation--isEnabled ThemeableRectangularButtonPresentation ThemeableRectangularButtonPresentation--medium SubtleToggleButton--isNotPressed SubtleToggleButton--standardTheme SubtleToggleButton"
                  role="button"
                  tabIndex={0}
                >
                  <svg
                    className="MiniIcon ThemeableRectangularButtonPresentation-leftIcon SortMiniIcon"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M11.7,9.7c-0.2,0.2-0.4,0.3-0.6,0.3H8v9c0,0.6-0.4,1-1,1s-1-0.4-1-1v-9H2.9C2.4,10,2,9.6,2,9.1c0-0.2,0.1-0.5,0.3-0.6l4.1-4.1C6.7,4,7.3,4,7.6,4.3l0,0l4.1,4.1C12.1,8.8,12.1,9.4,11.7,9.7z M21.7,14.3c-0.2-0.2-0.4-0.3-0.6-0.3H18V5c0-0.6-0.4-1-1-1s-1,0.4-1,1v9h-3.1c-0.5,0-0.9,0.4-0.9,0.9c0,0.2,0.1,0.5,0.3,0.6l4.1,4.1c0.4,0.4,0.9,0.4,1.3,0l0,0l4.1-4.1C22.1,15.2,22.1,14.6,21.7,14.3z" />
                  </svg>
                  Sort
                </div>
                <div
                  aria-expanded="false"
                  aria-haspopup="menu"
                  className="ThemeableRectangularButtonPresentation--isEnabled ThemeableRectangularButtonPresentation ThemeableRectangularButtonPresentation--medium SubtleButton--standardTheme SubtleButton"
                  role="button"
                  tabIndex={0}
                >
                  <svg
                    className="MiniIcon ThemeableRectangularButtonPresentation-leftIcon EyeStrikethroughMiniIcon"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="m1.71,1.29c-.39-.39-1.02-.39-1.41,0S-.1,2.32.29,2.71l3.93,3.93C2.51,7.88,1.08,9.55.1,11.56c-.14.28-.14.6,0,.88,2.24,4.6,6.8,7.45,11.9,7.45,1.62,0,3.18-.3,4.63-.84l3.66,3.66c.2.2.45.29.71.29s.51-.1.71-.29c.39-.39.39-1.02,0-1.41L1.71,1.29Zm7.69,10.52l2.79,2.79c-.06,0-.12.02-.19.02-1.45,0-2.62-1.18-2.62-2.62,0-.07.02-.12.02-.19Zm2.6,6.08c-4.16,0-7.9-2.24-9.88-5.89.87-1.61,2.09-2.94,3.54-3.92l2.3,2.3c-.21.5-.34,1.04-.34,1.62,0,2.41,1.96,4.38,4.38,4.38.58,0,1.12-.13,1.62-.34l1.41,1.41c-.97.28-1.98.44-3.03.44Zm.7-8.41l-1.72-1.72c.33-.08.67-.13,1.02-.13,2.41,0,4.38,1.96,4.38,4.38,0,.35-.05.69-.13,1.02l-1.72-1.72c-.25-.88-.94-1.58-1.82-1.82Zm11.2,2.96c-.89,1.83-2.15,3.37-3.66,4.58l-1.43-1.43c1.24-.95,2.3-2.15,3.07-3.59-1.97-3.65-5.71-5.89-9.88-5.89-.82,0-1.62.11-2.39.28l-1.65-1.65c1.28-.41,2.64-.63,4.04-.63,5.1,0,9.66,2.85,11.9,7.45.14.28.14.6,0,.88Z" />
                  </svg>
                  Hide
                </div>
              </div>
              <div className="PageToolbarStructure-rightChildren">
                <div
                  aria-label="More actions"
                  aria-controls="lui_297"
                  aria-expanded="false"
                  id="lui_296"
                  className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconButton--standardTheme SubtleIconButton DesignTokenThemeSelectors-deprecatedComponent MoreMenu ProjectPageToolbarMoreMenu DesignTokenThemeSelectors-deprecatedComponent"
                  role="button"
                  tabIndex={0}
                >
                  <svg
                    className="Icon MoreIcon"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M16,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S14.3,13,16,13z M3,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S1.3,13,3,13z M29,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S27.3,13,29,13z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="SpreadsheetGridScroller-container">
              <div role="row" className="SpreadsheetHeaderStructure">
                <div
                  className="SpreadsheetHeaderStructure-left"
                  style={{ width: 425 }}
                >
                  <div className="SpreadsheetHeaderLeftStructure">
                    <div
                      className="SpreadsheetHeaderColumn--isClickable SpreadsheetHeaderColumn SpreadsheetHeaderLeftStructure-headerColumn"
                      tabIndex={-1}
                      role="presentation"
                    >
                      <div className="SpreadsheetHeaderColumn-heading">
                        <span className="Typography Typography--colorWeak Typography--overflowTruncate Typography--s SpreadsheetHeaderColumn-columnName">
                          Task name
                        </span>
                      </div>
                      <div
                        aria-label="Show sort options"
                        aria-expanded="false"
                        aria-haspopup="menu"
                        className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconButton--standardTheme SubtleIconButton SpreadsheetHeaderDropdownMenuA11y SpreadsheetHeaderLeftStructure-dropdownMenuButton SpreadsheetHeaderColumn-menuOnHover"
                        role="button"
                        tabIndex={0}
                      >
                        <svg
                          className="MiniIcon ArrowDownMiniIcon"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path d="M3.5,8.9c0-0.4,0.1-0.7,0.4-1C4.5,7.3,5.4,7.2,6,7.8l5.8,5.2l6.1-5.2C18.5,7.3,19.5,7.3,20,8c0.6,0.6,0.5,1.5-0.1,2.1 l-7.1,6.1c-0.6,0.5-1.4,0.5-2,0L4,10.1C3.6,9.8,3.5,9.4,3.5,8.9z" />
                        </svg>
                      </div>
                      <div className="SpreadsheetResizeDragHandle-anchor" />
                    </div>
                  </div>
                </div>
                <div
                  className="SpreadsheetHeaderStructure-right"
                  style={{ left: 425, right: 0 }}
                >
                  <div
                    role="presentation"
                    className="Scrollable--withCompositingLayer Scrollable Scrollable--horizontal SpreadsheetHeaderStructure-scrollable"
                    tabIndex={-1}
                  >
                    <div
                      className="SpreadsheetHeaderStructure-scrollContent"
                      role="presentation"
                    >
                      <div className="SpreadsheetHeaderStructure-rightChildren">
                        <div className="ReorderableHorizontalList SpreadsheetHeaderRow-dragListContainer">
                          <div className="ReorderableHorizontalList-itemContainer">
                            <div className="ReorderableHorizontalList-itemWrapper">
                              <div className="SortableItem ReorderableHorizontalList-sortableItem SpreadsheetHeaderRow-draggableContainer">
                                <div
                                  className="SpreadsheetHeaderColumn--fixedWidth SpreadsheetHeaderColumn--isClickable SpreadsheetHeaderColumn SpreadsheetProjectHeaderRow-headerColumn"
                                  tabIndex={-1}
                                  role="presentation"
                                  draggable="true"
                                  style={{ width: 120 }}
                                >
                                  <div className="SpreadsheetHeaderColumn-heading">
                                    <span className="Typography Typography--colorWeak Typography--overflowTruncate Typography--s SpreadsheetHeaderColumn-columnName">
                                      Assignee
                                    </span>
                                  </div>
                                  <div
                                    aria-label="Show options"
                                    aria-expanded="false"
                                    aria-haspopup="menu"
                                    className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconButton--standardTheme SubtleIconButton SpreadsheetHeaderColumn-menuOnHover"
                                    role="button"
                                    tabIndex={0}
                                  >
                                    <svg
                                      className="MiniIcon ArrowDownMiniIcon"
                                      viewBox="0 0 24 24"
                                      aria-hidden="true"
                                      focusable="false"
                                    >
                                      <path d="M3.5,8.9c0-0.4,0.1-0.7,0.4-1C4.5,7.3,5.4,7.2,6,7.8l5.8,5.2l6.1-5.2C18.5,7.3,19.5,7.3,20,8c0.6,0.6,0.5,1.5-0.1,2.1 l-7.1,6.1c-0.6,0.5-1.4,0.5-2,0L4,10.1C3.6,9.8,3.5,9.4,3.5,8.9z" />
                                    </svg>
                                  </div>
                                  <div className="SpreadsheetResizeDragHandle-anchor" />
                                </div>
                              </div>
                            </div>
                            <div className="ReorderableHorizontalList-itemWrapper">
                              <div className="SortableItem ReorderableHorizontalList-sortableItem SpreadsheetHeaderRow-draggableContainer">
                                <div
                                  className="SpreadsheetHeaderColumn--fixedWidth SpreadsheetHeaderColumn--isClickable SpreadsheetHeaderColumn SpreadsheetProjectHeaderRow-headerColumn"
                                  tabIndex={-1}
                                  role="presentation"
                                  draggable="true"
                                  style={{ width: 120 }}
                                >
                                  <div className="SpreadsheetHeaderColumn-heading">
                                    <span className="Typography Typography--colorWeak Typography--overflowTruncate Typography--s SpreadsheetHeaderColumn-columnName">
                                      Due date
                                    </span>
                                  </div>
                                  <div
                                    aria-label="Show options"
                                    aria-expanded="false"
                                    aria-haspopup="menu"
                                    className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconButton--standardTheme SubtleIconButton SpreadsheetHeaderColumn-menuOnHover"
                                    role="button"
                                    tabIndex={0}
                                  >
                                    <svg
                                      className="MiniIcon ArrowDownMiniIcon"
                                      viewBox="0 0 24 24"
                                      aria-hidden="true"
                                      focusable="false"
                                    >
                                      <path d="M3.5,8.9c0-0.4,0.1-0.7,0.4-1C4.5,7.3,5.4,7.2,6,7.8l5.8,5.2l6.1-5.2C18.5,7.3,19.5,7.3,20,8c0.6,0.6,0.5,1.5-0.1,2.1 l-7.1,6.1c-0.6,0.5-1.4,0.5-2,0L4,10.1C3.6,9.8,3.5,9.4,3.5,8.9z" />
                                    </svg>
                                  </div>
                                  <div className="SpreadsheetResizeDragHandle-anchor" />
                                </div>
                              </div>
                            </div>
                            <div className="ReorderableHorizontalList-itemWrapper">
                              <div className="SortableItem ReorderableHorizontalList-sortableItem SpreadsheetHeaderRow-draggableContainer">
                                <div
                                  className="SpreadsheetHeaderColumn--fixedWidth SpreadsheetHeaderColumn--isClickable SpreadsheetHeaderColumn SpreadsheetProjectHeaderRow-headerColumn"
                                  tabIndex={-1}
                                  role="presentation"
                                  draggable="true"
                                  style={{ width: 120 }}
                                >
                                  <div className="SpreadsheetHeaderColumn-heading">
                                    <span className="Typography Typography--colorWeak Typography--overflowTruncate Typography--s SpreadsheetHeaderColumn-columnName">
                                      Priority
                                    </span>
                                  </div>
                                  <div
                                    aria-label="Show options"
                                    aria-expanded="false"
                                    aria-haspopup="menu"
                                    className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconButton--standardTheme SubtleIconButton SpreadsheetHeaderColumn-menuOnHover"
                                    role="button"
                                    tabIndex={0}
                                  >
                                    <svg
                                      className="MiniIcon ArrowDownMiniIcon"
                                      viewBox="0 0 24 24"
                                      aria-hidden="true"
                                      focusable="false"
                                    >
                                      <path d="M3.5,8.9c0-0.4,0.1-0.7,0.4-1C4.5,7.3,5.4,7.2,6,7.8l5.8,5.2l6.1-5.2C18.5,7.3,19.5,7.3,20,8c0.6,0.6,0.5,1.5-0.1,2.1 l-7.1,6.1c-0.6,0.5-1.4,0.5-2,0L4,10.1C3.6,9.8,3.5,9.4,3.5,8.9z" />
                                    </svg>
                                  </div>
                                  <div className="SpreadsheetResizeDragHandle-anchor" />
                                </div>
                              </div>
                            </div>
                            <div className="ReorderableHorizontalList-itemWrapper">
                              <div className="SortableItem ReorderableHorizontalList-sortableItem SpreadsheetHeaderRow-draggableContainer">
                                <div
                                  className="SpreadsheetHeaderColumn--fixedWidth SpreadsheetHeaderColumn--isClickable SpreadsheetHeaderColumn SpreadsheetProjectHeaderRow-headerColumn"
                                  tabIndex={-1}
                                  role="presentation"
                                  draggable="true"
                                  style={{ width: 120 }}
                                >
                                  <div className="SpreadsheetHeaderColumn-heading">
                                    <span className="Typography Typography--colorWeak Typography--overflowTruncate Typography--s SpreadsheetHeaderColumn-columnName">
                                      Status
                                    </span>
                                  </div>
                                  <div
                                    aria-label="Show options"
                                    aria-expanded="false"
                                    aria-haspopup="menu"
                                    className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconButton--standardTheme SubtleIconButton SpreadsheetHeaderColumn-menuOnHover"
                                    role="button"
                                    tabIndex={0}
                                  >
                                    <svg
                                      className="MiniIcon ArrowDownMiniIcon"
                                      viewBox="0 0 24 24"
                                      aria-hidden="true"
                                      focusable="false"
                                    >
                                      <path d="M3.5,8.9c0-0.4,0.1-0.7,0.4-1C4.5,7.3,5.4,7.2,6,7.8l5.8,5.2l6.1-5.2C18.5,7.3,19.5,7.3,20,8c0.6,0.6,0.5,1.5-0.1,2.1 l-7.1,6.1c-0.6,0.5-1.4,0.5-2,0L4,10.1C3.6,9.8,3.5,9.4,3.5,8.9z" />
                                    </svg>
                                  </div>
                                  <div className="SpreadsheetResizeDragHandle-anchor" />
                                </div>
                              </div>
                            </div>
                            <div className="SpreadsheetHeaderRow-nonDraggableEndingItemsContainer">
                              <div
                                className="SpreadsheetFieldHeadingDeprecated SpreadsheetAddFieldHeadingDeprecated-fieldHeading--iconOnlyLeftJustified SpreadsheetAddFieldHeadingDeprecated-fieldHeading--addField SpreadsheetAddFieldHeadingDeprecated-fieldHeading--iconOnly"
                                aria-expanded="false"
                                role="button"
                                tabIndex={0}
                                style={{ width: 50 }}
                              >
                                <div className="SpreadsheetFieldHeadingDeprecated-fieldNameContainer">
                                  <div className="SpreadsheetFieldHeadingDeprecated-fieldName">
                                    <div
                                      aria-label="Add field"
                                      tabIndex={-1}
                                      className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconButton--standardTheme SubtleIconButton"
                                      role="button"
                                    >
                                      <svg
                                        className="MiniIcon PlusMiniIcon"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        focusable="false"
                                      >
                                        <path d="M10,10V4c0-1.1,0.9-2,2-2s2,0.9,2,2v6h6c1.1,0,2,0.9,2,2s-0.9,2-2,2h-6v6c0,1.1-0.9,2-2,2s-2-0.9-2-2v-6H4c-1.1,0-2-0.9-2-2s0.9-2,2-2H10z" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="SpreadsheetHorizontalScrollSeam"
                style={{ width: 425 }}
              />
              <div
                role="presentation"
                className="Scrollable--withCompositingLayer Scrollable Scrollable--vertical SpreadsheetGridScroller-verticalScroller"
                tabIndex={-1}
              >
                <div
                  role="presentation"
                  className="Scrollable Scrollable--horizontal SpreadsheetGridScroller-horizontalScroller"
                  tabIndex={-1}
                >
                  <div className="SpreadsheetGridDropTarget-wrapper">
                    <div
                      role="row"
                      className="SpreadsheetRow SpreadsheetRow--enabled SpreadsheetGridDropTarget"
                    >
                      <div
                        className="SpreadsheetRow-stickyCell"
                        style={{ width: 425, background: "transparent" }}
                      >
                        <div className="SpreadsheetGridDropTarget-stickyCell" />
                      </div>
                      <div
                        className="SpreadsheetRow-stickyCellPlaceholder"
                        style={{ minWidth: 425, width: 425 }}
                      />
                      <div
                        className="SpreadsheetGridDropTarget-rightChild"
                        style={{ width: 525 }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="HiddenColumnDropTarget" />
                  </div>
                  <div className="SpreadsheetGridContents--canScrollHorizontally SpreadsheetGridContents SpreadsheetPotGridContents--hasComplete SpreadsheetPotGridContents">
                    <div tabIndex={-1}>
                      <div className="TaskGroup">
                        <div className="SortableList TaskGroup-subgroups TaskGroup-subgroups--sortable">
                          <div className="SortableList-itemContainer SortableList-itemContainer--column">
                            {data.map((column) => (
                              <div className="SortableItem SortableList-sortableItem">
                                <div className="TaskGroup--withHeader TaskGroup">
                                  <div className="DropTargetTaskGroupHeader">
                                    <div className="DropTargetTaskGroupHeader-child TaskGroup-headerDragSource">
                                      <div className="TaskGroupHeader-placeholderAndHeaderContainer">
                                        <div
                                          className="TaskGroupHeader TaskGroupHeader--draggable TaskGroup-header"
                                          draggable="true"
                                          style={{ width: 425 }}
                                        >
                                          <svg
                                            className="MiniIcon TaskGroupHeader-dragMiniIcon DragMiniIcon"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                            focusable="false"
                                          >
                                            <path d="M10,4c0,1.1-0.9,2-2,2S6,5.1,6,4s0.9-2,2-2S10,2.9,10,4z M16,2c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S17.1,2,16,2z M8,10 c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S9.1,10,8,10z M16,10c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S17.1,10,16,10z M8,18 c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S9.1,18,8,18z M16,18c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S17.1,18,16,18z" />
                                          </svg>
                                          <div
                                            aria-label="Collapse task list for this section"
                                            className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconButton--standardTheme SubtleIconButton TaskGroupHeader-toggleButton"
                                            role="button"
                                            tabIndex={0}
                                          >
                                            <svg
                                              className="Icon DownTriangleIcon"
                                              viewBox="0 0 32 32"
                                              aria-hidden="true"
                                              focusable="false"
                                            >
                                              <path d="M7.207,13.707L16.5,23l9.293-9.293c0.63-0.63,0.184-1.707-0.707-1.707H7.914C7.023,12,6.577,13.077,7.207,13.707z" />
                                            </svg>
                                          </div>
                                          <div
                                            className="TaskGroupHeader-headerContainer"
                                            tabIndex={0}
                                          >
                                            <div className="PotColumnName">
                                              {currentlyEditing == column.id ? (
                                                <input
                                                  style={{
                                                    outline: "none",
                                                  }}
                                                  ref={(ref) =>
                                                    ref && ref.focus()
                                                  }
                                                  type="text"
                                                  value={newColumnName}
                                                  onChange={(e) =>
                                                    setNewColumnName(
                                                      e.target.value
                                                    )
                                                  }
                                                  placeholder="Enter Section Name"
                                                  onBlur={() => {
                                                    if (currentlyEditing) {
                                                      editColumnName(column.id);
                                                      setCurrentlyEditing(
                                                        false
                                                      );
                                                    } else {
                                                      addColoumn();
                                                    }
                                                  }}
                                                />
                                              ) : (
                                                <button
                                                  onClick={() => {
                                                    setCurrentlyEditing(
                                                      column.id
                                                    );

                                                    setCurrentColumnId(
                                                      column.id
                                                    );
                                                    setCurrentColumnName(
                                                      column.columnName
                                                    );
                                                  }}
                                                  className="PotColumnName-nameButton"
                                                >
                                                  {column.columnName}
                                                </button>
                                              )}
                                              <div
                                                onClick={() =>
                                                  addTask(column.id)
                                                }
                                                aria-label="Add a task to this section"
                                                className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconButton--standardTheme SubtleIconButton PotColumnName-addTaskButton PotColumnName-addTaskOnClickButton"
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
                                              <div
                                                aria-label="More section actions"
                                                aria-expanded="false"
                                                aria-haspopup="menu"
                                                className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconButton--standardTheme SubtleIconButton PotColumnName-extraActionsDropdownButton"
                                                role="button"
                                                tabIndex={0}
                                              >
                                                <svg
                                                  className="Icon MoreIcon"
                                                  viewBox="0 0 32 32"
                                                  aria-hidden="true"
                                                  focusable="false"
                                                >
                                                  <path d="M16,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S14.3,13,16,13z M3,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S1.3,13,3,13z M29,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S27.3,13,29,13z" />
                                                </svg>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="TaskGroupHeader-placeholder"
                                          style={{ height: 50 }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    aria-label="Header Untitled section"
                                    role="treegrid"
                                    className="SpreadsheetTaskList SpreadsheetPotGridContents-taskList"
                                  >
                                    <div
                                      className="SpreadsheetAriaColumnHeaderRow"
                                      role="row"
                                    >
                                      <span
                                        role="columnheader"
                                        aria-sort="none"
                                      >
                                        Task name
                                      </span>
                                      <span
                                        role="columnheader"
                                        aria-sort="none"
                                      >
                                        Assignee
                                      </span>
                                      <span
                                        role="columnheader"
                                        aria-sort="none"
                                      >
                                        Due date
                                      </span>
                                      <span
                                        role="columnheader"
                                        aria-sort="none"
                                      >
                                        Priority
                                      </span>
                                      <span
                                        role="columnheader"
                                        aria-sort="none"
                                      >
                                        Status
                                      </span>
                                    </div>
                                    {column.cards.map((card) => (
                                      <div className="DropTargetRow--inSpreadsheetGrid DropTargetRow ProjectSpreadsheetGridRow-dropTargetRow">
                                        <div>
                                          <div className="ContextMenuTarget-contextMenuEventListener SpreadsheetTaskRow-RootTaskContextMenuTarget">
                                            <div>
                                              <div
                                                role="row"
                                                className="SpreadsheetRow SpreadsheetRow--withShadedBackground SpreadsheetRow--enabled SpreadsheetRow--withRightGutter DraggableSpreadsheetTaskRow--withShadedBackground DraggableSpreadsheetTaskRow SpreadsheetTaskRow ProjectSpreadsheetGridRow-assigneeAndDueDateHover"
                                              >
                                                <div
                                                  className="SpreadsheetRow-stickyCell"
                                                  style={{
                                                    width: 425,
                                                    background: "transparent",
                                                  }}
                                                >
                                                  <span
                                                    className="HiddenText"
                                                    id="lui_96"
                                                  >
                                                    Incomplete task
                                                  </span>
                                                  <div
                                                    role="gridcell"
                                                    aria-label="asdasdasdasdas"
                                                    className="SpreadsheetCell--isHighlighted SpreadsheetCell--withShadedBackground SpreadsheetCell--withoutLeftBorder SpreadsheetCell SpreadsheetGridTaskNameAndDetailsCellGroup SpreadsheetTaskRow-nameOrDetailsCell"
                                                    tabIndex={0}
                                                    aria-describedby="lui_96"
                                                    id="highlightedCell"
                                                  >
                                                    <div
                                                      className="DragHandle DraggableSpreadsheetTaskRow-dragHandle"
                                                      draggable="true"
                                                    >
                                                      <svg
                                                        className="MiniIcon DragHandle-icon DragMiniIcon"
                                                        viewBox="0 0 24 24"
                                                        aria-hidden="true"
                                                        focusable="false"
                                                      >
                                                        <path d="M10,4c0,1.1-0.9,2-2,2S6,5.1,6,4s0.9-2,2-2S10,2.9,10,4z M16,2c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S17.1,2,16,2z M8,10 c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S9.1,10,8,10z M16,10c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S17.1,10,16,10z M8,18 c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S9.1,18,8,18z M16,18c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S17.1,18,16,18z" />
                                                      </svg>
                                                    </div>
                                                    <div className="ProjectSpreadsheetGridRow-subtaskToggleButtonPlaceholder" />
                                                    <div
                                                      aria-checked="false"
                                                      aria-label="Completed"
                                                      role="checkbox"
                                                      className="TaskRowCompletionStatus-checkbox--enabled TaskRowCompletionStatus-checkbox TaskRowCompletionStatus SpreadsheetGridTaskNameAndDetailsCellGroup-completionStatus"
                                                      tabIndex={0}
                                                      aria-disabled="false"
                                                    >
                                                      <svg
                                                        className="CompoundIcon--small CompoundIcon TaskCompletionCompoundIcon TaskCompletionStatusIndicator--incomplete TaskCompletionStatusIndicator TaskRowCompletionStatus-taskCompletionIcon--incomplete TaskRowCompletionStatus-taskCompletionIcon"
                                                        viewBox="0 0 32 32"
                                                        aria-hidden="true"
                                                        focusable="false"
                                                      >
                                                        <path
                                                          d="M31,16c0,8.3-6.7,15-15,15S1,24.3,1,16S7.7,1,16,1S31,7.7,31,16z"
                                                          className="CompoundIcon-outer"
                                                        />
                                                        <path
                                                          d="M13.4,22.1c-0.3,0-0.5-0.1-0.7-0.3l-3.9-3.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l3.1,3.1l8.1-8.1c0.4-0.4,1-0.4,1.4,0   s0.4,1,0,1.4l-8.9,8.9C13.9,22,13.7,22.1,13.4,22.1z"
                                                          className="CompoundIcon-inner"
                                                        />
                                                      </svg>
                                                    </div>
                                                    <label className="SpreadsheetTaskName SpreadsheetTaskName--editable SpreadsheetGridTaskNameAndDetailsCellGroup-taskName">
                                                      <div
                                                        className="SpreadsheetTaskName-shadow"
                                                        aria-hidden="true"
                                                      >
                                                        {card.taskName}
                                                      </div>
                                                      <textarea
                                                        id="Pot.1205343526438001_1205358966417419_1205359926801970"
                                                        className="SpreadsheetTaskName-input override-focus-border override-hover-border"
                                                        placeholder=""
                                                        rows={1}
                                                        tabIndex={0}
                                                        wrap="off"
                                                        style={{
                                                          whiteSpace: "pre",
                                                        }}
                                                        onChange={(e) =>
                                                          editCard(
                                                            card.id,
                                                            {
                                                              ...card,
                                                              taskName:
                                                                e.target.value,
                                                            },
                                                            column.id
                                                          )
                                                        }
                                                        onBlur={() =>
                                                          editCard(
                                                            card.id,
                                                            {
                                                              ...card,
                                                              isCurrentlyEditing: false,
                                                            },
                                                            column.id
                                                          )
                                                        }
                                                        value={card.taskName}
                                                        defaultValue={
                                                          card.taskName
                                                        }
                                                      />
                                                    </label>
                                                    <div className="SpreadsheetGridTaskNameAndDetailsCellGroup-detailsButtonClickArea">
                                                      <div className="SpreadsheetGridTaskNameAndDetailsCellGroup-detailsButtonClickAreaRightChildren">
                                                        <div className="TaskMoveIndicator SpreadsheetGridTaskNameAndDetailsCellGroup-taskMoveIndicatorIcon">
                                                          <div
                                                            aria-expanded="false"
                                                            aria-haspopup="listbox"
                                                            aria-label="Move tasks between sections"
                                                            tabIndex={0}
                                                            className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconButton--standardTheme SubtleIconButton TaskMoveIndicator-button"
                                                            role="button"
                                                          >
                                                            <svg
                                                              className="MiniIcon TaskMovementMiniIcon"
                                                              viewBox="0 0 24 24"
                                                              aria-hidden="true"
                                                              focusable="false"
                                                            >
                                                              <path d="M5.85294 9.12337V21.0014L1.50001 16.6927C1.14706 16.3433 0.617647 16.3433 0.264706 16.6927C-0.0882355 17.042 -0.0882355 17.5661 0.264706 17.9154L6.14704 23.738C6.49999 24.0873 7.0294 24.0873 7.38234 23.738L13.2647 17.9154C13.4412 17.7407 13.5 17.5077 13.5 17.2749C13.5 17.042 13.4412 16.8091 13.2647 16.6345C12.9117 16.2851 12.3823 16.2851 12.0294 16.6345L7.67646 20.9432V9.12337C7.67646 8.65756 7.26469 8.24999 6.79411 8.24999C6.38235 8.24999 5.85294 8.65756 5.85294 9.12337ZM16.3529 14.8766V2.99861L12 7.30729C11.647 7.65664 11.1176 7.65664 10.7647 7.30729C10.4117 6.95794 10.4117 6.4339 10.7647 6.08455L16.647 0.262014C17 -0.0873381 17.5293 -0.0873381 17.8823 0.262014L23.7646 6.08455C23.9412 6.25923 24 6.49213 24 6.72503C24 6.95794 23.9412 7.19084 23.7646 7.36552C23.4117 7.71487 22.8824 7.71487 22.5294 7.36552L18.1764 3.05684V14.8766C18.1764 15.3424 17.7647 15.7499 17.2941 15.7499C16.8824 15.7499 16.3529 15.3424 16.3529 14.8766Z" />
                                                            </svg>
                                                          </div>
                                                        </div>
                                                        <div className="" />
                                                        <div
                                                          aria-label="Details"
                                                          tabIndex={0}
                                                          className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconButton--standardTheme SubtleIconButton SpreadsheetGridTaskNameAndDetailsCellGroup-detailsButton"
                                                          role="button"
                                                        >
                                                          <svg
                                                            className="MiniIcon ArrowRightMiniIcon"
                                                            viewBox="0 0 24 24"
                                                            aria-hidden="true"
                                                            focusable="false"
                                                          >
                                                            <path d="M8.9,20.4c-0.4,0-0.7-0.1-1-0.4c-0.6-0.6-0.7-1.5-0.1-2.1l5.2-5.8L7.8,6C7.3,5.4,7.3,4.4,8,3.9C8.6,3.3,9.5,3.4,10.1,4l6.1,7.1c0.5,0.6,0.5,1.4,0,2l-6.1,6.8C9.8,20.3,9.4,20.4,8.9,20.4z" />
                                                          </svg>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  className="SpreadsheetRow-stickyCellPlaceholder"
                                                  style={{
                                                    minWidth: 425,
                                                    width: 425,
                                                  }}
                                                />
                                                <div />
                                                <div className="ContextMenuTarget-contextMenuEventListener SpreadsheetTaskRow-FieldCellTaskContextMenuTarget">
                                                  <div
                                                    role="gridcell"
                                                    className="SpreadsheetCell--withShadedBackground SpreadsheetCell SpreadsheetAssigneeCell-cell SpreadsheetTaskRow-assigneeCell"
                                                    tabIndex={-1}
                                                    style={{ width: 120 }}
                                                  >
                                                    <div
                                                      className="SpreadsheetAssigneeCell-assignee"
                                                      tabIndex={0}
                                                    >
                                                      <div
                                                        className="AssigneeWithNameDisplayButton SpreadsheetAssigneeCell-assigneeDisplay"
                                                        tabIndex={-1}
                                                        aria-disabled="false"
                                                        role="button"
                                                      >
                                                        <div
                                                          className="AssigneeWithNameDisplayButton-avatar--noValue AssigneeWithNameDisplayButton-avatar"
                                                          role="presentation"
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
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="ContextMenuTarget-contextMenuEventListener SpreadsheetTaskRow-FieldCellTaskContextMenuTarget">
                                                  <div
                                                    role="gridcell"
                                                    className="SpreadsheetCell--withShadedBackground SpreadsheetCell SpreadsheetMutableDateCell-cell SpreadsheetTaskDueDateCell-cell SpreadsheetTaskRow-dueDateCell"
                                                    tabIndex={-1}
                                                    style={{ width: 120 }}
                                                  >
                                                    <div
                                                      className="SpreadsheetMutableDateCell"
                                                      tabIndex={0}
                                                    >
                                                      
                                                      <div className="SpreadsheetMutableDateCell-dueDateDisplay ">
                                                     
                                                        <div className="PlaceholderAvatar PlaceholderAvatar--small">
                                                         
                                                         {/*  <LocalizationProvider
                                                            dateAdapter={
                                                              AdapterDayjs
                                                            }
                                                          >
                                                            <svg
                                                              className="MiniIcon CalendarMiniIcon"
                                                              viewBox="0 0 24 24"
                                                              aria-hidden="true"
                                                              focusable="false"
                                                            >
                                                              <path d="M19.1,2H18V1c0-0.6-0.4-1-1-1s-1,0.4-1,1v1H8V1c0-0.6-0.4-1-1-1S6,0.4,6,1v1H4.9C2.2,2,0,4.2,0,6.9v12.1  C0,21.8,2.2,24,4.9,24h14.1c2.7,0,4.9-2.2,4.9-4.9V6.9C24,4.2,21.8,2,19.1,2z M4.9,4H6v1c0,0.6,0.4,1,1,1s1-0.4,1-1V4h8v1  c0,0.6,0.4,1,1,1s1-0.4,1-1V4h1.1C20.7,4,22,5.3,22,6.9V8H2V6.9C2,5.3,3.3,4,4.9,4z M19.1,22H4.9C3.3,22,2,20.7,2,19.1V10h20v9.1  C22,20.7,20.7,22,19.1,22z" />
                                                            </svg>
                                                            <DatePicker
                                                              value={
                                                                card.deadLine
                                                              }
                                                              onChange={(e) => {
                                                                editCard(
                                                                  card.id,
                                                                  {
                                                                    ...card,
                                                                    deadLine:
                                                                      e.target
                                                                        .value,
                                                                  },
                                                                  column.id
                                                                );
                                                              }}
                                                            />
                                                          </LocalizationProvider> */}
                                                          {/* */}
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="ContextMenuTarget-contextMenuEventListener SpreadsheetTaskRow-FieldCellTaskContextMenuTarget">
                                                  <div
                                                    role="gridcell"
                                                    aria-label="Priority field for asdasdasdasdas"
                                                    className="SpreadsheetCell--withShadedBackground SpreadsheetCell SpreadsheetCustomPropertyEnumCell-spreadsheetCell"
                                                    tabIndex={-1}
                                                    title=""
                                                    style={{ width: 120 }}
                                                  >
                                                    <div
                                                      id="SpreadsheetCustomPropertyEnumCell-1205359926801970-1205343526438006"
                                                      className="CustomPropertyEnumValueInput-button--large CustomPropertyEnumValueInput-button--grid CustomPropertyEnumValueInput-button CustomPropertyEnumValueInput--empty CustomPropertyEnumValueInput--editable CustomPropertyEnumValueInput--insideCell CustomPropertyEnumValueInput SpreadsheetCustomPropertyEnumCell-field"
                                                      tabIndex={-1}
                                                      aria-expanded="false"
                                                      aria-haspopup="true"
                                                      aria-disabled="false"
                                                      role="button"
                                                    >
                                                      <div className="CustomPropertyEnumValueInput-label">
                                                        —
                                                      </div>
                                                      <svg
                                                        className="MiniIcon--small MiniIcon CustomPropertyEnumValueInput-downIcon ArrowDownMiniIcon"
                                                        viewBox="0 0 24 24"
                                                        aria-hidden="true"
                                                        focusable="false"
                                                      >
                                                        <path d="M3.5,8.9c0-0.4,0.1-0.7,0.4-1C4.5,7.3,5.4,7.2,6,7.8l5.8,5.2l6.1-5.2C18.5,7.3,19.5,7.3,20,8c0.6,0.6,0.5,1.5-0.1,2.1 l-7.1,6.1c-0.6,0.5-1.4,0.5-2,0L4,10.1C3.6,9.8,3.5,9.4,3.5,8.9z" />
                                                      </svg>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="ContextMenuTarget-contextMenuEventListener SpreadsheetTaskRow-FieldCellTaskContextMenuTarget">
                                                  <div
                                                    role="gridcell"
                                                    aria-label="Status field for asdasdasdasdas"
                                                    className="SpreadsheetCell--withShadedBackground SpreadsheetCell SpreadsheetCustomPropertyEnumCell-spreadsheetCell"
                                                    tabIndex={-1}
                                                    title=""
                                                    style={{ width: 120 }}
                                                  >
                                                    <div
                                                      id="SpreadsheetCustomPropertyEnumCell-1205359926801970-1205343530602587"
                                                      className="CustomPropertyEnumValueInput-button--large CustomPropertyEnumValueInput-button--grid CustomPropertyEnumValueInput-button CustomPropertyEnumValueInput--empty CustomPropertyEnumValueInput--editable CustomPropertyEnumValueInput--insideCell CustomPropertyEnumValueInput SpreadsheetCustomPropertyEnumCell-field"
                                                      tabIndex={-1}
                                                      aria-expanded="false"
                                                      aria-haspopup="true"
                                                      aria-disabled="false"
                                                      role="button"
                                                    >
                                                      <div className="CustomPropertyEnumValueInput-label">
                                                        —
                                                      </div>
                                                      <svg
                                                        className="MiniIcon--small MiniIcon CustomPropertyEnumValueInput-downIcon ArrowDownMiniIcon"
                                                        viewBox="0 0 24 24"
                                                        aria-hidden="true"
                                                        focusable="false"
                                                      >
                                                        <path d="M3.5,8.9c0-0.4,0.1-0.7,0.4-1C4.5,7.3,5.4,7.2,6,7.8l5.8,5.2l6.1-5.2C18.5,7.3,19.5,7.3,20,8c0.6,0.6,0.5,1.5-0.1,2.1 l-7.1,6.1c-0.6,0.5-1.4,0.5-2,0L4,10.1C3.6,9.8,3.5,9.4,3.5,8.9z" />
                                                      </svg>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div
                                                  className="SpreadsheetPlaceholderCell--withShadedBackground SpreadsheetPlaceholderCell SpreadsheetTaskRow-addFieldPlaceholder"
                                                  style={{ width: 50 }}
                                                />
                                                <div
                                                  className="SpreadsheetTaskRow-endOfRowTabStop"
                                                  tabIndex={0}
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    ))}

                                    <div
                                      role="row"
                                      className="SpreadsheetRow SpreadsheetRow--enabled ProjectSpreadsheetAddTaskAndAggregationRow ProjectSpreadsheetAddTaskAndAggregationRow--canAddTask"
                                    >
                                      <div
                                        className="SpreadsheetRow-stickyCell"
                                        style={{
                                          width: 425,
                                          background: "transparent",
                                          marginLeft: 30,
                                        }}
                                      >
                                        <div
                                          className="ProjectSpreadsheetAddTaskAndAggregationRow-stickyCell ProjectSpreadsheetAddTaskAndAggregationRow-stickyCell--canScrollHorizontally"
                                          style={{ width: 425 }}
                                        >
                                          <div
                                            className="ProjectSpreadsheetAddTaskAndAggregationRow-startOfRowTabStop"
                                            tabIndex={0}
                                          />
                                          <div className="ProjectSpreadsheetAddTaskAndAggregationRow-dragHandlePlaceholder" />
                                          <span
                                            className="InlineTextButton--isEnabled InlineTextButton InlineTextButton--default ProjectSpreadsheetAddTaskAndAggregationRow-addTaskText"
                                            as="span"
                                            role="button"
                                            tabIndex={0}
                                            onClick={() => addTask(column.id)}
                                          >
                                            <div className="Typography Typography--colorDarkGray1 Typography--m">
                                              Add task…
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                      <div
                                        className="SpreadsheetRow-stickyCellPlaceholder"
                                        style={{ minWidth: 425, width: 425 }}
                                      />
                                      <div
                                        className="ProjectSpreadsheetAddTaskAndAggregationRow-emptyCell"
                                        style={{ width: 120 }}
                                      />
                                      <div
                                        className="ProjectSpreadsheetAddTaskAndAggregationRow-emptyCell"
                                        style={{ width: 120 }}
                                      />
                                      <div
                                        className="ProjectSpreadsheetAddTaskAndAggregationRow-emptyCell"
                                        style={{ width: 120 }}
                                      />
                                      <div
                                        className="ProjectSpreadsheetAddTaskAndAggregationRow-emptyCell"
                                        style={{ width: 120 }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

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
                        className="ItemListAddSectionButton--xlarge ItemListAddSectionButton SpreadsheetPotGridContents-addSectionButton"
                      />
                    ) : (
                      <div
                        className="ItemListAddSectionButton--xlarge ItemListAddSectionButton SpreadsheetPotGridContents-addSectionButton"
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
                  </div>
                </div>
              </div>
              <div
                className="SpreadsheetGridScroller-horizontalScrollbarPlaceholder"
                style={{ height: 18 }}
              />
              <div className="ScrollbarSizeReference" />
              <div className="ResizeListener">
                <div className="ResizeListener-expand">
                  <div className="ResizeListener-expandChild" />
                </div>
                <div className="ResizeListener-shrink">
                  <div className="ResizeListener-shrinkChild" />
                </div>
              </div>
              <div
                className="SpreadsheetGridScroller-horizontalScrollbarWrapper"
                style={{ height: 18, right: 0 }}
              >
                <div
                  role="presentation"
                  className="Scrollable--withCompositingLayer Scrollable Scrollable--horizontal SpreadsheetGridScroller-horizontalScrollbarScrollable"
                  tabIndex={-1}
                >
                  <div
                    className="SpreadsheetGridScroller-horizontalScrollbarContent"
                    style={{ minWidth: 975 }}
                  />
                </div>
              </div>
            </div>
            <div className="MultiSelectToolbarInnerRoot-transitionGroup" />
            <div className="AiAssistantPaneManager" />
            <div className="CustomizePaneManager" />
          </div>
          <div className="FullWidthPageStructureWithDetailsOverlay-detailsOverlay" />
        </div>
      </div>
    </div>
  );
}
