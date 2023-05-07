// import logo from './logo.svg';
// import './App.css';
// import './index.css';
//t
// import { styled } from '@mui/material/styles';
// import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCoffee} from "@fortawesome/free-solid-svg-icons"
function App() {
  return (
    <div>
      <h1 className="text-6xl underline font-extrabold bg-green-800 text-red-300">HELLO HELLO HELLO , 
        This is to validate that Tailwind Works!</h1>
        <Button variant="contained" color="primary">
        Click Me to validate that mui works!
      </Button>
     <FontAwesomeIcon  icon={faCoffee}></FontAwesomeIcon>
     <span> this coffee is brought to you by fontAwesome</span>
    </div>
  );
}

export default App;