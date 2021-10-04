// reset password
const forgotPassForm = document.querySelector("#forgotPassForm");

forgotPassForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = forgotPassForm["email"].value;
  const message = document.querySelector("#message");

  auth
    .sendPasswordResetEmail(email)
    .then(function () {
      // Email sent.
      message.innerHTML = `
            <div style="
            height: auth;
            width: 100%;
            margin: 20px 0;
            padding: 1rem;
            color: #0f5132;
            background-color: #d1e7dd;
            border-color: #badbcc;
            text-align: center;
            border: 1px solid transparent;
            border-radius: .25rem;
            ">
              Your request to reset your password has been successful. Please check your email inbox for further instruction
            </div>
          `;
    })
    .catch(function (error) {
      // An error happened.
      console.log(error.code);

      if (error.code === "auth/user-not-found") {
        message.innerHTML = `
        <div style="
        height: auto;
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
          Sorry, the email you have entered is not attached to any account. Please check credentials and try again or register.
        </div>
      `;
      } else {
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
          An error has occurred. Please try again.
        </div>
      `;
      }
    });
});
