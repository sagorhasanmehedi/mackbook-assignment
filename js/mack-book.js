// <----------------all configuration price--------------->

let memory8gb = 10;
let memory16gb = 180;
let storage256 = 0;
let storage512 = 100;
let storage1tb = 180;
let sipinc25aug = 0;
let siping21aug = 20;

// <---------------- for memory section--------------->

function memoryfunction1() {
  document.getElementById("memoryfild").innerText = storage256;
  total();
}
function memoryfunction2() {
  document.getElementById("memoryfild").innerText = memory16gb;
  total();
}

// <---------------- for stroage section--------------->

function storagefunction1() {
  document.getElementById("stroagefild").innerText = storage256;
  total();
}
function stroagefunction2() {
  document.getElementById("stroagefild").innerText = storage512;
  total();
}
function stroagefunction3() {
  document.getElementById("stroagefild").innerText = storage1tb;
  total();
}

// <---------------- for delivery section--------------->

function deliveryfunction1() {
  document.getElementById("deliveryfild").innerText = sipinc25aug;
  total();
}
function deliveryfunction2() {
  document.getElementById("deliveryfild").innerText = siping21aug;
  total();
}

// <----------------total update function--------------->

function total() {
  const memoryFiforTotal = parseFloat(
    document.getElementById("memoryfild").innerText
  );
  const storajeFildforTotal = parseFloat(
    document.getElementById("stroagefild").innerText
  );
  const deliveryFildForTotal = parseFloat(
    document.getElementById("deliveryfild").innerText
  );
  //   <----------------base price update--------------->
  const bestprice = parseFloat(document.getElementById("beseprice").innerText);
  const totalfild = (document.getElementById("totalfild").innerText =
    memoryFiforTotal + storajeFildforTotal + deliveryFildForTotal + bestprice);
  // <----------------grand total update --------------->
  grandtotal(totalfild);
}

// <----------------grand total update function--------------->

function grandtotal(x) {
  const grandtotal = document.getElementById("totalprice");
  grandtotal.innerText = x;
}

// <----------------promo code input--------------->

document.getElementById("promobutton").addEventListener("click", function () {
  const pomoinput = document.getElementById("promoinput");
  const totalprice = document.getElementById("totalprice");
  const totalpricenumber = parseFloat(totalprice.innerText);
  const totalpriceparcent = (totalpricenumber / 100) * 20;
  //   <----------------condition--------------->
  if (pomoinput.value == "stevekaku") {
    totalprice.innerText = totalpricenumber - totalpriceparcent;
    pomoinput.value = "";
  }
});
