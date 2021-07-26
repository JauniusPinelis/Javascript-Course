import {getCookies, setCookie} from './cookiesModule.js';
import { getStorageHtml } from './storageModule.js';

function renderKeyValuesTable(){
    
    let cookies = getCookies();

    let localStorageHtml = getStorageHtml(localStorage, "Local");
    let sessionStorageHtml = getStorageHtml(sessionStorage, "Session");
    let cookieStorageHtml = getStorageHtml(cookies, "Cookies");

    document.querySelector("#key-value-tbody").innerHTML = localStorageHtml + sessionStorageHtml + cookieStorageHtml;
}

renderKeyValuesTable();

function setStorageValue(){
    // Gets the values from inputs
    let key = document.querySelector("#input-key").value;
    let value = document.querySelector("#input-value").value;

    let storageType = document.querySelector("#storage-type-select").value;

    if (storageType == "Session"){
        sessionStorage.setItem(key, value);
    }

    if (storageType == "Local"){
        localStorage.setItem(key, value)
    }

    if (storageType == "Cookie"){
        setCookie(key,value,1);
    }

    if (storageType == "Session Object"){
        let complexObject = {
            name: "John",
            lastName: "Smith",
            address: {
                houseNumber: 22,
                streetName: "Hollow Street"
            },
            isCustomer: true
        }

        console.log(complexObject);

        let jsonString = JSON.stringify(complexObject)

        localStorage.setItem(key, jsonString);

        var retrievedJsonString = localStorage.getItem(key);

        let keyObject = JSON.parse(retrievedJsonString);

        console.log(keyObject);
    }

    renderKeyValuesTable();
    
}