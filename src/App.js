
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Channel from './Pages/Channel/Channel';
import Video from './Pages/Video/Video';

function App() {
  return (
    <>

    <Routes>
      <Route path='/channel' element={<Channel/>}/>
      <Route path='/video' element={<Video/>}/>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </>
  );
}

export default App;
