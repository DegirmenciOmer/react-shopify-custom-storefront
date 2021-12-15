import React, { useContext, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'

const ProductPages = () => {
  const { handle } = useParams()

  const { fetchProductWithHandle, addItemToCheckout, product } =
    useContext(ShopContext)

  useEffect(() => {
    fetchProductWithHandle(handle)
  }, [fetchProductWithHandle, handle])

  return (
    <div>
      {!product.title ? (
        <div>Loading</div>
      ) : (
        <div>
          <h1>{product.title}</h1>
        </div>
      )}
    </div>
  )
}

export default ProductPages
