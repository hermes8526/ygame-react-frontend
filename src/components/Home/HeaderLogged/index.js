import React from "react";
import $ from 'jquery'; 

import Signup from "../Signup";
import Menu1 from "../Menu1";
import Menu2 from "../Menu2";
import Menu3 from "../Menu3";
import { getImg } from "../../../utils/Helper";
import Styles from './../Header/Header.module.scss';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showSignin: false,
            showMenu1: false,
            showMenu2: false,
            showMenu3: false
        };
    }

    toogleSignin = () => {
        this.setState({showSignin: !this.state.showSignin});
    }
    toogleMenu = () => {
        this.setState({
            showMenu1: !this.state.showMenu1,
            showMenu2: false,
            showMenu3: false
        })
    }
    
    showeventMenu2 = (isParent) => {
        if(isParent) {
            this.setState({
                showMenu2: true,
                showMenu3: false
            })
        }
        else {
            this.setState({
                showMenu2: false,
                showMenu3: false
            })           
        }
    }
    showeventMenu3 = (isParent) => {
        if(!isParent) {
            this.setState({
                showMenu3: false
            }) 
        }
        else {
            this.setState({
                showMenu3: true
            }) 
        }
    }

    hideMenu1 = () => {
        this.setState({
            showMenu1: false,
            showMenu2: false,
            showMenu3: false
        })
    }
    hideMenu2 = () => {
        this.setState({
            showMenu2: false
        })
    }
    hideMenu3 = () => {
        this.setState({
            showMenu3: false
        })
    }

    render() {

        return (
            <header className={Styles.header}>
                
                <div className={Styles.topmenu}>
                    <div className={Styles.menu}>
                        <a onClick={this.toogleMenu}><img src={getImg('home/icons/menu.png')} alt="Menu"/></a>
                        <div className={Styles.menucontent} onMouseLeave={this.hideMenu1}>
                            {
                                this.state.showMenu1 && 
                                <Menu1 
                                    menuclass="first" 
                                    items={[
                                        {isActive: false, isParent: false, text: 'Black Friday'},
                                        {isActive: true, isParent: true, text: 'Consoles'},
                                        {isActive: false, isParent: true, text: 'Computador'},
                                        {isActive: false, isParent: true, text: 'Mobile'},
                                        {isActive: false, isParent: true, text: 'Multiplataformas'},
                                        {isActive: false, isParent: true, text: 'Serviços e Assinaturas'}
                                    ]}
                                    onMouseOver={this.showeventMenu2}
                                    
                                />
                            }
                            {
                                this.state.showMenu2 && 
                                <Menu2 
                                    menuclass="second" 
                                    items={[
                                        {isActive: true, isParent: false, text: 'Playstation'},
                                        {isActive: false, isParent: true, text: 'Nintendo'},
                                        {isActive: false, isParent: true, text: 'Microsoft'}
                                    ]}
                                    onMouseOver={this.showeventMenu3}
                                />
                            }
                            {
                                this.state.showMenu3 && 
                                <Menu3 
                                    menuclass="third" 
                                    items={[
                                        {isActive: false, isParent: false, text: 'Brasil'},
                                        {isActive: true, isParent: false, text: 'Estados Unidos'},
                                        {isActive: false, isParent: false, text: 'Hong Kong'}
                                    ]}
                                />
                            }
                        </div>

                    </div>
                    <div className={Styles.logo}>
                        <img src={getImg('home/logo.png')} alt="Logo"/>
                    </div>
                    <div className={Styles.iconinputcontainer}>
                        <input className={Styles.iconinput} type="text" placeholder="O que procura, jovem padawan?"/>
                        <div className={Styles.iconcontainer}>
                            <div className={Styles.iconsearch}></div>
                        </div>
                    </div>
                    <div className={Styles.userinfo}>
                        <a  className={Styles.userimage} onClick={this.toogleSignin}>
                            <img src={getImg('home/users/lima.png')} alt="LIMA" />
                        </a>
                        
                        <div className={Styles.username}>
                            <p>Minha Conta</p>
                        </div>
                        <div className={Styles.usercart}>
                            <a ><img src={getImg('home/icons/cart.png')} alt="User" /></a>
                            <span className={Styles.productcount}>1</span>
                        </div>
                        {this.state.showSignin && <Signup />}
                    </div>
                </div>
            </header>
        )
    }
}

export default Header