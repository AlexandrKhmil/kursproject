import React from "react";  
//import { NavLink } from 'react-router-dom';
import { TopBar,
         MiddleBar,
         BottomBar } from './style';
//import logo from './icon/png/vk.png'
import style from './footer.module.css'

export default class Footer extends React.Component {
  render() {
      const information= ['information','about us','customar service','privacy policy','site map','contact'];
      const fromUs= ['why buy from us','about us','shipping & returns','international shipping','affiliates','group sales'];
      const account= ['account','sign in','view cart','my wishlist','track my order','help'];
      const contact= ['contacts','oleksandr.khmil@nure.ua','lithus.maksym@nure.ua','Babich','Dyacov','Ruban'];
    return (
        <footer>
            <TopBar>
                <div className={style.topBar}>
                    <ul>
                        {information.map((item, key) => <li key={key}>{item}</li>)}
                    </ul>

                    <ul>
                        {fromUs.map((item, key) => <li key={key}>{item}</li>)}
                    </ul>

                    <ul>
                        {account.map((item, key) => <li key={key}>{item}</li>)}
                    </ul>

                    <ul>
                        {contact.map((item, key) => <li key={key}>{item}</li>)}
                    </ul>
                </div>
            </TopBar>
            
            <MiddleBar>
                <div className={style.middleBar}>
                    <div className={style.contact}>
                        <div className={style.button}>we accept</div>
                        <a href="/"><img src={require('./icon/png/paypal-logo-in-rectangular-black-card.png')} alt="maestro"/></a>
                        <a href="/"><img src={require('./icon/png/mastercard.png')} alt="mastercard"/></a>
                        <a href="/"><img src={require('./icon/png/discover.png')} alt="discover"/></a>
                        <a href="/"><img src={require('./icon/png/visa.png')}alt="visa"/></a>
                    </div>

                    <div className={style.contact}>
                       <div className={style.button}>follow us</div>
                        <a href="/"><img src={require('./icon/png/facebook.png')} alt="facebook"/></a>
                        <a href="/"><img src={require('./icon/png/twitter.png')} alt="twitter"/></a>
                        <a href="/"><img src={require('./icon/png/google-plus.png')} alt="google"/></a>
                        <a href="/"><img src={require('./icon/png/vk.png')} alt="vk"/></a>
                    </div>
                </div>
            </MiddleBar>
            
            <BottomBar>
                <p>Made for coursework1</p>
            </BottomBar> 
        </footer>
    );
  }
} 