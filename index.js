for (let i = 0; i < document.querySelectorAll('.sound').length; i++) {
    document.querySelectorAll('.sound')[i].addEventListener('click', function (){
        let sound = this.innerHTML;
        switch(sound) {
            case '1':
                let sound1 = new Audio('./resources/SOUND1.mp3');
                sound1.play();
                break;
            case '2':
                let sound2 = new Audio('./resources/SOUND2.mp3');
                sound2.play();
                break;
            case '3':
                let sound3 = new Audio('./resources/SOUND3.mp3');
                sound3.play();
                break;
            case '4':
                let sound4 = new Audio('./resources/SOUND4.mp3');
                sound4.play();
                break;
            case '5':
                let sound5 = new Audio('./resources/SOUND5.mp3');
                sound5.play();
                break;
            case '6':
                let sound6 = new Audio('./resources/SOUND6.mp3');
                sound6.play();
                break;
            case '7':
                let sound7 = new Audio('./resources/SOUND7.mp3');
                sound7.play();
                break;
            case '8':
                let sound8 = new Audio('./resources/SOUND8.mp3');
                sound8.play();
                break;
        }
    })
}