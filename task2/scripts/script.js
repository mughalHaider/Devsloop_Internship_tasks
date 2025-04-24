function navigateForm(){
    window.location.href = "../html/form.html"
}

function navigateMain(){
    window.location.href = "../html/index.html"
}


function submitForm() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
  
    if (username === "" || password === "") {
      alert("Please enter both username and password");
      return;
    }
  
    if (username.length < 8 && password.length < 8) {
      alert("Username and password must be at least 8 characters long");
      return;
    }
  
    if (username.length < 8) {
      alert("Wrong Username! At least 8 characters");
      return;
    }
  
    if (password.length < 8) {
      alert("Wrong Password! At least 8 characters");
      return;
    }
  
    // ✅ All checks passed
    // alert("Logged In Successfully!");
    window.location.href = "../html/welcome.html"; // this will work now
  }