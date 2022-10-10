
import React, {createContext, useState} from 'react';
import { Outlet} from "react-router-dom";
import SearchAppBar from "../components/SearchAppBar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";



export const ThemeContext = createContext(null);
function Layout() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = ()=>{
    setTheme((curr)=>(curr ==="light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <Stack 
    className="App" 
    id={theme}
    sx={{minHeight:"100vh"}}
    >
    <span className="switch">
      <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
      <label><input type="checkbox" onChange={toggleTheme} checked={theme === "dark"} /></label> 
        </span>
     <SearchAppBar/>
      <Outlet />
      <Box sx={{ flexGrow: 1 }} />
    </Stack>
    </ThemeContext.Provider>
  );

}

export default Layout;