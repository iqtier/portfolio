import React from 'react';

import { Navbar} from './components';
import { Header,About,Projects,Skills,Education,Footer} from './container';
import'./App.scss';

const App = () => {
  return (
    <div className="app">
      
      <Navbar/>
      <Header/>
      <About/>
      <Projects/>
      <Skills/>
      <Education/>
      <Footer/>
    </div>
  );
}

export default App;