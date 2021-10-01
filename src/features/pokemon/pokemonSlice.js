import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPokemon } from "./pokemonAPI";

const initialState = {
  pokemon: [],
  status: "idle",
};

export const fetchInitialPokemonList = createAsyncThunk(
  "pokemon/fetchPokemon",
  async () => {
    const response = await fetchPokemon();
    return response;
  }
);

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInitialPokemonList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchInitialPokemonList.fulfilled, (state) => {
        state.status = "idle";
      })
      .addCase(fetchInitialPokemonList.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const {} = pokemonSlice.actions;

export default pokemonSlice.reducer;
