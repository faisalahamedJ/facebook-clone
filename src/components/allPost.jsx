import React, { Component } from 'react';
import {  GlobalOutlined } from '@ant-design/icons';
import LikeComment from './likesComments';

class AllPost extends Component {

    componentDidMount(){
        document.addEventListener("DOMContentLoaded", () => {
            let ll = localStorage.length;
            if(ll){
                for(let x = ll-1 ; x>=0 ; x-- ){
                    const imgUrl = localStorage.getItem(x);
                    if(imgUrl){
                        let divtag = document.createElement("div");
                        let individualBox = document.createElement('div');
                        let img = new Image();
                        img.src = imgUrl;
                        individualBox.classList.add("individualBox");
                        divtag.classList.add("userImg");
                        divtag.appendChild(img);
                        individualBox.appendChild(divtag);
                        document.querySelector('.localStorageData').appendChild(individualBox)
                    }
                }
            }
        })
        

    }

    



   
    render() { 
         const {items} = this.props;
        return (
            <React.Fragment>
                <div className="localStorageData">
                   
                </div>


                {items.map(item =>(
                     <div key={item.id} className="postContainer individualBox">
                        <div className='userAbout'>
                            <div className='userProfile'><img src={item.avatar} alt="user_profile"/></div>
                            <div className='userProfileName'>{item.full_name}
                            <br/>
                            <span>Sponsored.<GlobalOutlined /></span></div>
                            <div className='more'>...</div>
                        </div>
                        <div className='userCaption'>
                            {item.caption}
                        </div>
                        <div className='userImg'>
                            <img src={item.uploaded_image} alt="" />
                        </div>
                        <LikeComment 
                        id = {item.id}
                        likes = {item.likes}
                        handleLike ={this.props.onLikeIncreament}
                        />
                    </div>
                ))}
                
            </React.Fragment>
        );
    }
}
 
export default AllPost;