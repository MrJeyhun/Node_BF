import { readFile, writeFile } from 'fs/promises'

// it will auto error handling for all those below
process.on('oncaughtException', (e) => {
    console.log(e);
})

//old fashionated 
// readFile(new URL('template.html', import.meta.url), 'utf-8', (err, data) => {
//     if(err) {
//         // throw err
//     } else {
//         // on success do smth
//         console.log('success!');
//     }
// })


//with promises 
// option 1
try {
    const result = await readFile(new URL('templatee.html', import.meta.url), 'utf-8')
} catch (error) {
    // console.error(error);
    // console.log('app has an error!'); //will log it

    throw error // whole app will crash
    console.log('app has an error!'); //will not log it
}

// option 2
const result = await readFile(new URL('templatee.html', import.meta.url), 'utf-8')
.catch(e => {
    throw e;
})
