$.ajax({
  url:'/api/products',
  method: 'GET'
}).then(function(response){
  for(let i = 0; i < response.length; i++){
      let data = response[i];
      $("#product-view").append(`<div>${data.product} <button data-id=${data.id} class="get-product">Click Me</button></div>`);
  }
  console.log(response);
});


$.ajax({
  url: '/api/products/:id',
  method: "GET",
}).then(function(response){
  db.Products.findOne({where:{id:req.params.id}}).then()

});
$("#product-view").on("click",".get-product", function(event){
  event.preventDefault();
  let productId = $(this).data("id");
  console.log(productId)
})