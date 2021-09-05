import React, { Component } from 'react';
import { HomeFilled,FacebookFilled, PlaySquareFilled, ShopFilled, UsergroupAddOutlined, MenuOutlined, SearchOutlined, PlusCircleOutlined, CaretDownFilled, BellFilled, MessageFilled} from '@ant-design/icons';

class Header extends Component {
    state = {  }
    render() { 
        return (   
             <div className = "conatainer">
                <div className="headerBar">
                    <div className="logoBar">
                        <ul className='flexRow space'>
                            <li><FacebookFilled /></li>
                            <li><SearchOutlined /></li>
                        </ul>
                    </div>
                    <div className="navBar">
                        <ul className="flexRow">
                            <li><HomeFilled /></li>
                            <li><PlaySquareFilled /></li>
                            <li><ShopFilled /></li>
                            <li><UsergroupAddOutlined /></li>
                            <li><MenuOutlined 
                                onClick = {this.handleMenuClick}
                                    /></li>
                        </ul>
                    </div>
                    <div className="sideBar">
                        <ul className="flexRow space">
                            <li><PlusCircleOutlined /></li>
                            <li><BellFilled /></li>
                            <li><MessageFilled /></li>
                            <li><CaretDownFilled /></li>
                        </ul>
                    </div>
                </div>
                
            </div>
        );
    }
}
 
export default Header;