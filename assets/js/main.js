$(".webinars_item .btn").click(function () {
  $(".overlay").addClass("active");
  $(".webinars_modal").addClass("active");
});
$(".modal_close").click(function () {
  $(".overlay").removeClass("active");
  $(".webinars_modal").removeClass("active");
});

$(document).ready(function () {
  let currentStep = 0;
  const questions = $(".quiz_content_quest");
  const progressItems = $(".quiz_progress_item");
  const stepText = $(".quiz_question_title span");
  const title = $(".quiz_question_title");

  $(".quiz_start_btn").click(function () {
    $(".quiz_start").addClass("hidden");
    $(".quiz_content").addClass("active");
    $(".quiz_content").addClass("active");
    showStep(currentStep);
  });

  $(".quiz_next_btn").click(function () {
    if (currentStep < questions.length - 1) {
      currentStep++;
      showStep(currentStep);
    }
  });

  function showStep(index) {
    questions.removeClass("active").eq(index).addClass("active");

    if (index === questions.length - 1) {
      title.text("Финал");
    } else {
      title.html(`Шаг <span>${index + 1} / ${questions.length - 1}</span>`);
    }

    progressItems.removeClass("active");
    for (let i = 0; i <= index; i++) {
      progressItems.eq(i).addClass("active");
    }
  }
});
$(".quiz_variants_item").click(function () {
  $(this).toggleClass("active");
});
