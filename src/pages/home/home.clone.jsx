import React from "react";
import "./home.clone.css"
export default function HomeClone() {
  return (
    <div
      role="presentation"
      className="Scrollable--withCompositingLayer Scrollable Scrollable--horizontal DragScrollListener BoardBody-columnHorizontalScrollable--autoscrollEnabled BoardBody-columnHorizontalScrollable snipcss-XDidL"
      tabIndex={-1}
    >
      <div className="BoardBody-columns">
        <div className="DragSelectContainer">
          <div className="SortableList BoardBody-columnSortableList">
            <div className="SortableList-itemContainer SortableList-itemContainer--row">
              <div className="BoardBody-columnDraggableItemWrapper SortableList-sortableItemContainer">
                <div className="SortableItem SortableList-sortableItem">
                  <div className="BoardColumn BoardBody-column">
                    <div className="BoardColumn-dragHandle" draggable="true">
                      <div className="BoardColumnHeader BoardColumn-header">
                        <h3 className="Typography Typography--colorDefault Typography--overflowTruncate Typography--h5 Typography--fontWeightMedium BoardColumnHeaderTitle BoardColumnHeader-name">
                          To&nbsp;do
                        </h3>
                        <div
                          aria-label="Add task"
                          className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconButton--standardTheme SubtleIconButton BoardColumnHeader-addTaskButton BoardColumnHeader-addTaskOnClickButton"
                          role="button"
                          tabIndex={0}
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
                          aria-label="More section actions"
                          aria-expanded="false"
                          aria-haspopup="menu"
                          className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconButton--standardTheme SubtleIconButton BoardColumnHeader-dropdownButton"
                          role="button"
                          tabIndex={0}
                        >
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
                          <div className="SortableList-itemContainer SortableList-itemContainer--column">
                            <div className="BoardColumnWithSortableTasks-sortableItemWrapper--boardsRevamp BoardColumnWithSortableTasks-sortableItemWrapper SortableList-sortableItemContainer">
                              <div className="SortableItem SortableList-sortableItem">
                                <div draggable="false">
                                  <div className="ContextMenuTarget-contextMenuEventListener">
                                    <div draggable="true">
                                      <div
                                        className="ThemeableCardPresentation--isValid ThemeableCardPresentation ThemeableInteractiveCardPresentation--isNotSelected ThemeableInteractiveCardPresentation--isEnabled ThemeableInteractiveCardPresentation ThemeableDraggableCardPresentation--isClickable ThemeableDraggableCardPresentation--default ThemeableDraggableCardPresentation DraggableCard BoardCard-draggableCard"
                                        tabIndex={-1}
                                      >
                                        <div
                                          className="BoardCardLayout BoardCard-layout"
                                          data-task-id={1205343530602594}
                                        >
                                          <div className="BoardCardLayout-contentAboveSubtasks">
                                            <div className="BoardCardLayout--withoutImage BoardCardLayout-image"></div>
                                            <div className="BoardCardLayout-projectPills"></div>
                                            <div className="BoardCardLayout-parentTask"></div>
                                            <div className="BoardCardLayout-titleAndIndicator">
                                              <span className="BoardCardLayout-title--indented BoardCardLayout-title">
                                                <span className="Typography Typography--m BoardCard-taskName">
                                                  Schedule kickoff meeting
                                                </span>
                                              </span>
                                              <div className="BoardCardLayout-completionIndicator">
                                                <div
                                                  aria-checked="false"
                                                  aria-label="Completed"
                                                  role="checkbox"
                                                  className="TaskRowCompletionStatus-checkbox--enabled TaskRowCompletionStatus-checkbox TaskRowCompletionStatus BoardCard-completionCheckbox"
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
                                                    ></path>
                                                    <path
                                                      d="M13.4,22.1c-0.3,0-0.5-0.1-0.7-0.3l-3.9-3.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l3.1,3.1l8.1-8.1c0.4-0.4,1-0.4,1.4,0   s0.4,1,0,1.4l-8.9,8.9C13.9,22,13.7,22.1,13.4,22.1z"
                                                      className="CompoundIcon-inner"
                                                    ></path>
                                                  </svg>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="BoardCardLayout-customPropertiesAndTags">
                                              <div className="BoardCardCustomPropertiesAndTags">
                                                <div className="BoardCardCustomPropertiesAndTags-cellWrapper">
                                                  <div className="Pill--truncated Pill--colorYellowOrange Pill Pill--medium">
                                                    Medium
                                                  </div>
                                                </div>
                                                <div className="BoardCardCustomPropertiesAndTags-cellWrapper">
                                                  <div className="Pill--truncated Pill--colorYellow Pill Pill--medium">
                                                    At risk
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="BoardCardLayout-assigneeDueDateActions">
                                              <div className="BoardCardLayout--alwaysShowAssignee BoardCardLayout-assignee">
                                                <div
                                                  aria-label="Toggle assignee popover"
                                                  className="AvatarButton--standardTheme AvatarButton AvatarButton--sizeSmall DomainUserAvatarButton BoardCard-assignee BoardCard--alwaysVisible BoardCard--boardsRevampEnabled"
                                                  role="button"
                                                  tabIndex={0}
                                                >
                                                  <div
                                                    className="DomainUserAvatarButton-avatar Avatar AvatarPhoto AvatarPhoto--default AvatarPhoto--small AvatarPhoto--color6"
                                                    aria-hidden="true"
                                                  >
                                                    <div className="AvatarPhoto-image"></div>
                                                    Ay
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="BoardCardLayout--alwaysShowDueDate BoardCardLayout-dueDate">
                                                <div className="DueDateContainer BoardCard-dueDate BoardCard--alwaysVisible BoardCard-dueDate--enableHoverEffect BoardCard--boardsRevampEnabled">
                                                  <span
                                                    className="HiddenText"
                                                    id="lui_338"
                                                  >
                                                    Due date
                                                  </span>
                                                  <div
                                                    className="DueDateContainer-dueDateButton DueDateButton"
                                                    aria-describedby="lui_338"
                                                    aria-disabled="false"
                                                    role="button"
                                                    tabIndex={0}
                                                  >
                                                    <div className="DueDate--leftAligned DueDate--canWrap DueDate DueDateContainer-dueDate DueDate--future">
                                                      <span className="DueDate-dateSpan">
                                                        Tuesday
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="BoardCardLayout-actionButtons">
                                                <div className="BoardCardLayout-likeButton">
                                                  <div className="SubtleHeartButton--isNotHearted SubtleHeartButton BoardCard--boardsRevampEnabled">
                                                    <div
                                                      aria-label="0 likes. Click to like this task"
                                                      tabIndex={0}
                                                      className="ThemeableRectangularButtonPresentation--isEnabled ThemeableRectangularButtonPresentation--withNoLabel ThemeableRectangularButtonPresentation ThemeableRectangularButtonPresentation--small ThemeableCountWithIconButton--withMiniIcon ThemeableCountWithIconButton SubtleCountWithIconButton SubtleHeartButton-button--isNotHearted SubtleHeartButton-button"
                                                      role="button"
                                                    >
                                                      <svg
                                                        className="MiniIcon ThemeableRectangularButtonPresentation-rightIcon ThumbsUpLineMiniIcon"
                                                        viewBox="0 0 24 24"
                                                        aria-hidden="true"
                                                        focusable="false"
                                                      >
                                                        <path d="M23.1,9.2C22.4,8.4,21.5,8,20.5,8h-4.2V4.7c0-1.6-0.8-3.2-2.1-4.2C13.6,0,12.7-0.1,12,0.1c-0.8,0.2-1.4,0.7-1.8,1.5L7.3,8 H2.7C1.2,8,0,9.2,0,10.7v8.7C0,20.8,1.2,22,2.7,22H7h1h11.2c1.7,0,3.2-1.2,3.4-2.9l1.2-7C24.1,11,23.8,10,23.1,9.2z M2.7,20 C2.3,20,2,19.7,2,19.3v-8.7C2,10.3,2.3,10,2.7,10H7v10H2.7z M21.9,11.7l-1.2,7C20.6,19.5,20,20,19.2,20H9V9.2l3-6.8 C12.1,2.1,12.3,2,12.4,2C12.6,2,12.8,2,13,2.1c0.8,0.6,1.3,1.6,1.3,2.6V10h6.2c0.4,0,0.8,0.2,1.1,0.5C21.9,10.9,22,11.3,21.9,11.7z"></path>
                                                      </svg>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="BoardCardLayout-subtasks"></div>
                                          <div className="BoardCardLayout-overflowMenu"></div>
                                          <input
                                            className="BoardCardFileInput"
                                            id="BoardCard.fileInputId.1205343530602594"
                                            multiple=""
                                            tabIndex={-1}
                                            type="file"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="BoardColumnWithSortableTasks-sortableItemWrapper--boardsRevamp BoardColumnWithSortableTasks-sortableItemWrapper SortableList-sortableItemContainer">
                              <div className="SortableItem SortableList-sortableItem">
                                <div draggable="false">
                                  <div className="ContextMenuTarget-contextMenuEventListener">
                                    <div draggable="true">
                                      <div
                                        className="ThemeableCardPresentation--isValid ThemeableCardPresentation ThemeableInteractiveCardPresentation--isNotSelected ThemeableInteractiveCardPresentation--isEnabled ThemeableInteractiveCardPresentation ThemeableDraggableCardPresentation--isClickable ThemeableDraggableCardPresentation--default ThemeableDraggableCardPresentation DraggableCard BoardCard-draggableCard"
                                        tabIndex={-1}
                                      >
                                        <div
                                          className="BoardCardLayout BoardCard-layout"
                                          data-task-id={1205343530602596}
                                        >
                                          <div className="BoardCardLayout-contentAboveSubtasks">
                                            <div className="BoardCardLayout--withoutImage BoardCardLayout-image"></div>
                                            <div className="BoardCardLayout-projectPills"></div>
                                            <div className="BoardCardLayout-parentTask"></div>
                                            <div className="BoardCardLayout-titleAndIndicator">
                                              <span className="BoardCardLayout-title--indented BoardCardLayout-title">
                                                <span className="Typography Typography--m BoardCard-taskName">
                                                  Share timeline with teammates
                                                </span>
                                              </span>
                                              <div className="BoardCardLayout-completionIndicator">
                                                <div
                                                  aria-checked="false"
                                                  aria-label="Completed"
                                                  role="checkbox"
                                                  className="TaskRowCompletionStatus-checkbox--enabled TaskRowCompletionStatus-checkbox TaskRowCompletionStatus BoardCard-completionCheckbox"
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
                                                    ></path>
                                                    <path
                                                      d="M13.4,22.1c-0.3,0-0.5-0.1-0.7-0.3l-3.9-3.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l3.1,3.1l8.1-8.1c0.4-0.4,1-0.4,1.4,0   s0.4,1,0,1.4l-8.9,8.9C13.9,22,13.7,22.1,13.4,22.1z"
                                                      className="CompoundIcon-inner"
                                                    ></path>
                                                  </svg>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="BoardCardLayout-customPropertiesAndTags">
                                              <div className="BoardCardCustomPropertiesAndTags">
                                                <div className="BoardCardCustomPropertiesAndTags-cellWrapper">
                                                  <div className="Pill--truncated Pill--colorPurple Pill Pill--medium">
                                                    High
                                                  </div>
                                                </div>
                                                <div className="BoardCardCustomPropertiesAndTags-cellWrapper">
                                                  <div className="Pill--truncated Pill--colorRed Pill Pill--medium">
                                                    Off track
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="BoardCardLayout-assigneeDueDateActions">
                                              <div className="BoardCardLayout--alwaysShowAssignee BoardCardLayout-assignee">
                                                <div
                                                  aria-label="Toggle assignee popover"
                                                  className="AvatarButton--standardTheme AvatarButton AvatarButton--sizeSmall DomainUserAvatarButton--noValue DomainUserAvatarButton BoardCard-assignee BoardCard--alwaysVisible BoardCard--boardsRevampEnabled"
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
                                                      <path d="M12,14c-3.859,0-7-3.14-7-7S8.141,0,12,0s7,3.14,7,7-3.141,7-7,7Zm0-12c-2.757,0-5,2.243-5,5s2.243,5,5,5,5-2.243,5-5-2.243-5-5-5Zm10,21v-2c0-2.757-2.243-5-5-5H7c-2.757,0-5,2.243-5,5v2c0,.552,.447,1,1,1s1-.448,1-1v-2c0-1.654,1.346-3,3-3h10c1.654,0,3,1.346,3,3v2c0,.552,.447,1,1,1s1-.448,1-1Z"></path>
                                                    </svg>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="BoardCardLayout--alwaysShowDueDate BoardCardLayout-dueDate">
                                                <div className="DueDateContainer BoardCard-dueDate BoardCard--alwaysVisible BoardCard-dueDate--enableHoverEffect BoardCard--boardsRevampEnabled">
                                                  <span
                                                    className="HiddenText"
                                                    id="lui_344"
                                                  >
                                                    Due date
                                                  </span>
                                                  <div
                                                    className="DueDateContainer-dueDateButton DueDateButton"
                                                    aria-describedby="lui_344"
                                                    aria-disabled="false"
                                                    role="button"
                                                    tabIndex={0}
                                                  >
                                                    <div className="DueDate--leftAligned DueDate--canWrap DueDate DueDateContainer-dueDate DueDate--future">
                                                      <span className="DueDate-dateSpan">
                                                        Wednesday
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="BoardCardLayout-actionButtons">
                                                <div className="BoardCardLayout-likeButton">
                                                  <div className="SubtleHeartButton--isNotHearted SubtleHeartButton BoardCard--boardsRevampEnabled">
                                                    <div
                                                      aria-label="0 likes. Click to like this task"
                                                      tabIndex={0}
                                                      className="ThemeableRectangularButtonPresentation--isEnabled ThemeableRectangularButtonPresentation--withNoLabel ThemeableRectangularButtonPresentation ThemeableRectangularButtonPresentation--small ThemeableCountWithIconButton--withMiniIcon ThemeableCountWithIconButton SubtleCountWithIconButton SubtleHeartButton-button--isNotHearted SubtleHeartButton-button"
                                                      role="button"
                                                    >
                                                      <svg
                                                        className="MiniIcon ThemeableRectangularButtonPresentation-rightIcon ThumbsUpLineMiniIcon"
                                                        viewBox="0 0 24 24"
                                                        aria-hidden="true"
                                                        focusable="false"
                                                      >
                                                        <path d="M23.1,9.2C22.4,8.4,21.5,8,20.5,8h-4.2V4.7c0-1.6-0.8-3.2-2.1-4.2C13.6,0,12.7-0.1,12,0.1c-0.8,0.2-1.4,0.7-1.8,1.5L7.3,8 H2.7C1.2,8,0,9.2,0,10.7v8.7C0,20.8,1.2,22,2.7,22H7h1h11.2c1.7,0,3.2-1.2,3.4-2.9l1.2-7C24.1,11,23.8,10,23.1,9.2z M2.7,20 C2.3,20,2,19.7,2,19.3v-8.7C2,10.3,2.3,10,2.7,10H7v10H2.7z M21.9,11.7l-1.2,7C20.6,19.5,20,20,19.2,20H9V9.2l3-6.8 C12.1,2.1,12.3,2,12.4,2C12.6,2,12.8,2,13,2.1c0.8,0.6,1.3,1.6,1.3,2.6V10h6.2c0.4,0,0.8,0.2,1.1,0.5C21.9,10.9,22,11.3,21.9,11.7z"></path>
                                                      </svg>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="BoardCardLayout-subtasks"></div>
                                          <div className="BoardCardLayout-overflowMenu"></div>
                                          <input
                                            className="BoardCardFileInput"
                                            id="BoardCard.fileInputId.1205343530602596"
                                            multiple=""
                                            tabIndex={-1}
                                            type="file"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="BoardColumnWithSortableTasks-addCardButtonWrapper">
                              <div
                                className="ThemeableRectangularButtonPresentation--isEnabled ThemeableRectangularButtonPresentation ThemeableRectangularButtonPresentation--large SubtleButton--standardTheme SubtleButton BoardAddCardSubtleButton BoardColumnWithSortableTasks-addCardButton"
                                role="button"
                                tabIndex={0}
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
              <div className="BoardBody-columnDraggableItemWrapper SortableList-sortableItemContainer">
                <div className="SortableItem SortableList-sortableItem">
                  <div className="BoardColumn BoardBody-column">
                    <div className="BoardColumn-dragHandle" draggable="true">
                      <div className="BoardColumnHeader BoardColumn-header">
                        <h3 className="Typography Typography--colorDefault Typography--overflowTruncate Typography--h5 Typography--fontWeightMedium BoardColumnHeaderTitle BoardColumnHeader-name">
                          Doing
                        </h3>
                        <div
                          aria-label="Add task"
                          className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconButton--standardTheme SubtleIconButton BoardColumnHeader-addTaskButton BoardColumnHeader-addTaskOnClickButton"
                          role="button"
                          tabIndex={0}
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
                          aria-label="More section actions"
                          aria-expanded="false"
                          aria-haspopup="menu"
                          className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconButton--standardTheme SubtleIconButton BoardColumnHeader-dropdownButton"
                          role="button"
                          tabIndex={0}
                        >
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
                        <div className="is-empty SortableList BoardColumnScrollableContainer-cardsList BoardColumnWithSortableTasks-sortableList--isEmpty BoardColumnWithSortableTasks-sortableList">
                          <div className="SortableList-itemContainer SortableList-itemContainer--column">
                            <div className="BoardColumnWithSortableTasks-addCardButtonWrapper">
                              <div
                                className="ThemeableRectangularButtonPresentation--isEnabled ThemeableRectangularButtonPresentation ThemeableRectangularButtonPresentation--large SubtleButton--standardTheme SubtleButton BoardAddCardSubtleButton BoardColumnWithSortableTasks-addCardButton"
                                role="button"
                                tabIndex={0}
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
              <div className="BoardBody-columnDraggableItemWrapper SortableList-sortableItemContainer">
                <div className="SortableItem SortableList-sortableItem">
                  <div className="BoardColumn--hasDragPrompt BoardColumn BoardBody-column">
                    <div className="BoardColumn-dragHandle" draggable="true">
                      <div className="BoardColumnHeader BoardColumn-header">
                        <h3 className="Typography Typography--colorDefault Typography--overflowTruncate Typography--h5 Typography--fontWeightMedium BoardColumnHeaderTitle BoardColumnHeader-name">
                          Done
                        </h3>
                        <div
                          aria-label="Add task"
                          className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconButton--standardTheme SubtleIconButton BoardColumnHeader-addTaskButton BoardColumnHeader-addTaskOnClickButton"
                          role="button"
                          tabIndex={0}
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
                          aria-label="More section actions"
                          aria-expanded="false"
                          aria-haspopup="menu"
                          className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconButton--standardTheme SubtleIconButton BoardColumnHeader-dropdownButton"
                          role="button"
                          tabIndex={0}
                        >
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
                          <div className="SortableList-itemContainer SortableList-itemContainer--column">
                            <div className="BoardColumnWithSortableTasks-sortableItemWrapper--boardsRevamp BoardColumnWithSortableTasks-sortableItemWrapper SortableList-sortableItemContainer">
                              <div className="SortableItem SortableList-sortableItem">
                                <div draggable="false">
                                  <div className="ContextMenuTarget-contextMenuEventListener">
                                    <div draggable="true">
                                      <div
                                        className="ThemeableCardPresentation--isValid ThemeableCardPresentation ThemeableInteractiveCardPresentation--isNotSelected ThemeableInteractiveCardPresentation--isEnabled ThemeableInteractiveCardPresentation ThemeableDraggableCardPresentation--isClickable ThemeableDraggableCardPresentation--default ThemeableDraggableCardPresentation DraggableCard BoardCard-draggableCard"
                                        tabIndex={-1}
                                      >
                                        <div
                                          className="BoardCardLayout BoardCard-layout"
                                          data-task-id={1205343530602592}
                                        >
                                          <div className="BoardCardLayout-contentAboveSubtasks">
                                            <div className="BoardCardLayout--withoutImage BoardCardLayout-image"></div>
                                            <div className="BoardCardLayout-projectPills"></div>
                                            <div className="BoardCardLayout-parentTask"></div>
                                            <div className="BoardCardLayout-titleAndIndicator">
                                              <span className="BoardCardLayout-title--indented BoardCardLayout-title">
                                                <span className="Typography Typography--m BoardCard-taskName">
                                                  Draft project brief
                                                </span>
                                              </span>
                                              <div className="BoardCardLayout-completionIndicator">
                                                <div
                                                  aria-checked="false"
                                                  aria-label="Completed"
                                                  role="checkbox"
                                                  className="TaskRowCompletionStatus-checkbox--enabled TaskRowCompletionStatus-checkbox TaskRowCompletionStatus BoardCard-completionCheckbox"
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
                                                    ></path>
                                                    <path
                                                      d="M13.4,22.1c-0.3,0-0.5-0.1-0.7-0.3l-3.9-3.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l3.1,3.1l8.1-8.1c0.4-0.4,1-0.4,1.4,0   s0.4,1,0,1.4l-8.9,8.9C13.9,22,13.7,22.1,13.4,22.1z"
                                                      className="CompoundIcon-inner"
                                                    ></path>
                                                  </svg>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="BoardCardLayout-customPropertiesAndTags">
                                              <div className="BoardCardCustomPropertiesAndTags">
                                                <div className="BoardCardCustomPropertiesAndTags-cellWrapper">
                                                  <div className="Pill--truncated Pill--colorAqua Pill Pill--medium">
                                                    Low
                                                  </div>
                                                </div>
                                                <div className="BoardCardCustomPropertiesAndTags-cellWrapper">
                                                  <div className="Pill--truncated Pill--colorBlueGreen Pill Pill--medium">
                                                    On track
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="BoardCardLayout-assigneeDueDateActions">
                                              <div className="BoardCardLayout--alwaysShowAssignee BoardCardLayout-assignee">
                                                <div
                                                  aria-label="Toggle assignee popover"
                                                  className="AvatarButton--standardTheme AvatarButton AvatarButton--sizeSmall DomainUserAvatarButton BoardCard-assignee BoardCard--alwaysVisible BoardCard--boardsRevampEnabled"
                                                  role="button"
                                                  tabIndex={0}
                                                >
                                                  <div
                                                    className="DomainUserAvatarButton-avatar Avatar AvatarPhoto AvatarPhoto--default AvatarPhoto--small AvatarPhoto--color6"
                                                    aria-hidden="true"
                                                  >
                                                    <div className="AvatarPhoto-image"></div>
                                                    Ay
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="BoardCardLayout--alwaysShowDueDate BoardCardLayout-dueDate">
                                                <div className="DueDateContainer BoardCard-dueDate BoardCard--alwaysVisible BoardCard-dueDate--enableHoverEffect BoardCard--boardsRevampEnabled">
                                                  <span
                                                    className="HiddenText"
                                                    id="lui_351"
                                                  >
                                                    Due date
                                                  </span>
                                                  <div
                                                    className="DueDateContainer-dueDateButton DueDateButton"
                                                    aria-describedby="lui_351"
                                                    aria-disabled="false"
                                                    role="button"
                                                    tabIndex={0}
                                                  >
                                                    <div className="DueDate--leftAligned DueDate--canWrap DueDate DueDateContainer-dueDate DueDate--future">
                                                      <span className="DueDate-dateSpan">
                                                        Monday
                                                      </span>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="BoardCardLayout-actionButtons">
                                                <div className="BoardCardLayout-likeButton">
                                                  <div className="SubtleHeartButton--isNotHearted SubtleHeartButton BoardCard--boardsRevampEnabled">
                                                    <div
                                                      aria-label="0 likes. Click to like this task"
                                                      tabIndex={0}
                                                      className="ThemeableRectangularButtonPresentation--isEnabled ThemeableRectangularButtonPresentation--withNoLabel ThemeableRectangularButtonPresentation ThemeableRectangularButtonPresentation--small ThemeableCountWithIconButton--withMiniIcon ThemeableCountWithIconButton SubtleCountWithIconButton SubtleHeartButton-button--isNotHearted SubtleHeartButton-button"
                                                      role="button"
                                                    >
                                                      <svg
                                                        className="MiniIcon ThemeableRectangularButtonPresentation-rightIcon ThumbsUpLineMiniIcon"
                                                        viewBox="0 0 24 24"
                                                        aria-hidden="true"
                                                        focusable="false"
                                                      >
                                                        <path d="M23.1,9.2C22.4,8.4,21.5,8,20.5,8h-4.2V4.7c0-1.6-0.8-3.2-2.1-4.2C13.6,0,12.7-0.1,12,0.1c-0.8,0.2-1.4,0.7-1.8,1.5L7.3,8 H2.7C1.2,8,0,9.2,0,10.7v8.7C0,20.8,1.2,22,2.7,22H7h1h11.2c1.7,0,3.2-1.2,3.4-2.9l1.2-7C24.1,11,23.8,10,23.1,9.2z M2.7,20 C2.3,20,2,19.7,2,19.3v-8.7C2,10.3,2.3,10,2.7,10H7v10H2.7z M21.9,11.7l-1.2,7C20.6,19.5,20,20,19.2,20H9V9.2l3-6.8 C12.1,2.1,12.3,2,12.4,2C12.6,2,12.8,2,13,2.1c0.8,0.6,1.3,1.6,1.3,2.6V10h6.2c0.4,0,0.8,0.2,1.1,0.5C21.9,10.9,22,11.3,21.9,11.7z"></path>
                                                      </svg>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="BoardCardLayout-subtasks"></div>
                                          <div className="BoardCardLayout-overflowMenu"></div>
                                          <input
                                            className="BoardCardFileInput"
                                            id="BoardCard.fileInputId.1205343530602592"
                                            multiple=""
                                            tabIndex={-1}
                                            type="file"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="BoardColumnWithSortableTasks-addCardButtonWrapper">
                              <div
                                className="ThemeableRectangularButtonPresentation--isEnabled ThemeableRectangularButtonPresentation ThemeableRectangularButtonPresentation--large SubtleButton--standardTheme SubtleButton BoardAddCardSubtleButton BoardColumnWithSortableTasks-addCardButton"
                                role="button"
                                tabIndex={0}
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
              <div className="BoardBody-columnDraggableItemWrapper SortableList-sortableItemContainer">
                <div className="SortableItem SortableList-sortableItem">
                  <div className="BoardColumn BoardBody-column">
                    <div className="BoardColumn-dragHandle" draggable="true">
                      <div className="BoardColumnHeader BoardColumn-header">
                        <h3 className="Typography Typography--colorDefault Typography--overflowTruncate Typography--h5 Typography--fontWeightMedium BoardColumnHeaderTitle BoardColumnHeader-name">
                          hfj
                        </h3>
                        <div
                          aria-label="Add task"
                          className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconButton--standardTheme SubtleIconButton BoardColumnHeader-addTaskButton BoardColumnHeader-addTaskOnClickButton"
                          role="button"
                          tabIndex={0}
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
                          aria-label="More section actions"
                          aria-expanded="false"
                          aria-haspopup="menu"
                          className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconButton--standardTheme SubtleIconButton BoardColumnHeader-dropdownButton"
                          role="button"
                          tabIndex={0}
                        >
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
                        <div className="is-empty SortableList BoardColumnScrollableContainer-cardsList BoardColumnWithSortableTasks-sortableList--isEmpty BoardColumnWithSortableTasks-sortableList">
                          <div className="SortableList-itemContainer SortableList-itemContainer--column">
                            <div className="BoardColumnWithSortableTasks-addCardButtonWrapper">
                              <div
                                className="ThemeableRectangularButtonPresentation--isEnabled ThemeableRectangularButtonPresentation ThemeableRectangularButtonPresentation--large SubtleButton--standardTheme SubtleButton BoardAddCardSubtleButton BoardColumnWithSortableTasks-addCardButton"
                                role="button"
                                tabIndex={0}
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
              <div className="BoardBody-columnDraggableItemWrapper SortableList-sortableItemContainer">
                <div className="SortableItem SortableList-sortableItem">
                  <div className="BoardColumn BoardBody-column">
                    <div className="BoardColumn-dragHandle" draggable="true">
                      <div className="BoardColumnHeader BoardColumn-header">
                        <h3 className="Typography Typography--colorDefault Typography--overflowTruncate Typography--h5 Typography--fontWeightMedium BoardColumnHeaderTitle BoardColumnHeader-name">
                          sasas
                        </h3>
                        <div
                          aria-label="Add task"
                          className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconButton--standardTheme SubtleIconButton BoardColumnHeader-addTaskButton BoardColumnHeader-addTaskOnClickButton"
                          role="button"
                          tabIndex={0}
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
                          aria-label="More section actions"
                          aria-expanded="false"
                          aria-haspopup="menu"
                          className="ThemeableIconButtonPresentation--isEnabled ThemeableIconButtonPresentation ThemeableIconButtonPresentation--medium SubtleIconButton--standardTheme SubtleIconButton BoardColumnHeader-dropdownButton"
                          role="button"
                          tabIndex={0}
                        >
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
                        <div className="is-empty SortableList BoardColumnScrollableContainer-cardsList BoardColumnWithSortableTasks-sortableList--isEmpty BoardColumnWithSortableTasks-sortableList">
                          <div className="SortableList-itemContainer SortableList-itemContainer--column">
                            <div className="BoardColumnWithSortableTasks-addCardButtonWrapper">
                              <div
                                className="ThemeableRectangularButtonPresentation--isEnabled ThemeableRectangularButtonPresentation ThemeableRectangularButtonPresentation--large SubtleButton--standardTheme SubtleButton BoardAddCardSubtleButton BoardColumnWithSortableTasks-addCardButton"
                                role="button"
                                tabIndex={0}
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
              <div>
                <div className="BoardNewColumn BoardBody-column">
                  <h3 className="Typography Typography--colorDefault Typography--overflowTruncate Typography--h5 Typography--fontWeightMedium BoardColumnHeaderTitle BoardNewColumn-addColumn">
                    <div
                      className="ItemListAddSectionButton--xlarge ItemListAddSectionButton"
                      as="div"
                      role="button"
                      tabIndex={0}
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
