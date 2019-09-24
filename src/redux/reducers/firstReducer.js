const DEFAULT_STATE = {
    name: 'Quang Hoa',
    age: 22
}
export default (state = DEFAULT_STATE, action) => {
        switch (action.type) {
            case 'UPDATE_NAME':
               return {
                    ...state,
                    name: action.payload
               } 
            default:
                return state;
        }
}