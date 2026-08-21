// 手鏈工作台
const workbench = document.getElementById("workbench");
const total = document.getElementById("total");
const beadsContainer = document.getElementById("beads");

// 使用者目前選擇的串珠
let selectedBeads = [];


// 更新工作台
function updateWorkbench() {

  workbench.innerHTML = "";

  if (selectedBeads.length === 0) {

    workbench.innerHTML = `
      <p>目前還沒有選擇串珠</p>
    `;

  } else {

    selectedBeads.forEach((bead, index) => {

      const item = document.createElement("div");

      item.style.display = "inline-block";
      item.style.margin = "10px";
      item.style.padding = "15px";
      item.style.background = "#fff8fb";
      item.style.borderRadius = "15px";

      item.innerHTML = `
        <div>
          ${bead.name}
        </div>

        <div>
          NT$ ${bead.price}
        </div>

        <button onclick="removeBead(${index})">
          移除
        </button>
      `;

      workbench.appendChild(item);

    });
  }


  // 自動計算價格
  const price = selectedBeads.reduce(
    (sum, bead) => sum + Number(bead.price),
    0
  );

  total.innerText = price;
}


// 加入串珠
function addBead(bead) {

  selectedBeads.push(bead);

  updateWorkbench();

}


// 移除串珠
function removeBead(index) {

  selectedBeads.splice(index, 1);

  updateWorkbench();

}
