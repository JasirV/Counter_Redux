import { Decriment, Incriment } from "./CounterTypes"

const initialSate={
    count:0,
}
const counterReducer=(state=initialSate,action)=>{
switch(action.type){
    case Incriment:
    return{
     count:state.count+1
    }
    case Decriment:
        return{
            count:state.count-1
        }
    default:
        return state
}
}
export default counterReducer;