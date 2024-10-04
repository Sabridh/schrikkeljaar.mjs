import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { log } from 'node:console';
const userInput = readline.createInterface({input, output});

let jaar = parseFloat(await userInput.question ("voer een jaar in."))

if (jaar % 4 == 0 || jaar % 100 != 0 && jaar % 400 == 0) {
    console.log("februari heeft in " + jaar + " 29 dagen");
    
}else{console.log("februari heeft in" + jaar + " 28 dagen")



}

