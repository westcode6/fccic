document.querySelector("#toggle").addEventListener("click", (e) => {
  e.preventDefault();

  if (document.querySelector("#navContent").classList.contains("hidden")) {
    document.querySelector("#navContent").classList.remove("hidden");
  } else {
    document.querySelector("#navContent").classList.add("hidden");
  }
});

function $(el) {
  return document.querySelector(el);
}

function sleekSidebar() {
  function toggle(el, arg1, arg2, arg3) {
    return $(el).addEventListener("click", (e) => {
      $(".sidebar").classList.remove(arg1);
      $("#mainOverlay").classList.toggle(arg2);
      $(".sidebar").classList.add(arg3);
    });
  }

  toggle(".toggler", "hide-sidebar", "hidden", "reveal-sidebar");
  toggle("#mainOverlay", "reveal-sidebar", "hidden", "hide-sidebar");
}
/*-----------------------------*/
// MODAL
function modal() {
  $(".modal").classList.add("reveal-modal");
}
function hideModal() {
  $(".modal").classList.remove("reveal-modal");
}

