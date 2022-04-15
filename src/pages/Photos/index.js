import React from 'react'
import axios from 'axios'

export default class Photos extends React.Component {
    state={data:[]}
    
    componentDidMount(){
        // axios.get('/api/?key=26285183-fe1756dda492091903dd0174c&q=yellow+flowers&image_type=photo')
        // .then(response=>{
        //     this.setState({data:response.data.hits});
        // })
        // .catch(function (error) {
        //     // handle error
        //     console.log(error);
        //   })
    }
    render(){
        const {data}= this.state
        return (
            <div>
                {
                    data.map(e=>{
                        return <img src={e.pageURL} alt='ii' key={e.id}/>;
                    })
                }
            </div>
        );
    }
}