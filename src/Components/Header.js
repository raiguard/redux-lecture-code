import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: {id: 1, name: 'Tony Stark', image: 'https://i1.wp.com/themarvelreport.com/wp-content/uploads/2019/05/Tony-Stark-Iron-Man.jpg?fit=1280%2C720'}
        }
    }

    render(){
        return (
            <div className='main-header'>
                <p>Welcome, {this.state.user.name}</p>
                <nav>
                    <Link className='nav-links' to='/'>Home</Link>
                    <Link className='nav-links' to='/profile'>Profile</Link>
                </nav>
            </div>
        )
    }
}

export default Header;