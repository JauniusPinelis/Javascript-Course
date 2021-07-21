user = {
    money: 200
};

items = [
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

let itemsHtml = "";

items.forEach(item => {
    itemsHtml += `
    <tr>
        <th scope="row">${item.id}</th>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>${item.quantity}</td>
        <td>
            <button type="button" class="btn btn-secondary">Buy</button>
        </td>
    </tr> 
    `
});

document.querySelector("#shop-items-body").innerHTML = itemsHtml;
document.querySelector("#money").innerText = user.money;