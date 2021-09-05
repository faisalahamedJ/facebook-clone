import React, {Component} from 'react';
import {LikeOutlined} from '@ant-design/icons';

class LikeComment extends Component {
    state ={
        value : "",
    }

    handleComment=(e)=>{

        this.setState({value: e.target.value});
        
        
    }
    
    SubmitComments = (e) =>{
        
        if(this.state.value.length)
        {

            let id = e.target.id;
            let arrayValue = [];
            if(window.localStorage[id+"comments"]!= null){
                arrayValue = JSON.parse(window.localStorage[id+"comments"]);
            }
             arrayValue.push(this.state.value);
            let jsonFile = JSON.stringify(arrayValue);      
            window.localStorage.setItem(id+"comments", jsonFile);
            this.displayComments(e);
            this.totalComments(e.target.id);
        }
    }

    displayComments=(e) =>{
       let id = e.target.id;      
       let commentnode = document.querySelectorAll(".allComments");
       let array = JSON.parse(window.localStorage.getItem(id+'comments')) ;
       let cnLength = commentnode[id-1].children.length;
       let arrayLength = array.length-1;
       commentnode[id-1].style.display ="block";
       if(!cnLength && arrayLength){
           array.forEach(element => {
               
               let divTag = document.createElement("div");
               divTag.innerHTML = element;
               commentnode[id-1].appendChild(divTag);
           });
       }
       else{
           let divTag = document.createElement("div");
           divTag.innerHTML = array[cnLength];
           commentnode[id-1].appendChild(divTag);    
       }

       

    }

    toggleComments =(e) =>{
        let commentnode = document.querySelectorAll(".allComments");
        let id = e.target.id;
        if(commentnode[id-1].style.display === "block"){
            commentnode[id-1].style.display = "none";
        }
        else{
            commentnode[id-1].style.display ="block";
            let cnLength = commentnode[id-1].children.length;
            let array = JSON.parse(window.localStorage.getItem(id+'comments')) ;
            if(!cnLength && array){
                array.forEach(element => {
               
                    let divTag = document.createElement("div");
                    divTag.innerHTML = element;
                    commentnode[id-1].appendChild(divTag);
                });
            }
        }
    }

    totalComments(e){
        let array = JSON.parse(window.localStorage.getItem(e+"comments"));
        
        if(array)
        {
            return array.length;
        }
        else{
            return 0;

        }
        
       
    }

    
    render() { 
        return ( 
            <React.Fragment>
                <div className="toggleComments" id={this.props.id} onClick={e => this.toggleComments(e)}>{this.totalComments(this.props.id)} comments
                 </div>
                <div className="allComments" id={this.props.id} >               
                </div>
                <hr/>
                <div className="commentContainer">
                <div ><LikeOutlined className="likeBtn" onClick={() => this.props.handleLike(this.props.id)} /> {this.props.likes} Like</div>
                <div className="commentBoxContainer">
                    <input className="commentBox" type="text" name="" id={this.props.id} placeholder="comment..."
                    onChange = {e => this.handleComment(e)}
                    />
                    <input id={this.props.id} type="submit" value="Post" onClick={e => this.SubmitComments(e)}/>
                    
                    </div>
            </div>
            </React.Fragment>
         );
    }
}
 
export default LikeComment;