const table = document.getElementById("scoreTable");

function changeWidth(width) {
  table.style.width = width + "px";
}

function changeBorder(spacing) {
  table.style.borderSpacing = spacing + "px"; // 控制格子間距
  table.style.border = `${Math.max(spacing / 2, 1)}px solid #555`;
}

function changeColor(color) {
  table.style.backgroundColor = color;
}

function resetTable() {
  table.style.width = "350px";
  table.style.borderSpacing = "2px";
  table.style.border = "2px solid #555";
  table.style.backgroundColor = "#ffffb3";
}
