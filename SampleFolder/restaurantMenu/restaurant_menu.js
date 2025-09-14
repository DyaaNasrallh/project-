

const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];
const breakfastMenuHtml = breakfastMenu.map((item ,index)=>`<p> Item ${index+1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuHtml;
document.getElementById('breakfastTotalItems').innerHTML=`<p> Total: ${breakfastMenu.length}</p>`
mainCourseMenu.forEach((item ,index)=>{
    const createItem=document.createElement('p');
    createItem.innerHTML=`<p> Item ${index+1}: ${item}<p>`;
    document.getElementById('maincourseMenuItems').appendChild(ci);
})
 for(i=0;i<dessertMenu.length;i++){
     const dessertItem=document.createElement('p');
     dessertItem.innerHTML=`<p>Item ${i+1}: ${dessertMenu[i]}</p>`;
     document.getElementById('dessertMenuItems').appendChild(a);

 }