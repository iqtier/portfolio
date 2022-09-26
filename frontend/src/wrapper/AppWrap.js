import React from 'react'
import {NavigationDots, SocialMedia} from '../components'

const AppWrap = (Component,idName,className) =>function HOC(){
  return (
    <div id ={idName} className={`app__container ${className}`}>
        <SocialMedia/>
        <div className ="app__wrapper app_flex">
            <Component/>
            <div className ="copyright">
                <p className = "p-text">Copyright ©Iqtier</p>
                <p className = "p-text">All rights reserved</p>
            </div>
        </div>
        <NavigationDots active = {idName}/>
    </div>
  )
}

export default AppWrap