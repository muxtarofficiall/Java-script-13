const btn = document.querySelector(".btn");
const boxs = document.querySelector(".boxs");

const add = () => {
    const number = Math.trunc(Math.random() * 5 + 1);
    const a = Math.trunc(Math.random() * 255);
    const b = Math.trunc(Math.random() * 255);
    const c = Math.trunc(Math.random() * 255);
    const element = document.createElement("div");
    element.classList.add("boxs");
    element.textContent = `message ${number}`;
    console.log(`color:rgb(${a},${b},${c})`);

    element.setAttribute("style", `color:rgb(${a},${b},${c})`)
    boxs.append(element);


    setTimeout(() => {
        boxs.lastChild.remove();
    }, 3200);




}

btn.addEventListener("click", add);