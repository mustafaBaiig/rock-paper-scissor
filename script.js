// DOM elements ko hasil karen
const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user_result img"),
  cpuResult = document.querySelector(".cpu_result img"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option_image");

// Har option image element par loop chalao
optionImages.forEach((image, index) => {
    // Har image par click event listener lagao
  image.addEventListener("click", (e) => {
    // Clicked image ko "active" class lagao
    image.classList.add("active");
    userResult.src = cpuResult.src = "fist.png";
    // User aur CPU ke results ko "fist.png" ki taraf set karo
    result.textContent = "Wait...";
// Har option image ko dobara check karo
    optionImages.forEach((image2, index2) => {
// Agar current index clicked index se milti nahi hai
      // To doosri option images se "active" class remove karo
      index !== index2 && image2.classList.remove("active");
    });

    gameContainer.classList.add("start");

    // Result ka calculation deri se karnay ke liye timeout set karo
    let time = setTimeout(() => {
      gameContainer.classList.remove("start");

      // Clicked option image ka source hasil karo
      let imageSrc = e.target.querySelector("img").src;
      // User ke result ko clicked option image par set karo
      userResult.src = imageSrc;

      // 0 aur 2 ke darmiyan random number generate karo
      let randomNumber = Math.floor(Math.random() * 3);
      // CPU ke image options ka array banayo
      let cpuImages = ["fist.png", "goodbye.png", "two.png"];
      // CPU ke result ko array se random option par set karo
      cpuResult.src = cpuImages[randomNumber];

      // CPU option ko akhri haroof (R, P, S) se map karo
      let cpuValue = ["R", "P", "S"][randomNumber];
      // Clicked option ko index ke basis par akhri haroof se map karo
      let userValue = ["R", "P", "S"][index];

      // Sab possible outcomes ka object banayo
      let outcomes = {
        RR: "Draw",
        RP: "Cpu",
        RS: "User",
        PP: "Draw",
        PR: "User",
        PS: "Cpu",
        SS: "Draw",
        SR: "Cpu",
        SP: "User",
      };

      // User aur CPU options ke basis par outcome hasil karo
      let outComeValue = outcomes[userValue + cpuValue];

      // Result ko display karo
      result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`;
    }, 2500);
  });
});
