$(document).ready(function () {
  // Function to fetch data and populate the table
  // This can be in a separate file or embedded here

  let $tableData = $("#dataTable");
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/todos",
    type: "GET",
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
});
