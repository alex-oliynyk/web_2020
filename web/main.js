const divBtn = document.createElement('div')
const themeBtn = document.createElement('button')
themeBtn.textContent = 'Dark theme'
themeBtn.classList.add('themeBtn')
themeBtn.style.height = "64px"
themeBtn.style.width = '150px'
themeBtn.style.backgroundColor = '#5F9EA0'
themeBtn.style.borderStyle = 'none'
themeBtn.style.fontSize = "20px"
themeBtn.style.color = 'white'
divBtn.appendChild(themeBtn)
const nav = document.querySelector('.d-menu')
nav.insertAdjacentElement('afterbegin', divBtn)


themeBtn.addEventListener('click', function() {
	if (themeBtn.textContent === "Dark theme") {
		themeBtn.style.backgroundColor = '#8A2BE2'
		document.querySelector('.header').style.backgroundColor = '#8A2BE2'
		document.querySelector('.footer').style.backgroundColor = '#8A2BE2'
		document.querySelector('body').style.backgroundColor = '#D5D8DC'
		document.querySelector('.text_photo').style.color = '#10F5F5'
		themeBtn.textContent = 'Light theme'
		nav.insertAdjacentElement('beforeend', divBtn)
		} else {
			   themeBtn.style.backgroundColor = '#5F9EA0'
			   document.querySelector('.header').style.backgroundColor = '#5F9EA0'
			   document.querySelector('.footer').style.backgroundColor = '#5F9EA0'
			   document.querySelector('body').style.backgroundColor = 'white'
			   document.querySelector('.text_photo').style.color = 'white'
				themeBtn.textContent = 'Dark theme'
				nav.insertAdjacentElement('afterbegin', divBtn)
        }
})
