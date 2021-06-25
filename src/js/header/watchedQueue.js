import getRefs from "../getRef";
import modalMarkup from '../../templates/movieDetail.hbs';
import btnLib from '../../templates/header/mylibrary.hbs';
import { moviesMarkup, clearMarkup, lightBoxMarkup } from '../createMarkup';
import oneMovieTemplate from '../../templates/oneMovieTemplate.hbs';



const refs=getRefs();


refs.mylibraryBtn.addEventListener('click',renderButtonLibery);
function renderButtonLibery(){
    refs.headerContent.innerHTML=btnLib();
    
    
    
}

let watchedfilm= [];
let queueFilm=[];

export function openData(data){
     
    const objFilm=data;  
    const string =JSON.stringify(objFilm);    
    localStorage.setItem('filmy', string); 
   
}

export function addWatched(){ 
 
    const save=localStorage.getItem('filmy');  
    const objSave=JSON.parse(save)   
    watchedfilm.push(objSave);
    const string =JSON.stringify(watchedfilm);  
    localStorage.setItem('watched',string)
    
}

export function addQueue(){
  const save=localStorage.getItem('filmy');  
  const objSave=JSON.parse(save)   
  watchedfilm.push(objSave);
  const string =JSON.stringify(watchedfilm);  
  localStorage.setItem('queue',string)

}

export function renderWathedFilm(){
  const save=localStorage.getItem('watched');
  const objSave=JSON.parse(save);
  console.log(objSave)
  const watchedFilm=oneMovieTemplate(objSave);
  refs.moviesContainer.innerHTML=watchedFilm;

  
  
}
export function renderQueueFilm(){
  const save=localStorage.getItem('queue');
  const objSave=JSON.parse(save);
  console.log(objSave)
  const queueFilm=oneMovieTemplate(objSave);
  refs.moviesContainer.innerHTML=queueFilm;
}
 
console.log(refs.moviesContainer);




