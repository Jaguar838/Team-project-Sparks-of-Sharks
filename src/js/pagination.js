import spin from './plugins/spinner';

import getRefs from './getRef';
const refs = getRefs();
let currentPage = 1;
let pageCount;
const pagesOnWindow = 5;
let rows = 20;

function resetCurrentPage() {
  currentPage = 1;
}

export function renderPagination(totalPages, listItems, callback, searchQuery) {
  refs.paginationElement.innerHTML = '';
  resetCurrentPage();
  refs.arrowLeft.removeEventListener('click', onArrowLeftClick);
  refs.arrowRight.removeEventListener('click', onArrowRightClick);

  function setupPagination(items, wrapper, rowsPerPage) {
    wrapper.innerHTML = '';

    pageCount = totalPages;
    let maxLeftPage = currentPage - Math.floor(pagesOnWindow / 2);
    let maxRightPage = currentPage + Math.floor(pagesOnWindow / 2);

    if (maxLeftPage < 1) {
      maxLeftPage = 1;
      maxRightPage = pagesOnWindow;
    }

    if (maxRightPage > totalPages) {
      maxLeftPage = totalPages - (pagesOnWindow - 1);

      if (maxLeftPage < 1) {
        maxLeftPage = 1;
      }
      maxRightPage = totalPages;
    }

    for (let i = 1; i <= totalPages; i += 1) {
      if (maxLeftPage !== 1 && i == 1) {
        let btn = paginationButton(i, items);
        wrapper.appendChild(btn);
      }

      if (maxRightPage !== totalPages && i == totalPages) {
        let btn = paginationButton(i, items);
        wrapper.appendChild(btn);
      }

      if (i >= maxLeftPage && i <= maxRightPage) {
        let btn = paginationButton(i, items);
        wrapper.appendChild(btn);
      }

      if (
        totalPages >= 6 &&
        i == 1 &&
        currentPage !== 1 &&
        currentPage !== 2 &&
        currentPage !== 3
      ) {
        const threeDotsEl = addThreeDotsBlock();
        wrapper.insertBefore(threeDotsEl, wrapper[wrapper.length - 2]);
      }

      if (
        pageCount >= 7 &&
        i == pageCount - 1 &&
        currentPage !== pageCount &&
        currentPage !== pageCount - 2 &&
        currentPage !== pageCount - 1
      ) {
        const threeDotsEl = addThreeDotsBlock();
        wrapper.insertBefore(threeDotsEl, wrapper[1]);
      }
    }
    // spin.stop();
  }

  // точки в пагинацию
  function addThreeDotsBlock() {
    const threeDots = document.createElement('div');
    threeDots.classList.add('threeDots');
    threeDots.innerText = '...';
    return threeDots;
  }

  function paginationButton(page, items) {
    let button = document.createElement('button');
    button.innerText = page;

    if (currentPage == page) button.classList.add('active');

    button.addEventListener('click', function () {
      //spin.run();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      currentPage = page;
      callback(refs.moviesContainer, currentPage, searchQuery);

      let current_btn = document.querySelector('.pagenumbers button.active');
      current_btn.classList.remove('active');

      button.classList.add('active');
      setupPagination(listItems, refs.paginationElement, rows);
    });

    return button;
  }

  function onArrowLeftClick() {
    if (currentPage > 1) {
      // spin.run();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      currentPage--;

      setupPagination(listItems, refs.paginationElement, rows);
      callback(refs.moviesContainer, currentPage, searchQuery);
    }

    disableArrowBtn(totalPages);
  }

  function onArrowRightClick() {
    if (currentPage < totalPages) {
      //spin.run();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      currentPage = currentPage += 1;
      console.log(currentPage);
      setupPagination(listItems, refs.paginationElement, rows);
      callback(refs.moviesContainer, currentPage, searchQuery);
    }
    disableArrowBtn(totalPages);
  }

  setupPagination(listItems, refs.paginationElement, rows);
  refs.arrowLeft.onclick = onArrowLeftClick;
  refs.arrowRight.onclick = onArrowRightClick;

  disableArrowBtn(totalPages);
}

refs.paginationElement.addEventListener('click', disableArrowBtnAfterPageClick);

function disableArrowBtnAfterPageClick(e) {
  if (e.target.tagName != 'BUTTON') {
    return;
  } else {
    disableArrowBtn(pageCount);
  }
}

//
function disableArrowBtn(totalPages) {
  if (currentPage === 1) {
    refs.arrowLeft.classList.add('disabled-arrow');
  } else {
    refs.arrowLeft.classList.remove('disabled-arrow');
  }

  if (currentPage === totalPages) {
    refs.arrowRight.classList.add('disabled-arrow');
  } else {
    refs.arrowRight.classList.remove('disabled-arrow');
  }
}
