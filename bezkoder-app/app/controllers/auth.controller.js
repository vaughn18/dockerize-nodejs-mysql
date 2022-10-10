const firebaseAuth = require("firebase/auth");
const { createUserWithEmailAndPassword, getAuth } = firebaseAuth;

// Create and Save a new Tutorial
exports.register = async (req, res) => {
  try {
    const auth = getAuth();
    const { email, username, password } = req.body;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        res.status(200).send({
          message: "User Registered Successfully!",
        });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;

        res.status(400).send({
          message: errorMessage || "Error with Firebase Auth registration",
          code: errorCode,
        });
      });
  } catch (e) {
    res.status(400).send({
      message: e || "Error with Firebase Auth registration",
    });
  }
};
