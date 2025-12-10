import { useState } from "react";
import ProductsCard from "../POS/ProductsCard";
import CartCard from "../POS/CartCard";

const POSPage = () => {
    const [cart, setCart] = useState([]);

    const products = [
        { id: 1, name: "Paracetamol 500mg", price: 4.0, stock: 141 },
        { id: 2, name: "Amoxicillin 250mg", price: 12.0, stock: 72 },
        { id: 3, name: "Ibuprofen 400mg", price: 6.0, stock: 115 },
        { id: 4, name: "Surgical Gloves (Pair)", price: 1.0, stock: 498 },
        { id: 5, name: "Face Masks (Box of 50)", price: 12.0, stock: 44 },
        { id: 6, name: "Vitamin D3 Supplement", price: 16.0, stock: 11 },
    ];

  // Add item to cart
    const addToCart = (item) => {
        setCart((prev) => {
            const exists = prev.find((i) => i.id === item.id);
            if (exists) {
                return prev.map((i) =>
                    i.id === item.id ? { ...i, qty: i.qty + 1 } : i
                );
            }
            return [...prev, { ...item, qty: 1 }];
        });
    };




    const removeItem = (index) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
    };

    // Increase / Decrease qty
    const increaseQty = (id) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, qty: item.qty + 1 } : item
            )
        );
    };
    const decreaseQty = (id) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 }
                    : item
            )
        );
    };

    return (
        <div className="flex flex-col md:flex-row gap-4 p-4 ">
            {/* Left side: Products */}
            <div className="md:w-2/3">
                <ProductsCard products={products} addToCart={addToCart} />
            </div>

            {/* Right side: Cart */}
            <CartCard
                cart={cart}
                removeItem={removeItem}
                increaseQty={increaseQty}
                decreaseQty={decreaseQty}
            />
        </div>
    );
};

export default POSPage;
