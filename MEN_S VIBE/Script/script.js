function myFunction() {
    var productBox = document.getElementById("sectionproduct").getElementsByTagName("article");
    document.getElementById("datetime").innerHTML = Date();
    var productBoxCount = productBox.length;

    for (i = 0; i < productBoxCount;i += 1) {
        var r;
        productBox[i].onclick = function(e) {
            if (this.id == "ertiga")
                confirm("You want to buy ARMANI_EXCHANGE??") ? openInNewTab('enquiry.html?product=ertiga') : false;
            else if (this.id == "innova")
                confirm("You want to buy ARMANI WATCHES??") ? openInNewTab('enquiry.html?product=innova') : false;
            else if (this.id == "alphrad")
                confirm("You want to buy ARMANI SUITS??") ? openInNewTab('enquiry.html?product=alphrad') : false;
            else if (this   .id == "vellfire")
                confirm("You want to buy ARMANI LEATHER JACKETS??") ? openInNewTab('enquiry.html?product=vellfire') : false;
            }
    }
    

}

window.onload = myFunction;


function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

