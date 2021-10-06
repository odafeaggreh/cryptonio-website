const userFullName = document.querySelector("#userName");
const btcccc = document.querySelector("#btcccc");
console.log(btcccc);

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

  db.collection("webDetails")
    .doc("9fjAMgSQYkqAaUy13XHE")
    .onSnapshot((address) => {
      console.log(address.data().walletAddress);
      const lll = `
      <a href="#">${address.data().walletAddress}</a>
    `;

      btcccc.innerHTML = lll;
    });
};
