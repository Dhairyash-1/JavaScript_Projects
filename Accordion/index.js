'use strict'
const accordionItems = document.querySelectorAll('.item')
const maxCharacters = 200

accordionItems.forEach(item => {
  const answerDiv = item.querySelector('.answer')
  const answer = item.querySelector('.answer span')
  const originalText = answer.textContent
  const question = item.querySelector('.question_box')
  const icon = item.querySelector('i')
  const readmoreBtn = item.querySelector('.readmore_btn')

  let shorthendText
  if (originalText.length > maxCharacters) {
    shorthendText = originalText.slice(0, maxCharacters) + '...'
    answer.textContent = shorthendText
  }

  question.addEventListener('click', () => {
    icon.classList.toggle('fa-plus')
    icon.classList.toggle('fa-minus')
    answerDiv.classList.toggle('show')

    let isHidden = true
    readmoreBtn.addEventListener('click', () => {
      if (isHidden) {
        answer.textContent = originalText
        readmoreBtn.textContent = 'Read less'
      } else {
        answer.textContent = shorthendText
        readmoreBtn.textContent = 'Read More'
      }
      isHidden = !isHidden
    })
  })
})
