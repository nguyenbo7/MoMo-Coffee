import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import Add from "../components/Add";
import AddButton from "../components/AddButton";
import PizzaList from "../components/PizzaList";

export default function Home({ pizzaList, admin }) {
    const [close, setClose] = useState(true);
    return (
        <div>
            <Head>
                <title>MoMo Coffee</title>
                <meta name="description" content="Best Coffee ever" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {<AddButton setClose={setClose} />}
            <PizzaList pizzaList={pizzaList} />
            {!close && <Add setClose={setClose} />}
        </div>
    );
}

export const getServerSideProps = async (ctx) => {
    const myCookie = ctx.req?.cookies || "";
    let admin = false;

    if (myCookie.token === process.env.TOKEN) {
        admin = true;
    }

    const res = await axios.get("http://localhost:3000/api/products");
    return {
        props: {
            pizzaList: res.data,
            admin,
        },
    };
};