import DisplayNumber from "../components/DisplayNumber";
//react-redux의 connect를 사용하면 다음과 같이 Container Component를 만들 수 있음
import {connect} from 'react-redux';

//react-redux connect의 첫번째 인자 mapStateToProps
//redux의 state를 react의 props로 매핑
//store에 있는 state값이 변경될때마다 호출됨
//인자로 state를 받기로 약속되어 있음
function mapReduxStateToReactProps(state){
  return {
    number:state.number
    //아래 코드의
    //state = {number:store.getState().number};
    //store.subscribe(function(){...}.bind(this));
    //<DisplayNumber number={this.state.number}></DisplayNumber>를 대체
    //이 함수 내부에서 설정한 state는 connnect에 의해 props로 전달됨
    //state의 초기화 밑 렌더링을 위한 subscribe를 가능하게 함
    //store에 담긴 상태가 변화할때마다 렌더링을 새로할 컴포넌트가 있다면 꼭 필요한 인자
  }
}


//react-redux connect 사용
export default connect(mapReduxStateToReactProps)(DisplayNumber);

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