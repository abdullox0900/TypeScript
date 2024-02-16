// import axios from "axios";
const elList = document.getElementById('list') as HTMLUListElement;
const elLoading = document.getElementById('loading') as HTMLHeadingElement;

let API:string = "https://api.unsplash.com/photos/?client_id=NjXfY5kc8FvYvy8vqWB4pFHwwCQR17TtmkQj9AEiksY";

interface dataObj {
    color: string
    urls: {
        full: string 
        raw: string
        regular: string
        small: string 
        small_s3: string 
        thumb: string
    }
    links: {
        download: string
    }
    alt_description: string
}

const isLoading = (propCss:string = 'none') => {
    elLoading.style.display = `${propCss}`
}

async function dataFetching() { 
    try {
        isLoading('flex')
        const res:Response = await fetch(API).finally(() => {
            isLoading('none')
        })
        const data:any = await res.json();

        getData(data)

        return data
    } catch (error) {
        alert(`Malumot olishda xatoli --> ${error}`)
    }
}

dataFetching();

const getData = (data:any) => {
    data.forEach((item:dataObj, index:number) => {

        const elItem = document.createElement('li');
        const elImg = document.createElement('img');

        elItem.style.backgroundColor = item.color

        elImg.src = item.urls.full       

        elList.append(elItem);
        elItem.append(elImg);
    })     
}