import { Products } from './components/products'
import { products as initialProducts} from './mocks/products.json'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { useFilters } from './hooks/useFilters'
import { useState } from 'react'

function App() {

const {filters, filterProducts} = useFilters()

const filteredProducts = filterProducts(initialProducts)

  return(
    <>
    <Header/>
    <Products products={filteredProducts}/>
    <Footer/>
    </>
  )
}

export default App
