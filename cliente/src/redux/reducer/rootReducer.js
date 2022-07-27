import { createReducer } from '@reduxjs/toolkit'
import * as actions from '../actions/action'


const initialState = {
    text:[],
}

const rootReducer = createReducer(initialState, (builder) => {
  builder
                        
    .addCase(actions.GETTEXT.fulfilled, (state, action) => {
      state.text=[]
      state.text=action.payload
    })    
    .addCase(actions.CLEAN.fulfilled, (state, action) => {
      state.text=[]
      state.text=[]
    })    
})
export default rootReducer