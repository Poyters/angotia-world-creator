import React from "react";
import { useSelector } from "react-redux";
import { IStore } from "../../interfaces/store.interface";
import { v4 as uuid } from "uuid";
import { Notification } from "../../models/notification.model";

export const Notifications = () => {
  const actionNotes = useSelector((state: IStore) => state.ui.actionNote);

  const generateNotesList = () => {
    if (!Array.isArray(actionNotes)) return [];

    const contentToRender = actionNotes?.map(note => {
      const specialClass =
        note.type === Notification.error ? "notifications__note--error" : "";

      return (
        <li key={uuid()} className={`notifications__note ${specialClass}`}>
          {note.text}
        </li>
      );
    });

    return contentToRender;
  };

  return <ul className="notifications">{generateNotesList()}</ul>;
};
