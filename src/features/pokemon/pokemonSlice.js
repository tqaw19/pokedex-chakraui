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
      .addCase(fetchInitialPokemonList.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchInitialPokemonList.fulfilled, (state, action) => {
        state.status = "idle";
        state.pokemon = state.pokemon.concat(action.payload);
      })
      .addCase(fetchInitialPokemonList.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export const {} = pokemonSlice.actions;

export default pokemonSlice.reducer;
