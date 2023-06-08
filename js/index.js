

let textAreaValue = document.getElementById('textarea');
let totalCharCount = document.getElementById('total-conter');
let remainingCharCount = document.getElementById('remaining-counter');
let totalCount = 150;



textAreaValue.addEventListener("keyup",()=>{
  let charCount = textAreaValue.value.length;
  totalCharCount.innerHTML = charCount;
  remainingCharCount.innerHTML =  150 - charCount;

  
});

const copyText = () => {
    textAreaValue.select();
    textAreaValue.setSelectionRange(0,9999);
    navigator.clipboard.writeText(textAreaValue.value);
}