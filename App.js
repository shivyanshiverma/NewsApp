import './App.css';
import React,{useState} from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

//export default class App extends Component {// IN CBC
  const App=(props)=>{// IN FBC
 const pageSize=10;
  //apiKey=process.env.REACT_APP_NEWS_API
  const apiKey=process.env.REACT_APP_NEWS_API
  //state={//state will be a object
    //progress:0
  //}
  const [progress, setProgress] = useState(0)
  //setProgress=(progress)=>{//setprogress is a arrow function to set progress becoz only  than we can access {this}
   //  setState({progress:progress})
  //}
    return (
      <div>
        <BrowserRouter>
        <LoadingBar
        color='#f11946'
        height={3}
        //progress={ state.progress} IN CBC
        progress={progress}// FBC
        
      />
        <Navbar/>
        <Routes>
          {/*jaha jaha bhi   kr ke jaise setProgress= setProgress, apiKey={ apiKey}, pageSize={ pageSize} vaha vaha se   hata dege becoz of FBC*/}
        <Route exact path='/' element= { <News setProgress={setProgress} apiKey={apiKey}  key="Home" pageSize={pageSize} country="in" category="general"/> }/>
          <Route exact path='/entertainment' element= { <News setProgress={ setProgress} apiKey={ apiKey}  key="entertainment" pageSize={ pageSize} country="in" category="entertainment"/> }/>
          <Route exact path='/business' element= { <News setProgress={ setProgress} apiKey={ apiKey}  key="business" pageSize={ pageSize} country="in" category="business"/> }/>
          <Route exact path='/health' element= { <News setProgress={ setProgress} apiKey={ apiKey}  key="health" pageSize={ pageSize} country="in" category="health"/> }/>
          <Route exact path='/science' element= { <News setProgress={ setProgress} apiKey={ apiKey}  key="science" pageSize={ pageSize} country="in" category="science"/> }/>
          <Route exact path='/sports' element= { <News setProgress={ setProgress} apiKey={ apiKey}  key="sports" pageSize={ pageSize} country="in" category="sports"/> }/>
          <Route exact path='/general' element= { <News setProgress={ setProgress} apiKey={ apiKey}  key="general" pageSize={ pageSize} country="in" category="general"/> }/>
          <Route exact path='/technology' element= { <News setProgress={ setProgress} apiKey={ apiKey}  key="technology" pageSize={ pageSize} country="in" category="technology"/> }/>
          </Routes>
        </BrowserRouter>
      </div>
    )
  
}
export default App