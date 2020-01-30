$(document).ready(function() {
  books.forEach(book => {
    searchBook(book);
  });

  function searchBook(book) {
    const API_KEY = "AIzaSyBXnJxhMnxkR9s56HdpqIoGb62ATyP3nDk";
    const TEST_API_KEY_2 = "AIzaSyDCy4PLx7oGJvcBqXbThTXcaOZ6mBt0ChU";
    let base_url = "https://www.googleapis.com/books/v1/volumes?q=";

    let title = book.title;
    let titleArr = title.split(" ");
    let titleParam = titleArr.join("+");

    let author = book.author;
    let authorArr = author.split(" ");
    let authorParam = authorArr.join("+");

    let newURL =
      base_url +
      "intitle:" +
      titleParam +
      "+" +
      "inauthor:" +
      authorParam +
      "&key=" +
      API_KEY;

    $.ajax({
      url: newURL,
      method: "GET"
    }).then(function(response) {
      const title = response.items[0].volumeInfo.title;
      const imgurl = response.items[0].volumeInfo.imageLinks.thumbnail;
      const category = book.category;
      const preview = response.items[0].volumeInfo.previewLink;
      const reviews = response.items[0].volumeInfo.infoLink;

      createBookCard(title, imgurl, category, preview, reviews);
    });
  }

  // Isotope Book Filter Function
  let $grid = $(".book-menu-items").isotope({
    itemSelector: ".book-item",
    layoutMode: "fitRows"
  });
  $(".book-menu a").click(function() {
    let selector = $(this).attr("data-filter");
    $(".book-menu-items").isotope({
      filter: selector
    });
    return false;
  });

  function createBookCard(title, imgurl, category, preview, reviews) {
    let bookCardHTML = `
    <div class="column book-item ${category}">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
           ${title}
          </p>
        </header>
        <div class="card-content">
          <div class="content has-text-centered">
            <img src="${imgurl}" alt="${title}" class="book-image">
          </div>
        </div>
        <footer class="card-footer">
          <a href="${preview}" class="card-footer-item" target="_blank">Preview</a>
          <a href="${reviews}" class="card-footer-item" target="_blank">Reviews</a>
        </footer>
      </div>
    </div>
    `;

    let $newItems = $(bookCardHTML);
    $grid.append($newItems).isotope("appended", $newItems);
  }

  // Smooth Scroll Function
  const scroll = new SmoothScroll('.navbar a[href*="#"]', {
    speed: 1000
  });

  // Slick Carousel Function
  $(".showcase").slick({
    autoplay: true,
    dots: true,
    speed: 2000,
    autoplaySpeed: 6000
  });

  // Modal Function
  $(".modal-background, .modal-close").click(function() {
    $("html").removeClass("is-clipped");
    $(this)
      .parent()
      .removeClass("is-active");
  });
  $(".theme-switcher").change(function(e) {
    if (e.target.value) {
      window.location.href = "/bulmaswatch/" + e.target.value;
    }
  });

  // Get all "navbar-burger" elements
  let $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any nav burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function($el) {
      $el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        let target = $el.dataset.target;
        let $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});
