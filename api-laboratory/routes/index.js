module.exports= app=>{
    app.get("/",(req,res)=>{
        res.json({status:"API - TCC v2"});
    });


}