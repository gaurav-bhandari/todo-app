import {configureStore} from '@reduxjs/toolkit';

import phoneReducer from '@src/redux/features/phoneSlice';
import taskReducer from '@src/redux/features/taskSlice';

export const store = configureStore({
  reducer: {
    phone: phoneReducer,
    task: taskReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
