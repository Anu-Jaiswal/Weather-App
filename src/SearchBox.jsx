import {useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';

export default function SearchBox({updateInfo}){
    let [city, setCity] = useState(" ");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "45141684e3dbb0969ff94ef6417f223c";

    let getWeatherInfo = async () => {
        try{
          let response= await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
     if(!response.ok){
        throw new Error("City not found")
     }
       let jsonResponse = await response.json();
       let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        feelsLike: jsonResponse.main.feels_like,
        humidity: jsonResponse.main.humidity,
        weather: jsonResponse.weather[0].description,
       };
       console.log(result);
       return result;
        } catch(err){
            throw err;
        }
       
    }
    
    let handleChange = (event) => {
        setCity(event.target.value);
    };
    
    let handleSubmit = async (event) => {
           event.preventDefault();
           setError(false);
        try{
        console.log(city);
        // Handle form submission logic here
        
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
        setCity(" ");
        } catch{
            setError(true)
            setCity(" ");
        }
        };

    return(
        <div className="Searchbox">
            <form onSubmit={handleSubmit}>
               <TextField
  id="City"
  label="City Name"
  variant="outlined"
  required
  value={city}
  onChange={handleChange}
  autoComplete="off"
sx={{
  "& .MuiOutlinedInput-root": {
    color: "white",
    backgroundColor: "transparent",
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
  "& .MuiInputLabel-root": {
    color: "white",
  },
  "& .MuiOutlinedInput-input": {
    color: "white",
    backgroundColor: "transparent",
  },
}}
/>
               <br></br> <br></br>
               <Button
               className="button"
               style={{marginBottom:"10px"}}
                variant="contained" 
                type="submit"
                size="small">
        Search
      </Button>
      {error && <p style={{color:"red"}}>No such place exists</p>}
            </form>
        </div>
    )
}