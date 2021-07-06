const p1B = document.querySelector("#p1b");
const p2B = document.querySelector("#p2b");
const reset = document.querySelector("#reset");
const sc1 = document.querySelector('#p1');
const sc2 = document.querySelector('#p2');
const score = document.querySelector('#winning');
p1B.addEventListener('click',function(){
    let sc = parseInt(sc1.innerText);
    sc+=1;
    if(sc==score.value){
        sc1.classList.add("winner");
        sc2.classList.add("loser");
        p1B.disabled = true;
        p2B.disabled = true;
    }
    sc1.innerText = `${sc}`;
});
p2B.addEventListener('click',function(){
    let sc = parseInt(sc2.innerText);
    sc+=1;
    if(sc==score.value){
        sc2.classList.add("winner");
        sc1.classList.add("loser");
        p1B.disabled = true;
        p2B.disabled = true;
    }
    sc2.innerText = `${sc}`;
});
reset.addEventListener('click',()=>{
    resett();
});
function resett(){
    sc1.innerText = '0';
    sc2.innerText = '0';
    p1B.disabled = false;
    p2B.disabled = false;
    sc1.classList.remove("winner","loser");
    sc2.classList.remove("winner","loser");
    
}