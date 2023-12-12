import 'dotenv/config';
import { client } from '../src/services/redis';

const run = async () => {
    await client.hSet("car1", {
        color: "red",
        year: 2021
    })
    await client.hSet("car2", {
        color: "white",
        year: 2022
    })
    await client.hSet("car3", {
        color: "black",
        year: 2023
    })
    const commands = [1,2,3].map((id)=>{
        return client.hGetAll(`car${id}`);
    })

    const cars = await Promise.all(commands);

    console.log(cars);
};
run();
