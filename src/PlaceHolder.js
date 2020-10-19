import React, { Component } from 'react';

class PlaceHolder extends Component {
    constructor(props) {
        super(props);
        this.states = {
            change: 0
        };
    }

    componentDidMount() {
        // send http request: get
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            // xmlHttp.readyState :
            // 0	UNSENT	代理被创建，但尚未调用 open() 方法。
            // 1	OPENED	open() 方法已经被调用。
            // 2	HEADERS_RECEIVED	send() 方法已经被调用，并且头部和状态已经可获得。
            // 3	LOADING	下载中； responseText 属性已经包含部分数据。
            // 4	DONE	下载操作已完成。

            // console.log(xmlHttp.status);
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
                // callback(xmlHttp.responseText);
                console.log(xmlHttp.responseText);
        }
        xmlHttp.open("GET", 'https://jsonplaceholder.typicode.com/posts/10', true); // true for asynchronous 
        xmlHttp.send(null);

    }
    // changing stuff
    _changeName = (e) => {
        // console.log(this.states.change)
        this.setState({ change: e.target.value });
        // console.log(this.states.change)
    }
    _delete= (e) => {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            // console.log(xmlHttp.status);
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
                console.log(xmlHttp.responseText);
        }
        xmlHttp.open("delete", 'https://jsonplaceholder.typicode.com/posts/1', true);
    }

    _update = (e) => {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            // console.log(xmlHttp.status);
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
                console.log(xmlHttp.responseText);
        }
        xmlHttp.open("put", 'https://jsonplaceholder.typicode.com/posts/1', true);
        xmlHttp.setRequestHeader("Content-type", "application/json");
        xmlHttp.send(JSON.stringify({
            title: 'fooooooooo',
            body: 'bbbbbbb',
            userId: 1,
        }));
    }
    componentDidUpdate() {
        
            // create
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.onreadystatechange = function () {
                // 201 Created
                if (xmlHttp.readyState === 4 && xmlHttp.status === 201)
                {
                    console.log(xmlHttp.responseText);
                }
            }
            xmlHttp.open("post", 'https://jsonplaceholder.typicode.com/posts', true); // true for asynchronous 
            // set header
            xmlHttp.setRequestHeader("Content-type", "application/json");
            // send body
            xmlHttp.send(JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1,
            }));
        
            // if I do it one more time?
            // xmlHttp.open("delete", 'https://jsonplaceholder.typicode.com/posts/1', true);
            // xmlHttp.send(null);

        // if(this.states.change === 2){

        // }
        
    }

    render() {
        return <div>Check Console For GetStuff ; Change Input for create dummy<br />
            {/* <button onClick={this.changeState()}>update</button> */}
            <input type="text" placeholder='create' onChange={this._changeName} /> <br/>
            <input type="text" placeholder='delete' onChange={this._delete} /> <br/>
            <input type="text" placeholder='update' onChange={this._update} />
            {/* <p>{this.states.change}</p> */}
        </div>;
    }
}

export default PlaceHolder;