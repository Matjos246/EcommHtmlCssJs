// AOS Animation
AOS.init({duration:1000, once:true});

// mobile menu
const hamburger = document.getElementById("hamburgerBtn")
const menu = document.querySelector(".menu")
 hamburger.addEventListener("click", ()=>{
    menu.classList.toggle("active");
 });

 //dropdown logic
 const dropdowns = document.querySelectorAll(".dropdown");
 dropdowns.forEach(dropdown=>{
    dropdown.querySelector(".dropdown.btn").addEventListener('click', (e)=>{
        e.stopPropagation();
        dropdowns.forEach(d=>d.classList.remove('active'))
        dropdown.classList.toggle('active')
    })
 });
 document.addEventListener("click", ()=>{
    dropdowns.forEach(d=>d.classList.remove('active'));
 })
 //search button animation
 const searcBtn = document.getElementById('searchBtn');
  const searchBox = document.getElementById('searchBox');
   const closeSearch = document.getElementById('closeSearch');

   searcBtn.onclick=()=>{
    searchBox.classList.add('active');
    searcBtn.classList.add('hide')
   }

   closeSearch.onclick=()=>{
      searchBox.classList.remove('active');
      searcBtn.classList.remove("hide");

   }

   //hero section
   new swiper(".mySwiper",{
      loop:true,
      autoplay:{delay:300, disableOnInteraction:false},
      pagination:{el:".swiper-pagination", clickable:true},
   });

   //product feature filter...
   document.querySelectorAll('.filter-menu button').forEach(btn => {
      btn.addEventListener("click",()=>{
         document.querySelector('.filter-menu .active')?.classList.remove("active");
         btn.classList.add('active');
         const filter = btn.dataset.filter
         document.querySelectorAll('.product-card').forEach(product=>{
            product.classList.toggle("hide", filter !== "all" && product.dataset.category !==filter);
         });
      });
   });

   // feature slider
   new Swiper('.mySwiper1', {
      slidesPerView: 4,
      spaceBetween: 30,
      loop: true,
      autoplay: {delay:2000, disableOnInteraction:false},
      navigation: {nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev"},
      // breakpoints{
      //    0:{slidesPerView:1},
      //    400:{slidesPerView:2},
      //    768:{slidesPerView:3},
      //    1024:{slidesPerView:5},
      // },
   }) ;