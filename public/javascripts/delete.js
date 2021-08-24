let currentProduct = document.querySelector;

document.getElementById("delete").onclick = (e) => {
  e.preventDefault();
  const productId = document.getElementById("product-id").value;

  axios.delete(`/api/products/${productId}`).then(processResult);
};

function processResult() {
  window.alert("Product deleted!");
}
