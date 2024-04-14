const Razorpay = require('razorpay');
const handler = async(req,res)=>{
    console.log(req.body);
    let rand=Math.floor(Math.random()*10000000);
    var instance = new Razorpay({ key_id: `${process.env.NEXT_PUBLIC_KEY_ID}`, key_secret: `${process.env.NEXT_PUBLIC_KEY_SECRET}` })

var options = {
  amount: (req.body.totalprice)*100,  // amount in the smallest currency unit
  currency: "INR",
  receipt: `${rand}`
};
try{
instance.orders.create(options, async function(err, order) {
  console.log(order);
  res.status(200).json({order,success:true});
 console.log(order)
})}
  

catch(err){
console.log(err);
res.status(400).json({success:false});
}
}
export default handler;