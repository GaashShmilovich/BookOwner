'use strict'

function makeId(length = 6) {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var txt = ''
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive 
}

function saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
}

function loadFromStorage(key) {
    var val = localStorage.getItem(key)
    return JSON.parse(val)
}

function randomBooks() {
    bookNames.forEach(book => _createBook(book, getRandomIntInclusive(1, 20)))
}
const bookNames = [
    'The Catcher in the Rye',
    'To Kill a Mockingbird',
    '1984',
    'Pride and Prejudice',
    'The Great Gatsby',
    'Moby Dick',
    'War and Peace',
    'The Lord of the Rings',
    'The Hobbit',
    'The Da Vinci Code',
    'The Chronicles of Narnia',
    'Alice\'s Adventures in Wonderland',
    'The Little Prince',
    'Brave New World',
    'Gone with the Wind',
    'The Alchemist',
    'The Kite Runner',
    'One Hundred Years of Solitude',
    'The Odyssey',
    'Don Quixote',
    'The Divine Comedy',
    'The Picture of Dorian Gray',
    'Crime and Punishment',
    'The Grapes of Wrath',
    'Frankenstein',
    'Jane Eyre',
    'The Adventures of Huckleberry Finn',
    'The Scarlet Letter',
    'The Count of Monte Cristo',
    'Wuthering Heights',
    'The Iliad',
    'A Tale of Two Cities',
    'The Brothers Karamazov',
    'The Lord of the Flies',
    'Les Misérables',
    'Animal Farm',
    'Catching Fire',
    'Mockingjay',
    'Divergent',
    'Insurgent',
    'Allegiant',
    'The Maze Runner',
    'The Scorch Trials',
    'The Death Cure',
    'The Kill Order',
    'The Fault in Our Stars',
    'The Book Thief',
    'The Girl on the Train',
    'Gone Girl',
    'The Help',
    'The Secret Life of Bees',
    'Water for Elephants',
    'A Game of Thrones',
    'A Clash of Kings',
    'A Storm of Swords',
    'A Feast for Crows',
    'A Dance with Dragons',
    'The Name of the Wind',
    'The Wise Man\'s Fear',
    'The Slow Regard of Silent Things',
    'The Way of Kings',
    'Words of Radiance',
    'Oathbringer',
    'The Alloy of Law',
    'Shadows of Self',
    'The Bands of Mourning',
    'Elantris',
    'The Emperor\'s Soul',
    'Warbreaker',
    'Steelheart',
    'Firefight',
    'Calamity',
    'The Rithmatist',
    'Edgedancer',
    'Dawnshard',
    'Rhythm of War',
    'The Blade Itself',
    'Before They Are Hanged',
    'Last Argument of Kings',
    'Best Served Cold',
    'The Heroes',
    'Red Country',
    'A Little Hatred',
    'Sharp Ends',
    'Half a King',
    'Half the World',
    'Half a War',
    'The Shadow Rising',
    'The Fires of Heaven',
    'Lord of Chaos',
    'A Crown of Swords',
    'The Path of Daggers',
    'Winter\'s Heart',
    'Crossroads of Twilight',
    'Knife of Dreams',
    'The Gathering Storm',
    'Towers of Midnight',
    'A Memory of Light',
    'Sapiens: A Brief History of Humankind',
    'Educated',
    'The Silent Patient',
    'Becoming',
    'The Tattooist of Auschwitz'
]