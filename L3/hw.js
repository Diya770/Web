let carts=["shoes","clothes","wallets","shirts","pants"]

function orderDetails(cart){
    //total no. of products
    let cnt=0;
    for(let i=0;i<cart.length;i++){
        console.log(cart[i]);
        cnt++;
    }
    console.log(cnt);


    //total amount of products nos*1000
    let totalAmount = cnt * 1000;
    console.log("Total Amount: " + totalAmount,1000);    
}

function orderSummary(){
    //total price and total product
    
    console.log("Total Products: " + cnt);
    console.log("Total Price: " + cnt*1000);
    //then generate order id
    let orderId = Math.floor(Math.random() * 1000000);
    console.log("Order ID: " + orderId);
    
}

function paymentGateway(){
    //order id,product details,price...Pyment is successful
}




function successfulOrder(){
    //it will show all the details about the payment product name and everything
}

