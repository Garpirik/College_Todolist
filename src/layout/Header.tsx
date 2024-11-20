import { useContext, useState } from "react";
import s from "./Header.module.css"
import ThemeContext, { useTheme } from "../theme/ThemeContext";
const Header = () =>{
    const{isDark , toggleTheme} = useTheme()
    // const [isDark, setDark] = useState(false);
    return(
        <div  >{isDark ? <img src="https://static.thenounproject.com/png/1664849-200.png" width="48px" height="48px" onClick={() => toggleTheme()} /> : <img src="https://static.thenounproject.com/png/2853779-200.png" width="48px" height="48px" onClick={() => toggleTheme()}  />}</div>
    )
}

export default Header;
