import { useEffect, useState } from 'react'
import { Paper, TextField, InputAdornment, Add, IconButton, Spellcheck } from '../MUI'
import { useDispatch, useSelector } from 'react-redux'
import { createNote, updateNote } from '../actions/notes'

function CreateNote({ currentId, setCurrentId }) {
    const [note, setNote] = useState({ title: "", content: "" })
    const updatedNote = useSelector(state => currentId ? state.notes.find(n => n._id === currentId) : null)

    const dispatch = useDispatch()

    useEffect(() => {
        if (updatedNote) setNote(updatedNote)
    }, [updatedNote])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(updateNote(currentId, note))
        } else {
            if (note.title.length !== 0 || note.content.length !== 0) {
                dispatch(createNote(note))
            }
        }
        clear()
    }

    const clear = () => {
        setCurrentId(null)

        setNote({ title: "", content: "" })
    }

    return (
        <Paper elevation={4}
            sx={{ width: { xs: '300px', sm: '450px' }, margin: '0 auto', my: "20px", p: '15px' }}>
            <form autoComplete='off' noValidate onSubmit={handleSubmit}>
                <TextField label="Title" variant="outlined" color='secondary' fullWidth
                    sx={{ mb: 2 }}
                    value={note.title}
                    onChange={(e) => setNote({ ...note, title: e.target.value })}
                />
                <TextField multiline rows={2} label="Note" color='secondary' fullWidth
                    value={note.content}
                    onChange={(e) => setNote({ ...note, content: e.target.value })}
                    InputProps={{
                        endAdornment: <InputAdornment position='end'>
                            <IconButton type="submit">
                                {currentId ? <Spellcheck sx={{ fontSize: '45px', color: '#9c27b0' }} /> : <Add sx={{ fontSize: '45px', color: '#9c27b0' }} />}
                            </IconButton>
                        </InputAdornment>,
                    }}
                />
            </form>
        </Paper>
    )
}

export default CreateNote