import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { POKEMON_API_BASE_URL } from "../../../constants/contant";

const initialState = {
  pokemons: [],
  loading: false,
  error: false,
};

export const getPokemon = createAsyncThunk("getPokemon", async () => {
  const { data } = await axios.get(POKEMON_API_BASE_URL);
  return data;
});

export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPokemon.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPokemon.fulfilled, (state, action) => {
        state.loading = false;
        state.pokemons = action.payload;
      })
      .addCase(getPokemon.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default pokemonSlice.reducer;
