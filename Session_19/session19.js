


// let stores = [
//     { id: 1, name: "Milk", count: 100 },
//     { id: 2, name: "Yakult", count: 100 },
//     { id: 3, name: "Butter", count: 100 }
//   ];
  
//   let carts = [

//     { id: 1, name: "Milk", count: 1 },

//   ];
  
//   let loop = true;


//   while (true) {

    
//     let input = prompt("hãy nhập ký tự").trim().toLowerCase();
//     console.log(input);
  
//   switch (input) {
//     case "c":
//       let productName = prompt("Mời bạn nhập tên sản phẩm muốn mua").trim().toLowerCase();
  
//       let findIndex = stores.findIndex((e) => e.name.toLowerCase() === productName);
  
//       if (findIndex === -1) {
//         console.log(`không tìm thấy sản phẩm ${productName} trong cửa hàng mời bạn tiếp tục mua hàng`);
//       } else {
//         let cartIndex = carts.findIndex((e) => e.name.toLowerCase() === productName);
  
//         if (cartIndex === -1) {
//           let product = stores[findIndex];
//           let cartProduct = { ...product, count: 1 };
//           carts.push(cartProduct);
//         } else {
//           carts[cartIndex].count = carts[cartIndex].count + 1;
//         }
  
//         stores[findIndex].count = stores[findIndex].count - 1;
//         database(stores)
//         database(carts)
        
//       }
//       break;
  
//     case "r":
//       console.log("Sản phẩm có trong cửa hàng:");
//       database(stores);
//       console.log("Giỏ hàng của bạn:");
  
//       if (carts.length === 0) {
//         console.log("Giỏ hàng không có gì");
//       } else {
//         database(carts);
//       }
//       break;

//       case "u" :

//       let updateIndex =+(prompt("Bạn muốn cập nhập lại sản phẩm nào trong cart"));


//       oldCart = carts[updateIndex - 1].count
      
//       carts[updateIndex - 1].count = +(prompt(`mời bạn nhập vào số lượng mới của phần tử  ${carts[updateIndex-1].count}`))


//       let storeIndex = stores.findIndex((e) => e.id === carts[updateIndex - 1].id)

//       stores[storeIndex].count = stores[storeIndex].count + oldCart - carts[updateIndex - 1].count

//     console.log("Sản phẩm trong cửa hàng")

//     database(stores)
//     console.log("Sản phẩm trong giỏ hàng")
//     database(carts)



//       break;

//       case "d": 


//       let deleteInput= +(prompt("Bạn muốn xóa sản phẩm nào ra khỏi cart?"))

//       let deleteProductId = carts[deleteInput -1].id;


//       carts.splice(deleteInput-1 ,1)

//       let deleteStoreIndex = stores.findIndex((e) => e.id === deleteProductId)

//       stores[deleteStoreIndex].count = 100;


//       break;

//       case "e":
//         loop = false
  
//     default:
//       break;
//   }
//   }

  
  
//   function database(db) {
//     for (const i in db) {
//       console.log(`${+i + 1}. ${db[i].name} - quantity: ${db[i].count}`);
//     }
//   }
  



// let h1element = document.getElementById("demo-id")

// console.log(h1element)


// let demoClassList = document.getElementsByClassName("demo-class")


// console.log(demoClassList)


// let demoTagName = document.getElementsByTagName("div")

// console.log(demoTagName)


// let h1 =  document.querySelector("h1#demo-id.demo-class")

// console.log(h1)


// let classCollection = document.querySelectorAll(".demo-class")

// console.log(classCollection)



// h1.textContent = " rwa con ca len bo`"

// h1.innerHTML = `<u style = "text-decoration: line-through"> heheWorld</u>`



let info = [
    {
        id:3,
        title:"toi muon xyz",
        description:"Toi muon binh thuong 2024",
        imge: "Hinh Anh 3",
        content:"Toi Muon giet nguoi",
    },
{
    id:3,
    title:"toi muon xyz",
    description:"Toi muon binh thuong 2024",
    imge: "Hinh Anh 3",
    content:"Toi Muon giet nguoi",
},
{
    id:2,
    title:"toi muon abc",
    description:"Toi muon binh thuong 2024",
    imge: "Hinh Anh 3",
    content:"Toi Muon giet nguoi",
},
{
    id:1,
    title:"toi muon giet nguoi",
    description:"Toi muon binh thuong 2024",
    imge: "Hinh Anh 3",
    content:"Toi Muon giet nguoi",
},
];

const cardCointainer = document.getElementById("card-container")

console.log(cardCointainer)

let cardTemplate = `
    <div class="card">
          <h2>TITLE HEADING</h2>
          <h5>Title description, Dec 7, 2017</h5>
          <div class="fakeimg" style="height: 200px">Image</div>
          <p>Some text..</p>
        </div>`;


        for(let blog of info) {
            cardCointainer.innerHTML = cardCointainer.innerHTML + 
            `
             <div class="card">
          <h2>${blog.title}</h2>
          <h5>${blog.description}</h5>
          <div class="fakeimg" style="height: 200px">${blog.imge}</div>
          <p>${blog.content}</p>
        </div>

            `
        }




 let findImg = document.getElementsByTagName("img");

 findImg[0].style.borderRadius = "50%";




 let btn = document.getElementById("btn")


 btn.onclick = function() {
    alert("Trái đất này là của bố mày")
 }





