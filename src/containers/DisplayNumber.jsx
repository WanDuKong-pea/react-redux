import DisplayNumber from "../components/DisplayNumber";
import {connect} from 'react-redux';
//react-redux의 connect를 사용하면 다음과 같이 Container Component를 만들 수 있음
export default connect()(DisplayNumber);

// import React, { Component } from 'react';
// import store from "../store";
// export default class extends Component {
//     state={number:store.getState().number};
//     constructor(props){
//       super(props);
//       store.subscribe(function(){
//         this.setState({number:store.getState().number});
//       }.bind(this));
//     }
//     render() {
//         return <DisplayNumber number={this.state.number}></DisplayNumber>
//     }
// }