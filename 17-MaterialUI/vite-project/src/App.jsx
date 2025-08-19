import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
// import './App.css'

function App() {

  let handleOnClick = ()=>{
    console.log("clicked");
  }
  return (
    <>
      <h1>WELCOME</h1>
      <Button variant="text" onClick={handleOnClick}>Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="contained" startIcon={<DeleteIcon />}>Delete</Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>

       <Box sx={{ '& button': { m: 1 } }}>
          <div>
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
          </div>
          <div>
            <Button variant="outlined" size="small">
              Small
            </Button>
            <Button variant="outlined" size="medium">
              Medium
            </Button>
            <Button variant="outlined" size="large">
              Large
            </Button>
          </div>

          <div>
            <Button variant="contained" size="small">
              Small
            </Button>
            <Button variant="contained" size="medium">
              Medium
            </Button>
            <Button variant="contained" size="large">
              Large
            </Button>
          </div>
       </Box>

    </>
  )
}

export default App;
