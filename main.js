const select = document.querySelector(".select");
const select1 = document.querySelector(".select1");
const select2 = document.querySelector(".select2");
const select3 = document.querySelector(".select3");
const homescreen = document.querySelector(".home-screen");

select.addEventListener('mouseover', () => {
    homescreen.classList.remove("kik1");
    homescreen.classList.remove("kik2");
    homescreen.classList.remove("kik3");
    select.classList.add("active");
    homescreen.classList.add("kik");
});
select.addEventListener('mouseout', () => {
    select.classList.remove("active");
});

select1.addEventListener('mouseover', () => {
    homescreen.classList.remove("kik");
    homescreen.classList.remove("kik2");
    homescreen.classList.remove("kik3");
    homescreen.classList.add("kik1");
    select1.classList.add("active");
});
select1.addEventListener('mouseout', () => {
    select1.classList.remove("active");
});

select2.addEventListener('mouseover', () => {
    homescreen.classList.remove("kik1");
    homescreen.classList.remove("kik");
    homescreen.classList.remove("kik3");
    homescreen.classList.add("kik2");
    select2.classList.add("active");
});
select2.addEventListener('mouseout', () => {
    select2.classList.remove("active");
});

select3.addEventListener('mouseover', () => {
    homescreen.classList.remove("kik1");
    homescreen.classList.remove("kik2");
    homescreen.classList.remove("kik");
    homescreen.classList.add("kik3");
    select3.classList.add("active");
});
select3.addEventListener('mouseout', () => {
    select3.classList.remove("active");
});
