import React, {Component} from 'react';
import Header from './header';
import UserView from './userView';

class Home extends Component {
    
    render() { 
        return (
            <div>
                <Header />
                <UserView />
            </div>

         );
    }
}
 
export default Home;