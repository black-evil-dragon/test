window.onload = function () {
    var btn_text = document.getElementsByClassName("btn-text");
    var btn_plus = document.getElementsByClassName("btn-plus");


    function showSpoiler() {

        this.parentElement.getElementsByClassName('btn-text')[0].classList.toggle('active')
        this.parentElement.getElementsByClassName('btn-plus')[0].classList.toggle('active')

        /* Spoiler */
        //this.parentElement.parentElement.children[1].classList.toggle('active')

        const spoiler = this.parentElement.parentElement.children[1]

        if(spoiler.style.maxHeight){
            spoiler.style.maxHeight = null
        } else {
            spoiler.style.height = 100 + '%'
            spoiler.style.maxHeight = spoiler.scrollHeight + 'px'
        }
    }


    for (var i = 0; i < btn_text.length; i++) {
        btn_text[i].onclick = showSpoiler;
    }
    for (var i = 0; i < btn_plus.length; i++) {
        btn_plus[i].onclick = showSpoiler;
    }
}