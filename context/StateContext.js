import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty, setQty] = useState(1);
    const [sort, setSort] = useState(0);
    const [showPlacanje, setShowPlacanje] = useState(false);
    const [trazi, setTrazi] = useState(false);
    const [showNapustanje, setShowNapustanje] = useState(false);
    const [postupak, setPostupak] = useState(1);
    const [showBurger, setShowBurger] = useState(false);
    const [sortirajPo, setSortirajPo] = useState();
    const [kategorija, setKategorija] = useState('');
    const [traziValue, setTraziValue] = useState('');

    let foundProduct;

    const onAdd = (product, quantity, boja, velicina) => {
        /*localStorage.removeItem('cart');*/
        const checkProductInCart = cartItems.find((item) => item._id === product._id && item.izabranaBoja === boja && item.izabranaVelicina === velicina);
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.cijena * quantity);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

        if (checkProductInCart) {
            const updatedCartItems = cartItems.map((cartProduct) => {
                if(cartProduct._id === product._id) return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + quantity
                }
            })
            /*localStorage.setItem('cart', JSON.stringify(updatedCartItems));*/
            setCartItems(updatedCartItems);
        } else {
            product.quantity = quantity;
            product.izabranaBoja = boja;
            product.izabranaVelicina = velicina;
            const newCart = [...cartItems, { ...product }];
            /*localStorage.setItem('cart', JSON.stringify(newCart));*/
            setCartItems([...cartItems, { ...product }]);
        }
    }

    const onRemove = (product) => {
        /*localStorage.removeItem('cart');*/
        foundProduct = cartItems.find((item) => item._id === product._id && item.izabranaBoja === product.izabranaBoja && item.izabranaVelicina === product.izabranaVelicina);
        const newCartItems = cartItems.filter((item) => item._id !== product._id || item.izabranaBoja !== product.izabranaBoja || item.izabranaVelicina !== product.izabranaVelicina);
    
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.cijena * foundProduct.quantity);
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);

        /*if (newCartItems != '') {
            localStorage.setItem('cart', JSON.stringify(newCartItems));
        }*/

        setCartItems(newCartItems);
      }

    const incQty = () => {
        setQty((prevQty) => prevQty + 1);
    }

    const decQty = () => {
        setQty((prevQty) => {
            if(prevQty - 1 < 1) return 1;

            return prevQty - 1;
        });
    }

    return (
        <Context.Provider
            value={{
                showCart,
                setShowCart,
                cartItems,
                setCartItems,
                totalPrice,
                totalQuantities,
                qty,
                incQty,
                decQty,
                onAdd,
                onRemove,
                sort,
                setSort,
                showPlacanje,
                setShowPlacanje,
                trazi,
                setTrazi,
                showNapustanje,
                setShowNapustanje,
                postupak,
                setPostupak,
                showBurger,
                setShowBurger,
                sortirajPo,
                setSortirajPo,
                kategorija,
                setKategorija,
                traziValue,
                setTraziValue,
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);