import './style.css';
import Icon from './rgukt.png';

function component() {
    const element = document.createElement('div');

    element.innerHTML = 'Hello World'
    const viewImg = new Image();
    viewImg.src = Icon;

    element.appendChild(viewImg)
    return element;
}

document.body.appendChild(component());