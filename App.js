import {StyleSheet,View,Text} from "./src/components/pages/SettingScreen"
import React,{useState, useEffect} from 'react';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./src/components/GlobalStyle";
import { lightTheme,DarkTheme } from "./src/components/GlobalStyle";
import { StyleSheet, Text, View } from 'react-native';
import  "./App.css";
import { dummyData } from "./data";
import {CardList  } from "./src/components/CardList";
import Toggle from "./src/components/pages/Toggler";
import  {useDarkMode} from "./components/useDarkMode";



const App = () => {
const [videos, setVideos] = useState([]);
 const [theme, themeToggler] = useDarkMode();
const themeMode = theme === 'light' ? lightTheme : darkTheme;

const [theme,setTheme] = useState(['light']);
const themeToggler = ()=> {
theme === 'light'? setTheme('dark') :setTheme('light')

}

  useEffect(() => {
    const timer = setTimeout(() => {
      setVideos(dummyData);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
        <div className="App">
          <button onClick={themeToggler}>Switch Theme</button>
          {
            videos.map((list, index) => {
              return (
                <section key={index}>
                  <h2 className="section-title">{list.section}</h2>
                  <CardList list={list} />
                  <hr />
                </section>
              );
            })}
        </div>
      </>
    </ThemeProvider>
    
  );
};
export default App;









export default function App() {
  return (
      <View>
        <SettingScreen />
      </View>
    );
}


