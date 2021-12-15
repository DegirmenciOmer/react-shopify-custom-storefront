import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/shopContext'
import { Link } from 'react-router-dom'

const Home = () => {
  const { fetchAllProducts, products } = useContext(ShopContext)
  useEffect(() => {
    fetchAllProducts()
  }, [fetchAllProducts])
  console.log(products)
  return (
    <div>
      Home page
      {products.length === 0 ? (
        <div>Loading...</div>
      ) : (
        products.map((product) => (
          <Link key={product.id} to={`/products/${product.handle}`}>
            <div>{product.title}</div>
          </Link>
        ))
      )}
    </div>
  )
}

export default Home
