import React, { Component } from 'react';
import StatusBar from './statusBar';
import {CloseSquareOutlined, VideoCameraFilled, SearchOutlined} from '@ant-design/icons';
import UserStatusUploader from './userStatusUploader';
import AllPost from './allPost';
import OnlineContacts from './onlineContacts';
import BirthdayList from './birthdayList';


class UserView extends Component {

    constructor(props){
        super(props);
        this.state= {
            items: []

        }
    }


    componentDidMount(){
        fetch("https://612efca08333fa00177e7cce.mockapi.io/user_profile")
        .then(res => res.json())
        .then(json => this.setState({items:json}))
        .catch(err => console.log(err));
    }


    handleLikeIncrement = user_id =>{
        this.setState(prevState => ({
            items: prevState.items.map(c => c.id === user_id ? {...c, likes : c.likes+1} : c)
        }))
    }

   


    render() {
                const {items} = this.state;
        return ( 
           <div className='homeContainer'>
                <div className='userViewContainer'>
                    <div className='userViewStretch'>
                        <StatusBar
                        />
                        <UserStatusUploader />

                        <div className="postHiddenContainer individualBox">
                            <div className="closeIcon"><CloseSquareOutlined /></div>
                            <div className='postHidden'><h3>Post hidden</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <div>
                                <button className="undoBtn">Undo</button>
                            </div>
                        </div>


                        <AllPost 
                         items = {items}
                         onLikeIncreament = {this.handleLikeIncrement}
                        />

                    </div>


                </div>

                <div className="nmContainer">
                    <div>Birthday</div>
                    <BirthdayList
                        items = {items}
                    />
                    <hr/>
                    <div >
                        <div className='onlineContainer'>
                            <div>Contacts</div>
                            <div className='contactIcon'>
                                <div><VideoCameraFilled /></div>
                                <div><SearchOutlined /></div>
                                <div>...</div>
                            </div>
                        </div>
                        <div>
                            <OnlineContacts 
                            items = {items}
                            />
                            <hr/>
                        </div>
                    </div>
                </div>




            </div>
         );
    }
}
 
export default UserView ;