
//scroll section

let section = document.querySelectorAll('section');
let navlink = document.querySelectorAllI('header nav a');

window.onescroll = () =>{
	sections.forEach(sec => {
		let top = window.scrolly;
		let offset = sec.offsetTop - 100;
		let height = sec.offsetHight;
		let id =sec.getAttribute('id');
		
		if(top>=offset&&top<offset+height){
			navlink.forEach(links=>{
				links.classList.remove('active');
				document.querySelectorAll('header nav a[href*='+ id +'].classList.add('active'));
			})
		}
	})
	
	//stckey header
	let header=document.querySelector('header');
	
	header.classList.toggle('sticky', window.scrolly > 100);
}