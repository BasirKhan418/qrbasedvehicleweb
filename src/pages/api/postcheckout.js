const Razorpay = require('razorpay');
import * as crypto from "crypto"
const handler = async(req,res)=>{
    const {razorpay_order_id, razorpay_payment_id,razorpay_signature} = req.body;
    // Pass yours key_secret here
    const key_secret = process.env.NEXT_PUBLIC_KEY_SECRET;     
  
    // STEP 8: Verification & Send Response to User
      
    // Creating hmac object 
    let hmac = crypto.createHmac('sha256', key_secret); 
  
    // Passing the data to be hashed
    hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
      
    // Creating the hmac in the required format
    const generated_signature = hmac.digest('hex');
      
      
    if(razorpay_signature===generated_signature){
      // razorpay_order_id
  //     razorpay_payment_id: 'pay_LzpFe1jHO8rymk',
  // razorpay_order_id: 'order_LzpFVdVQVloXpf',
  // razorpay_signature:
 
     
  res.redirect(302, `${process.env.NEXT_PUBLIC_HOST}/components/Success?id=${razorpay_order_id}`);
      }
    else{
        res.status(400).json({success:false});
    }
}
export default handler;