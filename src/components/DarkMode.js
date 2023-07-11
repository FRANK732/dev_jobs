import React from "react";
import { BsFillMoonFill} from "react-icons/bs";
import { IconBase } from "react-icons";


// Creating DarkMode component
const DarkMode = () => {
    let clickedClass = "clicked";
    // Variable to store body theme of the application
    const body = document.body;
    // Variable for lightTheme
    const lightTheme = "light";
    // Variable for darkTheme
    const darkTheme = "dark";
    // Variable for theme
    let theme;

    // Using condition statement to get and store the theme of the application to the variable theme
    if (localStorage) {
        theme = localStorage.getItem("theme");
    }

    // Conditional statement if the theme of body of the application
    if (theme === lightTheme || theme === darkTheme) {
        body.classList.add(theme);
    } else {
        body.classList.add(lightTheme);
    }


// Function switchTheme with an event parameter(e) to handle event changes
    const switchTheme = (e) => {
        if (theme === darkTheme) {
            body.classList.replace(darkTheme, lightTheme);
            e.target.classList.remove(clickedClass);
            localStorage.setItem("theme", "light");
            theme = lightTheme;
        //
        } else {
            body.classList.replace(lightTheme, darkTheme);
            e.target.classList.add(clickedClass);
            localStorage.setItem("theme", "dark");
            theme = darkTheme;
        }
    };

    // Return the Navigation bar
    return (
        <div>
        <div className="appNav">
    <p className="name">devjobs</p>
    <div className="switch_container">
        <IconBase className="sun" size= '20' color='white'/>
        <label className="switch">
            <input type="checkbox"/>
            <span onClick={switchTheme} className="slider round"></span>
            
        </label>

        <BsFillMoonFill className="moon" size= '18' color='white'/>
    </div>

</div> 
      
</div>
        
        
    );
};

export default DarkMode;
