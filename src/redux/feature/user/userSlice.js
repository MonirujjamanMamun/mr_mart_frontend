import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import auth from '../../../utils/firebase/firebase.config';

const initialState = {
  name: '',
  email: '',
  isLoading: true,
  isError: false,
  error: '',
};

export const createUserWithEmailPass = createAsyncThunk(
  'createUserEmailPass',
  async ({ email, password, name }, { rejectWithValue }) => {
    try {
      console.log('Email:', email, 'Password:', password, 'Name:', name);
      const data = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: name });
      console.log(data);
      return {
        name: data.user.displayName,
        email: data.user.email,
      };
    } catch (error) {
      console.error('Error creating user:', error);
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUserWithEmailPass.pending, (state) => {
        (state.name = ''),
          (state.email = ''),
          (state.isLoading = true),
          (state.isError = false),
          (state.error = '');
      })
      .addCase(createUserWithEmailPass.fulfilled, (state, { payload }) => {
        (state.name = payload.name),
          (state.email = payload.email),
          (state.isLoading = false),
          (state.isError = false),
          (state.error = '');
      })
      .addCase(createUserWithEmailPass.rejected, (state, action) => {
        (state.name = ''),
          (state.email = ''),
          (state.isLoading = false),
          (state.isError = true),
          (state.error = action.error.message);
      });
  },
});

export default userSlice.reducer;
