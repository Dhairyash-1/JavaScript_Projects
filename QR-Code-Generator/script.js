const generateQrBtn = document.getElementById('generateBtn')
const imgBox = document.querySelector('.output')
const QRIMG = document.getElementById('qrimage')
const qrInputText = document.getElementById('qrInput')
const downloadBtn = document.querySelector('.downloadBtn')
const downloadLink = document.querySelector('.downloadBtn a')
generateQrBtn.addEventListener('click', () => generateQR(qrInputText.value))

function generateQR(input) {
  if (input) {
    const encodeInput = encodeURIComponent(input)
    // encodeURIComponent make sure special characters are prperly represented in the url so that any charset error not arise and correct qr generate
    const url = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeInput} `

    // display image
    QRIMG.src = url
    imgBox.classList.add('showImg')

    enableDownloadButton(url)
  } else {
    // showing error on input box if empty
    qrInputText.classList.add('error')
    setTimeout(() => qrInputText.classList.remove('error'), 2000)
  }
}

function enableDownloadButton(url) {
  // genrating downloadable link
  fetch(url)
    .then(response => response.blob())
    .then(blob => {
      const blobUrl = URL.createObjectURL(blob)

      // Update the download button link
      downloadLink.href = blobUrl
      downloadLink.download = 'qrcode.png'
      // removing inactive class and activating download button
      downloadBtn.classList.remove('inactive')
      // Revoke the object URL after user interaction
      downloadLink.addEventListener('click', () => {
        setTimeout(() => URL.revokeObjectURL(blobUrl), 0)
      })
    })
    .catch(error => console.log('Error in creating blob url', error))
}
