const passwordCheck = () => {
  if (
    document.getElementById('password').value !=
    document.getElementById('confirm-password').value
  ) {
    document.getElementById('password').style.borderColor = 'red'
    document.getElementById('confirm-password').style.borderColor = 'red'
    document.querySelector('.error-message').style.display = 'inline'
  } else {
    document.getElementById('password').style.borderColor = '#e5e7eb'
    document.getElementById('confirm-password').style.borderColor = '#e5e7eb'
    document.querySelector('.error-message').style.display = 'none'
  }
}
