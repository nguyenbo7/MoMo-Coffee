import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/footer.png" objectFit="cover" layout="fill" alt="" />
            </div>

            <div className={styles.item}>
                <div className={styles.card}>
                    <h1 className={styles.title}>Our Location</h1>
                    <p className={styles.text}>
                        1 Washington Square
                        <br /> San Jose, CA 95192
                        <br /> (408) 924 - 1000
                    </p>
                </div>


                <div className={styles.card}>
                    <h1 className={styles.title}>WORKING HOURS</h1>
                    <p className={styles.text}>
                        MONDAY UNTIL FRIDAY
                        <br /> 9:00 – 22:00
                    </p>
                    <p className={styles.text}>
                        SATURDAY - SUNDAY
                        <br /> 12:00 – 24:00
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;