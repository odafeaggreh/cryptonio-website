// registers user
const registerForm = document.querySelector("#registerForm");
const message = document.querySelector("#message");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const fullName = registerForm["name"].value;
  const email = registerForm["email"].value;
  const password = registerForm["password"].value;
  const confirmPassword = registerForm["confirmPassword"].value;

  if (
    fullName === "" ||
    email === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
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
  } else if (password !== confirmPassword) {
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
      Passwords do not match.
    </div>`;
  } else {
    message.innerHTML = ``;
    registerForm["registerBTN"].disabled = true;
    registerForm["registerBTN"].textContent = "Loading...";
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(function (response) {
        db.collection("users")
          .doc(response.user.uid)
          .set({
            fullName,
            email,
            totalDeposit: 0,
            profit: 0,
            totalBalance: 0,
          })
          .then(() => {
            window.location.replace("/account/main/index.html");
          });
      })
      .catch(function (error) {
        console.log(error.code);
        if (error.code === "auth/weak-password") {
          registerForm["registerBTN"].disabled = false;
          registerForm["registerBTN"].textContent = "SIGN IN";
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
            The password you have entered is not strong enough. Password should be more than six characters long.
          </div>`;
        } else if (error.code === "auth/email-already-in-use") {
          registerForm["registerBTN"].disabled = false;
          registerForm["registerBTN"].textContent = "SIGN IN";
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
            The email you are trying to use has already been registered, Please sign in or use another email.
          </div>`;
        } else {
          registerForm["registerBTN"].disabled = false;
          registerForm["registerBTN"].textContent = "SIGN IN";
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
            An error has occurred, please try again or contact support.
          </div>`;
        }
      });
  }
});
