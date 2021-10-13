const userFullName = document.querySelector("#userName");
const withdrawForm = document.querySelector("#withdrawForm");
console.log(withdrawForm);

const setUpDashboard = (user) => {
  db.collection("users")
    .doc(user.uid)
    .onSnapshot((details) => {
      userFullName.innerHTML = `
            <p class="pt-5 fs-14 mb-0 fw-700 text-primary">
                ${details.data().fullName}
            </p>

            <small class="fs-10 mb-0 text-uppercase text-mute">
                User
            </small>
          `;
    });
};

// Process withdrawal form

// function sendEmail() {
//   const fullName = withdrawForm["fullName"].value;
//   const email = withdrawForm["email"].value;

//   const callable = functions.httpsCallable("sendWithdrawEmail");

//   return callable({ email: email }).then((result) => {
//     console.log(result);
//   });
// }

withdrawForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const fullName = withdrawForm["fullName"].value;
  const email = withdrawForm["email"].value;
  const walletAdd = withdrawForm["walletAdd"].value;
  const amount = withdrawForm["amount"].value;
  const message = document.querySelector("#message");

  if (fullName === "" || email === "" || walletAdd === "" || amount === "") {
    message.innerHTML = `
        <div style="
          height: auto;
          width: 90%;
          max-width: 750px;
          margin: 50px auto 10px auto;
          padding: 1rem;
          color: #842029;
          background-color: #f8d7da;
          border-color: #f5c2c7;
          text-align: center;
          border: 1px solid transparent;
          border-radius: .25rem;
    
          ">
          No field can be left blank. Please, fill all the available fields to proceed.
        </div>
        `;
  } else {
    message.innerHTML = `
    <div style="
      height: auto;
      width: 90%;
      max-width: 750px;
      margin: 50px auto 10px auto;
      padding: 1rem;
      color: #0f5132;
      background-color: #d1e7dd;
      border-color: #badbcc;
      text-align: center;
      border: 1px solid transparent;
      border-radius: .25rem;

      "
    >
      Your request for withdrawal has been received and is being processed. Please, reach out to your account manager with your withdrawal details for further instructions.
    </div>
    `;
  }
});
