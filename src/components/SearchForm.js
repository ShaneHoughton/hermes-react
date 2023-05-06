import React, {useState} from 'react';
import Button from '@mui/material/Button';
import { TextField, Select, MenuItem, InputLabel, FormControl, Checkbox, FormControlLabel } from '@mui/material';

import '../styles.css';






function SearchForm({setData, setLoading}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [school, setSchool] = useState('');
  const [schoolState, setSchoolState] = useState('');
  const [gender, setGender] = useState('');
  const [year, setYear] = useState('');
  const [isActive, setIsActive] = useState(true);

  const USstates = [
    "AL",
    "AK",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "DC",
    "FL",
    "GA",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
  ];
  

  function handleSubmit(e){
    e.preventDefault();
    console.log(gender)
    let season = '';
    if(!isActive){
      season = `${year}_Outdoor`
      console.log(season)
    }
    let url = `/athlete-bests?Gender=${gender}&Team-name=${school}&State=${schoolState}&Season=${season}&Name=${lastName}_${firstName}`

    setLoading(true);
    fetch(url).then(
      res => res.json()
    ).then(
      data => {
        setData(data);
        setLoading(false);
        console.log(data); 
      }
    )
  }
  return (
        <div>
          <form className='search-form' onSubmit={handleSubmit}>
          <TextField
              sx={{border: "white", borderColor: 'primary.main' }}
              color="primary"
              label="First Name" 
              variant="outlined"
              InputProps={{ style: { color: "white", border: "white"} }}
              onChange={(e)=> setFirstName(e.target.value)}/>

          <TextField
            color="primary"
            label="Last Name" 
            variant="outlined" 
            onChange={(e)=> setLastName(e.target.value)}/>

          <TextField
            color="primary"
            label="School" 
            variant="outlined" 
            onChange={(e)=> setSchool(e.target.value)}/>


          <FormControl sx={{minWidth: 100 }} className='dark-mode-outline'
          color="primary">
            <InputLabel >State</InputLabel>
            <Select
              value={schoolState}
              label="State"
              onChange={(e)=>{ setSchoolState(e.target.value)}}>
              {USstates.map((state) => (
                <MenuItem key={state} value={state}>
                  {state}
                </MenuItem>
              ))}
              </Select>
            </FormControl>

            <FormControl sx={{minWidth: 100 }}>
             <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={gender}
                label="Gender"
                onChange={(e)=>{ setGender(e.target.value)}}>
                <MenuItem value={'m'}>Male</MenuItem>
                <MenuItem value={'f'}>Female</MenuItem>
              </Select>
              </FormControl>

              <FormControlLabel 
                control={
                  <Checkbox  
                    checked={isActive} 
                    onChange={(e)=>{
                      setIsActive(e.target.checked)}}/>
                    } label="Active" 
                    />

                <TextField
                color="primary"
                label="year" 
                variant="outlined" 
                onChange={(e)=> setYear(e.target.value)}/>
            
          

                <Button
                  onClick={handleSubmit}
                  variant="outlined">Search</Button>
          </form>
        </div>
    
  )
}
export default SearchForm