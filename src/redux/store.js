import { createStore } from 'redux';

const ADD_TASK = "ADD_TASK";
const SET_NEW_TASK_TEXT = "SET_NEW_TASK_TEXT";
const DELETE_TASK = "DELETE_TASK";
const EDIT_TASK = "EDIT_TASK";

let initialState = {
    items: [],
    newTaskText: ''
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                items: [...state.items, { id: action.id, text: action.text, time: action.time }]
            }
        case SET_NEW_TASK_TEXT:
            return {
                ...state,
                newTaskText: action.text
            }
        case DELETE_TASK: {
            let items = state.items.filter(i => i.id != action.id);

            return {
                ...state,
                items: [...items]
            }
        }
        case EDIT_TASK: {
            let items = state.items.map(i => i.id != action.id ? i : { id : i.id, text: action.newText, time : i.time });
            return {
                ...state,
                items
            }
        }
        default:
            return state;
    }
}

const store = createStore(reducer);


export const addTask = (text, id, time) => ({ type: ADD_TASK, text, id, time })
export const setNewTaskText = (text) => ({ type: SET_NEW_TASK_TEXT, text })
export const deleteTask = (id) => ({ type: DELETE_TASK, id })

export const editTask = (newText, id) => ({ type: EDIT_TASK, newText, id })

export default store;
