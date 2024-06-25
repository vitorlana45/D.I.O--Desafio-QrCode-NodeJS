import createQrCode from "../qr-code/create.js";
import createPassword from "../password/create.js";
import promptSchemaMain from "../../prompts-schema/prompt-schema-main.js";
import prompt from "prompt";

async function userOutput() {
    prompt.get(promptSchemaMain, async (err, choice) => {

        if(choice.select == 1) await createQrCode();
        if(choice.select == 2)  await createPassword();
    });
    prompt.start();
}
export default userOutput;