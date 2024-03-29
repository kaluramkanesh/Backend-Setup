// this is 2nd approach to handle async using promise
const async_handler = (request_handler) => {
    Promise.resolve(request_handler(req, res, next)).catch((error) => next(error))
}

// const async_handler=()=>{}
// const async_handler=(func)=>()=>{}
// const async_handler = (func) => async () => { }

// we can do like this also this is 1nd approach to handle async

// const async_handler = (fn) => async(req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }