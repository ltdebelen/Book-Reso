$(document).ready(function() {
  const books = [
    {
      title: "Becoming",
      author: "Michelle Obama",
      category: "mindset"
    },
    {
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      category: "finance"
    },
    {
      title: "Boundless",
      author: "Ben Greenfield",
      category: "fitness"
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      category: "travel"
    },
    {
      title: "Make it stick",
      author: "Peter Brown",
      category: "learning"
    }
  ];

  books.forEach(book => {
    searchBook(book);
  });

  function searchBook(book) {
    const API_KEY = "AIzaSyBXnJxhMnxkR9s56HdpqIoGb62ATyP3nDk";
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
    console.log(newURL);

    $.ajax({
      url: newURL,
      method: "GET"
    }).then(function(response) {
      const title = response.items[0].volumeInfo.title;
      const imgurl = response.items[0].volumeInfo.imageLinks.thumbnail;
      const category = book.category;

      createBookCard(title, imgurl, category);
    });
  }

  function createBookCard(title, imgurl, category) {
    console.log(title);
    console.log(imgurl);
    let bookCardHTML = `
    <div class="column book-item ${category}">
      <div class="card">
        <header class="card-header">
          <p class="has-text-centered card-header-title">
            ${title}
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            <img src="${imgurl}" alt="${title}" class="book-image">
          </div>
        </div>
        <footer class="card-footer">
          <a href="#" class="card-footer-item">Save</a>
          <a href="#" class="card-footer-item">Edit</a>
          <a href="#" class="card-footer-item">Delete</a>
        </footer>
      </div>
    </div>
    `;

    $(".book-menu-items .columns").append(bookCardHTML);
  }

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

  // Isotope Book Filter Function
  $(".book-menu-items").isotope({
    itemSelector: ".book-item"
  });
  $(".book-menu a").click(function() {
    let selector = $(this).attr("data-filter");
    $(".book-menu-items").isotope({
      filter: selector
    });
    return false;
  });
});
