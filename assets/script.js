const target = document.querySelectorAll('[data-anime]');
const animation = 'animate';

function animeScrool(){
    const windowTop = pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(element => {
        if(windowTop > element.offsetTop){
            element.classList.add(animation)
        }else{
            element.classList.remove(animation)
        }
    })
}

window.addEventListener('scroll', () => animeScrool())

animeScrool()