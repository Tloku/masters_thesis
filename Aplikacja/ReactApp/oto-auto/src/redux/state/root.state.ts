import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

const store = configureStore({
    reducer: {

    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppRootDispatch = typeof store.dispatch
export const useAppRootDispatch: () => AppRootDispatch = useDispatch
export default store;