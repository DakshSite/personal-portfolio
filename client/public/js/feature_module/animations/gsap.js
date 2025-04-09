const blury_bg = document.getElementById("blury_bg");
const menuBar = document.querySelector("[menuBar]");
const menuBox_li = document.querySelectorAll("#menuBox li");
const menuBox_a = document.querySelectorAll("#menuBox a");
let menu_flag = true;

// nav box open and close animation triggered by bar btn
(()=>{

// Default Style
gsap.to("#menuBox",{
    borderRadius: "100%",
});
gsap.to("#menuBox div",{
    opacity: 0,
    duration: 0.2,
});
blury_bg.style.display = "hidden";





// Blury Background Event
blury_bg.addEventListener("click",()=>{
    gsap.to("#menuBox div *",{
        opacity: 0,
        duration: 0.5,
    })
    gsap.to("#menuBox",{
        x: "600px",
        borderRadius: "100%",
        duration: 0.75,
    });
    menu_flag = true;
    blury_bg.style.display = "none";
})






// Button Event
menuBar.addEventListener("click",()=>{
    conditionCheck();
});
menuBox_li.forEach(e => {
    e.addEventListener("click", ()=>{
        conditionCheck();
    });
})
menuBox_a.forEach(e => {
    e.addEventListener("click", ()=>{
        conditionCheck();
    });
})


function conditionCheck(){
    if(menu_flag){
        gsap.to("#menuBox",{
            x: 0,
            borderRadius: 0,
            duration: 0.75,
        });
        gsap.to("#menuBox div",{
            opacity: 1,
            duration: 0.5,
        })
        menu_flag = false;
        blury_bg.style.display = "block";
    }else{
        gsap.to("#menuBox div",{
            opacity: 0,
            duration: 0.5,
        })
        gsap.to("#menuBox",{
            x: "600px",
            borderRadius: "100%",
            duration: 0.75,
        });
        menu_flag = true;
        blury_bg.style.display = "none";
    }
}



})();







// Project Section animate ececute by scroll triggered
let project_created_tl = gsap.timeline();

(()=>{

    // page 4
    gsap.to("#page4 h1",{
        x: "-80%",
        color: "#6c63ff",
        scrollTrigger: {
            trigger: "#page4",
            // markers: true,
            start: 'top 0%',
            end: 'top -200%',
            scrub: 2,
            pin: true,
        }
    });

})();











// loader
let loader_tl = gsap.timeline();
window.addEventListener("load",()=>{
    // here load exec
});