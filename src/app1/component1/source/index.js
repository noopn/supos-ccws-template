import React from 'react';
import './style.scss'
import Style from  './style.module.scss'
const Component = () => {
  return <div> 
      <h1>Hello, some box with colors</h1>
      <div className='box1'></div>
      <div className={Style.box2}></div>
  </div>
}

export default Component;