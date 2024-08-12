import { Products } from './components/products'
import { products as initialProducts} from './mocks/products.json'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { useFilters } from './hooks/useFilters'
import { useState } from 'react'
import { Cart } from './components/cart'
import { CartProvider } from './context/cart'

function App() {

const {filterProducts} = useFilters()

const filteredProducts = filterProducts(initialProducts)

  return(
  
    <CartProvider>
    <Header/>
    <Cart/>
    <Products products={filteredProducts}/>
    <Footer/>
    </CartProvider>
  )
}

export default App
