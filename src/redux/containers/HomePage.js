import { connect } from "react-redux";
import {Parent, ChildrenA, ChildrenAB} from "../../ex_redux";
import changeName from "../actions/ChangeName";

const getState = (state) => {
    return {
        name: state.firstReducer.name
    }
}
export default connect(getState, {changeName})(Parent);