

const breakfastMenu = [
    {item:'Pancakes',price:3},
    {item: 'Eggs Benedict',price:4},
    {item: 'Oatmeal',price:10},
    {item:'Frittata',price:7}
];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];
const breakfastMenuHtml = breakfastMenu.map((item ,index)=>`<p> Item ${index+1}: ${item.item}-$${item.price}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuHtml;
document.getElementById('breakfastTotalItems').innerHTML=`<p> Total: ${breakfastMenu.length}</p>`
mainCourseMenu.forEach((item ,index)=>{
    const createItem=document.createElement('p');
    createItem.innerHTML=`<p> Item ${index+1}: ${item}<p>`;
    document.getElementById('maincourseMenuItems').appendChild(createItem);
})
 for(i=0;i<dessertMenu.length;i++){
     const dessertItem=document.createElement('p');
     dessertItem.innerHTML=`<p>Item ${i+1}: ${dessertMenu[i]}</p>`;
     document.getElementById('dessertMenuItems').appendChild(dessertItem);

 }