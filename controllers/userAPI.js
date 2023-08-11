const User_details = require('../models/userData')





exports.createExpense = (req,res,next)=>{     

    const data = req.body; 
    User_details.create({
        amount:data.amount,
        description:data.description,
        category:data.category
    })
    .then((result)=>{
          const id=result.dataValues.id;
          res.json({userId:id});
      })
  };



exports.getExpenses =(req,res,next)=>{     

    User_details.findAll()
    .then((result)=>{
        const pureResult = result.map(key=>key.dataValues)
       
        res.json(pureResult);

    })
    .catch((error)=>{
        console.log(error);
    })

  };


exports.deleteExpense =(req,res,next)=>{ 
    const id = req.params.id;
    User_details.destroy({where:{id:id}})
    .then((result)=>{
          res.json({message:'User deleted'});
      })
      .catch(error=>{
         console.log(error);
      })
}



exports.updateExpense=(req,res,next) => {

    const Id = req.params.id;
 console.log(req.body)
   


    User_details.findByPk(Id).then((product)=>{
          
    product.amount = req.body.amount
    product.description = req.body.description
    product.category = req.body.category

    product.save().then((result)=>{
        res.json({message:'Expense updated'});
    })
        
    }
    )
    .catch((err)=>{
        console.log(err);
    });
    
   

}

