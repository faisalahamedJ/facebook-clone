import React, { Component} from 'react';

class OnlineContacts extends Component {




    render() { 
    const {items} = this.props;

    return(
        <div className="onlineContacts">
                {items.map(item =>{
                    if(item.online_status){
                       return (
                            <div key={item.id}>
                                <div>
                                    <img src={item.avatar} alt=""/>
                                    <span className="onlineIndicator activePerson"></span>
                                </div>                   
                                <div className='contactName'>{item.full_name}</div>
                            
                            </div>
                            
                        )
                    }
                    return true;
                    
                } )}
                <br/>
                <br/>
                {items.map(item =>{
                    if(!item.online_status){
                       return (
                            <div key={item.id}>
                                <div>
                                    <img src={item.avatar} alt=""/>
                                    <span className="onlineIndicator inActivePerson"></span>
                                </div>                   
                                <div className='contactName'>{item.full_name}</div>

                            </div>
                        )
                    }

                    return true;
                } )}
        </div>
    )
        

    }
}
 
export default OnlineContacts;
