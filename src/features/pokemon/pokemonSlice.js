import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPokemon } from "./pokemonAPI";

const initialState = {
  pokemon: [],
  pokemonDetails: [],
  status: "idle",
};

export const fetchInitialPokemonList = createAsyncThunk(
  "pokemon/fetchPokemon",
  async () => {
    const response = await fetchPokemon();
    return response;
  }
);

export const fetchOnePokemon = createAsyncThunk(
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
      .addCase(fetchOnePokemon.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchOnePokemon.fulfilled, (state, action) => {
        state.status = "idle";
        state.pokemonDetails = [];
        state.pokemonDetails.push(action.payload);
      })
      .addCase(fetchOnePokemon.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export const { foo } = pokemonSlice.actions;

export default pokemonSlice.reducer;
