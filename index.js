window.onload = init;

function query(name) {
    return document.querySelector(name);
}

function query_all_raw(name) {
    return document.querySelectorAll(name);
}

function query_all(name, arg) {
    document.querySelectorAll(name).forEach(elem => {arg(elem)});
}

var zold = false;

function init()
{
    ki("sarga");
    ki("zold");
    setInterval(lampa, 8000);
    setTimeout(function() {query(".auto").classList.add("balroljobbra")}, 4000);
    
}

function lampa()
{
    be("sarga");
    setTimeout(function() {ki("piros")}, 2000);
    setTimeout(function() {ki("sarga")}, 2000);
    setTimeout(function() {be("zold");zold = true}, 2000);
    setTimeout(function() {ki("zold");zold = false}, 6000);
    setTimeout(function() {be("sarga")}, 6000);
    setTimeout(function() {var y1 = setInterval(function() {ki("sarga")}, 1000)}, 6000);
    setTimeout(function() {ki("sarga")}, 6500);
    setTimeout(function() {var y2 = setInterval(function() {be("sarga")}, 1000)}, 6500);
    setTimeout(function() {clearInterval(y1);console.log("ki1")}, 8000);
    setTimeout(function() {clearInterval(y2);console.log("ki2")}, 8000);
    setTimeout(function() {be("piros")}, 8000);
    setTimeout(function() {ki("sarga")}, 8000);
}

function be(color)
{
    query("." + color).style.opacity = 1;
}

function ki(color)
{
    query("." + color).style.opacity = 0.15;
}