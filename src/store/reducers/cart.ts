import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type CartState = {
  items: Game[]
  isOpen: boolean
}

const initialState: CartState = { items: [], isOpen: false }

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Game>) => {
      const jogo = state.items.find((each) => each.id === action.payload.id)

      if (jogo === undefined) {
        state.items.push(action.payload)
      } else {
        alert('O jogo ja esta no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((each) => each.id !== action.payload)
    },
    openCart: (state) => {
      state.isOpen = true
    },
    closeCart: (state) => {
      state.isOpen = false
    },
    clearCart: (state) => {
      state.items = []
    }
  }
})

export const { add, openCart, closeCart, remove, clearCart } = cartSlice.actions
export default cartSlice.reducer
