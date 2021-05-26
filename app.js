const loadImage = (event) => {
  const image = document.getElementById("imgDisplayed");
  image.src = URL.createObjectURL(event.target.files[0]);
};



document.getElementById("member").onclick = function changeContent() {
  document.getElementById("specific").style.display = "block";
  document.getElementById("chooseOption").style.display = "none";
  document.getElementById("sectionHeading").innerHTML =
    "Hey, Participant Please download your badge from below !";
  document.getElementById("badge-container").style.display = "block";

  const preview = document.getElementById("preview");
  const prev = () => {
    const canvas = document.getElementById("result");
    canvas.height = 600;
    canvas.width = 600;
    console.log(canvas.height, canvas.width);
    const ctx = canvas.getContext("2d");
    ctx.rect(0, 0, 960, 0);
    ctx.fill();

    const image = document.getElementById("imgDisplayed");
    ctx.drawImage(image, 30, 20, 545, 530);
    const badgeDesign = document.getElementById("badgeDesign1");
    ctx.drawImage(badgeDesign, 0, 0, 600, 600);
  };
  preview.addEventListener("click", prev);

  // const loadImage = (event) => {
  //   const image = document.getElementById("imgDisplayed");
  //   image.src = URL.createObjectURL(event.target.files[0]);
  // };

  const download = document.getElementById("download");
  download.addEventListener("click", () => {
    const canvas = document.getElementById("result");
    const canvasContent = canvas.toDataURL();
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.href = canvasContent;
    a.download = "MemberBadge.png";
    a.click();
    document.body.removeChild(a);
  });
};





document.getElementById("champion").onclick = function changeContent() {
  document.getElementById("specific").style.display = "block";
  document.getElementById("chooseOption").style.display = "none";
  document.getElementById("sectionHeading").innerHTML =
    "Hey, Mentor Please download your badge from below !";
  document.getElementById("badge-container").style.display = "block";

  const preview = document.getElementById("preview");
  const prev = () => {
    const canvas = document.getElementById("result");
    canvas.height = 600;
    canvas.width = 600;
    console.log(canvas.height, canvas.width);
    const ctx = canvas.getContext("2d");
    ctx.rect(0, 0, 960, 0);
    ctx.fill();

    const image = document.getElementById("imgDisplayed");
    ctx.drawImage(image, 30, 20, 545, 530);

    const badgeDesign = document.getElementById("badgeDesign2");
    ctx.drawImage(badgeDesign, 0, 0, 600, 600);
  };
  preview.addEventListener("click", prev);

  // const loadImage = (event) => {
  //   const image = document.getElementById("imgDisplayed");
  //   image.src = URL.createObjectURL(event.target.files[0]);
  // };

  const download = document.getElementById("download");
  download.addEventListener("click", () => {
    const canvas = document.getElementById("result");
    const canvasContent = canvas.toDataURL();
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.href = canvasContent;
    a.download = "ChampionBadge.png";
    a.click();
    document.body.removeChild(a);
  });
};


document.getElementById("winner").onclick = function changeContent() {
  document.getElementById("specific").style.display = "block";
  document.getElementById("chooseOption").style.display = "none";
  document.getElementById("sectionHeading").innerHTML =
    "Hey, Winner Please download your badge from below !";
  document.getElementById("badge-container").style.display = "block";

  const preview = document.getElementById("preview");
  const prev = () => {
    const canvas = document.getElementById("result");
    canvas.height = 600;
    canvas.width = 600;
    console.log(canvas.height, canvas.width);
    const ctx = canvas.getContext("2d");
    ctx.rect(0, 0, 960, 0);
    ctx.fill();

    const image = document.getElementById("imgDisplayed");
    ctx.drawImage(image, 30, 20, 545, 530);
    const badgeDesign = document.getElementById("badgeDesign3");
    ctx.drawImage(badgeDesign, 0, 0, 600, 600);
  };
  preview.addEventListener("click", prev);

  // const loadImage = (event) => {
  //   const image = document.getElementById("imgDisplayed");
  //   image.src = URL.createObjectURL(event.target.files[0]);
  // };

  const download = document.getElementById("download");
  download.addEventListener("click", () => {
    const canvas = document.getElementById("result");
    const canvasContent = canvas.toDataURL();
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.href = canvasContent;
    a.download = "WinnerBadge.png";
    a.click();
    document.body.removeChild(a);
  });
};
