import { createStore } from "redux";

//confiureStore()는 스토어를 생성하는 함수
//state(상태)와 action(변화)을 인수로 받는 리듀서를 만들어서 전달해야 함
//reducer는 상태와 변화를 인수로 받아서 새로운 상태를 반환하는 함수
export default createStore(function(state,action){
    if(state === undefined){
        return {number:0}
    }
    if(action.type === 'INCREMENT'){
        return {...state, number:state.number + action.size}
    }
    return state;
},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())