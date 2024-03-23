import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./../features/pokemon/pokemonSlice";
import pokemonDetailReducer from "./../features/pokemon/pokemonDetailSlice";

// configureStore :Redux toolkit'te store olusturmak için kullanılan bir foksyondur.
// reducer bir fonksiyondur durum yönetimi sağlar. Temel olarak bir reducer mevcut durumu bir eylemi alır ,bu eyleme göre durumu günceller
//ve yeni durumu döndürür

export const store = configureStore({
  reducer: {
    pokemons: pokemonReducer,
    pokemonDetail: pokemonDetailReducer,
  },
});
