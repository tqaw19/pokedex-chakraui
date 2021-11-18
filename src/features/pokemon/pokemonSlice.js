import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchPokemon,
  fetchNextOffSetUrl,
  fetchOnePokemon,
} from "./pokemonAPI";

const initialState = {
  pokemon: [],
  pokemonDetails: [],
  status: "idle",
  offset: "pokemon?limit=10",
};

export const fetchInitialPokemonList = createAsyncThunk(
  "pokemon/fetchPokemon",
  async (offset) => {
    const response = await fetchPokemon(offset);
    return response;
  }
);

export const fetchNextOffSet = createAsyncThunk(
  "pokemon/fetchNextOffSetUrl",
  async (offset) => {
    const response = await fetchNextOffSetUrl(offset);
    return response;
  }
);

export const fetchOnePokemonDetail = createAsyncThunk(
  "pokemon/fetchOnePokemon",
  async (id) => {
    const response = await fetchOnePokemon(id);
    return response;
  }
);

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    foo: () => {},
  },
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
      })

      // Fetch nextOffSet
      .addCase(fetchNextOffSet.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchNextOffSet.fulfilled, (state, action) => {
        state.status = "idle";
        state.offset = action.payload;
      })
      .addCase(fetchNextOffSet.rejected, (state, action) => {
        state.status = "failed";
      })

      // Fetch one pokemon
      .addCase(fetchOnePokemonDetail.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchOnePokemonDetail.fulfilled, (state, action) => {
        state.status = "idle";
        state.pokemonDetails = [];
        state.pokemonDetails.push(...action.payload);
      })
      .addCase(fetchOnePokemonDetail.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export const { foo } = pokemonSlice.actions;

export default pokemonSlice.reducer;
