import React,{useReducer} from 'react'


function countChange (state,action){
    switch(action.type){
        case 'ADD':
            return{count : state.count+1};
        case 'SUB':
            return {count: state.count-1};
        default:
            return state;
    }
}

const CounterReducer = () => {

    const [state,dispatch]=useReducer(countChange,{count:0})

    return (
    <div>
        <p>Count: { state.count}</p>
        <button onClick={()=> dispatch({ type:'ADD'})}>Inrement</button>
        <button onClick={()=> dispatch({ type:'SUB'})}>Decrement</button>
    </div>
  )
}

export default CounterReducer