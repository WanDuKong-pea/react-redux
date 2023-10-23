import AddNumber from "../components/AddNumber";


import { connect } from "react-redux";

//store.dispatch를 인자로 받음
function mapReduxDispatchToReactProps(dispatch){
    return {
      onClick:function(size){
        dispatch({type:'INCREMENT', size:size});
      }
      //아래 코드의
      //store.dispatch({type:'INCREMENT', size:size});
      //대체
    }
}

//상태를 전달하지 않고 액션만 전달하는 경우이기 때문에 첫번째 인자는 null
export default connect(null, mapReduxDispatchToReactProps)(AddNumber);


// import React, { Component } from "react";
// import store from "../store";
// export default class extends Component {
//     render() {
//         return <AddNumber onClick={function(size){
//             store.dispatch({type:'INCREMENT', size:size});
//         }.bind(this)}></AddNumber>
//     }
// }