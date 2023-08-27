import React from "react";
import "./dropdown.css";

export default function DropDown({
  isCurrenltyEditing,
  setIsCurrentlyEditing,
  columnId,
  setCurrentColumnId,
  currentColumnName,
  setCurrentColumnName
}) {
  return (
    <div className="LayerPositioner-layer dropDown-body">
      <div className="ResizeListener">
        <div className="ResizeListener-expand">
          <div className="ResizeListener-expandChild" />
        </div>
        <div className="ResizeListener-shrink">
          <div className="ResizeListener-shrinkChild" />
        </div>
      </div>
      <div
        className="MenuStructure SectionOverflowDropdownMenuButton-menu ActionMenu"
        role="menu"
      >
        <div
          role="presentation"
          className="Scrollable--withCompositingLayer Scrollable Scrollable--vertical MenuStructure-scrollable"
          tabIndex={-1}
        >
          <div
            className="MenuItemA11y"
            role="menuitem"
            tabIndex={-1}
            label="Add rule to section"
            id="lui_414"
            aria-disabled="false"
          >
            <div className="ThemeableItemBackgroundStructure--isHighlighted ThemeableItemBackgroundStructure">
              <div className="LeftIconItemStructure--isHighlighted LeftIconItemStructure LeftIconItemStructure--alignCenter MenuItemA11y-content">
                <span className="LeftIconItemStructure-icon">
                  <svg
                    className="Icon AddAutomationIcon"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M18.5259148,3.84778339 L18.4912,3.98531 L15.9155,13.9999 L22.1756,13.9999 C23.9049941,13.9999 24.7965365,16.0293401 23.6954228,17.3007802 L23.5898,17.4142 L10.0257,29.9782 C8.60031767,31.4035628 6.23468233,30.0642443 6.65375972,28.1521246 L6.68848,28.0146 L9.26408,17.9999 L3.00401,17.9999 C1.27461588,17.9999 0.383122481,15.9705542 1.48417324,14.6991195 L1.58979,14.5857 L15.1539,2.02165 C16.5792628,0.596306744 18.9449168,1.93563518 18.5259148,3.84778339 Z M16.5681,3.43587 L3.00401,16 L9.26408,15.9999 C10.5435881,15.9999 11.4806267,17.1793299 11.2222646,18.4075322 L11.1871,18.5494 L8.61148,28.564 L22.1756,15.9999 L15.9155,15.9999 C14.6360111,15.9999 13.699066,14.8205628 13.9573457,13.5923674 L13.9925,13.4505 L16.5681,3.43587 Z M26,1 C26.55,1 27,1.45 27,2 L27,2 L27,5 L30,5 C30.55,5 31,5.45 31,6 C31,6.55 30.55,7 30,7 L30,7 L27,7 L27,10 C27,10.55 26.55,11 26,11 C25.45,11 25,10.55 25,10 L25,10 L25,7 L22,7 C21.45,7 21,6.55 21,6 C21,5.45 21.45,5 22,5 L22,5 L25,5 L25,2 C25,1.45 25.45,1 26,1 Z" />
                  </svg>
                </span>
                <span className="Typography Typography--overflowTruncate Typography--m LeftIconItemStructure-label">
                  Add rule to section
                </span>
              </div>
            </div>
          </div>
          <div
            className="MenuItemA11y"
            role="menuitem"
            tabIndex={-1}
            id="lui_416"
            aria-disabled="false"
          >
            <div className="ThemeableItemBackgroundStructure">
              <div
                onClick={() => {
                  setIsCurrentlyEditing(columnId);
                  setCurrentColumnId(columnId);
                  setCurrentColumnName(currentColumnName);
                }}
                className="LeftIconItemStructure LeftIconItemStructure--alignCenter MenuItemA11y-content"
              >
                <span className="LeftIconItemStructure-icon">
                  <svg
                    className="Icon PencilIcon"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M28.3,4.3c-1.2-1.4-3-2.1-4.9-1.9c-1.3,0.1-2.5,0.8-3.5,1.8L6,18c-0.6,0.6-1.1,1.4-1.4,2.2l-2.2,6.4C2.1,27.5,2.3,28.4,3,29c0.4,0.4,1,0.7,1.6,0.7c0.3,0,0.5,0,0.8-0.1l6.4-2.2c0.8-0.3,1.6-0.8,2.2-1.4l13.9-13.9C30,10,30.1,6.4,28.3,4.3z M4.7,27.7c-0.2,0.1-0.3,0-0.3-0.1c-0.1-0.1-0.1-0.2-0.1-0.3l2-5.8l4.2,4.2L4.7,27.7z M26.4,10.7L12.5,24.6c-0.1,0.1-0.1,0.1-0.2,0.1l-5.1-5.1c0-0.1,0.1-0.1,0.1-0.2l14-13.8c0.7-0.7,1.5-1.1,2.3-1.2c1.2-0.1,2.4,0.3,3.2,1.2C28,7,27.8,9.4,26.4,10.7z" />
                  </svg>
                </span>
                <span className="Typography Typography--overflowTruncate Typography--m LeftIconItemStructure-label">
                  Rename section
                </span>
              </div>
            </div>
          </div>
          <div
            className="SubmenuItemA11y-item"
            role="menuitem"
            tabIndex={-1}
            id="lui_418"
            aria-expanded="false"
            aria-haspopup="true"
          >
            <div className="ThemeableItemBackgroundStructure">
              <div className="LeftIconItemStructure LeftIconItemStructure--alignCenter">
                <span className="Typography Typography--overflowTruncate Typography--m LeftIconItemStructure-label">
                  <div className="RightIconItemStructure RightIconItemStructure--alignCenter">
                    <span className="Typography Typography--overflowTruncate Typography--m RightIconItemStructure-label">
                      <div className="LeftIconItemStructure LeftIconItemStructure--alignCenter">
                        <span className="LeftIconItemStructure-icon">
                          <svg
                            className="Icon SectionIcon"
                            viewBox="0 0 32 32"
                            aria-hidden="true"
                            focusable="false"
                          >
                            <path d="M1,18c-0.6,0-1-0.4-1-1s0.4-1,1-1h30c0.6,0,1,0.4,1,1s-0.4,1-1,1H1z M7,26 c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1s-0.4,1-1,1H7z M7,10c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1h18c0.6,0,1,0.4,1,1 c0,0.6-0.4,1-1,1H7z" />
                          </svg>
                        </span>
                        <span className="Typography Typography--overflowTruncate Typography--m LeftIconItemStructure-label">
                          Add section
                        </span>
                      </div>
                    </span>
                    <span className="RightIconItemStructure-icon">
                      <svg
                        className="Icon RightIcon"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M23.2,16c0,0.3-0.1,0.7-0.3,0.9l-9,11c-0.5,0.6-1.5,0.7-2.1,0.2s-0.7-1.5-0.2-2.1l8.2-10L11.6,6c-0.5-0.6-0.4-1.6,0.2-2.1s1.6-0.4,2.1,0.2l9,11C23.1,15.3,23.2,15.7,23.2,16z" />
                      </svg>
                    </span>
                  </div>
                </span>
              </div>
            </div>
          </div>
          <div
            className="DangerMenuItemA11y SectionOverflowDropdownMenuButton--deleteSection SectionOverflowDropdownMenuButton"
            role="menuitem"
            tabIndex={-1}
            id="lui_421"
          >
            <div className="ThemeableItemBackgroundStructure DangerMenuItemA11y-content">
              <div className="LeftIconItemStructure LeftIconItemStructure--alignCenter">
                <span className="LeftIconItemStructure-icon">
                  <svg
                    className="Icon SectionOverflowDropdownMenuButton-trashIcon TrashIcon"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M30,6h-8V4c0-2.2-1.8-4-4-4h-4c-2.2,0-4,1.8-4,4v2H2C1.4,6,1,6.4,1,7s0.4,1,1,1h2v18c0,3.3,2.7,6,6,6h12c3.3,0,6-2.7,6-6V8h2c0.6,0,1-0.4,1-1S30.6,6,30,6z M12,4c0-1.1,0.9-2,2-2h4c1.1,0,2,0.9,2,2v2h-8V4z M26,26c0,2.2-1.8,4-4,4H10c-2.2,0-4-1.8-4-4V8h20V26z M12,23v-8c0-0.6,0.4-1,1-1s1,0.4,1,1v8c0,0.6-0.4,1-1,1S12,23.6,12,23z M18,23v-8c0-0.6,0.4-1,1-1s1,0.4,1,1v8c0,0.6-0.4,1-1,1S18,23.6,18,23z" />
                  </svg>
                </span>
                <span className="Typography Typography--overflowTruncate Typography--m LeftIconItemStructure-label">
                  Delete section
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
