const books=[];

function addBook(){
const bookname=document.getElementById('bookName').value;
const authorName=document.getElementById('authorName').value;
const bookDescription=document.getElementById('bookDescription').value;
const pagesNumber=document.getElementById('pagesNumber').value;
if (bookname && authorName && bookDescription && !isNaN(pagesNumber)) {
const book={
    name:bookname,
    author:authorName,
    description:bookDescription,
    pageNimber:pagesNumber
}
books.push(book);
showBookDetails();
clearInputs();
}
else{
    alert('Please fill in all fields correctly.');
}
}
function showBookDetails(){
const book=books.map((item,index)=>
    `<h1>book number:${index+1}</h1>
    <p><strong>Book Name: </strong>${item.name}</p>
    <p><strong>Author Name:</strong> ${item.author}</p>
    <p><strong>Book Description:</strong> ${item.description}</p>
    <p><strong>No. of Pages:</strong> ${item.pageNimber} page(s)</p>
    <button onclick="edit(${index})">Edit</button>`
);
document.getElementById('books').innerHTML=book.join(' ');
}
function edit(index){
const book=books[index];
const bookname=document.getElementById('bookName').value=book.name;
const authorName=document.getElementById('authorName').value=book.author;
const bookDescription=document.getElementById('bookDescription').value=book.description;
const pagesNumber=document.getElementById('pagesNumber').value=book.pageNimber;
books.splice(index,1);
showBookDetails();
}
function clearInputs() {
            document.getElementById('bookName').value = '';
            document.getElementById('authorName').value = '';
            document.getElementById('bookDescription').value = '';
            document.getElementById('pagesNumber').value = '';
 }