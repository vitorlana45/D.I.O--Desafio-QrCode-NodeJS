import chalk from "chalk";
import handle from "./handle.js";

async function createPassword(){
    const password = await handle();
    return console.log(chalk.yellowBright.red("password:",chalk.yellowBright(password)));
}

export default createPassword;