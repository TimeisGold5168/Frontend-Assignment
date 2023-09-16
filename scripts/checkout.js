$(function(){
    let itemsubtotal = 0;
    for(let i=0; i<currentUser.cart.length; i++){
        const deposit = parseInt(currentUser.cart[i].deposit.split(" ")[1]);
        const rental = parseInt(currentUser.cart[i].rental.split(" ")[1]);
        const sum = deposit + rental;
        let quantity = currentUser.cart[i].quantity;
        let subtotal = sum*quantity;
        itemsubtotal += subtotal
        $(".checkout-name").append(`<p class="my-2">${currentUser.cart[i].title}</p>`);
        $(".checkout-price").append(`<p class="my-2">RM ${sum}</p>`);
        $(".checkout-quantity").append(`<p class="my-2"> ${quantity}</p>`);
        $(".checkout-subtotal").append(`<p class="my-2" >RM ${subtotal}</p>`);

    };


    $(".Checkout-subtotal").append(`<p class="my-2" > RM ${itemsubtotal.toFixed(2)}</p>`);
    let checkouttotal =  itemsubtotal + 5;
    $(".Checkout-total").append(`<p class="my-2"  > RM ${checkouttotal.toFixed(2)}</p>`);

    
})

function handleSaveAddressCheckbox() {
    const checkbox = $("#SaveAddress");
    if (!currentUser.address) {
        currentUser.address = {};
      }

    if (checkbox.is(":checked")) {
  
  
      currentUser.address.firstName =$("#Fname").val();
      currentUser.address.lastName =$("#Lname").val();
      currentUser.address.addressLine1 =$("#Address1").val();
      currentUser.address.addressLine2 =$("#Address2").val();
      currentUser.address.city = $("#City").val();
      currentUser.address.state = $("#State").val();
      currentUser.address.postalCode = $("#Zip").val();
      currentUser.address.phoneNumber = $("#Phone").val();
  
      
      alert("Billing Address saved successfully")
      localStorage.setItem(currentUser.username, JSON.stringify(currentUser));
    }
  }
  
  
  $("#SaveAddress").on("change", handleSaveAddressCheckbox);

  $(document).ready(function() {
    // Add a submit event listener to the form
    $("#paymentForm").submit(function(event) {
      event.preventDefault(); // Prevent the form from actually submitting
  
      // Get the values from the form fields
      const cardname = $("#Creditname").val();
      const cardNo = $("#CreditNo").val();
      const expMth = $("#Expmonth").val();
      const expYr = $("#Expyear").val();
      const CVV = $("#CVV").val();
  
      // Create an object with the payment information
      const paymentInfo = {
        cardname,
        cardNo,
        expMth,
        expYr,
        CVV
      };
  
      // Store the payment information in session storage
      sessionStorage.setItem("currentUser.payment", JSON.stringify(paymentInfo));
  
      // Inform the user that the payment information has been saved
      alert("Payment information has been saved.");
  
      // Clear session storage when the tab is closed
      $(window).on("beforeunload", function() {
        sessionStorage.removeItem("currentUser.payment");
      });
      window.location.href = "genre.html";
    });
  });