import React, { useState } from "react";
import styles from "./ListItem.module.css";


const ListItem = ({ text, id, time, deleteTask, editTask }) => {

    let [editMode, setEditMode] = useState(false);
    let [newText, setNewText] = useState(text);

    const saveNewText = () => {
        editTask(newText, id);
        setEditMode(false);
    }

    return (
        <div className={styles.listItem}>
            <div>
                <span className={styles.time}>{time}</span>

                <br />
                {!editMode && text}

                {editMode &&
                    <input value={newText} onChange={(e) => setNewText(e.target.value)} />
                }

                {editMode && <button className={styles.btn + " " + styles.save}
                    onClick={saveNewText}>Save</button>}
            </div>

            <div>
                <button className={styles.btn + ' ' + styles.delete}
                    onClick={() => deleteTask(id)}>Delete</button>

                <button className={styles.btn + ' ' + styles.edit}
                    onClick={() => setEditMode(true)}>Edit</button>
            </div>
        </div>
    )
}



export default ListItem;