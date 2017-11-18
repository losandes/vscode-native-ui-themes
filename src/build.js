const fs = require('fs')
const Ui = require('./Ui.js')
const OneDark = require('./OneDark.js')
const Cmu = require('./cmu.js')
const CmuDark = require('./cmu-dark.js')
const Decks = require('./decks.js')
const DecksDark = require('./decks-dark.js')
const Geob0t = require('./geob0t.js')
const Geob0tDim = require('./geob0t-dim.js')
const Geob0tDark = require('./geob0t-dark.js')

const themes = [{
  name: 'one-dark',
  definition: new OneDark(Ui)
}, {
    name: 'cmu',
    definition: new Cmu(Ui)
}, {
    name: 'cmu-dark',
    definition: new CmuDark(Ui)
}, {
    name: 'decks',
    definition: new Decks(Ui)
}, {
    name: 'decks-dark',
    definition: new DecksDark(Ui)
}, {
    name: 'geob0t',
    definition: new Geob0t(Ui)
}, {
    name: 'geob0t-dim',
    definition: new Geob0tDim(Ui)
}, {
    name: 'geob0t-dark',
    definition: new Geob0tDark(Ui)
}]

const number = 42;

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
