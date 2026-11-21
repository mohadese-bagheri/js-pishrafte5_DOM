

function open() {
    let newpage = window.open("https://www.google.com",
        "_blank",
         "popup=yes,width:400,height=400");

   if (newpage) {
        setTimeout(() => {
            newpage.close();
        }, 700000);
    }
}