import React, { Component } from 'react';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: { id: 1, name: 'Tony Stark', image: 'https://i1.wp.com/themarvelreport.com/wp-content/uploads/2019/05/Tony-Stark-Iron-Man.jpg?fit=1280%2C720', hobbies: ['Being Rich, Having a Super Suit, Shawarma'] }
        }
    }

    render() {
        return (
            <div className='dashboard'>
                <h1>{this.state.user.name}</h1>
                <p className='hobbies'>Hobbies</p>
                {this.state.user.hobbies.map((hobby, i) => (
                    <p key={i}>{hobby}</p>
                ))}
            </div>
        )
    }
}

export default Dashboard;