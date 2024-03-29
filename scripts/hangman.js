
class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = 'playing'
  }

  calculateStatus() {
    const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')

    // version classique function
    // const finished = this.word.every((letter) => {
    //   return this.guessedLetters.includes(letter)
    // }


    // Autre possibilité
    //   // const letterUnguessed = this.word.filter((letter) => {
    //   //   return !this.guessedLetters.includes(letter)
    //   // })
    //   // const finished = letterUnguessed.length === 0


    //   // Autre possibilité
    //   // let finished = true

    //   // this.word.forEach((letter) => {
    //   //   if (this.guessedLetters.includes(letter)) {
    //   //   } else {
    //   //     finished = false
    //   //   }
    //   // })

    if (this.remainingGuesses === 0) {
      this.status = 'failed'
    } else if (finished) {
      this.status = 'finished'
    } else {
      this.status = 'playing'
    }
  }

  get statusMessage() {
    if (this.status === 'playing') {
      return `Guesses left: ${this.remainingGuesses}`
    } else if (this.status === 'failed') {
      return `Nice try! The word was "${this.word.join('')}"`
    } else {
      return 'Great work!'
    }
  }

  get puzzle() {
    let puzzle = ''

    this.word.forEach((letter) => {
      if (this.guessedLetters.includes(letter) || letter === ' ') {
        puzzle += letter
      } else {
        puzzle += '*'
      }
    })

    return puzzle
  }

  makeGuess(guess) {
    guess = guess.toLowerCase()

    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)

    if (this.status !== 'playing') {
      return
    }

    if (isUnique) {
      this.guessedLetters.push(guess)
    }

    if (isUnique && isBadGuess) {
      this.remainingGuesses--
    }

    this.calculateStatus()
  }
}






// // VERSION CLASSIQUE / ANCIENNE
// const Hangman = function (word, remainingGuesses) {
//   this.word = word.toLowerCase().split('')
//   this.remainingGuesses = remainingGuesses
//   this.guessedLetters = []
//   this.status = 'playing'
// }

// Hangman.prototype.calculateStatus = function () {

//   const finished = this.word.every((letter) => this.guessedLetters.includes(letter))

//   // // version classique function
//   // const finished = this.word.every((letter) => {
//   //   return this.guessedLetters.includes(letter)
//   // })



//   // Autre possibilité
//   // const letterUnguessed = this.word.filter((letter) => {
//   //   return !this.guessedLetters.includes(letter)
//   // })
//   // const finished = letterUnguessed.length === 0



//   // Autre possibilité
//   // let finished = true

//   // this.word.forEach((letter) => {
//   //   if (this.guessedLetters.includes(letter)) {
//   //   } else {
//   //     finished = false
//   //   }
//   // })

//   if (this.remainingGuesses === 0) {
//     this.status = 'failed'
//   } else if (finished) {
//     this.status = 'finished'
//   } else {
//     this.status = 'playing'
//   }
// }


// Hangman.prototype.getStatusMessage = function () {
//   if (this.status === 'playing') {
//     return `Guesses left: ${this.remainingGuesses}`
//   } else if (this.status === 'failed') {
//     return `Nice try! The word was "${this.word.join('')}"`
//   } else {
//     return 'Great work!'
//   }
// }


// Hangman.prototype.getPuzzle = function () {
//   let puzzle = ''

//   this.word.forEach((letter) => {
//     if (this.guessedLetters.includes(letter) || letter === ' ') {
//       puzzle += letter
//     } else {
//       puzzle += '*'
//     }
//   })

//   return puzzle
// }


// Hangman.prototype.makeGuess = function (guess) {
//   guess = guess.toLowerCase()

//   const isUnique = !this.guessedLetters.includes(guess)
//   const isBadGuess = !this.word.includes(guess)

//   if (this.status !== 'playing') {
//     return
//   }

//   if (isUnique) {
//     this.guessedLetters.push(guess)
//   }

//   if (isUnique && isBadGuess) {
//     this.remainingGuesses--
//   }

//   this.calculateStatus()
// }


