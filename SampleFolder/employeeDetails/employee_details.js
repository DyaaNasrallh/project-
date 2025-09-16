const emplolyees=[
    {id:1,name:'Dyaa',department:"HR",salary:500},
    {id:2,name:'Ahmad',department:"It",salary:600},
    {id:3,name:'Mohamad',department:"HR",salary:900},
    {id:4,name:'Saleh',department:"Castamar Serves",salary:2300}
]
const output= document.getElementById('outPut');
const buttonA=document.getElementById('displayAllEmplolyees');
const buttonB=document.getElementById('calculatingTotalsalaries');
const buttonC=document.getElementById('HRDepartment');
const buttonD=document.getElementById('EmplolyeeWithID-2');
function desPlayAllEmplolyees(em){
 const str=em.map(item=>
    `<p>ID-${item.id}name: ${item.name}-${item.department}-$${item.salary}</p>`).join(' ');
 output.innerHTML=str;
}
function calculateAllSalary(em){
    const sum=em.reduce((a,p)=>a+p.salary,0);
    output.innerHTML=`Totla Salary:${sum}`;
}
function findHR(em)
{
const dep=em.filter(item=>item.department==="HR");
const desplay=dep.map(item=>`<p>${item.name}</p>`).join(' ');
output.innerHTML=desplay;
}
function findWhithID(em){
    const id=em.find(em=>em.id===2);
    if(id){
    output.innerHTML=`<p>${id.id}-${id.name}</p>`;}
    else{
        output.innerHTML='no employee has been found with this ID';
    }
}
buttonB.addEventListener('click',()=>calculateAllSalary(emplolyees));
buttonA.addEventListener('click',()=> desPlayAllEmplolyees(emplolyees));
buttonC.addEventListener('click',()=>findHR(emplolyees));
buttonD.addEventListener('click',()=>findWhithID(emplolyees))