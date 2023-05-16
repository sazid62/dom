
function newdiv(v, res){
    // console.log("called");
    var newdiv = document.createElement('div');
    var btn = document.createElement('button');
    var ptag = document.createElement('p');
    newdiv.className= 'newdiv';
    ptag.innerHTML = `${v} ${res} cm`;
    btn.onclick = function(event){
        var parentDiv = event.target.parentElement;
        convertToMeter(parentDiv);
    };
    btn.innerHTML = 'Convert To Meter';
    btn.style.width = '120px';
    btn.style.height = '30px';
    btn.style.backgroundColor = "mediumspringgreen"
    newdiv.appendChild(ptag);
    newdiv.appendChild(btn);
    newdiv.style.display = 'flex';
    newdiv.style.gap = '70px'
    newdiv.style.marginBottom ='10px';
    return newdiv;
}
function convertToMeter(parentDiv){
    var x = parentDiv.querySelector('p');
    var b = parentDiv.querySelector('button');
    const y = x.innerHTML;
    let str ="";
    let f =0, newval;
    for(let i = 0;i<y.length;i++){
        if(y[i]>='0' && y[i]<='9'){
            str+=y[i];
        }
        else if(y[i]=='.'){
            f=1;
            str+=y[i];
        }
    }
    if(f){
        newval = parseFloat(str);
        newval = newval /100;
    }
    else{
        newval = parseInt(str);
        newval = newval/100;
    }
    if(y.includes("Triangle")){
        x.innerHTML = `Triangle ${newval} m<sup>2</sup>`;
    }
    else if(y.includes("Rectangle")){
        x.innerHTML = `Rectangle ${newval} m<sup>2</sup>`;
    }
    else{
        x.innerHTML = `Parallelogram ${newval} m<sup>2</sup>`;
    }
    b.disabled = true;
}
function calculate(v, v1, v2) {
    let res;
    if (v == "Triangle") {
        res = 0.5 * v1.value * v2.value;
    }
    else if (v == "Rectangle" || v == "Parallelogram") {
        res = v1.value * v2.value;
    }

    document.getElementById('output').appendChild(newdiv(v,res));
}

function colorchange(val) {
    let x = document.getElementById(val);
    x.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
}