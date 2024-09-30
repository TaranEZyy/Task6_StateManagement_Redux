  import {createStore} from "redux"
 
   const initialState={
    count:0,
    fruits:["apple","orange","banana","papaya"],
  }

  const counterReducer=(state=initialState,action)=>{
        switch (action.type) {
            case "INCREMENT":
                return {...state ,count: state.count+1}
        
            case "DECREMENT":
                   if (state.count===0) {
                    return state
                     } else {
                        return {...state ,count: state.count-1}
                     }
            default:
                return state
        }
  }

  const store = createStore(counterReducer);
 export default store;
    

