import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

type Task = {
  category: string;
  details: string;
  expiry_date: string;
  name: string;
  phone: string;
  status: string;
  uniquelink: string;
};

export interface TaskState {
  loading: boolean;
  taskList: Task[];
  error: string;
}

const initialState: TaskState = {
  loading: false,
  taskList: [],
  error: '',
};

export const getAllTasks = createAsyncThunk('task/getAllTasks', (data: any) => {
  return axios
    .get(`http://13.126.244.224/api/task?phone=%2B${data.phoneNumber}`, {
      headers: {
        Authorization:
          'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY4OTc2MDQyMiwianRpIjoiYzRkYzhmNzUtZGY5Ni00MWUxLWIxY2UtZTc2YTRhNWFhNjM0IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Iis5MTk0Nzk3ODkyMTEiLCJuYmYiOjE2ODk3NjA0MjJ9.B21c7hAjzoIqQicIaf8fhXmFJWZxrPfQI9pC0Y9pu1k',
      },
    })
    .then(response => response.data);
});

// export const otpVerify = createAsyncThunk('phone/otpVerify', (data: any) => {
//   return axios
//     .post('http://13.126.244.224/api/verification', {
//       phone: data.phoneNumber,
//       code: data.otp,
//     })
//     .then(response => response.data);
// });

export const updateTask = createAsyncThunk('task/updateTask', (data: any) => {
  return axios
    .post(
      'http://13.126.244.224/api/task',
      {
        phone: data.phoneNumber,
        uniquelink: data.uniqueLink,
        status: data.status,
      },
      {
        headers: {
          Authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY4OTc2MDQyMiwianRpIjoiYzRkYzhmNzUtZGY5Ni00MWUxLWIxY2UtZTc2YTRhNWFhNjM0IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Iis5MTk0Nzk3ODkyMTEiLCJuYmYiOjE2ODk3NjA0MjJ9.B21c7hAjzoIqQicIaf8fhXmFJWZxrPfQI9pC0Y9pu1k',
        },
      },
    )
    .then(response => response.data);
});

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    // clearPhoneState: state => {
    //   state.loading = false;
    //   state.isPhoneVerified = false;
    //   state.isOtpVerified = false;
    //   state.error = '';
    // },
  },
  extraReducers: builder => {
    builder.addCase(getAllTasks.pending, state => {
      state.loading = true;
    });
    builder.addCase(getAllTasks.fulfilled, (state, action) => {
      state.loading = false;
      state.taskList = action.payload.data?.task;
      state.error = '';
    });
    builder.addCase(getAllTasks.rejected, (state, action) => {
      state.loading = false;
      state.taskList = [];
      state.error = action.error.message || 'Something went wrong';
    });

    builder.addCase(updateTask.pending, state => {
      state.loading = true;
    });
    builder.addCase(updateTask.fulfilled, (state, action) => {
      debugger;
      state.loading = false;
      state.taskList = action.payload.data?.task;
      state.error = '';
    });
    builder.addCase(updateTask.rejected, (state, action) => {
      state.loading = false;
      state.taskList = [];
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

//export const {clearPhoneState} = taskSlice.actions;

export default taskSlice.reducer;
