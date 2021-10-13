const logout = document.querySelector("#logout");
const navbarLogout = document.querySelector("#navbarLogout");
console.log(logout);

logout.addEventListener("click", (e) => {
  e.preventDefault();
  auth
    .signOut()
    .then(function () {
      // Sign-out successful.
      window.location.replace("/account/main/auth_login.html");
    })
    .catch(function (error) {
      // An error happened.
    });
});

navbarLogout.addEventListener("click", (e) => {
  e.preventDefault();
  auth
    .signOut()
    .then(function () {
      // Sign-out successful.
      window.location.replace("/account/main/auth_login.html");
    })
    .catch(function (error) {
      // An error happened.
    });
});
