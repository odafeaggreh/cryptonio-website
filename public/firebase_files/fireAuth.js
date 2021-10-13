auth.onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    setUpDashboard(user);
    userUpdate(user);
    userAddress(user);
  } else {
    // User is signed out.
    console.log("User is signed out");
    window.location.replace("/account/main/auth_login.html");
  }
});
