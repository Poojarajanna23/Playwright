class APiUtils


{


    constructor(apicontext,loginpayload)
    {

        this.apicontext= apicontext;
        this.loginpayload= loginpayload;

    }

    async getToken()
    {

const loginResponse =  await this.apicontext.post("https://rahulshettyacademy.com/api/ecom/auth/login" ,

  {  data : this.loginpayload });

   
   const loginResponseJson = await loginResponse.json();

   

    let token = loginResponseJson.token;

   console.log(token);

   return token;


    }

    async createOrder(orderPayload)
    {

 let response= {};

 response.token= await this.getToken();
        const createOrderResponse= await  this.apicontext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
            {    data:   orderPayload   ,
                headers : {
        
        
                    'Authorization': response.token ,
                    'content-type': 'application/json'
        
         
                }
        
        
                 }
        
           );
        
           const createOrderResponseJson = await createOrderResponse.json();
        
          const  orderId= createOrderResponseJson.orders;

           response.orderId= orderId;


           return response;
    }





}

module.exports = {APiUtils};