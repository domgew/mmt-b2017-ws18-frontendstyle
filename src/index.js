import './sass/style.scss'


import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';

const elements = document.querySelectorAll('.component-preview');
elements.forEach(element=>{
    const tabExample = document.createElement('a'), tabHTML = document.createElement('a'), tabCSS = document.createElement('a');
    const tabLiE = document.createElement('li'),tabLiH = document.createElement('li'),tabLiC = document.createElement('li');
    const tabUl = document.createElement('ul');
    const tabs = document.createElement('nav');
    //text for tabs
    tabExample.appendChild(document.createTextNode('Example'));
    tabExample.setAttribute('data-value','example');
    tabHTML.appendChild(document.createTextNode('HTML'));
    tabHTML.setAttribute('data-value','html');
    tabCSS.appendChild(document.createTextNode('SASS'));
    tabCSS.setAttribute('data-value','css');
    //event listeners for tabs
    tabExample.addEventListener('click',(e)=>{
        e.preventDefault();
        element.parentElement.classList.remove('show-example','show-html','show-css');
        element.parentElement.classList.add('show-example');
    });
    tabHTML.addEventListener('click',(e)=>{
        e.preventDefault();
        element.parentElement.classList.remove('show-example','show-html','show-css');
        element.parentElement.classList.add('show-html');
    });
    tabCSS.addEventListener('click',(e)=>{
        e.preventDefault();
        element.parentElement.classList.remove('show-example','show-html','show-css');
        element.parentElement.classList.add('show-css');
    });
    //tab in list item
    tabLiE.appendChild(tabExample);
    tabLiH.appendChild(tabHTML);
    tabLiC.appendChild(tabCSS);
    //list item in unordered list
    tabUl.appendChild(tabLiE);
    tabUl.appendChild(tabLiH);
    tabUl.appendChild(tabLiC);
    //unordered list in navigation
    tabs.appendChild(tabUl);
    //insert the navigation before the tabbed view
    element.parentElement.insertBefore(tabs,element);
});
