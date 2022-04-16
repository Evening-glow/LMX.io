import React, { Component,Fragment } from 'react';
import FinishItem from '../../components/FinishItem';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators as finishActionCrators } from './store';

 class Finish extends Component {
    render(){
        return (
            <Fragment>
                {this.props.finishData.map(e=>{return <FinishItem {...e} key={e.id}/>;})}
            </Fragment>
        );
    }
}
const mapStateToProps = state=>{
    return {
        finishData:state.finish
    }
}
const mapDispatchToProps = dispatch=>{
    return {
        finishFn:bindActionCreators(finishActionCrators,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Finish);