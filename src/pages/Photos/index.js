import React from 'react'
import axios from 'axios'

export default class Photos extends React.Component {
    getData=()=>{
        axios.get('http://localhost:5000/login')
        .then(response=>{
            // this.state.data=response
            console.log(response)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
          })
    }
    render(){
        return (
            <div>pictures<button onClick={this.getData}>testAPI</button></div>
        );
    }
}