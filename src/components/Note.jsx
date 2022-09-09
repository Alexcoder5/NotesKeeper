import { useDispatch } from 'react-redux'
import { deleteNote } from '../actions/notes'
import { Paper, Clear, Typography, IconButton, Stack, Edit, Tooltip } from '../MUI'



function Note({ setCurrentId, note }) {
    const dispatch = useDispatch()
    // onClick={() => setCurrentId(note._id)}
    // <IconButton  ><Edit /></IconButton>
    return (
        <Tooltip title="Doubleclick to edit" placement="top" sx={{}}>
            <Paper elevation={4} onDoubleClick={() => setCurrentId(note._id)}
                sx={{
                    height: '100%', maxHeight: '310px', width: '350px', p: '15px', pl: "10px", m: 2, position: 'relative', whiteSpace: 'pre-wrap', wordWrap: "break-word", pt: '8px', pr: '5px', pb: '8px', display: 'flex', justifyContent: "space-between"
                }}>
                <Stack direction="column" justifyContent="space-between"
                    sx={{ overflowY: "scroll", overflowX: "hidden", direction: "rtl" }}>
                    <Typography variant="h6" fontWeight="700" textAlign="end" sx={{
                        pl: '10px', mt: '5px', maxWidth: "310px", mb: "15px"
                    }} >{note.title}
                    </Typography>
                    <Typography variant="h6" fontWeight="300" sx={{ pl: '10px', direction: "ltr" }}
                    >{note.content} </Typography>
                </Stack>
                <Stack direction="column" sx={{ justifyContent: "space-between" }} >
                    <IconButton onClick={() => { dispatch(deleteNote(note._id)) }}
                        sx={{}}>
                        <Clear sx={{ fontSize: '28px', color: '#9c27b0' }} />
                    </IconButton>
                    <IconButton onClick={() => setCurrentId(note._id)}
                        sx={{}}>
                        <Edit sx={{ color: '#9c27b0', }} />
                    </IconButton>
                </Stack>
            </Paper>
        </Tooltip >
    )
}

export default Note


{/* <Tooltip title="Doubleclick to edit" placement="top">
            <Paper elevation={4} onDoubleClick={() => setCurrentId(note._id)}
                sx={{
                    height: '100%', maxHeight: '300px', width: '350px', p: '15px', m: 2, position: 'relative', whiteSpace: 'pre-wrap', wordWrap: "break-word", pt: '5px', pr: '5px', pb: '5px', float: 'left', overflow: "auto"
                }}>
                <Stack direction="row" justifyContent="space-between" >
                    <Typography variant="h6" fontWeight="700" sx={{ alignSelf: "center", mt: '5px' }} >{note.title}
                    </Typography>
                    <IconButton onClick={() => { dispatch(deleteNote(note._id)) }}
                        sx={{ alignSelf: "flex-start" }}>
                        <Clear sx={{ fontSize: '28px', color: '#9c27b0' }} />
                    </IconButton>
                </Stack>
                <Stack direction="row" justifyContent="space-between" >
                    <Typography variant="h6" fontWeight="300" sx={{ pr: '5px' }}
                    >{note.content} </Typography>
                    <IconButton onClick={() => setCurrentId(note._id)}
                        sx={{ alignSelf: "flex-end" }}>
                        <Edit sx={{ color: '#9c27b0' }} />
                    </IconButton>
                </Stack>
            </Paper>
        </Tooltip> */}