import CreateNote from './components/CreateNote';
import Footer from './components/Footer';
import Header from './components/Header';
import Note from './components/Note';
import { Container, Box, Stack } from './MUI'

import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getNotes } from './actions/notes'



function App() {
  const [currentId, setCurrentId] = useState(null)
  const notes = useSelector((state) => state.notes)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getNotes())
  }, [dispatch, currentId])





  return (
    <Stack direction="column"
      sx={{ height: '100vh' }}>
      <Header />
      <Box flex={1} sx={{ backgroundColor: '#CBB2B2', boxShadow: 0 }} >
        <CreateNote currentId={currentId} setCurrentId={setCurrentId} />
        <Container maxWidth="xxl" sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: "center" }}>
          {notes.map((note) => (
            <Note setCurrentId={setCurrentId} note={note} key={note._id} />
          ))}
        </Container>
      </Box>
      <Footer />
    </Stack>
  );
}

export default App;
