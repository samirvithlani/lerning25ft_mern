import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/CartSlice"
import bankReducer from "./redux/BankSlice"

import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore, PURGE } from "redux-persist";


// export const store = configureStore({
//     reducer:{
//         cart:cartReducer,
//         bank:bankReducer
//     }
// })

const rootReducer = combineReducers({
    cart:cartReducer,
    bank:bankReducer

})

const persistConfig ={
    key:"root",
    storage,
    whitelist:['bank']
}
export const store = configureStore({
    reducer: persistReducer(persistConfig,rootReducer),
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PURGE],
      },
    }),

})
export const persistor = persistStore(store)

