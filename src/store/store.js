import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer  from "../features/userSlice"
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import trackReducer from "../features/trackSlice"
import navigateReducer from "../features/navigateSlice"

const rootReducer = combineReducers({
    user : authReducer,
    track : trackReducer,
    navigate : navigateReducer,

})
export const  persistConfig = {
    key : "root",
    storage
}

const persistedReducer = persistReducer(persistConfig , rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
         
})

export const persistor = persistStore(store)
