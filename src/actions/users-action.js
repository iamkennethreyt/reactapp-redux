import { UPDATE_USER } from "./types";

export function updateUser(newUser){
    return{
        type: UPDATE_USER,
        payload: {
            user: newUser
        }
    }
}