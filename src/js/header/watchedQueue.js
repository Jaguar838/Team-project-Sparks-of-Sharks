import getRefs from "../getRef";
import btnLib from '../../templates/header/mylibery.hbs';
import moviesMarkup from '../createMarkup';
//import oneMovieTemplate from '../../templates/header/oneMovieTemplate.hbs';


const refs=getRefs();
console.log(refs.queue);
console.log(refs.watched);

refs.mylibraryBtn.addEventListener('click',renderButtonLibery);
function renderButtonLibery(){
    refs.headerContent.innerHTML=btnLib();
    refs.moviesContainer.innerHTML='';
    
    
}

let watchedfilm= [];
let queueFilm=[];

export function openData(data){
     
    const objFilm=data;
    console.log(objFilm) 
    const string =JSON.stringify(objFilm);
    
    localStorage.setItem('filmy', string); 
   
}

export function addWatched(){ 
    const save=localStorage.getItem('filmy');  
    const objSave=JSON.parse(save)   
    watchedfilm.push(objSave);
  console.log(watchedfilm); 
    
}

export function addQueue(){
    const save=localStorage.getItem('filmy');  
    const objSave=JSON.parse(save)  
    queueFilm.push(objSave);
  console.log(queueFilm);

}





