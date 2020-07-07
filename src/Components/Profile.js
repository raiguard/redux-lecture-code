import React, {Component} from 'react';

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: {id: 1, name: 'Tony Stark', image: 'https://i1.wp.com/themarvelreport.com/wp-content/uploads/2019/05/Tony-Stark-Iron-Man.jpg?fit=1280%2C720'}
        }
    }

    render(){
        return (
            <div className='profile'>
                <img 
                    className='profile-image' 
                    src={this.state.user.image} 
                    alt={this.state.user.name}/>
                <p>{this.state.user.name}</p>
            </div>
        )
    }
}

export default Profile;