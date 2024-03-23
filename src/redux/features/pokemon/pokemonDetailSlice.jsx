import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { POKEMON_API_BASE_URL } from "../../../constants/contant";

const initialState = {
  pokemonDetail: [],
  loading: false,
  error: false,
};

export const getPokemonDetail = createAsyncThunk(
  "getPokemonDetail",
  async (pokemonName) => {
    const { data } = await axios.get(`${POKEMON_API_BASE_URL}${pokemonName}`);
    return data;
  }
);

export const pokemonDetailSlice = createSlice({
  name: "pokemonDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPokemonDetail.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPokemonDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.pokemonDetail = action.payload;
      })
      .addCase(getPokemonDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default pokemonDetailSlice.reducer;
