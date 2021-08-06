import Reducer from "./Reducer"

var redux = require("redux")
var Store = redux.createStore(Reducer)
export default Store

Store.subscribe(()=> {
  console.log(
    JSON.stringify(Store.getState())
  );  
})