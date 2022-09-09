import * as api from '../api'
import { CREATE, DELETE, FETCH_ALL, UPDATE } from '../constants'

// export const getNotes = () => (dispatch) => {
//     api.fetchNotes()
//         .then(({ data }) => dispatch({ type: FETCH_ALL, payload: data }))
//         .carch(error => console.log(error.message))

// }

export const getNotes = () => async (dispatch) => {
    try {
        const { data } = await api.fetchNotes()
        dispatch({ type: FETCH_ALL, payload: data })

    } catch (error) {
        console.log(error);
    }
}

// because of async actions => async (dispatch) 

export const createNote = (note) => async (dispatch) => {
    try {
        const { data } = await api.createNote(note)

        dispatch({ type: CREATE, payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const updateNote = (id, note) => async (dispatch) => {
    try {
        const { data } = await api.updateNote(id, note)

        dispatch({ type: UPDATE, payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const deleteNote = (id) => async (dispatch) => {
    try {
        await api.deleteNote(id)

        dispatch({ type: DELETE, payload: id })
    } catch (error) {
        console.log(error);
    }
}
