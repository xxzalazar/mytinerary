import axios from 'axios';
const userActions = {
    newAccount: newUser =>{
        return async (dispatch, getState) =>{
            const response = await axios.post("http://127.0.0.1:4000/api/user", newUser)
            console.log(response)
            if(response.data.success !== true){
                alert(response.data.error)
            }else{
                dispatch({
                    type:"LOG_USER",
                    payload: {token: response.data.token, username: response.data.username, profilePic:response.data.profilePic}
                 
                })
            }
        }
    },
    loggedUser: user =>{
        return async (dispatch,getState) =>{
            const response = await axios.post("http://127.0.0.1:4000/api/login", user)
            console.log(response)
            if(!response.data.success){
                alert(response.data.message)
            }else{
                dispatch({
                    type:"LOG_USER",
                    payload: {token: response.data.token, username: response.data.username, profilePic:response.data.profilePic}
                })
            }
        }
    },
    logOut: () =>{
        return(dispatch, getState) =>{
            dispatch({
                type:"LOG_OUT",
            })
        }

    }
}
export default userActions