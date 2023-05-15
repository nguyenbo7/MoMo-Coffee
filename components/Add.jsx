import { useState } from "react";
import styles from "../styles/Add.module.css";
import axios from "axios";
import { useRouter } from "next/router";

const Add = ({ setClose }) => {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState(null);
    const [price, setPrice] = useState(null);


    const handleCreate = async () => {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "uploads");
        try {
        const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/dlvkemwvz/image/upload",
            data
        );

        const { url } = uploadRes.data;
        const newProduct = {
            title,
            prices,
            img: url,
        };

        await axios.post("http://localhost:3000/api/products", newProduct);
        setClose(true);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <span onClick={() => setClose(true)} className={styles.close}>
                    X
                </span>

                <h1>Add a new Coffee</h1>
                <div className={styles.item}>
                    <label className={styles.label}>Choose an image</label>
                    <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                </div>

                <div className={styles.item}>
                    <label className={styles.label}>Title</label>
                    <input
                        className={styles.input}
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className={styles.item}>
                    <label className={styles.label}>Price</label>
                    <input
                        className={styles.input}
                        type="text"
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>

                <button className={styles.addButton} onClick={handleCreate}>
                    Create
                </button>
                
            </div>
        </div>
    );
};

export default Add;