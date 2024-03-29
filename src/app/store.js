import { configureStore} from "@reduxjs/toolkit";
import userReducer from '../features/user/userSLice'
import movieReducer from '../features/movie/movieSlice'

export default configureStore({
        reducer: {
            user : userReducer,
            movie : movieReducer
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false,
        }),
})