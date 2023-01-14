

//1-100 arasında rastgele bir sayı tuttur
const randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);

document.querySelector(".btn").addEventListener("click", () => {
  const guessNumber = Number(document.querySelector(".input").value);
  // console.log(guessNumber);

  const bodyBgColor = document.querySelector(".container");
  const newH4 = document.querySelector("h4");
  const newImg = document.querySelector("img");

  if (randomNumber > guessNumber) {
    alert(" up ");
  } else if (randomNumber < guessNumber) {
    alert("pleade enter your down number");
  } else {
    alert("Wonderfull");
    bodyBgColor.style.backgroundColor = "";
    newH4.textContent = "wonderful, you succeeded";
    newImg.style.borderRadius = "30px";
    document.querySelector("img").src="https://lavinya.net/wp-content/uploads/2022/10/5b9895-manzara-landscape-scaled.jpeg"
  }
  document.querySelector(".input").value = "";
  document.querySelector(".input").focus = "";
});
