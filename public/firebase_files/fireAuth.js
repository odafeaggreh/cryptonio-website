auth.onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    console.log("User is signed in successfully with: " + user.email);
  } else {
    // User is signed out.
    console.log("User is signed out");
    window.location.replace("/account/main/auth_login.html");
  }
});
