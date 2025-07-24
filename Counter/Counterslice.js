import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    count: 0
}

export const createslice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count += 1
        },

        decrement: (state, action) => {
            if (state.count > 0) {
                state.count -= 1
            }
        },

        reset: (state, action) => {
            state.count = 0
        }
    }
})

export const {increment, decrement, reset} = createslice.actions

export default createslice.reducer