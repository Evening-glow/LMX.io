import React,{Component} from 'react';
import axios from '../../utils/request';
class Personal extends Component{
   async componentDidMount(){
        const {data} = await axios.post('/api/personal');
        console.log(data);
    }
    render(){
        return <div>personal</div>;
    }
};
export default Personal;