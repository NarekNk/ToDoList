import React from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import { addTask, deleteTask, editTask, saveText, setNewTaskText } from './../redux/store';
import styles from "./List.module.css"

const List = ({ items, addTask, newTaskText, setNewTaskText, deleteTask, editTask }) => {

    const addNewTask = (text, id) => {
        if(text === "") return;

        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        
        if(hours < 10) {
            hours = "0" + hours;
        }

        if(minutes < 10) {
            minutes = "0" + minutes;
        }
        let time = `${hours} : ${minutes}`
        addTask(text, id, time);
        setNewTaskText("");
    }

    const addEnter = (e) => {
        if (e.code != "Enter") return;
        addNewTask(newTaskText, items.length+1)
    }

    return (
        <div className={styles.cont}>
            <h1>Task list</h1>
            <div>
                <input className={styles.newTask}
                    type="text"
                    value={newTaskText}
                    onChange={(e) => setNewTaskText(e.target.value)}
                    onKeyDown={addEnter} />
                <button className={styles.btn} onClick={() => addNewTask(newTaskText, items.length+1)}>Add</button>
            </div>

            <div>
                {items.map(i => <ListItem id={i.id} text={i.text} key={i.id} time={i.time} 
                deleteTask={deleteTask} 
                editTask={editTask}/>)}
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        items: state.items,
        newTaskText: state.newTaskText
    }
}

export default connect(mapStateToProps, { addTask, setNewTaskText, deleteTask, editTask })(List);