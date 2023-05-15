import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Welcome to MoMo</h1>
            <p className={styles.desc}>
                At our specialty coffee concept, 
                you can enjoy a variety of local 
                and global specialty coffees, 
                including dark or light roasts, 
                single-origin or blended.
            </p>
            
            <div className={styles.wrapper}>
                {pizzaList.map((pizza) => (
                    <PizzaCard key={pizza._id} pizza={pizza} />
                ))}
            </div>
        </div>
    );
};

export default PizzaList;