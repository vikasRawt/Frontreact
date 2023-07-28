import React from 'react';
import './App.css';
import {Blog,Footer,Possibility,Features,WhatGPT3,Header} from './Container';
import {Article,Brand,CTA,Feature,NavbarComp} from './components';
const App = ()=> {
  return (
    <div className="App" >
<div className="gradient_bg">
  <NavbarComp/>
  <Header/>
  <Brand/>
  <Article/>
 
</div>
<WhatGPT3/>
<Feature/>

<Blog/>
<CTA/>
<Features/>
<Possibility/>
<Footer/>

    </div>
  );
}

export default App;
