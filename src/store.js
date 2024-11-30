import { configureStore } from '@reduxjs/toolkit'

import userReducer from './features/user/userSlice'
import cardReducer from './features/cart/cartSlice'

const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cardReducer,
    },
})

export default store
