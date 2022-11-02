import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SearchState {
    [x: string]: any;
    term: string
}

const initialState: SearchState = {
    term : '',
}

export const searchSlice = createSlice({
    name: 'term',
    initialState,
    reducers: {
        setSearchTerm : (state, action:any) => {

            state.term = action.payload
        },
        
        
    },
})

// Action creators are generated for each case reducer function
export const {setSearchTerm} = searchSlice.actions

export default searchSlice.reducer