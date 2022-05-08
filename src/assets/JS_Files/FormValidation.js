$(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='registration']").validate({
        // Specify validation rules
        rules: {
            // The key name on the left side is the name attribute
            // of an input field. Validation rules are defined
            // on the right side
            Name: "required",
            lastname: "required",
            direccion: "required",
            postalcode: "required",
            city: "required",
            phonenumber: "required",
            mmaa: "required",
            card: "required",
            cvv: "required",
            email: {
                required: true,
                // Specify that email should be validated
                // by the built-in "email" rule
                email: true
            },
            password: {
                required: true,
                minlength: 5
            }
        },
        // Specify validation error messages
        messages: {
            Name: "Please enter your firstname",
            lastname: "Please enter your lastname",
            address: "Please enter a valid address",
            postalcode: "Please enter a valid Postal Code",
            city: "Please enter a valid city",
            phonenumber: "Please enter a valid Phone Number",
            mmaa: "Please enter a valid expiration date",
            card: "Please enter a valid Credit Card",
            cvv: "Please enter a valid CVV",
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            email: "Please enter a valid email address"
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function(form) {
            form.submit();
        }
    });
});


/*
$("#my_image").attr("src","/IMGS/purchase/security.png");


const image_input = document.querySelector("#image_input");
var uploaded_image;

image_input.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploaded_image = reader.result;
        document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
});

*/
