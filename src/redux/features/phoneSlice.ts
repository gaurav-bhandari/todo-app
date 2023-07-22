import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export interface PhoneState {
  loading: boolean;
  isPhoneVerified: boolean;
  isOtpVerified: boolean;
  token: string;
  name: string;
  error: string;
}

const initialState: PhoneState = {
  loading: false,
  isPhoneVerified: false,
  isOtpVerified: false,
  token: '',
  error: '',
  name: '',
};

export const phoneVerify = createAsyncThunk(
  'phone/phoneVerify',
  (data: any) => {
    return axios
      .get(
        `http://13.126.244.224/api/verification?phone=%2B91${data.phoneNumber}&signature=xyz`,
      )
      .then(response => response.data);
  },
);

export const otpVerify = createAsyncThunk('phone/otpVerify', (data: any) => {
  return axios
    .post('http://13.126.244.224/api/verification', {
      phone: data.phoneNumber,
      code: data.otp,
    })
    .then(response => response.data);
});

export const createNewUser = createAsyncThunk(
  'phone/createNewUser',
  (data: any) => {
    return axios
      .post(
        'http://13.126.244.224/api/user',
        {
          phone: data.phoneNumber,
          name: data.name,
        },
        {
          headers: {
            Authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY4OTc2MDQyMiwianRpIjoiYzRkYzhmNzUtZGY5Ni00MWUxLWIxY2UtZTc2YTRhNWFhNjM0IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6Iis5MTk0Nzk3ODkyMTEiLCJuYmYiOjE2ODk3NjA0MjJ9.B21c7hAjzoIqQicIaf8fhXmFJWZxrPfQI9pC0Y9pu1k',
          },
        },
      )
      .then(response => response.data);
  },
);

export const phoneSlice = createSlice({
  name: 'phone',
  initialState,
  reducers: {
    clearPhoneState: state => {
      state.loading = false;
      state.isPhoneVerified = false;
      state.isOtpVerified = false;
      state.error = '';
    },
  },
  extraReducers: builder => {
    builder.addCase(phoneVerify.pending, state => {
      state.loading = true;
    });
    builder.addCase(phoneVerify.fulfilled, (state, action) => {
      state.loading = false;
      state.isPhoneVerified =
        action.payload.data?.status === 'Ok' ? true : false;
      state.error = '';
    });
    builder.addCase(phoneVerify.rejected, (state, action) => {
      state.loading = false;
      state.isOtpVerified = false;
      state.error = action.error.message || 'Something went wrong';
    });

    builder.addCase(otpVerify.pending, state => {
      state.loading = true;
    });
    builder.addCase(otpVerify.fulfilled, (state, action) => {
      state.loading = false;
      state.isOtpVerified = action.payload.data?.status === 'Ok' ? true : false;
      state.token = action.payload.data.token;
      state.error = '';
    });
    builder.addCase(otpVerify.rejected, (state, action) => {
      state.loading = false;
      state.isOtpVerified = false;
      state.error = action.error.message || 'Something went wrong';
      state.token = '';
    });

    builder.addCase(createNewUser.pending, state => {
      state.loading = true;
    });
    builder.addCase(createNewUser.fulfilled, (state, action) => {
      state.loading = false;
      state.name = action.payload.data?.name;
      state.error = '';
    });
    builder.addCase(createNewUser.rejected, (state, action) => {
      state.loading = false;
      state.name = '';
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export const {clearPhoneState} = phoneSlice.actions;

export default phoneSlice.reducer;
