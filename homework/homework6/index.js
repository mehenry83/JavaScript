/**
 * Homework 6
 *
 * @category    Homework 6
 * @author      Mary Henry <maryisnotgrumpy@gmail.com>
 * @date        2020.04.25
 * @grade       10 / 10
 *
 *
 **/

let pageHandler = {
  init: function () {
    try {
      $(document).ready(function () {
        if (jQuery) {
          alert("Yeah!");
        } else {
          alert("Doesn't Work");
        }
      });
      $(document).ready(function () {
        if (pageHandler) {
          alert("goodjob!");
        } else {
          alert("fail.");
        }
      });

      pageHandler.pageDiv = $("#firstElement");
      console.log(pageHandler.pageDiv);

      pageHandler.showDiv = $("#JohnCena");
      pageHandler.showDiv.hide();

      $(document).ready(function () {
        $("#show").click(function () {
          $("#JohnCena").show();
        });
      });
      $("#jquery").click(function () {
        document.location = "https://api.jquery.com/";
      });
    } catch (err) {
      alert("You messed up again?");
    }
  },
};

window.onload = pageHandler.init;
