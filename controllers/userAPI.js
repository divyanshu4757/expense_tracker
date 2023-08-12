const Candy_details = require('../models/userData');






exports.createCandy = (req,res,next)=>{     

    const data = req.body; 
    Candy_details.create({
        name:data.name,
        price:data.price,
        description:data.description,
        quantity:data.quantity
    })
    .then((result)=>{
          const id=result.dataValues.id;
          res.json({userId:id});
      })
  };



exports.getCandy =(req,res,next)=>{     

    Candy_details.findAll()
    .then((result)=>{
        const pureResult = result.map(key=>key.dataValues)
       
        res.json(pureResult);

    })
    .catch((error)=>{
        console.log(error);
    })

  };


  exports.updateQuantity=(req,res,next) => {

    const Id = req.params.id;
 console.log(req.body ,Id)
   


    Candy_details.findByPk(Id).then((product)=>{
          
    product.quantity = product.quantity - req.body.number;

    product.save().then((result)=>{
        res.json(result.dataValues.quantity)
      
    })
        
    }
    )
    .catch((err)=>{
        console.log(err);
    });
    
    
   

}


exports.deleteCandy =(req,res,next)=>{ 
    const id = req.params.id;
    Candy_details.destroy({where:{id:id}})
    .then((result)=>{
          res.json({message:'Candy deleted'});
      })
      .catch(error=>{
         console.log(error);
      })
}

