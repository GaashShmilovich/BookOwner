'use strict'
const STORAGE_KEY = 'booksDB'
const PAGE_SIZE = 8

var gBooks = []
var gFilterBy = 'highest'
var gPageIdx = 0

function getBooksForDisplay() {
    var startIdx = gPageIdx * PAGE_SIZE
    const books = gBooks.slice(startIdx, startIdx + PAGE_SIZE)
    return books
}

function updateBook(bookId, bookPrice) {
    const bookToUpdate = gBooks.find(book => book.id === bookId)
    console.log('bookToUpdate', bookToUpdate)
    bookToUpdate.price = bookPrice
    saveToStorage(STORAGE_KEY, gBooks)
}

function removeBook(bookId) {
    const bookIdx = gBooks.findIndex(book => book.id === bookId)
    if (confirm('Sure?') === true) {
        gBooks.splice(bookIdx, 1)
        saveToStorage(STORAGE_KEY, gBooks)
    }
}

function addBook(name, price) {
    var newBook = _createBook(name, price)
    gBooks.push(newBook)
    saveToStorage(STORAGE_KEY, gBooks)
}

function getBook(bookId) {
    const book = gBooks.find(book => book.id === bookId)
    return book
}

function nextPage() {
    gPageIdx++
}

function previousPage() {
    gPageIdx--
}

function _createBook(name, price) {
    const book = {
        id: makeId(),
        name,
        price,
        imgUrl: 'url',
        rate: 0
    }
    gBooks.push(book)
    saveToStorage(STORAGE_KEY, gBooks)
}