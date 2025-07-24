'use client';

import { useState, useEffect } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [editingProduct, setEditingProduct] = useState(null);
  const [errorMessage, setErrorMesssage] = useState({});

  const fetchProducts = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/products');
    const data = await response.json();
    setProducts(data);
  };

  const addProduct = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ title, price: parseFloat(price) }),
    });

    const data = await response.json();

    if (!response.ok) {
      setErrorMesssage(data.errors);
      return;
    }

    setProducts([...products, data]);
    setTitle('');
    setPrice('');
    setErrorMesssage({});
  };

  const deleteProduct = async (id) => {
    await fetch(`http://127.0.0.1:8000/api/products/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    setProducts(products.filter((product) => product.id !== id));
  };

  const editProduct = (product) => {
    setEditingProduct(product);
    setTitle(product.title);
    setPrice(product.price);
    setErrorMesssage({});
  };

  const updateProduct = async () => {
    const response = await fetch(
      `http://127.0.0.1:8000/api/products/${editingProduct.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ title, price: parseFloat(price) }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      setErrorMesssage(data.errors);
      return;
    }

    setProducts(
      products.map((product) =>
        product.id === editingProduct.id ? data : product
      )
    );
    setTitle('');
    setPrice('');
    setEditingProduct(null);
    setErrorMesssage({});
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>

      <div className="space-y-2">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full"
        />
        {errorMessage.title && (
          <p className="text-red-500 text-sm">{errorMessage.title}</p>
        )}

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full"
        />
        {errorMessage.price && (
          <p className="text-red-500 text-sm">{errorMessage.price}</p>
        )}

        {editingProduct ? (
          <button
            type="button"
            className="bg-green-600 text-white px-4 py-2 rounded"
            onClick={updateProduct}
          >
            Update Product
          </button>
        ) : (
          <button
            type="button"
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={addProduct}
          >
            Add Product
          </button>
        )}
      </div>

      <ul className="mt-6 space-y-3">
        {products.map((product) => (
          <li
            key={product.id}
            className="flex justify-between items-center bg-gray-100 p-3 rounded"
          >
            <span>
              {product.title} - ${parseFloat(product.price).toFixed(2)}
            </span>
            <div className="space-x-2">
              <button
                type="button"
                className="bg-yellow-500 text-white px-3 py-1 rounded"
                onClick={() => editProduct(product)}
              >
                Edit
              </button>
              <button
                type="button"
                className="bg-red-600 text-white px-3 py-1 rounded"
                onClick={() => deleteProduct(product.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
