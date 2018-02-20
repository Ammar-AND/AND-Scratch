function init() {
  getUsers("http://localhost:9000/api/users");
}

function getUsers(url) {
  console.log(url);
  $.ajax({
    url: url,
    success: function(users) {
      console.log(users);

      var table = document.createElement("table");

      $.each(users, function(i, user) {
        var userDetailUrl = "localhost:9000/user.html?id=" + user._id;

        var userDetailLink = document.createElement("a");
        userDetailLink.id = user._id;
        var userDetailLinkText = document.createTextNode(
          user.firstName + " " + user.lastName
        );

        userDetailLink.appendChild(userDetailLinkText);
        userDetailLink.href = userDetailUrl;
        var tableRow = document.createElement("tr");
        var tableCol = document.createElement("td");
        tableRow.appendChild(tableCol);
        tableCol.appendChild(userDetailLink);
        table.appendChild(tableRow);
      });

      $("#users").append(table);
    }
  });
}

function getUserDetails() {
  console.log(window.location);

  var url = new URL(window.location);
  var c = url.searchParams.get("id");

  var userId = window.location.pathname.split("/")[1];
  var getUserDetailUrl = "http://localhost:9000/api/users/" + c;

  $.ajax({
    url: getUserDetailUrl,
    success: function(userDetails) {
      console.log(userDetails);
      $("#firstName").text(userDetails.firstName);
      $("#lastName").text(userDetails.lastName);
      $("#nationality").text(userDetails.nationality);
      $("#age").text(userDetails.age);
    }
  });
}
