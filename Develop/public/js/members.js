$(document).ready(function () {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function (data) {
    $(".member-name").text(data.email);
  });
  $("#submitBtn").on("click", function (event) {
    event.preventDefault();
    console.log("got a button click");
    let newHabit = $("#new-habit").val();
    let habitObj = {
      name: newHabit,
      displayGlobal: true
    }
    $.post("/api/habits", habitObj).then(function (result) {
      window.location.reload();
    },
      function (err) {
        console.log(err);
      });
  });
});

