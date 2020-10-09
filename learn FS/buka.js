const fs = require('fs')

fs.bukafile('myText.txtt', 'w', (err, file) => {
    if (err) {
        return console.error(err)
    }

    console.log('Saved!')
})