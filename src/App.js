import React, {useState} from 'react';
import AthleteCard from './components/AthleteCard';
import SearchForm from './components/SearchForm';
import NavBar from './components/NavBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, CircularProgress, Box } from '@mui/material';
import './styles.css';



const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  console.log(data)


 
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <NavBar/>
      {/* <LogoComponent size={300} color={"#fafafa"}/> */}
      <div className="page-content">
        <div className='page-left'>
          <SearchForm setData={setData} setLoading={setLoading}/>
        </div>
        <div className='page-right'>
      {data!== null && data.hasOwnProperty("error") &&
       <Box
       display="flex"
       justifyContent="center"
       alignItems="center"
       minHeight="60vh">
         <h2 className="error-msg">Athlete could not be found.</h2>
     </Box> 
      }
      {data !== null && !data.hasOwnProperty('error') && !isLoading &&
        <AthleteCard athleteData={data}/>
      }

      {isLoading && 
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="60vh">
            <CircularProgress/>
        </Box>}
        </div>
        </div>
      </ThemeProvider>
    </div>
    
  );
}

export default App