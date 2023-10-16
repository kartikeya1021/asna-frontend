import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker, MobileDatePicker } from "@mui/x-date-pickers";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { useState } from "preact/hooks";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 150,
    },
  },
};
function getStyles() {
  return {};
}
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
  const dateRef = React.useRef();
  const priorities = ["Low", "Medium", "High"];
  const [isCardDetailsOpened, setIsCardDetailsOpened] = useState(false);
  return (
    <div className="PotListPage ProjectPage-listInner">
      <div
        className={
          isCardDetailsOpened
            ? "FullWidthPageStructureWithDetailsOverlay FullWidthPageStructureWithDetailsOverlay--withDetailsOverlayOpen FullWidthPageStructureWithDetailsOverlay--shrinkMainContentForOverlay PotListPageContent"
            : "FullWidthPageStructureWithDetailsOverlay PotListPageContent"
        }
      >
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
                                          draggable
                                          onDragStart={(e) => {
                                            e.dataTransfer.setData(
                                              "columnid",
                                              id
                                            );
                                          }}
                                          className="TaskGroupHeader TaskGroupHeader--draggable TaskGroup-header"
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
                                                        id={card.id}
                                                        className="SpreadsheetTaskName-input override-focus-border override-hover-border"
                                                        placeholder=""
                                                        rows={1}
                                                        tabIndex={card.id}
                                                        wrap="off"
                                                        value={card.taskName}
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
                                                        /*   value={card.taskName} */
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
                                                      class="SpreadsheetMutableDateCell--isAlwaysVisible SpreadsheetMutableDateCell"
                                                      tabindex="0"
                                                    >
                                                      <div class="SpreadsheetMutableDateCell-dueDateDisplay">
                                                        <div class="DueDateWithRecurrence--xsmall DueDateWithRecurrence DueDateWithRecurrence--past SpreadsheetMutableDateCell-dueDateWithRecurrence">
                                                          <div
                                                            onClick={() =>
                                                              editCard(
                                                                card.id,
                                                                {
                                                                  ...card,
                                                                  isDateModalOpen: true,
                                                                },
                                                                column.id
                                                              )
                                                            }
                                                            class="DueDate--canWrap DueDate DueDateWithRecurrence-dueDate DueDate--past"
                                                          >
                                                            <span class="DueDate-dateSpan">
                                                              {new Date(
                                                                card.deadLine
                                                              ).toDateString()}
                                                            </span>
                                                          </div>
                                                        </div>
                                                        <LocalizationProvider
                                                          dateAdapter={
                                                            AdapterDayjs
                                                          }
                                                        >
                                                          {card.isDateModalOpen && (
                                                            <MobileDatePicker
                                                              onChange={(e) => {
                                                                editCard(
                                                                  card.id,
                                                                  {
                                                                    ...card,
                                                                    deadLine:
                                                                      new Date(
                                                                        e
                                                                      ),
                                                                    isDateModalOpen: false,
                                                                  },
                                                                  column.id
                                                                );
                                                              }}
                                                              open={true}
                                                              /* value={
                                                                new Date(
                                                                  card.deadLine
                                                                )
                                                              } */
                                                              renderInput={(
                                                                params
                                                              ) => (
                                                                <div
                                                                  {...params}
                                                                />
                                                              )}
                                                            />
                                                          )}
                                                        </LocalizationProvider>
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
                                                    onMouseLeave={() =>
                                                      editCard(
                                                        card.id,
                                                        {
                                                          ...card,
                                                          onPriorityHover: false,
                                                        },
                                                        column.id
                                                      )
                                                    }
                                                  >
                                                    <div
                                                      class="SpreadsheetMutableDateCell--isAlwaysVisible SpreadsheetMutableDateCell"
                                                      tabindex="0"
                                                    >
                                                      <div class="SpreadsheetMutableDateCell-dueDateDisplay">
                                                        <div class="DueDateWithRecurrence--xsmall DueDateWithRecurrence DueDateWithRecurrence--past SpreadsheetMutableDateCell-dueDateWithRecurrence">
                                                          <div class="DueDate--canWrap DueDate DueDateWithRecurrence-dueDate DueDate--past">
                                                            <span class="DueDate-dateSpan">
                                                              <Select
                                                                labelId="demo-multiple-chip-label"
                                                                id="demo-multiple-chip"
                                                                onChange={(e) =>
                                                                  editCard(
                                                                    card.id,
                                                                    {
                                                                      ...card,
                                                                      priority:
                                                                        e.target
                                                                          .value,
                                                                    },
                                                                    column.id
                                                                  )
                                                                }
                                                                /*  input={
                                                                  <OutlinedInput
                                                                    id="select-multiple-chip"
                                                                    label="Chip"
                                                                  />
                                                                } */
                                                                MenuProps={
                                                                  MenuProps
                                                                }
                                                                value={
                                                                  card.priority
                                                                }
                                                              >
                                                                {priorities.map(
                                                                  (name) => (
                                                                    <MenuItem
                                                                      key={name}
                                                                      value={
                                                                        name
                                                                      }
                                                                      style={getStyles()}
                                                                    >
                                                                      {name}
                                                                    </MenuItem>
                                                                  )
                                                                )}
                                                              </Select>
                                                            </span>
                                                          </div>
                                                        </div>
                                                      </div>
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
          <div className="FullWidthPageStructureWithDetailsOverlay-detailsOverlay FullWidthPageStructureWithDetailsOverlay-detailsOverlay--visible">
            <div className="FocusTrap TaskPane-focusTrap" tabIndex={-1}>
              <div
                role="dialog"
                aria-label="asdasdas"
                aria-describedby="incomplete task"
                className="TaskPane"
                data-task-id={1205359926801974}
                tabIndex={0}
              >
                <div className="TaskPaneToolbar TaskPaneToolbar TaskPane-header">
                  <div className="ResizeListener">
                    <div className="ResizeListener-expand">
                      <div className="ResizeListener-expandChild" />
                    </div>
                    <div className="ResizeListener-shrink">
                      <div className="ResizeListener-shrinkChild" />
                    </div>
                  </div>
                  <div className="TaskPaneToolbarAnimation">
                    <div className="TaskPaneToolbarAnimation-container">
                      <div className="TaskPaneToolbarAnimation-row">
                        <div
                          aria-pressed="false"
                          className="ThemeableRectangularButtonPresentation--isEnabled ThemeableRectangularButtonPresentation ThemeableRectangularButtonPresentation--medium TaskCompletionToggleButton--isNotPressed TaskCompletionToggleButton"
                          aria-disabled="false"
                          role="button"
                          tabIndex={0}
                        >
                          <svg
                            className="MiniIcon ThemeableRectangularButtonPresentation-leftIcon CheckMiniIcon"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <path d="M9.2,20c-0.5,0.5-1.3,0.5-1.9,0l-5.1-5.1c-0.4-0.5-0.4-1.3,0-1.9c0.4-0.5,1.3-0.5,1.9,0l4.1,4.1L19.7,5.7 c0.5-0.5,1.3-0.5,1.9,0s0.5,1.3,0,1.9L9.2,20z" />
                          </svg>
                          Mark complete
                        </div>
                      </div>
                      <div className="TaskPaneToolbarAnimation-row--hidden TaskPaneToolbarAnimation-row">
                        <div
                          aria-checked="false"
                          aria-label="Completed"
                          role="checkbox"
                          className="TaskRowCompletionStatus-checkbox--enabled TaskRowCompletionStatus-checkbox TaskRowCompletionStatus TaskPaneToolbarAnimation-completion TaskPaneToolbarStatusIcon"
                          tabIndex={-1}
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
                        <div className="TaskPaneToolbarAnimation-title">
                          asdasdas
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="TaskPaneToolbar-approvalButtonsHiddenMeasuringArea"
                    aria-hidden="true"
                  >
                    <div
                      tabIndex={-1}
                      className="ThemeableRectangularButtonPresentation--isEnabled ThemeableRectangularButtonPresentation ThemeableRectangularButtonPresentation--medium StopLightButton--isNotPressed StopLightButton StopLightButton--green ApprovalApproveToggleButton TaskPaneToolbar-hiddenApprovalButton"
                      role="button"
                    >
                      <svg
                        className="MiniIcon ThemeableRectangularButtonPresentation-leftIcon CheckMiniIcon"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M9.2,20c-0.5,0.5-1.3,0.5-1.9,0l-5.1-5.1c-0.4-0.5-0.4-1.3,0-1.9c0.4-0.5,1.3-0.5,1.9,0l4.1,4.1L19.7,5.7 c0.5-0.5,1.3-0.5,1.9,0s0.5,1.3,0,1.9L9.2,20z" />
                      </svg>
                      Approve
                    </div>
                    <div
                      tabIndex={-1}
                      className="ThemeableRectangularButtonPresentation--isEnabled ThemeableRectangularButtonPresentation ThemeableRectangularButtonPresentation--medium StopLightButton--isNotPressed StopLightButton StopLightButton--yellow ApprovalRequestChangesToggleButton TaskPaneToolbar-hiddenApprovalButton"
                      role="button"
                    >
                      <svg
                        className="MiniIcon ThemeableRectangularButtonPresentation-leftIcon IterateMiniIcon"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M8.17193,14.3108 L6.51683,15.5402 C6.45409,15.4131 6.39538,15.2836 6.34086,15.152 C5.79494,13.8341 5.69917,12.3728 6.06838,10.9949 C6.4376,9.61695 7.25117,8.39935 8.38292,7.53093 C9.51467,6.66251 10.9013,6.1918 12.3279,6.1918 C13.7544,6.1918 15.1411,6.66251 16.2729,7.53093 C17.4046,8.39935 18.2182,9.61695 18.5874,10.9949 C18.9566,12.3728 18.8608,13.8341 18.3149,15.152 C17.9741,15.9747 17.4698,16.7129 16.8385,17.325 C16.2056,17.9385 15.9253,18.903 16.366,19.6663 C16.8067,20.4296 17.7936,20.7004 18.4741,20.1403 C19.6926,19.1375 20.6537,17.8463 21.2638,16.3735 C22.0785,14.4064 22.2215,12.2254 21.6704,10.1688 C21.1194,8.11217 19.9051,6.29486 18.2159,4.99871 C16.5267,3.70256 14.457,3 12.3279,3 C10.1987,3 8.12906,3.70256 6.43988,4.99871 C4.7507,6.29486 3.53641,8.11217 2.98535,10.1688 C2.43428,12.2254 2.57723,14.4064 3.39202,16.3735 C3.5478,16.7496 3.72647,17.1138 3.92648,17.4644 L2.34532,18.639 C1.73497,19.0923 1.97747,20.0573 2.72964,20.1683 L7.80703,20.9175 C8.27331,20.9864 8.70709,20.6641 8.77589,20.1978 L9.52511,15.1205 C9.6361,14.3683 8.78228,13.8574 8.17193,14.3108 Z" />
                      </svg>
                      Request changes
                    </div>
                    <div
                      tabIndex={-1}
                      className="ThemeableRectangularButtonPresentation--isEnabled ThemeableRectangularButtonPresentation ThemeableRectangularButtonPresentation--medium StopLightButton--isNotPressed StopLightButton StopLightButton--red ApprovalRejectToggleButton TaskPaneToolbar-hiddenApprovalButton"
                      role="button"
                    >
                      <svg
                        className="MiniIcon ThemeableRectangularButtonPresentation-leftIcon XThickMiniIcon"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M14.5,12l6-6C20.8,5.7,21,5.2,21,4.8s-0.2-0.9-0.5-1.2C20.1,3.2,19.7,3,19.2,3S18.3,3.2,18,3.5l-6,6l-6-6 C5.7,3.2,5.2,3,4.8,3S3.9,3.2,3.5,3.5C3.2,3.9,3,4.3,3,4.8S3.2,5.7,3.5,6l6,6l-6,6c-0.7,0.7-0.7,1.8,0,2.5C3.9,20.8,4.3,21,4.8,21 s0.9-0.2,1.2-0.5l6-6l6,6c0.3,0.3,0.8,0.5,1.2,0.5s0.9-0.2,1.2-0.5c0.7-0.7,0.7-1.8,0-2.5L14.5,12z" />
                      </svg>
                      Reject
                    </div>
                  </div>
                  <div className="SubtleHeartButton--isNotHearted SubtleHeartButton TaskPaneToolbar-button">
                    <div className="SubtleHeartButton-pulse" />
                    <div
                      aria-label="0 likes. Click to like this task"
                      tabIndex={0}
                      className="ThemeableRectangularButtonPresentation--isEnabled ThemeableRectangularButtonPresentation--withNoLabel ThemeableRectangularButtonPresentation ThemeableRectangularButtonPresentation--medium ThemeableCountWithIconButton--withRegularIcon ThemeableCountWithIconButton SubtleCountWithIconButton SubtleHeartButton-button--isNotHearted SubtleHeartButton-button"
                      role="button"
                    >
                      <svg
                        className="Icon ThemeableRectangularButtonPresentation-rightIcon ThumbsUpLineIcon"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M29.6,13.3c-0.8-0.9-1.9-1.4-3.1-1.4h-6.4V7.5c0-1.9-0.9-3.8-2.5-4.9C16.9,2,15.9,1.8,15,2.1c-0.9,0.2-1.7,0.8-2,1.7L8.3,13.9H5c-1.7,0-3.1,1.4-3.1,3.1v10c0,1.7,1.4,3.1,3.1,3.1h2.9H9h15.9c2,0,3.7-1.5,4-3.5l1.6-10C30.7,15.4,30.4,14.2,29.6,13.3z M5,27.9c-0.5,0-0.9-0.4-0.9-0.9V17c0-0.5,0.4-0.9,0.9-0.9h2.9v11.8C7.9,27.9,5,27.9,5,27.9z M28.4,16.3l-1.6,10c-0.1,0.9-0.9,1.6-1.9,1.6H10.1V15.2L15,4.7c0.2-0.3,0.4-0.5,0.6-0.5c0.2,0,0.5-0.1,0.8,0.2c1,0.7,1.6,1.9,1.6,3.2v6.6h8.6c0.6,0,1.1,0.2,1.5,0.7C28.3,15.2,28.5,15.7,28.4,16.3z" />
                      </svg>
                    </div>
                  </div>
                  <span className="AddAttachmentsButton TaskPaneToolbar-button">
                    <input
                      id="add_attachments_button_file_input_0"
                      className="AddAttachmentsButton-hiddenFileInput"
                      multiple=""
                      tabIndex={-1}
                      type="file"
                    />
                    <div
                      aria-expanded="false"
                      aria-haspopup="menu"
                      tabIndex={0}
                      aria-label="Attachments: Add a file to this task, asdasdas"
                      className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconButton--standardTheme SubtleIconButton TaskPaneToolbar-attachmentsButton"
                      aria-disabled="false"
                      role="button"
                    >
                      <svg
                        className="Icon AttachVerticalIcon"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M19,32c-3.9,0-7-3.1-7-7V10c0-2.2,1.8-4,4-4s4,1.8,4,4v9c0,0.6-0.4,1-1,1s-1-0.4-1-1v-9c0-1.1-0.9-2-2-2s-2,0.9-2,2v15c0,2.8,2.2,5,5,5s5-2.2,5-5V10c0-4.4-3.6-8-8-8s-8,3.6-8,8v5c0,0.6-0.4,1-1,1s-1-0.4-1-1v-5C6,4.5,10.5,0,16,0s10,4.5,10,10v15C26,28.9,22.9,32,19,32z" />
                      </svg>
                    </div>
                  </span>
                  <div
                    aria-label="Add subtask"
                    className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconButton--standardTheme SubtleIconButton TaskPaneToolbar-button TaskPaneToolbar-subtaskButton"
                    role="button"
                    tabIndex={0}
                  >
                    <svg
                      className="Icon SubtaskIcon"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M25,20c-2.4,0-4.4,1.7-4.9,4H11c-3.9,0-7-3.1-7-7v-5h16.1c0.5,2.3,2.5,4,4.9,4c2.8,0,5-2.2,5-5s-2.2-5-5-5c-2.4,0-4.4,1.7-4.9,4H4V3c0-0.6-0.4-1-1-1S2,2.4,2,3v14c0,5,4,9,9,9h9.1c0.5,2.3,2.5,4,4.9,4c2.8,0,5-2.2,5-5S27.8,20,25,20z M25,8c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S23.3,8,25,8z M25,28c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S26.7,28,25,28z" />
                    </svg>
                  </div>
                  <div
                    aria-label="Copy task link"
                    className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconButton--standardTheme SubtleIconButton TaskPaneToolbar-button TaskPaneToolbar-copyLinkButton"
                    role="button"
                    tabIndex={0}
                  >
                    <svg
                      className="Icon LinkIcon"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M9,32c-2.3,0-4.6-0.9-6.4-2.6c-3.5-3.5-3.5-9.2,0-12.7l4-4c0.4-0.4,1-0.4,1.4,0c0.4,0.4,0.4,1,0,1.4l-4,4c-2.7,2.7-2.7,7.2,0,9.9s7.2,2.7,9.9,0l4-4c2.7-2.7,2.7-7.2,0-9.9c-0.8-0.8-1.8-1.4-2.9-1.7c-0.5-0.2-0.8-0.7-0.7-1.3c0.2-0.5,0.7-0.8,1.3-0.7c1.4,0.4,2.7,1.2,3.7,2.2c3.5,3.5,3.5,9.2,0,12.7l-4,4C13.6,31.1,11.3,32,9,32z M16.6,21.6c-0.1,0-0.2,0-0.3,0c-1.4-0.4-2.7-1.2-3.7-2.2c-1.7-1.7-2.6-4-2.6-6.4s0.9-4.7,2.6-6.4l4-4c3.5-3.5,9.2-3.5,12.7,0s3.5,9.2,0,12.7l-4,4c-0.4,0.4-1,0.4-1.4,0s-0.4-1,0-1.4l4-4c2.7-2.7,2.7-7.2,0-9.9S20.7,1.3,18,4l-4,4c-1.3,1.4-2,3.1-2,5s0.7,3.6,2.1,5c0.8,0.8,1.8,1.4,2.9,1.7c0.5,0.2,0.8,0.7,0.7,1.3C17.5,21.4,17.1,21.6,16.6,21.6z" />
                    </svg>
                  </div>
                  <a
                    aria-label="Full screen"
                    href="https://app.asana.com/0/1205343526438001/1205359926801974/f"
                    className="ThemeableRectangularButtonPresentation--isEnabled ThemeableRectangularButtonPresentation--withNoLabel ThemeableRectangularButtonPresentation ThemeableRectangularButtonPresentation--medium TaskPaneToolbar-button TaskPaneToolbar-fullScreenButton BaseLink"
                  >
                    <svg
                      className="Icon ThemeableRectangularButtonPresentation-leftIcon ExpandIcon"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M13.7,19.7L5.4,28H13c0.6,0,1,0.4,1,1s-0.4,1-1,1H3c-0.6,0-1-0.4-1-1V19c0-0.6,0.4-1,1-1s1,0.4,1,1v7.6l8.3-8.3c0.4-0.4,1-0.4,1.4,0S14.1,19.3,13.7,19.7z M29,2H19c-0.6,0-1,0.4-1,1s0.4,1,1,1h7.6l-8.3,8.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3L28,5.4V13c0,0.6,0.4,1,1,1s1-0.4,1-1V3C30,2.4,29.6,2,29,2z" />
                    </svg>
                  </a>
                  <div
                    aria-label="More actions for this task"
                    aria-expanded="false"
                    aria-haspopup="menu"
                    className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconButton--standardTheme SubtleIconButton TaskPaneExtraActionsButton TaskPaneToolbar-button"
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
                  <div
                    aria-label="Close details"
                    className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconButton--standardTheme SubtleIconButton TaskPaneToolbar-closeButton TaskPaneToolbar-closeButton--withSpreadsheetGrid TaskPaneToolbar-button"
                    role="button"
                    tabIndex={0}
                  >
                    <svg
                      className="Icon CloseIcon"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M2,14.5h18.4l-7.4-7.4c-0.6-0.6-0.6-1.5,0-2.1c0.6-0.6,1.5-0.6,2.1,0l10,10c0.6,0.6,0.6,1.5,0,2.1l-10,10c-0.3,0.3-0.7,0.4-1.1,0.4c-0.4,0-0.8-0.1-1.1-0.4c-0.6-0.6-0.6-1.5,0-2.1l7.4-7.4H2c-0.8,0-1.5-0.7-1.5-1.5C0.5,15.3,1.2,14.5,2,14.5z M28,3.5C28,2.7,28.7,2,29.5,2S31,2.7,31,3.5v25c0,0.8-0.7,1.5-1.5,1.5S28,29.3,28,28.5V3.5z" />
                    </svg>
                  </div>
                </div>
                <div className="UploadDropTargetAttachmentWrappingTextEditor TaskPane-attachmentDropTarget">
                  <div className="DynamicBorderScrollable DynamicBorderScrollable--canScrollDown TaskPane-scrollable">
                    <div
                      className="Scrollable--withCompositingLayer Scrollable Scrollable--vertical DynamicBorderScrollable-scrollable"
                      tabIndex={-1}
                      role="presentation"
                    >
                      <div className="DynamicBorderScrollable-content TaskPane-body TaskPane-body--notIE">
                        <div className="ResizeListener">
                          <div className="ResizeListener-expand">
                            <div className="ResizeListener-expandChild" />
                          </div>
                          <div className="ResizeListener-shrink">
                            <div className="ResizeListener-shrinkChild" />
                          </div>
                        </div>
                        <div
                          role="main"
                          className="TaskPane-main"
                          tabIndex={-1}
                        >
                          <div className="TaskPane-resizeListenerContainer">
                            <div className="ResizeListener">
                              <div className="ResizeListener-expand">
                                <div className="ResizeListener-expandChild" />
                              </div>
                              <div className="ResizeListener-shrink">
                                <div className="ResizeListener-shrinkChild" />
                              </div>
                            </div>
                            <div className="TaskPaneBanners TaskPane-banners">
                              <div aria-live="polite" />
                            </div>
                            <div
                              className="TitleInput TaskPane-titleRow TaskPane-titleRowInput"
                              role="heading"
                              aria-level={2}
                            >
                              <div className="AutogrowTextarea-container TitleInput-objectName">
                                <div
                                  className="AutogrowTextarea-shadow"
                                  aria-hidden="true"
                                >
                                  asdasdas​
                                </div>
                                <textarea
                                  className="BaseTextarea simpleTextarea simpleTextarea--dynamic AutogrowTextarea-input"
                                  aria-label="Task Name"
                                  placeholder="Write a task name"
                                  tabIndex={0}
                                  autoComplete="off"
                                  defaultValue={"asdasdas"}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="TaskPane-premiumFeaturesSection">
                            <div className="TaskPaneFields">
                              <div className="LabeledRowStructure TaskPaneFields-assigneeRow">
                                <div
                                  className="LabeledRowStructure-left"
                                  style={{ width: 120 }}
                                >
                                  <div className="LabeledRowStructure-labelContainer">
                                    <label
                                      className="LabeledRowStructure-label"
                                      id="task_pane_assignee_label"
                                      htmlFor="task_pane_assignee_input"
                                    >
                                      Assignee
                                    </label>
                                  </div>
                                </div>
                                <div className="LabeledRowStructure-right">
                                  <div className="LabeledRowStructure-content">
                                    <div className="TaskPaneFields-assigneeContainer">
                                      <div className="TaskPaneAssigneeToken">
                                        <div
                                          id="task_pane_assignee_input"
                                          aria-describedby="task_pane_assignee_label"
                                          tabIndex={0}
                                          className="ThemeableCardPresentation--isValid ThemeableCardPresentation ThemeableInteractiveCardPresentation--isNotSelected ThemeableInteractiveCardPresentation--isEnabled ThemeableInteractiveCardPresentation SubtleButtonCard SubtleTokenButton--empty SubtleTokenButton--editable SubtleTokenButton--withoutRemoveButton SubtleTokenButton--subtle SubtleTokenButton AssigneeTokenButton--empty AssigneeTokenButton AssigneeToken TaskPaneAssigneeToken-assigneeToken"
                                          aria-expanded="false"
                                          aria-disabled="false"
                                          role="button"
                                        >
                                          <div className="SubtleTokenButton-leftIcon">
                                            <div className="PlaceholderAvatar PlaceholderAvatar--medium AssigneeTokenButton-emptyAvatar">
                                              <svg
                                                className="Icon UserIcon"
                                                viewBox="0 0 32 32"
                                                aria-hidden="true"
                                                focusable="false"
                                              >
                                                <path d="M16,18c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8S20.4,18,16,18z M16,4c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6-6S19.3,4,16,4z M29,32c-0.6,0-1-0.4-1-1v-4.2c0-2.6-2.2-4.8-4.8-4.8H8.8C6.2,22,4,24.2,4,26.8V31c0,0.6-0.4,1-1,1s-1-0.4-1-1v-4.2C2,23,5,20,8.8,20h14.4c3.7,0,6.8,3,6.8,6.8V31C30,31.6,29.6,32,29,32z" />
                                              </svg>
                                            </div>
                                          </div>
                                          <div className="AssigneeTokenButton-label">
                                            No assignee
                                          </div>
                                        </div>
                                        <div className="TaskAssigneeShortcuts" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="LabeledRowStructure TaskPaneFields-dueDateRow">
                                <div
                                  className="LabeledRowStructure-left"
                                  style={{ width: 120 }}
                                >
                                  <div className="LabeledRowStructure-labelContainer">
                                    <label
                                      className="LabeledRowStructure-label"
                                      id="task_pane_due_date_label"
                                      htmlFor="task_pane_due_date_input"
                                    >
                                      Due date
                                    </label>
                                  </div>
                                </div>
                                <div className="LabeledRowStructure-right">
                                  <div className="LabeledRowStructure-content">
                                    <div className="TaskPaneFields-dueDateContainer">
                                      <div className="TaskDueDateToken">
                                        <div
                                          id="task_pane_due_date_input"
                                          aria-describedby="task_pane_due_date_label"
                                          tabIndex={0}
                                          className="ThemeableCardPresentation--isValid ThemeableCardPresentation ThemeableInteractiveCardPresentation--isNotSelected ThemeableInteractiveCardPresentation--isEnabled ThemeableInteractiveCardPresentation SubtleButtonCard SubtleTokenButton--empty SubtleTokenButton--editable SubtleTokenButton--withoutRemoveButton SubtleTokenButton--subtle SubtleTokenButton DueDateTokenButton--empty DueDateTokenButton--editable DueDateTokenButton--future DueDateTokenButton TaskDueDateToken-tokenButton TaskDueDateToken--future"
                                          aria-expanded="false"
                                          aria-disabled="false"
                                          role="button"
                                        >
                                          <div className="SubtleTokenButton-leftIcon">
                                            <div className="PlaceholderAvatar PlaceholderAvatar--medium DueDateTokenButton-emptyIcon">
                                              <svg
                                                className="Icon CalendarIcon"
                                                viewBox="0 0 32 32"
                                                aria-hidden="true"
                                                focusable="false"
                                              >
                                                <path d="M24,2V1c0-0.6-0.4-1-1-1s-1,0.4-1,1v1H10V1c0-0.6-0.4-1-1-1S8,0.4,8,1v1C4.7,2,2,4.7,2,8v16c0,3.3,2.7,6,6,6h16c3.3,0,6-2.7,6-6V8C30,4.7,27.3,2,24,2z M8,4v1c0,0.6,0.4,1,1,1s1-0.4,1-1V4h12v1c0,0.6,0.4,1,1,1s1-0.4,1-1V4c2.2,0,4,1.8,4,4v2H4V8C4,5.8,5.8,4,8,4z M24,28H8c-2.2,0-4-1.8-4-4V12h24v12C28,26.2,26.2,28,24,28z" />
                                              </svg>
                                            </div>
                                          </div>
                                          <span className="Typography Typography--overflowTruncate DueDateTokenButton-label">
                                            No due date
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="LabeledRowStructure TaskProjects-labeledRowStructure">
                                <div
                                  className="LabeledRowStructure-left"
                                  style={{ width: 120 }}
                                >
                                  <div className="LabeledRowStructure-labelContainer">
                                    <label
                                      className="LabeledRowStructure-label"
                                      id="task_pane_projects_label"
                                      htmlFor="task_pane_projects_input"
                                    >
                                      Projects
                                    </label>
                                  </div>
                                </div>
                                <div className="LabeledRowStructure-right">
                                  <div className="LabeledRowStructure-content">
                                    <div className="TaskProjects">
                                      <div className="TaskProjects-projects">
                                        <ul
                                          className="TaskProjects-projectList"
                                          aria-live="polite"
                                          aria-labelledby="task_pane_projects_label"
                                        >
                                          <li
                                            className="TaskProjectToken TaskProjectToken--isEditable TaskProjects-project"
                                            aria-atomic="true"
                                          >
                                            <a
                                              id="task_pane_projects_input1205343526438001"
                                              href="https://app.asana.com/0/1205343526438001/1205359926801974"
                                              className="PotTokenizerPill TaskProjectToken-potTokenizerPill BaseLink"
                                            >
                                              <div className="Pill--clickable Pill--plaintext Pill--truncated Pill Pill--medium PotTokenizerPill-pill">
                                                <span className="TokenizerPillBase-contents">
                                                  <svg
                                                    className="MiniIcon ColorFillIcon ColorFillIcon--colorAqua TokenizerPillBase-chip SmallSquircleMiniIcon"
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                    focusable="false"
                                                  >
                                                    <path d="M10.4,4h3.2c2.2,0,3,0.2,3.9,0.7c0.8,0.4,1.5,1.1,1.9,1.9s0.7,1.6,0.7,3.9v3.2c0,2.2-0.2,3-0.7,3.9c-0.4,0.8-1.1,1.5-1.9,1.9s-1.6,0.7-3.9,0.7h-3.2c-2.2,0-3-0.2-3.9-0.7c-0.8-0.4-1.5-1.1-1.9-1.9c-0.4-1-0.6-1.8-0.6-4v-3.2c0-2.2,0.2-3,0.7-3.9C5.1,5.7,5.8,5,6.6,4.6C7.4,4.2,8.2,4,10.4,4z" />
                                                  </svg>
                                                  <span className="TokenizerPillBase-name">
                                                    Cross-functional project
                                                    plan
                                                  </span>
                                                </span>
                                              </div>
                                            </a>
                                            <div
                                              aria-expanded="false"
                                              aria-haspopup="listbox"
                                              className="ThemeableRectangularButtonPresentation--isEnabled ThemeableRectangularButtonPresentation ThemeableRectangularButtonPresentation--medium SubtleButton--standardTheme SubtleButton TaskPotColumnMenuButton-dropdownButton"
                                              role="button"
                                              tabIndex={0}
                                            >
                                              <span className="Typography Typography--overflowTruncate Typography--s">
                                                sasasjbj
                                              </span>
                                              <svg
                                                className="MiniIcon ThemeableRectangularButtonPresentation-rightIcon ArrowDownMiniIcon"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                                focusable="false"
                                              >
                                                <path d="M3.5,8.9c0-0.4,0.1-0.7,0.4-1C4.5,7.3,5.4,7.2,6,7.8l5.8,5.2l6.1-5.2C18.5,7.3,19.5,7.3,20,8c0.6,0.6,0.5,1.5-0.1,2.1 l-7.1,6.1c-0.6,0.5-1.4,0.5-2,0L4,10.1C3.6,9.8,3.5,9.4,3.5,8.9z" />
                                              </svg>
                                            </div>
                                            <div className="TaskProjectTokenButtonsContainer">
                                              <div
                                                tabIndex={0}
                                                aria-label="Remove task from Cross-functional project plan"
                                                role="button"
                                                className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconButton--standardTheme SubtleIconButton TaskProjectTokenButton TaskProjectTokenButtonsContainer-removeButton"
                                                aria-disabled="false"
                                              >
                                                <svg
                                                  className="MiniIcon--small MiniIcon XThickMiniIcon"
                                                  viewBox="0 0 24 24"
                                                  aria-hidden="true"
                                                  focusable="false"
                                                >
                                                  <path d="M14.5,12l6-6C20.8,5.7,21,5.2,21,4.8s-0.2-0.9-0.5-1.2C20.1,3.2,19.7,3,19.2,3S18.3,3.2,18,3.5l-6,6l-6-6 C5.7,3.2,5.2,3,4.8,3S3.9,3.2,3.5,3.5C3.2,3.9,3,4.3,3,4.8S3.2,5.7,3.5,6l6,6l-6,6c-0.7,0.7-0.7,1.8,0,2.5C3.9,20.8,4.3,21,4.8,21 s0.9-0.2,1.2-0.5l6-6l6,6c0.3,0.3,0.8,0.5,1.2,0.5s0.9-0.2,1.2-0.5c0.7-0.7,0.7-1.8,0-2.5L14.5,12z" />
                                                </svg>
                                              </div>
                                            </div>
                                          </li>
                                        </ul>
                                        <div
                                          aria-label="Add to projects"
                                          tabIndex={0}
                                          className="ThemeableRectangularButtonPresentation--isEnabled ThemeableRectangularButtonPresentation ThemeableRectangularButtonPresentation--medium SubtleButton--standardTheme SubtleButton TaskProjects-addToProjects"
                                          aria-disabled="false"
                                          role="button"
                                        >
                                          Add to projects
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="LabeledRowStructure TaskDependencies-labeledRowStructure">
                                <div
                                  className="LabeledRowStructure-left"
                                  style={{ width: 120 }}
                                >
                                  <div className="LabeledRowStructure-labelContainer">
                                    <label className="LabeledRowStructure-label">
                                      Dependencies
                                    </label>
                                  </div>
                                </div>
                                <div className="LabeledRowStructure-right">
                                  <div className="LabeledRowStructure-content">
                                    <div className="TaskDependencies-contents">
                                      <div
                                        className="ThemeableRectangularButtonPresentation--isEnabled ThemeableRectangularButtonPresentation ThemeableRectangularButtonPresentation--medium SubtleButton--standardTheme SubtleButton TaskDependencies-noDependenciesClickable"
                                        aria-disabled="false"
                                        role="button"
                                        tabIndex={0}
                                      >
                                        Add dependencies
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="LabeledRowStructure">
                                <div
                                  className="LabeledRowStructure-left"
                                  style={{ width: 120 }}
                                >
                                  <div className="LabeledRowStructure-labelContainer">
                                    <label
                                      className="LabeledRowStructure-label CustomPropertyRow-label"
                                      id="CustomPropertyRow-label1205343526438006"
                                      htmlFor="CustomPropertyRow-field1205343526438006"
                                    >
                                      <svg
                                        className="MiniIcon CustomPropertyTypeIconManager-icon CustomPropertyTypeIconManager-miniIcon CustomPropertyRow-icon DropdownMiniIcon"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        focusable="false"
                                      >
                                        <path d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Zm5.21-12a1,1,0,0,1,0,1.42L12.71,16a1,1,0,0,1-1.42,0l-4.5-4.5A1,1,0,1,1,8.21,10L12,13.84,15.79,10A1,1,0,0,1,17.21,10Z" />
                                      </svg>
                                      <span className="Typography Typography--overflowTruncate Typography--s">
                                        Priority
                                      </span>
                                    </label>
                                  </div>
                                </div>
                                <div className="LabeledRowStructure-right">
                                  <div className="LabeledRowStructure-content">
                                    <div className="TaskPaneCustomPropertyField-inputContent">
                                      <div
                                        id="CustomPropertyRow-field1205343526438006"
                                        className="CustomPropertyEnumValueInput-button--medium CustomPropertyEnumValueInput-button--subtle CustomPropertyEnumValueInput-button CustomPropertyEnumValueInput--empty CustomPropertyEnumValueInput--editable CustomPropertyEnumValueInput TaskPaneCustomPropertyField-enumField"
                                        tabIndex={0}
                                        aria-describedby="CustomPropertyRow-label1205343526438006"
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
                                </div>
                              </div>
                              <div className="LabeledRowStructure">
                                <div
                                  className="LabeledRowStructure-left"
                                  style={{ width: 120 }}
                                >
                                  <div className="LabeledRowStructure-labelContainer">
                                    <label
                                      className="LabeledRowStructure-label CustomPropertyRow-label"
                                      id="CustomPropertyRow-label1205343530602587"
                                      htmlFor="CustomPropertyRow-field1205343530602587"
                                    >
                                      <svg
                                        className="MiniIcon CustomPropertyTypeIconManager-icon CustomPropertyTypeIconManager-miniIcon CustomPropertyRow-icon DropdownMiniIcon"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        focusable="false"
                                      >
                                        <path d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10,10,0,0,1,12,22Zm5.21-12a1,1,0,0,1,0,1.42L12.71,16a1,1,0,0,1-1.42,0l-4.5-4.5A1,1,0,1,1,8.21,10L12,13.84,15.79,10A1,1,0,0,1,17.21,10Z" />
                                      </svg>
                                      <span className="Typography Typography--overflowTruncate Typography--s">
                                        Status
                                      </span>
                                    </label>
                                  </div>
                                </div>
                                <div className="LabeledRowStructure-right">
                                  <div className="LabeledRowStructure-content">
                                    <div className="TaskPaneCustomPropertyField-inputContent">
                                      <div
                                        id="CustomPropertyRow-field1205343530602587"
                                        className="CustomPropertyEnumValueInput-button--medium CustomPropertyEnumValueInput-button--subtle CustomPropertyEnumValueInput-button CustomPropertyEnumValueInput--empty CustomPropertyEnumValueInput--editable CustomPropertyEnumValueInput TaskPaneCustomPropertyField-enumField"
                                        tabIndex={0}
                                        aria-describedby="CustomPropertyRow-label1205343530602587"
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
                                </div>
                              </div>
                              <div>
                                <div className="LabeledRowStructure TaskPaneFields-taskDescription">
                                  <div
                                    className="LabeledRowStructure-left"
                                    style={{ width: 120 }}
                                  >
                                    <div className="LabeledRowStructure-labelContainer">
                                      <label className="LabeledRowStructure-label">
                                        Description
                                      </label>
                                    </div>
                                  </div>
                                  <div className="LabeledRowStructure-right">
                                    <div className="LabeledRowStructure-content" />
                                  </div>
                                </div>
                                <div className="TaskDescription TaskDescription--alignedWithLabel">
                                  <div
                                    id="TaskDescriptionView"
                                    className="TextEditor3--withDraggableContent TaskDescription-largeEmptyState TaskDescription-textEditor3 TextEditor3"
                                  >
                                    <input
                                      id="TextEditor3-fileInput--EditingToolbar-0"
                                      className="TextEditor3-hiddenFileInput"
                                      multiple=""
                                      tabIndex={-1}
                                      type="file"
                                      accept="image/gif,image/png,image/jpeg,image/bmp"
                                    />
                                    <input
                                      id="TextEditor3-fileInput--InsertElementMenu-0"
                                      className="TextEditor3-hiddenFileInput"
                                      multiple=""
                                      tabIndex={-1}
                                      type="file"
                                      accept="image/gif,image/png,image/jpeg,image/bmp"
                                    />
                                    <input
                                      id="TextEditor3-fileInput--InsertElementMenuFromSlashCommand-0"
                                      className="TextEditor3-hiddenFileInput"
                                      multiple=""
                                      tabIndex={-1}
                                      type="file"
                                      accept="image/gif,image/png,image/jpeg,image/bmp"
                                    />
                                    <input
                                      id="TextEditor3-fileInput--FixedToolbar-0"
                                      className="TextEditor3-hiddenFileInput"
                                      multiple=""
                                      tabIndex={-1}
                                      type="file"
                                      accept="image/gif,image/png,image/jpeg,image/bmp"
                                    />
                                    <div className="TextEditor3-placeholderWrapper">
                                      <div className="Typography Typography--colorWeak Typography--overflowTruncate Typography--m TextEditor3-placeholder">
                                        What is this task about?
                                      </div>
                                    </div>
                                    <div
                                      className="ProsemirrorEditor--withDraggableContent ProsemirrorEditor--withParagraphVSpacingNormal ProsemirrorEditor--withHeader1VSpacingNormal ProsemirrorEditor--withHeader2VSpacingNormal ProsemirrorEditor--withInlineAssetNormal ProsemirrorEditor--withTableVSpacingNormal ProsemirrorEditor--withHorizontalRuleVSpacingNormal ProsemirrorEditor--withProjectEmbedVSpacingNormal ProsemirrorEditor TextEditor3-prosemirrorEditor ProseMirror"
                                      tabIndex={0}
                                      role="document"
                                      aria-label="Description"
                                      contentEditable="true"
                                      translate="no"
                                    >
                                      <p className="ProsemirrorEditor-paragraph">
                                        <br className="ProseMirror-trailingBreak" />
                                      </p>
                                    </div>
                                    <div className="TextEditorNewBlockWhitespace" />
                                    <div className="TextEditorFixedToolbar--pinned TextEditorFixedToolbar--hidden TextEditorFixedToolbar--isSticky TaskDescription-textEditorFixedToolbar TextEditorFixedToolbar">
                                      <div
                                        aria-label="Insert an object"
                                        tabIndex={-1}
                                        aria-controls="lui_5514"
                                        aria-expanded="false"
                                        id="lui_5513"
                                        className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconButton--standardTheme SubtleIconButton DesignTokenThemeSelectors-deprecatedComponent TextEditorFixedToolbar-button DesignTokenThemeSelectors-deprecatedComponent"
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
                                      <div className="TextEditorFixedToolbar-divider" />
                                      <div
                                        aria-label="Bold"
                                        aria-pressed="false"
                                        tabIndex={-1}
                                        className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconToggleButton--isNotPressed SubtleIconToggleButton--standardTheme SubtleIconToggleButton TextEditor3ToolbarButton TextEditorFixedToolbar-button"
                                        role="button"
                                      >
                                        <svg
                                          className="MiniIcon BoldMiniIcon"
                                          viewBox="0 0 24 24"
                                          aria-hidden="true"
                                          focusable="false"
                                        >
                                          <path d="M18.9,11.2c0.9-1.2,1.4-2.6,1.4-4.2c0-3.9-3.1-7-7-7H2C0.9,0,0,0.9,0,2v8v4v8c0,1.1,0.9,2,2,2h13  c3.9,0,7-3.1,7-7C22,14.6,20.8,12.4,18.9,11.2z M3,10V3h10.2c2.2,0,4,1.8,4,4c0,1.2-0.8,3-2.5,3H3z M15,21H3v-8h12  c0.5,0,0.9,0.1,1.4,0.3c1.5,0.6,2.6,2,2.6,3.7C19,19.2,17.2,21,15,21z" />
                                        </svg>
                                      </div>
                                      <div
                                        aria-label="Italics"
                                        aria-pressed="false"
                                        tabIndex={-1}
                                        className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconToggleButton--isNotPressed SubtleIconToggleButton--standardTheme SubtleIconToggleButton TextEditor3ToolbarButton TextEditorFixedToolbar-button"
                                        role="button"
                                      >
                                        <svg
                                          className="MiniIcon ItalicsMiniIcon"
                                          viewBox="0 0 24 24"
                                          aria-hidden="true"
                                          focusable="false"
                                        >
                                          <path d="M18,0h-8C9.4,0,8.9,0.5,8.9,1.1S9.4,2.2,10,2.2h2.7L9.1,21.8H6c-0.6,0-1.1,0.5-1.1,1.1S5.4,24,6,24h4  c0,0,0,0,0,0c0,0,0,0,0,0h4c0.6,0,1.1-0.5,1.1-1.1s-0.5-1.1-1.1-1.1h-2.7l3.6-19.7H18c0.6,0,1.1-0.5,1.1-1.1S18.6,0,18,0z" />
                                        </svg>
                                      </div>
                                      <div
                                        aria-label="Underline"
                                        aria-pressed="false"
                                        tabIndex={-1}
                                        className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconToggleButton--isNotPressed SubtleIconToggleButton--standardTheme SubtleIconToggleButton TextEditor3ToolbarButton TextEditorFixedToolbar-button"
                                        role="button"
                                      >
                                        <svg
                                          className="MiniIcon UnderlineMiniIcon"
                                          viewBox="0 0 24 24"
                                          aria-hidden="true"
                                          focusable="false"
                                        >
                                          <path d="M22,24H2c-0.6,0-1-0.4-1-1s0.4-1,1-1h20c0.6,0,1,0.4,1,1S22.6,24,22,24z M22,9V1c0-0.6-0.4-1-1-1s-1,0.4-1,1v8c0,4.4-3.6,8-8,8s-8-3.6-8-8V1c0-0.6-0.4-1-1-1S2,0.4,2,1v8c0,5.5,4.5,10,10,10S22,14.5,22,9z" />
                                        </svg>
                                      </div>
                                      <div
                                        aria-label="Strikethrough"
                                        aria-pressed="false"
                                        tabIndex={-1}
                                        className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconToggleButton--isNotPressed SubtleIconToggleButton--standardTheme SubtleIconToggleButton TextEditor3ToolbarButton TextEditorFixedToolbar-button"
                                        role="button"
                                      >
                                        <svg
                                          className="MiniIcon StrikethroughMiniIcon"
                                          viewBox="0 0 24 24"
                                          aria-hidden="true"
                                          focusable="false"
                                        >
                                          <path d="M23,10H9.3C7.5,9.3,6.6,8.2,6.6,6.5C6.6,3.7,9.4,2,11.9,2c3.3,0,4.8,2.1,5.4,3.5C17.5,6,18,6.2,18.5,6.1h0.1c0.6-0.1,0.9-0.7,0.7-1.3C18.5,2.6,16.1,0,12,0C8.4,0,4.5,2.5,4.5,6.5c0,1.4,0.4,2.6,1.2,3.5H1c-0.6,0-1,0.4-1,1s0.4,1,1,1h22c0.6,0,1-0.4,1-1S23.6,10,23,10z M16,14c1,0.7,1.8,1.7,1.8,3.3c0,3.1-2.8,4.7-5.6,4.7c-3.3,0-5.3-2.1-6-4.4C6,17.1,5.5,16.7,5,16.9c-0.6,0.1-1,0.7-0.8,1.3c0.9,3,3.7,5.8,8,5.8c4.4,0,7.8-2.9,7.8-6.7c0-1.3-0.4-2.4-1-3.3C19,14,16,14,16,14z" />
                                        </svg>
                                      </div>
                                      <div
                                        aria-label="Code"
                                        aria-pressed="false"
                                        tabIndex={-1}
                                        className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconToggleButton--isNotPressed SubtleIconToggleButton--standardTheme SubtleIconToggleButton TextEditor3ToolbarButton TextEditorFixedToolbar-button"
                                        role="button"
                                      >
                                        <svg
                                          className="MiniIcon CsvFileEncodingDropdownIcon"
                                          viewBox="0 0 24 24"
                                          aria-hidden="true"
                                          focusable="false"
                                        >
                                          <path d="M16.8,19.4c-0.4,0-0.6-0.1-0.9-0.4c-0.5-0.5-0.6-1.3-0.1-1.9l4.6-5.1l-4.6-5.4c-0.4-0.5-0.4-1.4,0.2-1.9c0.5-0.5,1.3-0.4,1.9,0.1l5.4,6.3c0.4,0.5,0.4,1.2,0,1.8l-5.4,6C17.6,19.3,17.2,19.4,16.8,19.4z M6.1,19l-5.4-6c-0.4-0.5-0.4-1.2,0-1.8l5.4-6.3C6.6,4.4,7.4,4.3,8,4.9c0.6,0.4,0.6,1.3,0.2,1.9l-4.6,5.4l4.6,5.1C8.7,17.7,8.6,18.5,8,19c-0.3,0.3-0.5,0.4-0.9,0.4C6.7,19.4,6.4,19.3,6.1,19z" />
                                        </svg>
                                      </div>
                                      <div
                                        aria-label="Bulleted List"
                                        aria-pressed="false"
                                        tabIndex={-1}
                                        className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconToggleButton--isNotPressed SubtleIconToggleButton--standardTheme SubtleIconToggleButton TextEditor3ToolbarButton TextEditorFixedToolbar-button"
                                        role="button"
                                      >
                                        <svg
                                          className="MiniIcon BulletedListMiniIcon"
                                          viewBox="0 0 24 24"
                                          aria-hidden="true"
                                          focusable="false"
                                        >
                                          <path d="M4,3c0,1.1-0.9,2-2,2S0,4.1,0,3s0.9-2,2-2S4,1.9,4,3z M2,9c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S3.1,9,2,9z M2,17c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S3.1,17,2,17z M24,19c0-0.6-0.4-1-1-1H8c-0.6,0-1,0.4-1,1s0.4,1,1,1h15C23.6,20,24,19.6,24,19z M24,11c0-0.6-0.4-1-1-1H8c-0.6,0-1,0.4-1,1s0.4,1,1,1h15C23.6,12,24,11.6,24,11z M24,3c0-0.6-0.4-1-1-1H8C7.4,2,7,2.4,7,3s0.4,1,1,1h15C23.6,4,24,3.6,24,3z" />
                                        </svg>
                                      </div>
                                      <div
                                        aria-label="Numbered List"
                                        aria-pressed="false"
                                        tabIndex={-1}
                                        className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconToggleButton--isNotPressed SubtleIconToggleButton--standardTheme SubtleIconToggleButton TextEditor3ToolbarButton TextEditorFixedToolbar-button"
                                        role="button"
                                      >
                                        <svg
                                          className="MiniIcon NumberedListMiniIcon"
                                          viewBox="0 0 24 24"
                                          aria-hidden="true"
                                          focusable="false"
                                        >
                                          <path d="M23,20H10c-0.6,0-1-0.4-1-1s0.4-1,1-1h13c0.6,0,1,0.4,1,1S23.6,20,23,20z M24,11c0-0.6-0.4-1-1-1H10c-0.6,0-1,0.4-1,1s0.4,1,1,1h13C23.6,12,24,11.6,24,11z M24,3c0-0.6-0.4-1-1-1H10C9.4,2,9,2.4,9,3s0.4,1,1,1h13C23.6,4,24,3.6,24,3z M2.9,2.1V10h1.8V0L3.1,0L0,1.9l0.9,1.4L2.9,2.1z M6.4,20.5H2c0.2-0.5,0.8-0.9,1.1-1.1l1.6-0.9c1-0.6,1.7-1.6,1.7-2.7c0-1.4-1.1-2.8-3.1-2.8c-1,0-1.8,0.3-2.3,0.9c-0.5,0.5-0.8,1.3-0.8,2l0,0.1l1.7,0.2v-0.2c0-0.3,0-0.6,0.1-0.8c0.3-0.5,0.7-0.8,1.3-0.8c0.9,0,1.4,0.7,1.4,1.3c0,0.8-0.5,1.2-1.2,1.6l-1.3,0.8c-1.8,1-2.1,2.3-2.1,3.2V22h6.4V20.5z" />
                                        </svg>
                                      </div>
                                      <div
                                        aria-label="Link"
                                        aria-pressed="false"
                                        tabIndex={-1}
                                        className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconToggleButton--isNotPressed SubtleIconToggleButton--standardTheme SubtleIconToggleButton TextEditor3ToolbarButton TextEditorFixedToolbar-button"
                                        role="button"
                                      >
                                        <svg
                                          className="MiniIcon LinkMiniIcon"
                                          viewBox="0 0 24 24"
                                          aria-hidden="true"
                                          focusable="false"
                                        >
                                          <path d="M6.867,24A6.867,6.867,0,0,1,2.011,12.278L4.945,9.345a1,1,0,1,1,1.414,1.414L3.425,13.692a4.867,4.867,0,1,0,6.883,6.882l2.933-2.932a4.872,4.872,0,0,0,0-6.883,4.811,4.811,0,0,0-2-1.208,1,1,0,0,1,.59-1.911,6.87,6.87,0,0,1,2.822,11.416l-2.933,2.932A6.817,6.817,0,0,1,6.867,24Zm6.55-8.3a1,1,0,0,0-.66-1.25,4.869,4.869,0,0,1-2-8.09l2.932-2.934a4.867,4.867,0,1,1,6.883,6.883l-2.932,2.933a1,1,0,1,0,1.414,1.414l2.932-2.933a6.866,6.866,0,0,0-9.71-9.711L9.345,4.945a6.866,6.866,0,0,0,2.822,11.414.974.974,0,0,0,.295.045A1,1,0,0,0,13.417,15.7Z" />
                                        </svg>
                                      </div>
                                      <div className="TextEditorFixedToolbar-divider" />
                                      <div className="TextEditorToolbarButton RecordVideoButton TextEditorFixedToolbar-button">
                                        <div
                                          aria-label="Record a video"
                                          tabIndex={-1}
                                          className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconButton--standardTheme SubtleIconButton TextEditorToolbarButton-anchor"
                                          aria-disabled="false"
                                          role="button"
                                        >
                                          <svg
                                            className="Icon RecordingIcon"
                                            viewBox="0 0 32 32"
                                            aria-hidden="true"
                                            focusable="false"
                                          >
                                            <path d="M16,0C7.2,0,0,7.2,0,16s7.2,16,16,16s16-7.2,16-16S24.8,0,16,0z M16,30C8.3,30,2,23.7,2,16C2,8.3,8.3,2,16,2s14,6.3,14,14C30,23.7,23.7,30,16,30z M24,16c0,4.4-3.6,8-8,8s-8-3.6-8-8s3.6-8,8-8S24,11.6,24,16z" />
                                          </svg>
                                        </div>
                                      </div>
                                      <div className="TextEditorToolbarButton TextEditorFixedToolbar-button">
                                        <div
                                          aria-label="Emoji"
                                          aria-expanded="false"
                                          tabIndex={-1}
                                          className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconButton--standardTheme SubtleIconButton TextEditorToolbarButton-anchor"
                                          role="button"
                                        >
                                          <svg
                                            className="Icon EmojiIcon"
                                            viewBox="0 0 32 32"
                                            aria-hidden="true"
                                            focusable="false"
                                          >
                                            <path d="M16,0 C7.17582609,0 0,7.17585739 0,16 C0,24.8241739 7.17582609,32 16,32 C24.8241739,32 32,24.8241739 32,16 C32,7.17585739 24.8241739,0 16,0 Z M16,2.08695652 C23.696313,2.08695652 29.9130435,8.30372174 29.9130435,16 C29.9130435,23.696313 23.696313,29.9130435 16,29.9130435 C8.30368696,29.9130435 2.08695652,23.696313 2.08695652,16 C2.08695652,8.30372174 8.30368696,2.08695652 16,2.08695652 Z M10.4347826,9.04347826 C9.09005217,9.04347826 8,10.1335652 8,11.4782609 C8,12.8229565 9.09005217,13.9130435 10.4347826,13.9130435 C11.7794748,13.9130435 12.8695652,12.8229565 12.8695652,11.4782609 C12.8695652,10.1335652 11.7794748,9.04347826 10.4347826,9.04347826 Z M21.5652174,9.04347826 C20.220487,9.04347826 19.1304348,10.1335652 19.1304348,11.4782609 C19.1304348,12.8229565 20.220487,13.9130435 21.5652174,13.9130435 C22.909913,13.9130435 24,12.8229565 24,11.4782609 C24,10.1335652 22.909913,9.04347826 21.5652174,9.04347826 Z M8.23913043,19.1304348 C7.90384696,19.149913 7.59775652,19.3392696 7.41304348,19.673913 C7.23693913,20.0104696 7.26069565,20.4386435 7.47826087,20.7499826 C9.34351304,23.5401739 12.4683478,25.3913043 16,25.3913043 C19.5316522,25.3913043 22.656487,23.5401739 24.5217391,20.7499826 C24.8262261,20.294713 24.6944348,19.6088348 24.2391304,19.3043478 C23.7838261,18.9998609 23.0870957,19.1316522 22.7826087,19.5869565 C21.2761043,21.840487 18.8063652,23.3043478 16,23.3043478 C13.1936348,23.3043478 10.7238957,21.840487 9.2173913,19.5869565 C8.93488696,19.2555478 8.57441391,19.1108522 8.23913043,19.1304348 Z M8.23913043,19.1304348 C7.90384696,19.149913 7.59775652,19.3392696 7.41304348,19.673913 C7.23693913,20.0104696 7.26069565,20.4386435 7.47826087,20.7499826 C9.34351304,23.5401739 12.4683478,25.3913043 16,25.3913043 C19.5316522,25.3913043 22.656487,23.5401739 24.5217391,20.7499826 C24.8262261,20.294713 24.6944348,19.6088348 24.2391304,19.3043478 C23.7838261,18.9998609 23.0870957,19.1316522 22.7826087,19.5869565 C21.2761043,21.840487 18.8063652,23.3043478 16,23.3043478 C13.1936348,23.3043478 10.7238957,21.840487 9.2173913,19.5869565 C8.93488696,19.2555478 8.57441391,19.1108522 8.23913043,19.1304348 Z" />
                                          </svg>
                                        </div>
                                      </div>
                                      <div
                                        aria-label="At-Mention"
                                        tabIndex={-1}
                                        className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconButton--standardTheme SubtleIconButton TextEditor3ToolbarButton TextEditorFixedToolbar-atMentionButton TextEditorFixedToolbar-button"
                                        role="button"
                                      >
                                        <svg
                                          className="Icon AtMentionIcon"
                                          viewBox="0 0 32 32"
                                          aria-hidden="true"
                                          focusable="false"
                                        >
                                          <path d="M16,0C7.2,0,0,7.2,0,16s7.2,16,16,16c3.7,0,7.3-1.3,10.1-3.6c0.4-0.3,0.5-1,0.1-1.4c-0.3-0.4-1-0.5-1.4-0.1c-2.5,2-5.6,3.1-8.8,3.1C8.3,30,2,23.7,2,16S8.3,2,16,2s14,6.3,14,14v1.5c0,1.9-1.6,3.5-3.5,3.5S23,19.4,23,17.5V16c0-3.9-3.1-7-7-7s-7,3.1-7,7s3.1,7,7,7c2.3,0,4.4-1.1,5.7-2.9c0.9,1.7,2.8,2.9,4.8,2.9c3,0,5.5-2.5,5.5-5.5V16C32,7.2,24.8,0,16,0z M16,21c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S18.8,21,16,21z" />
                                        </svg>
                                      </div>
                                    </div>
                                    <div className="TextEditor3-borderBox--withBorderOnFocus TextEditor3-borderBox--withBorderOnHover TextEditor3-borderBox" />
                                    <div
                                      className="PmPlaceholders-focusedEmptyTextContainerPlaceholderWrapper"
                                      style={{ display: "none" }}
                                    >
                                      <div className="Typography Typography--colorDisabled Typography--m">
                                        Type / for menu
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="TaskPaneSubtasks">
                            <div
                              role="grid"
                              tabIndex={-1}
                              className="TaskPaneSubtasks-grid"
                            >
                              <div className="SubtaskGrid SubtaskGrid--empty TaskPane-subtaskGrid" />
                            </div>
                          </div>
                          <div className="DropTargetAddSubtaskButton TaskPane-addSubtaskButton">
                            <div className="AddSubtaskButton-secondary AddSubtaskButton DropTargetAddSubtaskButton-button">
                              {" "}
                              <div className="ButtonTrain">
                                <div className="ButtonTrain-item">
                                  <div
                                    className="ThemeableRectangularButtonPresentation--isEnabled ThemeableRectangularButtonPresentation ThemeableRectangularButtonPresentation--medium SecondaryButton--standardTheme SecondaryButton"
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
                                    Add subtask
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="TaskPane-feed TaskPane-feed--notIE TaskPane-feed--everyoneTab">
                            <div className="TaskStoryFeed">
                              <div
                                aria-expanded="false"
                                aria-haspopup="listbox"
                                aria-label="Comments"
                                className="ThemeableRectangularButtonPresentation--isEnabled ThemeableRectangularButtonPresentation ThemeableRectangularButtonPresentation--large SubtleButton--standardTheme SubtleButton TaskStoryFeed-dropdownButton"
                                aria-disabled="false"
                                role="button"
                                tabIndex={0}
                              >
                                Comments
                                <svg
                                  className="MiniIcon ThemeableRectangularButtonPresentation-rightIcon ArrowDownMiniIcon"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                  focusable="false"
                                >
                                  <path d="M3.5,8.9c0-0.4,0.1-0.7,0.4-1C4.5,7.3,5.4,7.2,6,7.8l5.8,5.2l6.1-5.2C18.5,7.3,19.5,7.3,20,8c0.6,0.6,0.5,1.5-0.1,2.1 l-7.1,6.1c-0.6,0.5-1.4,0.5-2,0L4,10.1C3.6,9.8,3.5,9.4,3.5,8.9z" />
                                </svg>
                              </div>
                              <div className="BlockStoryStructure BlockStory--isOneLine BlockStory TaskCreationBlockStory TaskStoryFeed-blockStory TaskStoryFeed-taskCreationStory">
                                <div className="BlockStoryStructure-icon">
                                  <div
                                    aria-label="Open user profile"
                                    className="AvatarButton--standardTheme AvatarButton AvatarButton--sizeMedium DomainUserAvatarButton"
                                    role="button"
                                    tabIndex={0}
                                  >
                                    <div
                                      className="DomainUserAvatarButton-avatar Avatar AvatarPhoto AvatarPhoto--default AvatarPhoto--medium AvatarPhoto--color6"
                                      aria-hidden="true"
                                    >
                                      <div className="AvatarPhoto-image" />
                                      Ay
                                    </div>
                                  </div>
                                </div>
                                <div className="BlockStoryStructure-block">
                                  <div className="BlockStoryStructure-header">
                                    <div className="BlockStory-headerContent">
                                      <span className="Typography Typography--m Typography--fontWeightMedium BlockStory-actorName">
                                        <a
                                          href="https://app.asana.com/0/profile/1205343515337740"
                                          className="HiddenNavigationLink DomainUserNavigationLink BaseLink"
                                        >
                                          Ayush
                                        </a>
                                      </span>{" "}
                                      <span className="Typography Typography--colorWeak Typography--m Typography--fontWeightMedium">
                                        created this task.
                                      </span>
                                      <span className="BlockStory-metadata">
                                        <span className="BlockStory-timestamp">
                                          <span>2 days ago</span>
                                        </span>
                                      </span>
                                    </div>
                                    <div className="BlockStoryStructure-heartButton" />
                                  </div>
                                  <div className="BlockStoryStructure-body" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="UploadDropTargetAttachmentWrappingTextEditor-target">
                    <div className="UploadDropTargetAttachmentWrappingTextEditor-border UploadDropTargetAttachmentWrappingTextEditor-border--enabled" />
                  </div>
                </div>
                <div className="TaskPane-footer">
                  <div className="CommentComposer CommentComposer--allowResizeOnBlur TaskPane-commentComposer">
                    <div
                      aria-label="Open user profile"
                      className="AvatarButton--standardTheme AvatarButton AvatarButton--sizeMedium DomainUserAvatarButton CommentComposer-avatar"
                      role="button"
                      tabIndex={0}
                    >
                      <div
                        className="DomainUserAvatarButton-avatar Avatar AvatarPhoto AvatarPhoto--default AvatarPhoto--medium AvatarPhoto--color6"
                        aria-hidden="true"
                      >
                        <div className="AvatarPhoto-image" />
                        Ay
                      </div>
                    </div>
                    <div className="CommentComposerEditor CommentComposer-commentComposer">
                      <div
                        className="Scrollable--withCompositingLayer Scrollable Scrollable--vertical CommentComposerEditor-scrollable"
                        tabIndex={-1}
                        role="presentation"
                      >
                        <div className="CommentComposerEditor-textEditor TextEditor3">
                          <input
                            id="TextEditor3-fileInput--EditingToolbar-1"
                            className="TextEditor3-hiddenFileInput"
                            multiple=""
                            tabIndex={-1}
                            type="file"
                            accept="image/gif,image/png,image/jpeg,image/bmp"
                          />
                          <input
                            id="TextEditor3-fileInput--InsertElementMenu-1"
                            className="TextEditor3-hiddenFileInput"
                            multiple=""
                            tabIndex={-1}
                            type="file"
                            accept="image/gif,image/png,image/jpeg,image/bmp"
                          />
                          <input
                            id="TextEditor3-fileInput--InsertElementMenuFromSlashCommand-1"
                            className="TextEditor3-hiddenFileInput"
                            multiple=""
                            tabIndex={-1}
                            type="file"
                            accept="image/gif,image/png,image/jpeg,image/bmp"
                          />
                          <input
                            id="TextEditor3-fileInput--FixedToolbar-1"
                            className="TextEditor3-hiddenFileInput"
                            multiple=""
                            tabIndex={-1}
                            type="file"
                            accept="image/gif,image/png,image/jpeg,image/bmp"
                          />
                          <div className="TextEditor3-placeholderWrapper">
                            <div className="Typography Typography--colorWeak Typography--m TextEditor3-placeholder">
                              Add a comment
                            </div>
                          </div>
                          <div
                            className="ProsemirrorEditor--withParagraphVSpacingNormal ProsemirrorEditor--withHeader1VSpacingNormal ProsemirrorEditor--withHeader2VSpacingNormal ProsemirrorEditor--withInlineAssetNormal ProsemirrorEditor--withTableVSpacingNormal ProsemirrorEditor--withHorizontalRuleVSpacingNormal ProsemirrorEditor--withProjectEmbedVSpacingNormal ProsemirrorEditor TextEditor3-prosemirrorEditor ProseMirror"
                            tabIndex={0}
                            role="document"
                            aria-label="Edit comment"
                            contentEditable="true"
                            translate="no"
                          >
                            <p className="ProsemirrorEditor-paragraph">
                              <br className="ProseMirror-trailingBreak" />
                            </p>
                          </div>
                          <div className="TextEditor3-borderBox" />
                          <div
                            className="PmPlaceholders-focusedEmptyTextContainerPlaceholderWrapper"
                            style={{ display: "none" }}
                          >
                            <div className="Typography Typography--colorDisabled Typography--m">
                              Type / for menu
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="CommentComposerEditor-toolbar">
                        <div className="CommentComposerEditor-toolbarPortalContainer">
                          <div className="CommentComposerEditor-toolbarPortal" />
                          <div className="CommentComposerEditor-toolbarPortal" />
                        </div>
                        <div className="CommentComposerEditor-toolbarRight">
                          <div className="CommentComposerNotificationCount-notifiedFollowersText">
                            <span className="Typography Typography--colorWeak Typography--s Typography--textAlignLeft">
                              0 people will be notified
                            </span>
                          </div>
                          <div
                            tabIndex={0}
                            className="ThemeableRectangularButtonPresentation--isEnabled ThemeableRectangularButtonPresentation ThemeableRectangularButtonPresentation--large PrimaryButton--standardTheme PrimaryButton CommentComposerEditor-submitButton"
                            aria-disabled="false"
                            role="button"
                          >
                            Comment
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="FollowersBar TaskFollowers-followersList">
                    <div className="EditableFollowersRow FollowersBar-editableFollowersRow">
                      <div className="EditableFollowersRow-tabFocusCapturer" />
                      <label
                        className="FollowersLabel"
                        id="task_followers_label"
                        htmlFor="task_followers_input"
                      >
                        Collaborators
                      </label>
                      <div className="FollowersList EditableFollowersRow-followersList">
                        <div className="FollowersList-facepileAvatar">
                          <div className="RemovableAvatar">
                            <div
                              aria-label="Add or remove collaborators"
                              className="AvatarButton--standardTheme AvatarButton AvatarButton--sizeSmall"
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
                              aria-label="Remove"
                              className="RemoveButton--isEnabled RemoveButton RemovableAvatar-avatarRemoveButton RemoveButton--xsmall"
                              role="button"
                              tabIndex={0}
                            >
                              <svg
                                className="CompoundIcon--xsmall CompoundIcon XCircleCompoundIcon"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                focusable="false"
                              >
                                <path
                                  d="M23,12c0,6.1-4.9,11-11,11S1,18.1,1,12S5.9,1,12,1S23,5.9,23,12z"
                                  className="CompoundIcon-outer"
                                />
                                <path
                                  d="M13.4,12l4.3-4.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L12,10.6L7.7,6.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l4.3,4.3l-4.3,4.3c-0.4,0.4-0.4,1,0,1.4C6.5,17.9,6.7,18,7,18s0.5-0.1,0.7-0.3l4.3-4.3l4.3,4.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L13.4,12z"
                                  className="CompoundIcon-inner"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div
                          aria-label="Add or remove collaborators"
                          className="AvatarButton--standardTheme AvatarButton AvatarButton--sizeSmall DomainUserAvatarButton--noValue DomainUserAvatarButton FollowersList-placeholderAvatar"
                          role="button"
                          tabIndex={0}
                        >
                          <div className="PlaceholderAvatar PlaceholderAvatar--small DomainUserAvatarButton-placeholderAvatar">
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
                          aria-label="Add or remove collaborators"
                          className="AvatarButton--standardTheme AvatarButton AvatarButton--sizeSmall DomainUserAvatarButton--noValue DomainUserAvatarButton FollowersList-placeholderAvatar"
                          role="button"
                          tabIndex={0}
                        >
                          <div className="PlaceholderAvatar PlaceholderAvatar--small DomainUserAvatarButton-placeholderAvatar">
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
                          aria-label="Add or remove collaborators"
                          className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconButton--standardTheme SubtleIconButton FollowersList-addButton"
                          role="button"
                          tabIndex={0}
                        >
                          <svg
                            className="MiniIcon--small MiniIcon PlusMiniIcon"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <path d="M10,10V4c0-1.1,0.9-2,2-2s2,0.9,2,2v6h6c1.1,0,2,0.9,2,2s-0.9,2-2,2h-6v6c0,1.1-0.9,2-2,2s-2-0.9-2-2v-6H4c-1.1,0-2-0.9-2-2s0.9-2,2-2H10z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div
                      className="ThemeableRectangularButtonPresentation--isEnabled ThemeableRectangularButtonPresentation ThemeableRectangularButtonPresentation--large SubtleButton--standardTheme SubtleButton"
                      role="button"
                      tabIndex={0}
                    >
                      <svg
                        className="Icon--small Icon ThemeableRectangularButtonPresentation-leftIcon BellIcon"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M30,20.6c-1.3-1.1-2-2.7-2-4.4v-3.9C28,5.7,22.7,0.1,16.2,0C13,0,9.9,1.2,7.6,3.4C5.3,5.7,4,8.8,4,12v4.2  c0,1.7-0.7,3.3-2,4.4c-1,0.9-1.3,2.4-0.7,3.7c0.5,1,1.6,1.7,2.8,1.7h23.7c1.2,0,2.3-0.7,2.8-1.7C31.3,23,31,21.6,30,20.6z M20.3,28  h-8.5c-0.4,0-0.7,0.2-0.9,0.6s-0.1,0.8,0.1,1.1c0.7,0.8,2.6,2.4,5,2.4s4.3-1.5,5-2.4c0.2-0.3,0.3-0.7,0.1-1.1  C21,28.2,20.6,28,20.3,28z" />
                      </svg>
                      Leave task
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
