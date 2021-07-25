user = {};
shop = {};

function refreshEveryting() {
  axios.get("http://localhost:3000/userItems").then(function (response) {
    user.items = response.data;
    updateUserItems();
  });

  axios.get("http://localhost:3000/user").then(function (response) {
    user.money = response.data.money;
    updateUserMoney();
  });

  axios.get("http://localhost:3000/shopItems").then(function (response) {
    shop.items = response.data;
    updateShopItems();
  });
}

refreshEveryting();

function updateUserMoney(chargedAmount) {
  if (chargedAmount != null) {
    user.money = user.money - chargedAmount;
    axios.put("http://localhost:3000/user/", user);
  }
  document.querySelector("#money").innerText = user.money;
}

function buy(itemId, itemPrice, itemName, itemQuantity) {
  // Get the enter quantity and parse it to int
  let quantityEntered = parseInt(
    document.querySelector("#quantity-input-" + itemId).value
  );

  if (quantityEntered > itemQuantity){
    alert(`there is not enough of item ${itemName}`);
    return;
  }

  // Calculate the cost of buying -> quantity * price
  let totalCost = itemPrice * quantityEntered;

  if (user.money < totalCost){
    alert(`You do not have enough money to buy this`);
    return;
  }

  // Update the quantity
  let selectedItem = shop.items.filter((i) => i.id == itemId)[0];
  selectedItem.quantity -= quantityEntered;

  axios.put("http://localhost:3000/shopItems/" + selectedItem.id, selectedItem);

  updateShopItems();

  // Update the users balance
  updateUserMoney(totalCost);

  // Add the bought items to the user

  let item = {
    id: itemId,
    name: itemName,
    quantity: quantityEntered,
  };

  if (!user.items.map((i) => i.id).includes(itemId)) {
    //Push new item
    user.items.push(item);

    axios.post("http://localhost:3000/userItems", item);
  } else {
    // we find the item and increment its quantity
    let selectedItem = user.items.filter((i) => i.id == itemId)[0];

    selectedItem.quantity += quantityEntered;

    axios.put(
      "http://localhost:3000/userItems/" + selectedItem.id,
      selectedItem
    );
  }

  updateUserItems();
}

function updateUserItems() {
  let itemsHtml = "";

  user.items.forEach((item) => {
    itemsHtml += `
        <tr>
            <th scope="row">${item.id}</th>
            <td>${item.name}</td>
            <td>${item.quantity}</td>
        </tr>
        `;
  });

  document.querySelector("#user-items-body").innerHTML = itemsHtml;
}

function updateShopItems() {
  let itemsHtml = "";

  shop.items.forEach((item) => {
      if (item.quantity > 0){
        itemsHtml += `
        <tr>
            <th scope="row">${item.id}</th>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.quantity}</td>
            <td>
                <input type="number" class="form-control" placeholder="Quantity" id="${
                "quantity-input-" + item.id
                }" aria-label="quantity to buy" aria-describedby="quantity to buy">
                <button type="button" onClick="buy(${item.id}, ${item.price}, '${item.name}', ${item.quantity}); return false;" class="btn btn-secondary">Buy</button>
            </td>
        </tr>
        `;
      }
    
  });

  document.querySelector("#shop-items-body").innerHTML = itemsHtml;
}
