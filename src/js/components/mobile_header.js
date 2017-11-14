import React from 'react';
// import logo from '../../images/logo.png';
import '../../css/mobile.css'

export default class MobileHeader extends React.Component {    
    render(){
        return(
            <div id="mobileheader">
                <header>
                    <img src={require('../../images/logo.png')} alt="logo"/>
                    <span>reactNews</span>
                </header>
            </div>
        )
    }
 
}
