export interface User {
  _id: string
  shoppingCart: string[]
  name: string
  email: string
  addresses: []
}

export interface Action {
  type: 'save' | 'delete' | 'update-cart' | 'delete-from-cart-one' | 'delete-from-cart-all' | 'save-cart'
  payload: User | string | string[]
}
export interface ActionCart {
  type: 'add-to-cart-one' | 'delete-from-cart-one' | 'delete-from-cart-all'
  payload: string
}
export interface IUserContext {
  userState: User | null
  accessToken: string | null
  dispatchUserState: React.Dispatch<Action>
  setAccessToken: React.Dispatch<React.SetStateAction<string | null>>
  cartInLocalStorage: string
  dispatchCartInLocalStorage: React.Dispatch<ActionCart>
  addOneToCart: (id: string) => Promise<void>
  removeOneFromCart: (id: string) => Promise<void>
  removeAllFromCart: () => Promise<void>
}

export interface Product {
  _id: string
  Images: string[]
  Name: string
  Price: number
  SellerName: string
  Seller: string
}

export interface ProductPreview {
  _id: string
  Images: string[]
  Name: string
  Price: number
}
