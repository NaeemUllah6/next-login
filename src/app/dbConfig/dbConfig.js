// import mongoose from "mongoose";
// export async function connectdb() {
//     try {
//         mongoose.connect(process.env.MONGO_URL)
//         const connection = mongoose.connection
//         connection.on('connected', () => {
//             console.log('mongo connected successfully')
//         })
//         connection.on('error', (err) => {
//             console.log('mongo connection error ' + err)
//             process.exit()
//         })
//     }
//     catch (error) {
//         console.log('something went wrong while connecting to database');
//         console.log(error);

//     }
// }