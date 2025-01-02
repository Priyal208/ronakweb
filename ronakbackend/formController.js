const form = require("./formModel")

exports.form = async(req,res) => {
    try {
        const {name,schoolname,phone,std,message} = req.body;
        const response = await form.create({name,schoolname,phone,std,message});
        console.log(response);
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry Created Successfully'
            }
        );
}
catch(err) {
    console.error(err);
    console.log(err);
    res.status(500) 
    .json({
        success:false,
        data:"internal server error",
        message:err.message,
    })
}
}