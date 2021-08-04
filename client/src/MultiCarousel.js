import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const images="https://ik.imagekit.io/ikmedia/women-dress-2.jpg"
  const images1="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  const images2="https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  const images3="https://bintime.com/img/blog/for%20bintime%20product%20images.png.png"
  const images4="https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
  const images5="https://bintime.com/img/blog/for%20bintime%20product%20images.png.png"
  

  const watch="https://cdn.pixabay.com/photo/2019/07/13/13/42/watch-4334815_960_720.jpg";
   const homeAp="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwputz09vSaM6p_1HV0VH_O3b0RzgCLx1oJ8DeBXZFgpj0phKtkVo_g9RGfZcm39UPb04&usqp=CAU"

   const mobilePhones=[
       {id:1,name:'oppo f13',url:'https://www.91-img.com/pictures/139694-v5-oppo-a53-2020-mobile-phone-large-1.jpg?tr=q-60'},
       {id:2,name:'Samesung ',url:'https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/uk/advisor/wp-content/uploads/2020/11/phones-switch-apps.png'},
       {id:3,name:'Apple iPhone 12 mini specs, PhoneArena',url:'https://crdms.images.consumerreports.org/c_lfill,w_598/prod/products/cr/models/402431-smartphones-apple-iphone-12-10016496.png'},
       {id:4,name:'Apple iPhone 12 256GB, Purple',url:'https://t.infibeam.com/img/othe/0441617/00/76/iphone12purplepdpimageposition1en.jpg.5ee5b30076.989x250x250.jpg'},
       {id:5,name:'Buy SIM Free iPhone 12 128GB Mobile Phone Green | Sim Free',url:'https://www.reliancedigital.in/medias/Apple-12-Smartphones-491901536-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0NTIzNHxpbWFnZS9qcGVnfGltYWdlcy9oMzQvaGE1Lzk0MDc3NDY0NDEyNDYuanBnfDA3MmMxMTU3MzQ0M2ViMjdlMTMwNjlkZGMxOWMyNDViYjdiODJiYjZlNDExYzM4ZTQwYzQxOGZiNTk4MjMyNTk'},
       {id:6,name:'New Apple iPhone 12 Mini(64GB)-Blue',url:'https://www.reliancedigital.in/medias/Apple-iPhone-12-256GB-491996645-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMzA1N3xpbWFnZS9qcGVnfGltYWdlcy9oYjYvaGE0Lzk1MzAwMDYwMTE5MzQuanBnfGYzYzJlOTU2Njg3M2ZhMTAzMTVkMmE5NzBlNzUyNmU4ZDM2MDc1OGM5MTdiZGMxNmI2YTcyZGE1MjY5YjY0ZTU'},
       {id:7,name:'Apple iPhone 12 256GB, Green',url:'https://www.reliancedigital.in/medias/Apple-12-Smartphones-491901542-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MjE5NnxpbWFnZS9qcGVnfGltYWdlcy9oZjkvaGFkLzk0MDc3NTk1NDg0NDYuanBnfDY3NmZmZDAyMDljMzMwNGQyYWZhNTk4N2M3YWNiNTU3N2YwZTI5ZjQ5N2MxZjIxYTMzOTQ3OWM0NDQ1OTYxOGY'},
       {id:8,name:'OPPO A12',url:'https://www.91-img.com/pictures/138170-v4-oppo-a12-mobile-phone-large-1.jpg?tr=q-60'},
       {id:9,name:'OPPO K1',url:'https://www.91-img.com/pictures/130286-v5-oppo-k1-mobile-phone-large-1.jpg?tr=q-60'},
       {id:10,name:'OPPO F12',url:'https://i.pinimg.com/564x/02/3e/21/023e215e42108a15f5ee580e727ae6cb.jpg'},
   ]

   const jeans=[
       {id:1,name:'ERNEST Skinny push-up jeans',url:'https://www.promod.eu/ernest-skinny-push-up-jeans--pp601730-s6-produit-493x530.jpg'},
       {id:2,name:'hign waist denim skinny women Grey Jeans',url:'https://rukminim1.flixcart.com/image/714/857/k6ci8i80/jean/x/y/x/28-high-waist-jeans-70-german-club-original-imafzu6byygf6kqg.jpeg?q=50'},
       {id:3,name:'Perfect Outfir Skinny Women Blue Jeans',url:'https://rukminim1.flixcart.com/image/714/857/jz05rww0/jean/g/z/z/34-high-waist-jeans-102-german-club-original-imafj3ph6kzfz73v.jpeg?q=50'},
       {id:4,name:'Men Ankle Length Jeans',url:'https://5.imimg.com/data5/AL/RS/MY-2325220/men-ankle-length-jeans-500x500.jpg'},
       {id:5,name:'ERNEST Skinny push-up jeans',url:'https://img1.exportersindia.com/product_images/bc-full/2021/2/8393313/mens-ankle-length-jeans-1612246591-5709603.jpeg'},
       {id:6,name:'Light washed skinny Fit Bootcut',url:'https://assets.ajio.com/medias/sys_master/root/20210408/HiMy/606e0787f997dd7b64a6eeb5/-473Wx593H-441119753-mediumblue-MODEL.jpg'},
       {id:7,name:'Jeans-But Jeans For man and women',url:'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/8963473/2019/4/9/9bf85f32-6b74-42f2-a538-557b99a69ff71554805174525-Roadster-Women-Blue-Skinny-Fit-Mid-Rise-Low-Distress-Stretch-1.jpg'},
       {id:8,name:'Hearts Jeans',url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz2ga5TCYtghMRBQ7uoA5p8rKMFaNNGXkjoA&usqp=CAU'},
       {id:9,name:'Bell Bottom Jeans with Distressing',url:'https://cdn.shopify.com/s/files/1/0073/0438/0480/products/75758b739997ee013098610c8013f924_620x.jpg?v=1602487150'},
       {id:10,name:'Mens 5 Pocket Rinse Wash Jeans',url:'https://sslimages.shoppersstop.com/sys-master/images/h53/h4e/14423604494366/206422418_9204.jpg_230Wx334H'}   
   ]

 const shirts=[
   {id:1,name:'Mens Shirts',url:'https://5.imimg.com/data5/YU/MT/NS/SELLER-3664875/mens-shirts-500x500.jpg'},
   {id:2,name:'Evion Shirts, Gents Cotton Shirts, Boys Cotton Shirt',url:'https://5.imimg.com/data5/JQ/RJ/VW/SELLER-3664875/evion-shirts-500x500.jpg'},
   {id:3,name:'Striped Slim Fit Shirt',url:'https://assets.ajio.com/medias/sys_master/root/20210403/ywxs/60686961f997dd7b645dbf0c/-473Wx593H-461119026-black-MODEL.jpg'},
   {id:4,name:'',url:''},
   {id:5,name:'',url:''},
   {id:6,name:'',url:''},
   {id:7,name:'',url:''},
   {id:8,name:'',url:''},
   {id:9,name:'',url:''},
   {id:10,name:'',url:''},
 ]


function MultiCarousel() {
    return (
        <Carousel 
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        centerMode={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px" style={{marginTop:'100px'}}>
         <div><img src={images} alt='ye' /></div>
         <div><img src={images1} alt='ye' /></div>
         <div><img src={images2} alt='ye' /></div>
         <div><img src={images3} alt='ye' /></div>
         <div><img src={images4} alt='ye' /></div>
         <div><img src={images5} alt='ye' /></div>
         
        </Carousel>
    )
}

export default MultiCarousel
