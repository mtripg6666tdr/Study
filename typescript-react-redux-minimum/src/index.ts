import { Action, createStore } from "redux";

const reducer = (state:number = 0, action:Action<string>) => {
  switch(action.type){
    case "INC":{
      return state + 1;
    } break;
  }
  return state;
};

const store = createStore(reducer, 1 as any, undefined);

store.subscribe(()=>{
  console.log("store changed", store.getState());
});

[...Array(5)].forEach(()=>{
  store.dispatch({type: "INC"});
});