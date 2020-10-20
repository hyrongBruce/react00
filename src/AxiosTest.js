import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import {Route,Switch} from 'react-router-dom';
// import Clock from './Clock';
// import PlaceHolder from './PlaceHolder';
import newPost from './newPost'

class AxiosTest extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: 0,
            id: 1
        };
    }

    componentDidMount() {
        axios.get('/posts').then(response => {
            const posts = response.data.slice(0, 4);
            console.log(posts)
            console.log(posts[0])
            console.log(posts[0].title)
            this.setState({
                // data: JSON.stringify(posts[0])
                data: posts[0].title,
                id: posts[0].id
            }
            )
            // console.log(this.state.data);
        }
        )
    }

    // _delete(){
    //     console.log(this.state.id)
    //     // axios.delete('/posts'+this.props.id)
    //     // .then(res=> console.log(res+"----------------------"))
    // }


    _delete = (e) => {
        console.log(this.state.id)
        axios.delete('/posts/' + this.state.id)
            .then(res => console.log(res + "----------------------"))
    }

    render() {
        return (
            <div>
                <hr />
                <h1>AXIOS TEST</h1>
                <p className='boox'>id ={this.state.id} and title: {this.state.data}<button onClick={this._delete}>delete</button></p>
                {/* router usage */}
                <Switch>
                    <Route exact path='/posts' Component={newPost} />
                    <Route render={() => <h1>NOTFOUND</h1>} />
                </Switch>
            </div>
        )
    }

}

export default AxiosTest;

/* questions:
* 1. setState doesn't work? --------------because im using this.states? diff? typo?
* 2. map function?
* 3. how to use porps? cant find it, it is parsing from Parent to child
* 4 why using (e)=> function works? but others not
* 5 route still not work?


*/