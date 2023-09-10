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

      // Call to API via AJAX
      if (($userIdentification = page)) {
        $("#dataTable tbody").text([$userIdentification[0]]);
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
      }
    },
  });

  // Function to fetch data and populate the table
  // This can be in a separate file or embedded here
});
