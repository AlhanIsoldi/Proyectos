const text = document.getElementById("text");
text.addEventListener("keyup", (e) => {
    const inputText = event.path[0].value;
  document.querySelector(".toUpper").innerHTML = inputText.toUpperCase();
});

