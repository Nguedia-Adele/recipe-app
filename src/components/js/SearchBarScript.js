import $ from "jquery";

$(document).ready(function() {
  const searchInput = $("input[type='text']");
  const filterIcon = $(".filter-icon");
  const clearIcon = $(".clear-icon");

  // Toggle filter icon and clear icon
  searchInput.on("input", function() {
    if ($(this).val() !== "") {
      filterIcon.hide();
      clearIcon.show();
    } else {
      filterIcon.show();
      clearIcon.hide();
    }
  });

  // Clear input and toggle icons
  clearIcon.on("click", function() {
    searchInput.val("");
    clearIcon.hide();
    filterIcon.show();
  });
});
