const form = document.getElementById('my-form');
const Name = document.getElementById('candyName');
const description = document.getElementById('candyDescription');
const price = document.getElementById('candyPrice');
const quantity = document.getElementById('candyQuantity');
const ul = document.getElementById('list-items')
const Id = document.getElementById('id')


        
form.addEventListener('submit', (e) => {

     //console.log(Name.value, description.value, price.value , quantity.value); 
  

  e.preventDefault();


axios({
    method: "post",
    url: "http://localhost:5000/",
    data: {
      name: Name.value,
      description: description.value,
      price: price.value,
      quantity: quantity.value
    },
  })
  .then((result) => {
    const Id = result.data.userId;

    let li = document.createElement("li");
    li.textContent = `${Name.value}-${description.value}-${price.value}Rs. -${quantity.value}`;

    let p = document.createElement("p");
    p.textContent = `${Id}`;
    p.className = "id";
    p.style.display = "none";
    li.append(p);
    let buyOne = document.createElement("button");
    buyOne.textContent = "buy One";
    buyOne.className = "btn btn-secondary one";
    li.append(buyOne);

    let buyTwo = document.createElement("button");
    buyTwo.textContent = "buy Two";
    buyTwo.className = "btn btn-secondary two";
    li.append(buyTwo);

    let buyThree = document.createElement("button");
    buyThree.textContent = "buy Three";
    buyThree.className = "btn btn-secondary three";
    li.append(buyThree);

    ul.append(li);

    form.reset();
  })
  .catch((error) => {
    console.log(error);
  });








})












document.addEventListener("DOMContentLoaded", function () {
    axios("http://localhost:5000/")
      .then((res) => {
        const users = res.data;
  
        users.forEach((user) => {
          const Id = user.id;
          let li = document.createElement("li");
          li.textContent = `${user.name}-${user.description}-${user.price}Rs. -${user.quantity}`;
      
          let p = document.createElement("p");
          p.textContent = `${Id}`;
          p.className = "id";
          p.style.display = "none";
          li.append(p);
          let buyOne = document.createElement("button");
          buyOne.textContent = "buy One";
          buyOne.className = "btn btn-secondary one";
          li.append(buyOne);
      
          let buyTwo = document.createElement("button");
          buyTwo.textContent = "buy Two";
          buyTwo.className = "btn btn-secondary second";
          li.append(buyTwo);
      
          let buyThree = document.createElement("button");
          buyThree.textContent = "buy Three";
          buyThree.className = "btn btn-secondary three";
          li.append(buyThree);
      
          ul.append(li);
         
        });
      })
      .catch((err) => console.log(err));
  });
  


  

  ul.addEventListener("click", (e) => {
   
    let num;
    if(e.target.classList.contains("one")){
        num =1;
    }


  else  if(e.target.classList.contains("second")){
        num =2;
    }


   else if(e.target.classList.contains("three")){
        num =3;
    }

    
  
        let parent = e.target.parentNode;

      const id = parent.childNodes[1].textContent;

      const content = parent.childNodes[0].textContent;
      const array = content.split('-')

      



     
      axios({
        method:"put",
        url:`http://localhost:5000/edit/${id}`,
        data:{
            number:num,
            
        }
    })
    .then((data)=>{

        let updatedQuantity = data.data;
        
        if(updatedQuantity<=0){
 
            axios.delete(`http://localhost:5000/${id}`).then((res) => {
                console.log(res.data);
                parent.remove();
              });
        }
        window.location.reload();                          
    })




    
  });
