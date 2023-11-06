let sec5_button = document.getElementById('sec5_button');
let sec5_block1_p3 = document.getElementById('sec5-block1-p3');
let burger = document.getElementById('burger');
let navigation = document.getElementById ("navigation");

sec5_button.addEventListener("click", function(){
    sec5_block1_p3.classList.toggle('active');
})

burger.addEventListener("click", function(){
    navigation.classList.toggle('active_nav');
})