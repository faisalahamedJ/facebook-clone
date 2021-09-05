import React, { Component } from 'react';
import { SmileFilled, VideoCameraFilled, PictureFilled, CloseCircleOutlined} from '@ant-design/icons';

class UserStatusUploader extends Component {
    

    togglePopUp=()=>{
           let popUp =document.querySelector('.postPopUp');
           popUp.style.display= "block";

           let closeIcon = document.querySelector(".CloseCircleOutlined");
           closeIcon.addEventListener("click", () => {
            window.location.reload();
           })
          
    }


    handlePostImage=(e)=>{
        let ll = localStorage.length;
        let file = e.target.files;
        const reader = new FileReader();
        reader.readAsDataURL(file[0]);

        reader.addEventListener('load', () => {
            localStorage.setItem(ll, reader.result)
        })
    }



    render() { 
        return ( 
            <div className='userThoughtBox individualBox'>
            <div className='userTypingBox'>
                <img src="http://dummyimage.com/168x100.png/dddddd/000000" alt="img"/>
                <input type="text" placeholder="What's on your mind?" />
                <hr/>
            </div>
            
            <ul className='userUploadButton'>
                <li><VideoCameraFilled className='videoIcon'/> Live Video</li>
                <li onClick={this.togglePopUp}><PictureFilled className='pictureIcon'/> 
                Photo/Video
                
                </li>
                <li className='feelingactivity' ><SmileFilled className='smileIcon'/> Feeling/Activity</li>

            </ul>

            <div className="postPopUp">
                    <div className="popUpContainer">
                            <div className="CloseCircleOutlined" onClick={this.closePopUp}><CloseCircleOutlined /></div>
                            <input type="file" id="postImage" onChange={e =>this.handlePostImage(e)}/>
                    </div>
                </div>
        </div>
         );
    }
}
 
export default UserStatusUploader;