// splitting.js
Splitting();

// gsap
var tl = gsap.timeline();

tl.from(".char", {
	x: "random(-100, 100)",
	y: "random(-100, 100)",
	rotate: "random(-90, 90)",
	filter: "blur(20px)",
	opacity: 0,
	ease: "power3.out",
	duration: 1.5,
	stagger: {
		amount: 2
	}
});
tl.from(
	"p .word",
	{
		x: "random(-100, 100)",
		y: "random(-100, 100)",
		rotate: "random(-90, 90)",
		filter: "blur(20px)",
		opacity: 0,
		ease: "power3.out",
		duration: 1.5,
		stagger: {
			amount: 3
		}
	},
	"-=1"
);

//ripple btn
const rippleBtn = document.getElementById("ripple");
let ripples = document.createElement("span");
let cleartimeout;

//if want this effect when clicked then just add click insted of mouseover event
rippleBtn.addEventListener("mouseover", function (e) {
  let x = e.clientX - e.target.offsetLeft;
  let y = e.clientY - e.target.offsetTop;
  ripples.style.left = x + "px";
  ripples.style.top = y + "px";
  this.appendChild(ripples);

  cleartimeout = setTimeout(() => {
    ripples.remove();
  }, 1000);
});

rippleBtn.addEventListener("mouseout", function () {
  ripples.remove(cleartimeout);
});

