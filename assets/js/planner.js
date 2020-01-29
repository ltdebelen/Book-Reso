$("#janClick").on("click", function() {
  $(".months").hide(500);
  $("#janDisplay").show(500);
});

$("#janBookSubmit").on("click", function() {
  var book = $("#janBookInput").val();
  var janBookSaved = $("<button>")
    .addClass("button is-large bookButtons")
    .append(book);
  $("#janBookHolder").prepend(janBookSaved);
  $("#janBookHolder").show(500);
  $("#janBookInput").val("");
});

$("#febClick").on("click", function() {
  $(".months").hide(500);
  $("#febDisplay").show(500);
});

$("#febBookSubmit").on("click", function() {
  var book = $("#febBookInput").val();
  var febBookSaved = $("<button>")
    .addClass("button is-large bookButtons")
    .append(book);
  $("#febBookHolder").prepend(febBookSaved);
  $("#febBookHolder").show(500);
  $("#febBookInput").val("");
});

$("#marClick").on("click", function() {
  $(".months").hide(500);
  $("#marDisplay").show(500);
});

$("#marBookSubmit").on("click", function() {
  var book = $("#marBookInput").val();
  var marBookSaved = $("<button>")
    .addClass("button is-large bookButtons")
    .append(book);
  $("#marBookHolder").prepend(marBookSaved);
  $("#marBookHolder").show(500);
  $("#marBookHolder").val("");
});

$("#aprClick").on("click", function() {
  $(".months").hide(500);
  $("#aprDisplay").show(500);
});

$("#aprBookSubmit").on("click", function() {
  var book = $("#aprBookInput").val();
  var aprBookSaved = $("<button>")
    .addClass("button is-large bookButtons")
    .append(book);
  $("#aprBookHolder").prepend(aprBookSaved);
  $("#aprBookHolder").show(500);
  $("#aprBookInput").val("");
});

$("#mayClick").on("click", function() {
  $(".months").hide(500);
  $("#mayDisplay").show(500);
});

$("#mayBookSubmit").on("click", function() {
  var book = $("#mayBookInput").val();
  var mayBookSaved = $("<button>")
    .addClass("button is-large bookButtons")
    .append(book);
  $("#mayBookHolder").prepend(mayBookSaved);
  $("#mayBookHolder").show(500);
  var book = $("#mayBookInput").val("");
});

$("#junClick").on("click", function() {
  $(".months").hide(500);
  $("#junDisplay").show(500);
});

$("#junBookSubmit").on("click", function() {
  var book = $("#junBookInput").val();
  var junBookSaved = $("<button>")
    .addClass("button is-large bookButtons")
    .append(book);
  $("#junBookHolder").prepend(junBookSaved);
  $("#junBookHolder").show(500);
  $("#junBookInput").val("");
});

$("#julClick").on("click", function() {
  $(".months").hide(500);
  $("#julDisplay").show(500);
});

$("#julBookSubmit").on("click", function() {
  var book = $("#julBookInput").val();
  var julBookSaved = $("<button>")
    .addClass("button is-large bookButtons")
    .append(book);
  $("#julBookHolder").prepend(julBookSaved);
  $("#julBookHolder").show(500);
  $("#julBookInput").val("");
});

$("#augClick").on("click", function() {
  $(".months").hide(500);
  $("#augDisplay").show(500);
});

$("#augBookSubmit").on("click", function() {
  var book = $("#augBookInput").val();
  var augBookSaved = $("<button>")
    .addClass("button is-large bookButtons")
    .append(book);
  $("#augBookHolder").prepend(augBookSaved);
  $("#augBookHolder").show(500);
  $("#augBookInput").val("");
});

$("#sepClick").on("click", function() {
  $(".months").hide(500);
  $("#sepDisplay").show(500);
});

$("#sepBookSubmit").on("click", function() {
  var book = $("#sepBookInput").val();
  var sepBookSaved = $("<button>")
    .addClass("button is-large bookButtons")
    .append(book);
  $("#sepBookHolder").prepend(sepBookSaved);
  $("#sepBookHolder").show(500);
  $("#sepBookInput").val("");
});

$("#octClick").on("click", function() {
  $(".months").hide(500);
  $("#octDisplay").show(500);
});

$("#octBookSubmit").on("click", function() {
  var book = $("#octBookInput").val();
  var octBookSaved = $("<button>")
    .addClass("button is-large bookButtons")
    .append(book);
  $("#octBookHolder").prepend(octBookSaved);
  $("#octBookHolder").show(500);
  $("#octBookInput").val("");
});

$("#novClick").on("click", function() {
  $(".months").hide(500);
  $("#novDisplay").show(500);
});

$("#novBookSubmit").on("click", function() {
  var book = $("#novBookInput").val();
  var novBookSaved = $("<button>")
    .addClass("button is-large bookButtons")
    .append(book);
  $("#novBookHolder").prepend(novBookSaved);
  $("#novBookHolder").show(500);
  $("#novBookInput").val("");
});

$("#decClick").on("click", function() {
  $(".months").hide(500);
  $("#decDisplay").show(500);
});

$("#decBookSubmit").on("click", function() {
  var book = $("#decBookInput").val();
  var decBookSaved = $("<button>")
    .addClass("button is-large bookButtons")
    .append(book);
  $("#decBookHolder").prepend(decBookSaved);
  $("#decBookHolder").show(500);
  $("#decBookInput").val("");
});
