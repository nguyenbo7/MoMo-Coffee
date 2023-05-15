import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
    const quantity = useSelector((state) => state.cart.quantity);

    return (
        <div className={styles.container}>
            <Link href="/" passHref>
                <div className={styles.logo}>MoMo Coffee</div>
            </Link>

            <Link href="/cart" passHref>
                <div className={styles.cart}>
                    <Image src="/img/cart.png" alt="" width="30px" height="30px" />
                    <div className={styles.counter}>{quantity}</div>
                </div>
            </Link>
        </div>
    );
};

export default Navbar;