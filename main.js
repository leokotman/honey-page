// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjdEL22iPOaJAt3SXJcrbxGK69uPdBisE",
  authDomain: "honey-3c248.firebaseapp.com",
  projectId: "honey-3c248",
  storageBucket: "honey-3c248.appspot.com",
  messagingSenderId: "194850985822",
  appId: "1:194850985822:web:af81f290634e99524e21cf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const commentsRef = app.database().ref("comments");

function getFormValue(id) {
  return document.getElementById(id).value;
}

function submitForm(e) {
  e.preventDefault();
  
  let newComment = {
    id: Math.round(Math.random() * 1000),
    name: getFormValue("name"),
    email: getFormValue("email"),
    comment: getFormValue("comment"),
  };

  if (!newComment.name || !newComment.email || !newComment.comment) {
    console.log("Не все поля заполнены - нельзя добавить комментарий");
  } else {
    console.log(newComment);
  }
}

document
  .getElementById("comments_form")
  .addEventListener("submit", submitForm);
