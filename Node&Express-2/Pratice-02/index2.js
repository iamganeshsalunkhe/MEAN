const express = require('express')

const router = express.Router()

const product =[
    {
    id:1, title:'Product 1',
    description:'test description 1',
    price:100
    },
    {
    id:2, title:'Product 2',
    description:'test description 2',
    price:250
    },
]
// create
router.post('/product',(req,res) =>{
    const body = req.body
    
    // read the all the values
    const id = body.id
    const title = body.title
    const description = body.description
    const price = body.price    

    // inset the new object into product array

    product.push({
        id:id,
        title:title,
        description:description,
        price:price
    })

    res.send('product added.')
})


// read
router.get('/product',(req,res) =>{
    // const strProduct = JSON.stringify(product)
    // res.setHeader('Content-Type','application/json')
    // res.end(strProduct)
    res.send(product)
})

// Update

// old method to put something

// router.put('/product',(req,res) =>{
//     const body = req.body

//     // the proudct to modify
//     const id= body.id

//     // new price
//     const price = body.price

//     for (let index = 0; index < product.length; index++) {
//         const element = product[index];
//         if (element['id'] == id){
//             // found the product to update
//             element['price']= price 
//         }
//     }
//     res.send('Product updated')
// })


// accept the product id using query parameter
router.put('/product/:id',(req,res) =>{
    const body = req.body

    // the product to modify

    const id = req.params.id

    const price = body.price

    for (let index = 0; index < product.length; index++) {
        const element = product[index];
        if(element['id']==id){
            // fount the desired id 
            element['price'] = price
        }
        
    }

    res.send('product updated')

})




// delete
    router.delete('/product/:id',(req,res) =>{
        

        const id = req.params.id

        for (let index = 0; index < product.length; index++) {
            const element = product[index];
            if (element.id = id){
                // found the product
                product.splice(index,1)
                break
            }
        }
        res.send('Delete Successfully')
    })

    
module.exports = router