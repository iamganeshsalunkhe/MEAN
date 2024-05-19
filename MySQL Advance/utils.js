function createResult(err,data){
    
    const result = {}

    if (err){
        // if an error occurs
        result['status'] = 'error'
        result['error'] = err
    }else{
        // if their is no error
        result['status'] = 'success'
        result['data'] = data
    } 

    return result
}


module.exports ={
    createResult : createResult
}