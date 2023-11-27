const val = document.querySelector("input");
const cont = document.querySelector("ul");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    if (val.value === ''){
        alert('Enter a valid input');
    }
    else {
        let li = document.createElement('li');
        let li_val = val.value;
        li.innerText = li_val;
        let span = document.createElement('span');
        span.innerHTML = `<i class="fa-regular fa-circle-xmark"></i>`;
        li.appendChild(span);
        cont.append(li);
    }
    val.value = "";
    saveData();
})

cont.addEventListener("click", (ele) => {
    if (ele.target.tagName === 'LI'){
        ele.target.classList.toggle("checked");
    }
    else if (ele.target.tagName === 'I'){
        ele.target.parentElement.parentElement.remove();
    }
    saveData();
})

function saveData(){
    localStorage.setItem("data", cont.innerHTML);
}

function showList(){
    cont.innerHTML = localStorage.getItem("data");
}

showList();