import {createSlice} from "@reduxjs/toolkit"



const initialState = {
    cartItems: localStorage.getItem("pokedexItem")? JSON.parse(localStorage.getItem('pokedexItem')) : [] ,
    cartTotalQuantity: 0
};


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers:{

    addToCart(state, action) {

    const itemIndex =  state.cartItems.findIndex(item => item.id === action.payload.id)
    //console.log('rere', itemIndex)

      if(itemIndex >= 0) {
       state.cartItems[itemIndex].cartQuantity +=1;
      }
      else{
        const tempPokemon = {...action.payload, cartQuantity: 0};
        state.cartItems.push(tempPokemon);
      }

      
      localStorage.setItem("pokedexItem", JSON.stringify(state.cartItems))

    },

    removeFromPokedex(state, action) {
     const nextPokedex = state.cartItems.filter(
        cartItem => cartItem.id !== action.payload.id
      )

      state.cartItems = nextPokedex;
      localStorage.setItem("pokedexItem", JSON.stringify(state.cartItems))
    }
  }
})

export const { addToCart, removeFromPokedex } = cartSlice.actions;

export default cartSlice.reducer;