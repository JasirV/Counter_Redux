import { Decriment, Incriment } from "./CounterTypes";

export const incriment =()=>{
 return {
    type:Incriment
}
}
export const decriment=()=>{
    return{
     type:Decriment
    }
}


