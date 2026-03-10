const asyncHandler = (requestHandler) => {
//   ↑ HOF — takes a function    
    return (req, res, next) => {
//          ↑ TOOK from express        
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
//                                     ↑ USED — real work happens here
    }
}

export {asyncHandler}





// const asyncHandler = () = {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async() => {}
// client ASKS  →  req
// you ANSWER   →  res
// went wrong   →  next


// const asyncHandler = () => async(req, res, next) => {
//     try {
        
//     } catch (err) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }

