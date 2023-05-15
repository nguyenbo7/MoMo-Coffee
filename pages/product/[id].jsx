import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";

const Product = ({ pizza }) => {
    const [price, setPrice] = useState(pizza.price);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(addProduct({...pizza, price, quantity}));
    };

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={pizza.img} objectFit="contain" layout="fill" alt="" />
                </div>
            </div>
            
            <div className={styles.right}>
                <h1 className={styles.title}>{pizza.title}</h1>
                <span className={styles.price}>${price}</span>

                <div className={styles.add}>
                    <input
                        onChange={(e) => setQuantity(e.target.value)}
                        type="number"
                        defaultValue={1}
                        className={styles.quantity}
                    />
                    <button className={styles.button} onClick={handleClick}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps = async ({ params }) => {
    const res = await axios.get(
        `http://localhost:3000/api/products/${params.id}`
    );
    return {
        props: {
            pizza: res.data,
        },
    };
};

export default Product;