// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

function createComment() {
  let newComment = {
    id: Math.round(Math.random() * 1000),
    name: "",
    email: "",
    comment: "",
  };

  newComment.name = document.getElementById("name");
  newComment.email = document.getElementById("email");
  newComment.comment = document.getElementById("comment");

  if (!newComment.name || !newComment.email || !newComment.comment) {
    console.log("Не все поля заполнены - нельзя добавить комментарий");
  } else {
    return newComment;
  }
}

function postComment() {
  createComment();
  // app
  //   .database()
  //   .ref("comment/" + newComment.id)
  //   .set({
  //     id: newComment.id,
  //     name: newComment.name,
  //     email: newComment.email,
  //     comment: newComment.comment,
  //   });
  console.log("comment with data was sent!" + newComment);
}

document
  .getElementById("comments_form")
  .addEventListener("submit", postComment);
