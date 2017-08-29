const fs = require('fs')
const ui = require('./ui.js')
const OneDark = require('./OneDark.js')

const themes = [{
  name: 'one-dark',
  definition: new OneDark(ui)
}]

themes.forEach(theme => {
  fs.writeFile(
    `./themes/${theme.name}.json`,
        JSON.stringify(theme.definition, null, 4),
        (err, result) => {
            if (err) {
                return console.log(`${theme.name} failed`, err)
            }

            console.log(`${theme.name} saved`)
        }
    )
})
