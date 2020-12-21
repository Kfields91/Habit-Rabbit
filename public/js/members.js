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
      displayGlobal: true,
    };
    $.post("/api/habits", habitObj).then(
      function (result) {
        window.location.reload();
      },
      function (err) {
        console.log(err);
      }
    );
  });
  // https://www.youtube.com/watch?v=a_C5xTwoEFQ  helped with idea below

  function func() {
    const Monday = document.querySelector(".Monday").checked;
    const Tuesday = document.querySelector(".Tuesday").checked;
    const Wednesday = document.querySelector(".Wednesday").checked;
    const Thursday = document.querySelector(".Thursday").checked;
    const Friday = document.querySelector(".Friday").checked;
    const Saturday = document.querySelector(".Saturday").checked;
    const Sunday = document.querySelector(".Sunday").checked;

    if (Monday === true) {
      console.log(" Mon-true");
      return true;
    }

    if (Tuesday === true) {
      console.log("Tues-true");
      return true;
    }

    if (Wednesday === true) {
      console.log("Wed-true");
      return true;
    }

    if (Thursday === true) {
      console.log("Thurs-true");
      return true;
    }

    if (Friday === true) {
      console.log("Fri-true");
      return true;
    }

    if (Saturday === true) {
      console.log("Sat-true");
      return true;
    }

    if (Sunday === true) {
      console.log("Sun-true");
      return true;
    }
  }
  func();
});

// Got the idea of how to collect data from checkboxes while being able to still check them off from this YouTube Video
// https://www.youtube.com/watch?v=yFYEHSh2iTQ

//   const checkbox = document.querySelector("#checkbox");

//   if (checkbox[0].checked) {
//     console.log("Monday Chosen");
//     return true;
//   }

//   if (checkbox[1].checked) {
//     console.log("Tuesday Chosen");
//     return true;
//   }

//   if (checkbox[2].checked) {
//     console.log("Wednesday");
//     return true;
//   }

//   if (checkbox[3].checked) {
//     console.log("Thursday");
//     return true;
//   }

//   if (checkbox[4].checked) {
//     console.log("Friday");
//     return true;
//   }

//   if (checkbox[5].checked) {
//     console.log("Saturday");
//     return true;
//   }

//   if (checkbox[6].checked) {
//     console.log("Sunday");
//     return true;
//   }
// }

// THESE TWO FUNCTIONS SEEM TO BE DOING THE SAME THING AND BOTH SAY ERROR HTMLInputElement
// FUNC IS NOT DEFINED. UNSURE WHY?

/// This function is capable of handling every checkbox click
// makes box actually uncheckable
// unsure how to handle
// const gridItem = document.querySelector(".div-container");

// gridItem.addEventListener("click", function (event) {
//   event.preventDefault();
//   // checkboxes.value = "";
//   console.log("I've been clicked!", event.type);
// });
