user = {
    money: 200,
    items: []
};

shop = {
    items: [
        {
            id: 1,
            name: "Candy",
            price: 2,
            quantity: 8
        },
        {
            id: 2,
            name: "Ice cream",
            price: 4,
            quantity: 3
        },
    ]
};

updateUserMoney();
updateShopItems();

function updateUserMoney(chargedAmount){
    if (chargedAmount != null){
        user.money = user.money - chargedAmount;
    }
    document.querySelector("#money").innerText = user.money;
}

function buy(itemId, itemPrice, itemName){
    // Get the enter quantity and parse it to int
    let quantityEntered = parseInt(document.querySelector(
        "#quantity-input-" + itemId).value);
        

    // Calculate the cost of buying -> quantity * price
    let totalCost = itemPrice * quantityEntered;
    console.log(totalCost);

    // Update the quantity
    let selectedItem = shop.items.filter(i => i.id == itemId)[0];
    selectedItem.quantity -= quantityEntered;

    updateShopItems();

    // Update the users balance
    updateUserMoney(totalCost);


    // Add the bought items to the user

    let item = {
        id: itemId,
        name: itemName,
        quantity: quantityEntered
    };

    if (!user.items.map(i => i.id).includes(itemId)){
        //Push new item
        user.items.push(item);
    }
    else {
        // we find the item and increment its quantity
        let selectedItem = user.items.filter(i => i.id == itemId)[0];

        selectedItem.quantity += quantityEntered;
    }

    

    updateUserItems();

}

function updateUserItems(){
    let itemsHtml = "";

    user.items.forEach(item => {
        itemsHtml += `
        <tr>
            <th scope="row">${item.id}</th>
            <td>${item.name}</td>
            <td>${item.quantity}</td>
        </tr> 
        `
    });

    document.querySelector("#user-items-body").innerHTML = itemsHtml;
}

function updateShopItems(){
    let itemsHtml = "";

shop.items.forEach(item => {
    itemsHtml += `
    <tr>
        <th scope="row">${item.id}</th>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>${item.quantity}</td>
        <td>
            <input type="number" class="form-control" placeholder="Quantity" id=${"quantity-input-" + item.id } aria-label="quantity to buy" aria-describedby="quantity to buy">
            <button type="button" onClick="buy(${item.id}, ${item.price}, '${item.name}')" class="btn btn-secondary">Buy</button>
        </td>
    </tr> 
    `
});

document.querySelector("#shop-items-body").innerHTML = itemsHtml;
}