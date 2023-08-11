const form = document.getElementById('my-form');
const amount = document.getElementById('exampleInputAmount');
const description = document.getElementById('exampleInputdescription');
const category = document.getElementById('exampleInputcategory');
const ul = document.getElementById('list-items')
const Id = document.getElementById('id')


        
form.addEventListener('submit', (e) => {
     
  //  console.log(amount.value, description.value, category.value);

  e.preventDefault();

  if(!Id.value){
  axios({
    method: "post",
    url: "http://localhost:5000/",
    data: {
      amount: amount.value,
      description: description.value,
      category: category.value,
    },
  })
    .then((result) => {
      const Id = result.data.userId;

      let li = document.createElement("li");
      li.textContent = `${amount.value}-${description.value}-${category.value}`;

      let p = document.createElement("p");
      p.textContent = `${Id}`;
      p.className = "id";
      p.style.display = "none";
      li.append(p);
      let deleteButton = document.createElement("button");
      deleteButton.textContent = "delete";
      deleteButton.className = "btn btn-secondary delete-that";
      li.append(deleteButton);

      let edit = document.createElement("button");
      edit.textContent = "Edit";
      edit.className = "btn btn-primary edit";
      li.append(edit);

      ul.append(li);

      form.reset();
    })
    .catch((error) => {
      console.log(error);
    });

}

else{
          
    let a = parseInt(amount.value)
    axios({
        method:"put",
        url:`http://localhost:5000/edit/${Id.value}`,
        data:{
            amount: a,
            description: description.value,
            category: category.value,
            
        }
    })
    .then(response =>{
       // console.log(response.data);
        

      let li = document.createElement("li");
      li.textContent = `${amount.value}-${description.value}-${category.value}`;

      let p = document.createElement("p");
      p.textContent = `${Id.value}`;
      p.className = "id";
      p.style.display = "none";
      li.append(p);
      let deleteButton = document.createElement("button");
      deleteButton.textContent = "delete";
      deleteButton.className = "btn btn-secondary delete-that";
      li.append(deleteButton);

      let edit = document.createElement("button");
      edit.textContent = "Edit";
      edit.className = "btn btn-primary edit";
      li.append(edit);

      ul.append(li);

      form.reset();

    })
}
    
});



document.addEventListener("DOMContentLoaded", function () {
    axios("http://localhost:5000/")
      .then((res) => {
        const users = res.data;
  
        users.forEach((user) => {
          const Id = user.id;
  
          let li = document.createElement("li");
          li.textContent = `${user.amount}-${user.description}-${user.category}`;
    
          let p = document.createElement("p");
          p.textContent = `${Id}`;
          p.className = "id";
          p.style.display = "none";
          li.append(p);

          let deleteButton = document.createElement("button");
          deleteButton.textContent = "delete";
          deleteButton.className = "btn btn-secondary delete-that";
          li.append(deleteButton);
          let edit = document.createElement("button");
          edit.textContent = "Edit";
          edit.className = "btn btn-primary edit";
          li.append(edit);
          ul.append(li);
        });
      })
      .catch((err) => console.log(err));
  });
  


  ul.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-that")) {
      let parent = e.target.parentNode;
     
      const id = parent.childNodes[1].textContent;
     
      axios.delete(`http://localhost:5000/${id}`).then((res) => {
        console.log(res.data);
        parent.remove();
      });
    }


    if(e.target.classList.contains("edit")){
        let parent = e.target.parentNode;

      const id = parent.childNodes[1].textContent;
      const content = parent.childNodes[0].textContent;
      const array = content.split('-')

            const a = array[0];
            const d= array[1];
            const c = array[2];

            amount.value = parseInt(a);
            description.value = d;
            category.value = c;
            Id.value = id;
            parent.remove();



      console.log(id);
      console.log(array);

    }
  });
  