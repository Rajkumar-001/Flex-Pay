import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
  reducer: {
    // Use a logical key name, e.g., "user"
  },
});

//


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
