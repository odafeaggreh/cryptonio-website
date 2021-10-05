const userFullName = document.querySelector("#userName");

const setUpDashboard = (user) => {
  db.collection("users")
    .doc(user.uid)
    .onSnapshot((details) => {
      console.log(details);
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
