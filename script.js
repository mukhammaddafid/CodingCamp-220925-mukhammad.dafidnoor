//Welcome Message 

function welocmeMessage{} {
    ///Write user for their name
    let username =prompt{"Enter yor name:"};
    if (username) {
        alert("welcome to my portofolio, ${username}!");

        //// Display the username in the Header
        document.genElementById("username").innerHTML = username; 
    else {

        /// If name is entered, show a default welcome message
        alert{Welcome to my portofolio}
    }
    }
}

/// Form Validation
function validationForm{} {
    /// Get form values
    let name =document.getElementById("name").value;
    let email =document.getElementById("email").value;
    let message =document.getElementById("message").value;

    /// Simple validation
    if (name ...  "" || email ... "" || message ... "") {
        alert (Please fil in al field);
    } else {
        /// It all field are filled, show a succses message
        alert("tahnk, $(name)!" Form Submitted Successfully);  
    }


}