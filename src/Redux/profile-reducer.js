const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    postState: [
        {id: 1, message: "wewewew", likesCount: 123},
        {id: 2, message: "dcss", likesCount: 1233},
        {id: 3, message: "vfvfvfvfvfv", likesCount: 123222}
    ],
        newPostText: ""
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                message: state.newPostText,
                likesCount: 1
            };
            return {
                ...state,
                postState: [ ...state.postState, newPost ],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default:
            return state;
    }
}

export const addPostAC = () => ({type: ADD_POST});
export const updateNewPostTextAC = (newText) => ({type: UPDATE_NEW_POST_TEXT, newText: newText});

export default profileReducer;