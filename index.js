function saveSelectCard() {
  var formData = {
    imageCard: document.querySelectorAll("#payment"),
    cardNumber: document.getElementById("card-number").value,
    expiryDate: document.getElementById("date").value,
    cvc: document.getElementById("password").value,
  };

  const formDataJSON = JSON.stringify(formData);
  localStorage.setItem("selectCardData", formDataJSON);
  console.log(formSeclectCard);
}

const tbodyElement = document.querySelector("#tbody");

const formData = [
  {
    imageCard: "https://www.shareicon.net/download/2016/08/01/640317_card.svg",
    cardNumber: "1234567890123456",
    expiryDate: "12/24",
    cvc: "123",
  },
  {
    imageCard: "https://www.shareicon.net/download/2016/08/01/640317_card.svg",
    cardNumber: "1234567890123456",
    expiryDate: "12/24",
    cvc: "123",
  },
  {
    imageCard: "https://www.shareicon.net/download/2016/08/01/640317_card.svg",
    cardNumber: "1234567890123456",
    expiryDate: "12/24",
    cvc: "123",
  },
];
let trHTMLs = formData.map((data) => {
  return `
    <tr>
    <td>
      <img
        style="height: 36px; width: 60px"
        src="${data.imageCard}"
        alt="ảnh"
      />
    </td>
    <td>${data.cardNumber}</td>
    <td>${data.expiryDate}</td>
    <td>${data.cvc}</td>
    <td>
      <button>View</button>
      <button>Edit</button>
      <button>Delete</button>
    </td>
  </tr>
    `;
});

let trHTML = trHTMLs.join("");

tbodyElement.innerHTML = trHTML;

console.log(trHTML);

