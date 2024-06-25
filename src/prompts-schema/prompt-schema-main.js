
import chalk from "chalk";

const promptSchemaMain = [
    {
        name: "select",
        description: chalk.greenBright.bold(`Escolha a ferramenta `) + chalk.yellowBright.bold(`(1 - QRCODE ou 2- PASSWORD)`),
        pattern: /^[1-2]+$/,
        message: chalk.redBright.italic("Ecolha apenas entre 1 e 2"),
        required: true,
    }
]
export default promptSchemaMain;