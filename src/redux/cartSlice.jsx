import {createSlice} from "@reduxjs/toolkit"

// initialisation du state
const initialState = {
    pokemonItems: localStorage.getItem("pokedexItem") ? JSON.parse(localStorage.getItem("pokedexItem")) : [],
    cartTotalQuantity: 0,
    cartQuantity: 0
};


const cartSlice = createSlice({
  name: "pokedex",
  initialState,
  reducers:{

    //ajouter le pokemon au pokedex
    addToCart(state, action) {

      const itemIndex = state.pokemonItems.findIndex((item) => item.id === action.payload.id);

      if (itemIndex >= 0) {
        state.pokemonItems[itemIndex].cartQuantity +=1;
       }
       else{
       const tempProduct = {...action.payload, cartQuantity: 1};
       state.pokemonItems.push(tempProduct);
}
localStorage.setItem("pokedexItem", JSON.stringify(state.pokemonItems))

    },


    //supprimer l'element du pokedex
    removeFromPokedex(state, action) {
     const nextPokedex = state.pokemonItems.filter(
        pokedexItem => pokedexItem.id !== action.payload.id
      )

      state.pokemonItems = nextPokedex;
      localStorage.setItem("pokedexItem", JSON.stringify(state.pokemonItems))
      
    }
  }
})


export const { addToCart, removeFromPokedex } = cartSlice.actions;

export default cartSlice.reducer;