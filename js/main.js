var menu = document.querySelector(".menu");

menu.onclick = () => {
  document.querySelector("nav ul").classList.toggle("active");
};

window.onscroll = () => {
  document.documentElement.scrollTop >
  document.querySelector("header").offsetHeight
    ? document.querySelector("nav").classList.add("sticky")
    : document.querySelector("nav").classList.remove("sticky");
};

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq, index) => {
  faq.onclick = (e) => {
    faqs.forEach((faq_1, i) =>
      index != i ? faq_1.classList.remove("active") : null
    );
    e.currentTarget.classList.contains("active")
      ? e.currentTarget.classList.remove("active")
      : e.currentTarget.classList.add("active");
  };
});


    document.querySelector(".logo a").innerText = "Car Home";
    document.title = "Car Home";



//   {
//     "id": 1,
//     "heading": "2023 Ram 2500Longhorn Diesel Crew Cab",
//     "vehicleMakeModel": "2023 Ram 2500",
//     "vehicleTrim": "Longhorn Diesel Crew Cab",
//     "dealerPrice": "$88,675",
//     "colors": [
//         {
//             "color": "Flame Red Clear Coat"
//         },
//         {
//             "color": "Mountain Brown/Light Mountain Brown premium leather"
//         }
//     ],
//     "images": [
//         "https://static.ed.edmunds-media.com/unversioned/img/e17/no-vehicle-gray-images/no-vehicle-gray-image-truck.svg"
//     ],
//     "engine": "6'4” Bed, 6.7L, 6cyl",
//     "dealerName": "Corwin Chrysler Dodge Jeep Ram (65 mi away)",
//     "dealerLocation": "Corwin Chrysler Dodge Jeep Ram (65 mi away)"
// }
