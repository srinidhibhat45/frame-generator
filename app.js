const loadImage = (event) => {
  const image = document.getElementById("imgDisplayed");
  image.src = URL.createObjectURL(event.target.files[0]);
};
document.getElementById("participant").onclick = function changeContent() {
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
    ctx.rect(0, 0, 1060, 600);
    ctx.fill();

    const image = document.getElementById("imgDisplayed");
    ctx.drawImage(image, 50, 20, 500, 480);
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
    a.download = "ParticipantBadge.png";
    a.click();
    document.body.removeChild(a);
  });
};
document.getElementById("mentor").onclick = function changeContent() {
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
    ctx.rect(0, 0, 1060, 600);
    ctx.fill();

    const image = document.getElementById("imgDisplayed");
    ctx.drawImage(image, 50, 20, 500, 480);

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
    a.download = "MentorBadge.png";
    a.click();
    document.body.removeChild(a);
  });
};