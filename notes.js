const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
  return('Your notes is ...')
}

const readNote = (title) => {
  const notes = loadNotes()
  const research = notes.find((note) => note.title === title)
  if (research) {
    console.log(chalk.bgGreen(research.title))
    console.log(chalk.green(research.body))
  } else {
    console.log(chalk.red('There is no note with this title'))
  }
}

const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNote = notes.find((note) => note.title === title)

  if (!duplicateNotes) {
      notes.push({
        title: title,
        body: body
      })
      saveNotes(notes)
      console.log('New note added!')
  } else {
    console.log('Note title taken')
  }
}

const removeNote = (title) => {
  const notes = loadNotes()
  const notesToKeep = notes.filter((note) => note.title !== title)
  if (notesToKeep.length < notes.length) {
    console.log('This note was removed')
    saveNotes(notesToKeep)
  } else {
    console.log(chalk.red('There is no title matching'))
  }
}

const listNotes = () => {
  const notes = loadNotes()
  if (notes.length > 1) {
    notes.forEach((note, index) => {
      console.log(chalk.bgGreen((index + 1) + '-' + note.title))
      console.log(note.body)
    })
  } else {
    console.log('There is no notes!')
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
  try {
      const dataBuffer = fs.readFileSync('notes.json')
      const dataJSON = dataBuffer.toString()
      return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
}
