$(function () {
    const getCookie = (name) => {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith(name + "=")) {
                return cookie.substring(name.length + 1);
            }
        }
        return null;
    }

    const username = getCookie("currentUser");
    const currentUser = JSON.parse(localStorage.getItem(username));

    if (currentUser == null) {
        window.location.href = "sign-in.html";
    } else {
        $('.username').text(currentUser.username);
        $('.membership').text(currentUser.membership);

        const isEmptyAddress = (
            currentUser.address.firstName === "" &&
            currentUser.address.lastName === "" &&
            currentUser.address.addressLine1 === "" &&
            currentUser.address.addressLine2 === "" &&
            currentUser.address.city === "" &&
            currentUser.address.state === "" &&
            currentUser.address.postalCode === "" &&
            currentUser.address.phoneNumber === ""
        );

        if (isEmptyAddress) {
            $('.editAddress').text('Add');
            $('.address').text('You have not set any address yet');
        } else {
            $('.editAddress').text('Edit');
            $('.address').html(`${currentUser.address.firstName} ${currentUser.address.lastName}<br>${currentUser.address.addressLine1}<br>${currentUser.address.addressLine2}<br>${currentUser.address.city}<br>${currentUser.address.state}<br>${currentUser.address.postalCode}<br>${currentUser.address.phoneNumber}`);
        }

        $('.editAddress').click(function(){
            $("#addressModal").show();
            $('#addressModal').css('display', 'flex');
        });

        $("#closeModal").click(function(){$('#addressModel').hide()});    
        $(window).click(function(e){if (e.target === addressModal){$('#addressModal').hide()}});   

        $('.popup').submit(function(e) {
            e.preventDefault();
            currentUser.address.firstName = $('input[name=\'firstName\']').val();
            currentUser.address.lastName = $('input[name=\'lastName\']').val();
            currentUser.address.addressLine1 = $('input[name=\'addressLine1\']').val();
            currentUser.address.addressLine2 = $('input[name=\'addressLine2\']').val();
            currentUser.address.city= $('input[name=\'city\']').val();
            currentUser.address.state = $('input[name=\'state\']').val();
            currentUser.address.postalCode = $('input[name=\'postalCode\']').val();
            currentUser.address.phoneNumber = $('input[name=\'phoneNumber\']').val();

            localStorage.setItem(username, JSON.stringify(currentUser));
            $('.address').html(`${currentUser.address.firstName} ${currentUser.address.lastName}<br>${currentUser.address.addressLine1}<br>${currentUser.address.addressLine2}<br>${currentUser.address.city}<br>${currentUser.address.state}<br>${currentUser.address.postalCode}<br>${currentUser.address.phoneNumber}`);
            $('#addressModal').hide();
        });
    }

    $('.log-out-button').click(function (e) {
        e.preventDefault();
        document.cookie = 'currentUser=;expires = Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        window.location.href = './landing-page.html';
    });
});




