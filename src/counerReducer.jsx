import React,{useReducer} from 'react'

const countChange = (state,action)=>{
    switch(action.type){
        case 'ADD':
            return{counter : state.counter+1};
        case 'SUB':
            return {counter:state.counter-1};
        default:
            return state;
    }
}

const counerReducer = () => {
    const initalState={
        counter:0
    }

    const [state,dispach]=useReducer(countChange,initalState)

  return (
    <div>
        <p>Count: { state.counter}</p>
        <button onClick={ dispach({ type:'ADD'})}>Inrement</button>
        <button onClick={ dispach({ type:'SUB'})}>Decrement</button>
    </div>
  )
}

export default counerReducer