import { createSlice } from '@reduxjs/toolkit';



export interface UserState {


    user : any
    isLogin : boolean
    // user: {

    //     displayName: string,
    //     email: string,
    //     uid: string


    // }
}


const initialState: UserState = {
    // user: { displayName: '', email: '', uid: '' }

    user : null,
    isLogin : false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state : any , action: any) => {


            state.user = action.payload
            state.isLogin = state.user ? true : false 
       


        },

        




        getUser: () => {



        },


    },
})

export const { setUser, getUser } = userSlice.actions

export default userSlice.reducer