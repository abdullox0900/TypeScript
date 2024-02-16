"use strict";
// import axios from "axios";
const elList = document.getElementById('list');
const elLoading = document.getElementById('loading');
let API = "https://api.unsplash.com/photos/?client_id=NjXfY5kc8FvYvy8vqWB4pFHwwCQR17TtmkQj9AEiksY";
const isLoading = (propCss = 'none') => {
    elLoading.style.display = `${propCss}`;
};
async function dataFetching() {
    try {
        isLoading('flex');
        const res = await fetch(API).finally(() => {
            isLoading('none');
        });
        const data = await res.json();
        getData(data);
        return data;
    }
    catch (error) {
        alert(`Malumot olishda xatoli --> ${error}`);
    }
}
dataFetching();
const getData = (data) => {
    data.forEach((item, index) => {
        const elItem = document.createElement('li');
        const elImg = document.createElement('img');
        elItem.style.backgroundColor = item.color;
        elImg.src = item.urls.full;
        elList.append(elItem);
        elItem.append(elImg);
    });
};
