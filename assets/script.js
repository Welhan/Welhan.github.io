// turn page whern click next or prev button
const pageTurnBtn = document.querySelectorAll(".nextprev-btn");

pageTurnBtn.forEach((el, index) => {
  el.onclick = () => {
    const pageTurnID = el.getAttribute("data-page");
    const pageTurn = document.querySelector("#" + pageTurnID);

    if (pageTurn.classList.contains("turn")) {
      pageTurn.classList.remove("turn");

      setTimeout(() => {
        pageTurn.style.zIndex = 20 - index;
      }, 500);
    } else {
      pageTurn.classList.add("turn");

      setTimeout(() => {
        pageTurn.style.zIndex = 20 + index;
      }, 500);
    }
  };
});

// contact us button when click

const pages = document.querySelectorAll(".book-page.page-right");
const contactBtn = document.querySelector(".btn.contact-us");

contactBtn.onclick = () => {
  pages.forEach((page, index) => {
    setTimeout(() => {
      page.classList.add("turn");

      setTimeout(() => {
        page.style.zIndex = 20 + index;
      }, 500);
    }, (index + 1) * 200 + 100);
  });
};

// back to first page btn click
let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
  pageNumber--;
  if (pageNumber < 0) {
    pageNumber = totalPages - 1;
  }
}

const backBtn = document.querySelector(".back-first-page");

backBtn.onclick = () => {
  pages.forEach((_, index) => {
    setTimeout(() => {
      reverseIndex();
      pages[pageNumber].classList.remove("turn");

      setTimeout(() => {
        reverseIndex();
        pages[pageNumber].style.zIndex = 10 + index;
      }, 500);
    }, (index + 1) * 200 + 100);
  });
};

// opening animation
const coverRight = document.querySelector(".cover.cover-right");
const pageLeft = document.querySelector(".book-page.page-left");

// opening animation (cover right animation)
setTimeout(() => {
  coverRight.classList.add("turn");
}, 2100);

setTimeout(() => {
  coverRight.style.zIndex = -1;
}, 2800);

// opening animation (left page or profile animation)
setTimeout(() => {
  pageLeft.style.zIndex = 20;
}, 3200);

// opening animation (all pages animation)
pages.forEach((_, index) => {
  setTimeout(() => {
    reverseIndex();
    pages[pageNumber].classList.remove("turn");

    setTimeout(() => {
      reverseIndex();
      pages[pageNumber].style.zIndex = 10 + index;
    }, 500);
  }, (index + 1) * 200 + 2100);
});

// event key on keyboard

// window.addEventListener("keydown", function (event) {
//   if (event.key === "ArrowRight") {
//     console.log("next");
//   }

//   if (event.key === "ArrowLeft") {
//     console.log("prev");
//   }
// });

// turnPageClick.forEach((el, index) => {
// console.log(el);

window.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    const turnPageClick = document.querySelectorAll(
      ".book-page.page-right.turn"
    );
    let turnPage;
    if (turnPageClick.length === 0) {
      turnPage = "turn-1";
      const turnNextPage = document.querySelector("#" + turnPage);
      turnNextPage.classList.add("turn");

      setTimeout(() => {
        turnNextPage.style.zIndex = 20;
      }, 500);
    } else if (turnPageClick.length < totalPages) {
      turnPageClick.forEach((el, index) => {
        turnPage = el.getAttribute("data-next");
        const turnNextPage = document.querySelector("#" + turnPage);
        turnNextPage.classList.add("turn");

        setTimeout(() => {
          turnNextPage.style.zIndex = 20 + index;
        }, 500);
      });
    }
  }

  if (event.key === "ArrowLeft") {
    const prevPageClick = document.querySelectorAll(
      ".book-page.page-right.turn"
    );
    if (prevPageClick.length > 0) {
      let prevPage;
      prevPage = this.document.querySelector(
        "#" + prevPageClick[prevPageClick.length - 1].getAttribute("id")
      );

      prevPage.classList.remove("turn");

      setTimeout(() => {
        prevPage.style.zIndex = 20 - prevPageClick.length - 1;
      }, 500);
    }
  }
});
