import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";
import Link from "next/link";

const PizzaCard = ({ pizza }) => {
    return (
        <div className={styles.container}>
            <Link href={`/product/${pizza._id}`} passHref>
                <Image src={pizza.img} alt="" width="200" height="200" />
            </Link>
            
            <h1 className={styles.title}>{pizza.title}</h1>
            <span className={styles.price}>${pizza.price}</span>
        </div>
    );
};

export default PizzaCard;