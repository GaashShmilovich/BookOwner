'use strict'

function onInit() {
    randomBooks()
    renderBooks()
}

function renderBooks() {
    const books = getBooksForDisplay()
    var strHTMLs = ''

    strHTMLs = books.map(book =>
        `
        <tr>
          <td>${book.id}</td>
          <td>${book.name}</td>
          <td>${book.price}$</td>
          <td>
          <div class="btn-container">
          <button class="buttons read" onclick="onOpenModal('${book.id}')">read</button>
          </td>
          <td>
          <button class="buttons update" onclick="onUpdateBook('${book.id}')">update</button>
          </td>
          <td>
          <button class="buttons delete" onclick="onRemoveBook('${book.id}', event)">delete</button>
          </div>
          </td>
        </tr>
        `

    )

    document.querySelector('.books-table').innerHTML = strHTMLs.join('')


}

function onUpdateBook(bookId) {
    var newPrice = prompt('Please enter the up to date price:')
    if (!newPrice) return
    updateBook(bookId, newPrice)
    renderBooks()
}

function onAddBook(name, price) {
    var name = prompt(`What's the name of the book?`)
    var price = prompt(`What's the price of the book?`)
    if (!name) return
    if (!price) return

    addBook(name, price)
    renderBooks()
}

function onRemoveBook(bookId, ev) {
    removeBook(bookId)
    renderBooks()
}

function onNextPage() {
    var nextPageBtn = document.querySelector('.next-page')
    var prevPageBtn = document.querySelector('.prev-page')
    prevPageBtn.disabled = false
    if (gPageIdx >= PAGE_SIZE) {
        nextPageBtn.disabled = true
    }
    else nextPageBtn.disabled = false
    nextPage()
    console.log('gNextPage', gPageIdx)
    renderBooks()
}

function onPreviousPage() {
    var prevPageBtn = document.querySelector('.prev-page')
    var nextPageBtn = document.querySelector('.next-page')
    nextPageBtn.disabled = false
    previousPage()
    if (gPageIdx <= 0)
        return prevPageBtn.disabled = true
    renderBooks()

    console.log('gNextIdx', gPageIdx)
}

function onOpenModal(bookId) {
    const book = getBook(bookId)
    var strHTML = `<div class="modal-header">
    <div class="modal-title">Description</div>
    <div class="rating">
      <button class="btn-minus" onclick="onUpdateRate(-1, '${bookId})'">-</button>
      <span class="total-rate">0</span>
      <button class="btn-plus" onclick="onUpdateRate(1, '${bookId}')">+</button>
    </div>
    <button class="close-button" onclick="onCloseModal()">&times;</button>
  </div>
  <div class="modal-body">
  <h3>Book name: ${book.name}</h3>
<h3>Price: ${book.price}</h3>
<h3 class="book-rate">Rate: <span>${book.rate}</span></h3>
  </div>
</div>
<div class="overlay" onclick="onCloseModal()"></div>`
    const elModal = document.querySelector('.modal')
    const elOverlay = document.querySelector('.overlay')
    elModal.innerHTML = strHTML
    elModal.classList.add('active')
    // elOverlay.classList.add('active')
}

function onCloseModal() {
    const elModal = document.querySelector('.modal')
    const elOverlay = document.querySelector('.overlay')
    elModal.classList.remove('active')
    elOverlay.classList.remove('active')
}

function onUpdateRate(click, bookId) {
    const book = getBook(bookId)
    const bookRate = document.querySelector('.book-rate span')
    const totalRate = document.querySelector('.total-rate')
    const sumValue = parseInt(totalRate.innerText) + click
    totalRate.innerText = sumValue
    if (sumValue < 0) totalRate.innerText = 0
    if (sumValue > 10) totalRate.innerText = 10
    book.rate = sumValue
    bookRate.innerHTML = sumValue
    renderBooks()
}

function onSetFilter(filterBy) {
    // console.log('filterBy', filterBy)
    setFilter(filterBy)
    renderBooks()
}