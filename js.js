let scroller = document.getElementById("scroller");
let son = scroller.children[0];

function scrollToSection(id) {
	document.getElementById(id).scrollIntoView({ behavior: "smooth" });
};

setInterval(function() {if (window.scrollY >= 414) {
	scroller.style.cssText = `
    width: 50px;
    height: 50px;
    font-size: 33px;
    background-color: rgb(30, 136, 229);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    color: white;
    position: fixed;
    right: 5px;
    bottom: 5px;
	`;
	scroller.addEventListener("click", function() {
		window.scrollTo(0,0)
	});
	son.id = "son";
} else {
	scroller.style.cssText = `
		display: none;
	`;
	son.removeAttribute("id");
}},1);








let theForm = document.getElementsByClassName("removed");
let email = document.getElementById("emailContaction");
let phone = document.getElementById("phoneContaction");
let feedback = document.getElementById("textContaction");
let submit = document.getElementById("submitBtn");


document.getElementById("openContactionForm").onclick = () => {
	theForm.setAttribute("id","contaction");
	theForm.removeAttribute("class");
	theForm = document.getElementById("contaction")
};



theForm.addEventListener("dblclick", (ele) => 	ele.style.display = "none");






if (feedback) {
	feedback.addEventListener("input", function() {
		let maxLength = 1000;
		let currentLength = this.value.length;
		let remaining = maxLength - currentLength;
		
		let counter = this.parentNode.querySelector(".counter");
		if (!counter) {
			counter = document.createElement("div");
			counter.className = "counter";
			counter.style.cssText = `
				text-align: right;
				font-size: 0.8rem;
				color: #222831;
				margin-top: 0.25rem;
			`;
			this.parentNode.appendChild(counter);
		}
		
		counter.textContent = `${currentLength}/${maxLength} characters`;
		
		if (remaining < 100) {
			counter.style.color = remaining < 50 ? "#ED3500" : "#093FB4";
		} else {
			counter.style.color = "#093FB4";
		}
	});
};






document.getElementById("checkbox").addEventListener("click", function(el) {
    document.getElementsByTagName("nav")[0].style.cssText =  `
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		padding: 1rem;
		background: rgba(255, 255, 255, 0.03);
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(6px);
	`;
});


