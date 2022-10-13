import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataGameUsers: [],
  currentUserNumber: -1,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    loadDataGame: (state, action) => {
      const userName = action.payload;
      const dataGameUsersState = JSON.parse(localStorage.getItem('dataGameUsersState'));
      
      if(dataGameUsersState){
        const userIndex = dataGameUsersState.findIndex(
          (user) => user.name === userName
        );
        if (userIndex !== -1) {
          state.currentUserNumber = userIndex;
        }
      }
    },
    saveDataGame: (state, action) => {
      const { userName, shoeScore } = action.payload;
      const dataGameUsersState = state.dataGameUsers;

      const userIndex = dataGameUsersState.findIndex(
        (user) => user.name === userName
      );

      if (userIndex !== -1) {
        if (dataGameUsersState[userIndex].highScore < shoeScore) {
          dataGameUsersState[userIndex] = {
            name: userName,
            highScore: shoeScore,
            points: shoeScore,
          };
        } else {
          dataGameUsersState[userIndex] = {
            name: userName,
            highScore: dataGameUsersState[userIndex].highScore,
            points: shoeScore,
          };
        }
      } else {
        dataGameUsersState.push({
          name: userName,
          highScore: shoeScore,
          points: shoeScore,
        });
        state.currentUserNumber = dataGameUsersState.length-1;
      }
      localStorage.setItem('dataGameUsersState', JSON.stringify(dataGameUsersState));
    },
    clearUserGame: (state) => {
      localStorage.removeItem('currentUserNumber');
      state.currentUserNumber = -1;
    },
  },
});

export const { loadDataGame, saveDataGame, clearUserGame } = gameSlice.actions;

export default gameSlice.reducer;