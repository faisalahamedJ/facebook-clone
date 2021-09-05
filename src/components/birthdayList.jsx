import React, { Component } from "react";
import {GiftTwoTone} from '@ant-design/icons';


class BirthdayList extends Component {

    handleBirthday = (e) => {
        let today_date = new Date().getDate();
        let user_date = new Date(e.d_o_b).getDate();
        let today_month = new Date().getMonth();
        let user_month = new Date(e.d_o_b).getMonth();
        if(today_month+1 === user_month && user_date > today_date){

            
            return user_date;
            
        }
        else{
            return false;
        }

    }



    render(){
        return(
            <div>
            {this.props.items.map(item =>  {
                let result = this.handleBirthday(item);
                if(result){
                    return (
                        <React.Fragment key={item.id}>
                            <GiftTwoTone twoToneColor="#eb2f96"  />  
                                {item.full_name}'s Birthday is on {result}<sup>th</sup> 
                            <br/>
                            <br/>
                        </React.Fragment>
                    );
                }
                return false;
            })}
        </div>
        );
    }
}

export default BirthdayList;