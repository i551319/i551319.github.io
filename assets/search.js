document.addEventListener('DOMContentLoaded', function() {
  var searchInput = document.getElementById('search');
  var tables = document.getElementsByTagName('table');

  searchInput.addEventListener('input', function() {
    var searchTerm = searchInput.value.toLowerCase();

    Array.from(tables).forEach(function(table) {
      var rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');

      Array.from(rows).forEach(function(row) {
        var cells = Array.from(row.getElementsByTagName('td'));
        var found = cells.some(function(cell) {
          return cell.textContent.toLowerCase().includes(searchTerm);
        });

        if (found) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    });
  });
});