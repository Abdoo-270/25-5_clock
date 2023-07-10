import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sessionLength: 1500,
  timer: 1500,
  breakLength: 300,
  isSession: true,
  isBreak: false,
  isTimerRunning: false,
  playSound: false,
  alert: false,
};

const clockSlice = createSlice({
  name: "clock",
  initialState,
  reducers: {
    increaseSession: (state) => {
      if (state.sessionLength < 3600 && !state.isTimerRunning) {
        state.sessionLength = state.sessionLength + 60;
        state.timer = state.sessionLength;
      }
    },
    decreaseSession: (state) => {
      if (state.sessionLength > 60 && !state.isTimerRunning) {
        state.sessionLength = state.sessionLength - 60;
        state.timer = state.sessionLength;
      }
    },
    increaseBreak: (state) => {
      if (state.breakLength < 3600 && !state.isTimerRunning) {
        state.breakLength = state.breakLength + 60;
      }
    },
    decreaseBreak: (state) => {
      if (state.breakLength > 60 && !state.isTimerRunning) {
        state.breakLength = state.breakLength - 60;
      }
    },
    startTimer: (state) => {
      state.isTimerRunning = true;
    },
    pauseTimer: (state) => {
      state.isTimerRunning = false;
    },
    resetTimer: (state) => {
      state.playSound = false;
      state.isSession = true;
      state.isTimerRunning = false;
      state.sessionLength = 1500;
      state.timer = 1500;
      state.breakLength = 300;
    },
    updateTimer: (state) => {
      if (state.timer >= 0) {
        --state.timer;
        state.playSound = false;
      }
      if (state.timer < 0) {
        state.playSound = true;
      }
      if (state.timer < 0 && state.isSession) {
        state.isSession = false;
        state.isBreak = true;
        state.timer = state.breakLength;
      }
      if (state.timer < 0 && state.isBreak) {
        state.isSession = true;
        state.isBreak = false;
        state.timer = state.sessionLength;
      }
      if (state.timer < 60) {
        state.alert = true;
      }
      if (state.timer > 60) {
        state.alert = false;
      }
    },
  },
});

export const {
  increaseSession,
  decreaseSession,
  increaseBreak,
  decreaseBreak,
  startTimer,
  pauseTimer,
  resetTimer,
  updateTimer,
} = clockSlice.actions;

export default clockSlice.reducer;
