const initialState={
    token:'',
    username:'',
    profilePic:''
}
const userReducer = (state = initialState, action)=>{
    
    console.log(action.type);
    switch(action.type){
        case "LOG_USER":
            return {
                ...state, token: action.payload.token, username: action.payload.username, profilePic: action.payload.profilePic,
            }
        case "LOG_OUT":
            return {
                ...state, token: '', username: '', profilePic: ''
            }
        default: 
        return state    
    }
}
export default userReducer