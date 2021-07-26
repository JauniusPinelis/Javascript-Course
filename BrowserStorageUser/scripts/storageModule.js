export function getStorageHtml(storage, storageName){
    let tbodyHtml = "";

    let keys = Object.keys(storage);
    keys.forEach(key => {
        //let value = storage.getItem(key);
        let value = storage[key];
        tbodyHtml +=
        `
        <tr>
        <td>${key}</td>
        <td>${value}</td>
        <td>${storageName}</td>
      </tr>
        `
    });

    return tbodyHtml;
}