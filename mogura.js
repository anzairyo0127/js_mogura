window.onload = function () {
    setInterval(function () {
        var dd = new Date();
        document.getElementById("otu").innerHTML = dd.toLocaleString();
        console.log(dd.toLocaleString());
    }, 1000);
}
