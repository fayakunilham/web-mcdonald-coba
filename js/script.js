//toggle class active
const navbarNav = document.querySelector('.navbar-nav');
//ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e){
  if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
    navbarNav.classList.remove('active');
  }
});

//input output
const submitBtn = document.getElementById("submit-btn");
		const outputDiv = document.getElementById("output");

		submitBtn.addEventListener("click", () => {
			const name = document.getElementById("name").value;
			const dob = document.getElementById("dob").value;
			const gender = document.querySelector('input[name="gender"]:checked').value;
			const message = document.getElementById("message").value;

			const now = new Date();
			const hours = now.getHours().toString().padStart(2, '0');
			const minutes = now.getMinutes().toString().padStart(2, '0');
			const seconds = now.getSeconds().toString().padStart(2, '0');

			const output = `
      <p>Current Time: ${hours}:${minutes}:${seconds}</p>
<br>
				<p>Nama: ${name}</p>
				<p>Tanggal Lahir: ${dob}</p>
				<p>Jenis Kelamin: ${gender}</p>
				<p>Pesan: ${message}</p>
				
			`;

			outputDiv.innerHTML = output;
		});