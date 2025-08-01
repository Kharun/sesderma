$(".webinars_item .btn").click(function () {
  $(".overlay").addClass("active");
  $(".webinars_modal").addClass("active");
});
$(".modal_close").click(function () {
  $(".overlay").removeClass("active");
  $(".webinars_modal").removeClass("active");
});
