$(document).ready(function () {
  // Pagination plugin settings
  $("#pagination").twbsPagination({
    totalPages: 10,
    visiblePages: 5,
    next: "Next",
    prev: "Prev",
    onPageClick: function (event, page) {
      //Variables
      let $tableData = $("#dataTable");
      let $userIdentification = 1;

      // Linking data's userID to corresponding page in pagination
      if (($userIdentification = page)) {
        $("#dataTable tbody").text([$userIdentification[0]]);
        // Call to API via AJAX
        $.ajax({
          url: "https://jsonplaceholder.typicode.com/todos",
          type: "GET",
          data: {
            userId: $userIdentification,
          },
          success: function (tableData) {
            $.each(tableData, function (i, item) {
              $tableData.append(
                "<tr>" +
                  "<td>" +
                  item.id +
                  "</td>" +
                  "<td>" +
                  item.title +
                  "</td>" +
                  "<td>" +
                  item.completed +
                  "</td>" +
                  "</tr>"
              );
            });
          },
        });
        // Sorting functionality
        $($tableData).tablesort();
        $("thead th.int").data("sortBy", function (th, td, tablesort) {
          return parseInt(td.text());
        });
      }
    },
  });

  //Search funtionality
  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#dataTable tbody tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});
