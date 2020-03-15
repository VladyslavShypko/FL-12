import {createStore} from "redux";
import reducer from './reducer-actions/reducer-actions';

const store = createStore(reducer);
export default store;