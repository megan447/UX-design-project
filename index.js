/** 1.inputs **must validate against a min/max** character count
    2.“loading” state
    3.Success state “sign out” `button`
*/

const passWord = document.getElementById('password')
const login = document.getElementById('login')
const wrongInfo = document.getElementById('wronginfo')

login.onclick = function () {
  const passText = passWord.value
  if (passText.length < 8 || passText.length > 24) {
    alert('Password must be between 8 and 24 characters.')
    wrongInfo.classList.remove('hidden')
    return false
  } else {
    wrongInfo.innerHTML = ''
    wrongInfo.classList.add('hidden')
  }
}
