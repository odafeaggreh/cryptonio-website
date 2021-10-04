// Signin user
const loginForm = document.querySelector("#loginForm");
const message = document.querySelector("#message");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = loginForm["email"].value;
  const password = loginForm["password"].value;

  if (email === "" || password === "") {
    message.innerHTML = `<div
      style="color: #842029;
    background-color: #f8d7da;
    border-color: #f5c2c7;
    padding: 1rem 1rem;
    margin-bottom: 1rem;
    margin-top: 1.5rem;
    border: 1px solid transparent;
    border-radius: .25rem;"
    >
      Please fill all the fields.
    </div>`;
  } else {
    message.innerHTML = ``;
    loginForm["signinBTN"].disabled = true;
    loginForm["signinBTN"].textContent = "Loading...";
    auth
      .signInWithEmailAndPassword(email, password)
      .then(function (response) {
        window.location.replace("/account/main/index.html");
      })
      .catch(function (error) {
        console.log(error.code);
        if (error.code === "auth/user-not-found") {
          loginForm["signinBTN"].disabled = false;
          loginForm["signinBTN"].textContent = "SIGN IN";
          message.innerHTML = `
              <div style="
              height: 60px;
              width: 100%;
              margin: 20px 0;
              padding: 1rem;
              color: #842029;
              background-color: #f8d7da;
              border-color: #f5c2c7;
              text-align: center;
              border: 1px solid transparent;
              border-radius: .25rem;
              ">
                You are not registered as a user. Please register
              </div>
            `;
        } else if (error.code === "auth/wrong-password") {
          loginForm["signinBTN"].disabled = false;
          loginForm["signinBTN"].textContent = "SIGN IN";
          message.innerHTML = `
            <div style="
            height: 60px;
            width: 100%;
            margin: 20px 0;
            padding: 1rem;
            color: #842029;
            background-color: #f8d7da;
            border-color: #f5c2c7;
            text-align: center;
            border: 1px solid transparent;
            border-radius: .25rem;
            ">
              The password you have entered is incorrect.
            </div>
          `;
        } else if (error.code === "auth/too-many-requests") {
          loginForm["signinBTN"].disabled = false;
          loginForm["signinBTN"].textContent = "SIGN IN";
          message.innerHTML = `
            <div style="
            height: auto;
            max-height: 90px;
            width: 100%;
            margin: 20px 0;
            padding: 1rem;
            color: #842029;
            background-color: #f8d7da;
            border-color: #f5c2c7;
            text-align: center;
            border: 1px solid transparent;
            border-radius: .25rem;
            ">
              You have entered an incorrect password too many times and your account has been temporarily disabled. Please try again after a few minutes or reset your password.
            </div>
          `;
        }
      });
  }
});
