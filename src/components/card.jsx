import React from "react";
import "../pages/home/home.clone.css";
export default function Card({ card, type, editCard, columnId }) {
  return (
    <div
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData("cardid", card.id);
        e.dataTransfer.setData("source", columnId);
      }}
      className="BoardColumnWithSortableTasks-sortableItemWrapper--boardsRevamp BoardColumnWithSortableTasks-sortableItemWrapper SortableList-sortableItemContainer"
    >
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
                      {card.isCurrentlyEditing ? (
                        <input
                          ref={(ref) => ref && ref.focus()}
                          onChange={(e) =>
                            editCard(card.id, {
                              ...card,
                              taskName: e.target.value,
                            })
                          }
                          value={card.taskName}
                          placeholder="Enter Task name Here"
                          className="cardInput"
                          onBlur={() =>
                            editCard(card.id, {
                              ...card,
                              isCurrentlyEditing: false,
                            })
                          }
                        />
                      ) : (
                        <span
                          onClick={() => {
                            editCard(card.id, {
                              ...card,
                              isCurrentlyEditing: true,
                            });
                          }}
                          className="BoardCardLayout-title--indented BoardCardLayout-title"
                        >
                          <span className="Typography Typography--m BoardCard-taskName">
                            {card.taskName}
                          </span>
                        </span>
                      )}
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
                        {/* <div className="BoardCardCustomPropertiesAndTags-cellWrapper">
                          <div className="Pill--truncated Pill--colorYellowOrange Pill Pill--medium">
                           {card.description}
                          </div>
                        </div> */}
                        {/* <div className="BoardCardCustomPropertiesAndTags-cellWrapper">
                          <div className="Pill--truncated Pill--colorYellow Pill Pill--medium">
                            At risk
                          </div>
                        </div> */}
                      </div>
                    </div>
                    <div className="BoardCardLayout-assigneeDueDateActions">
                      {/*  <div className="BoardCardLayout--alwaysShowAssignee BoardCardLayout-assignee">
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
                      </div> */}
                      <div className="BoardCardLayout--alwaysShowDueDate BoardCardLayout-dueDate">
                        <div className="DueDateContainer BoardCard-dueDate BoardCard--alwaysVisible BoardCard-dueDate--enableHoverEffect BoardCard--boardsRevampEnabled">
                          <span className="HiddenText" id="lui_338">
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
                                {new Date(card.date).getHours()}
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
  );
  /*  return (
    <div
     
      className="BoardColumnWithSortableTasks-sortableItemWrapper--boardsRevamp BoardColumnWithSortableTasks-sortableItemWrapper SortableList-sortableItemContainer"
    >
      {card.currentlyEditing ? (
        <input
          type="text"
          value={card.taskName}
          onChange={(e) =>
            editCard(
              card.id,
              {
                ...card,
                taskName: e.target.value,
              },
              type
            )
          }
        />
      ) : (
        card?.taskName
      )}
      <br />
      {card.currentlyEditing ? (
        <input
          type="text"
          value={card.description}
          onChange={(e) =>
            editCard(
              card.id,
              {
                ...card,
                description: e.target.value,
              },
              type
            )
          }
        />
      ) : (
        card?.description
      )}
      <p>{new Date(card.date).toDateString()}</p>
      <i
        onClick={() =>
          editCard(
            card.id,
            {
              ...card,
              currentlyEditing: !card.currentlyEditing,
            },
            type
          )
        }
        class="fa-solid fa-pen-to-square edit-icon"
      ></i>
    </div>
  ); */
}
