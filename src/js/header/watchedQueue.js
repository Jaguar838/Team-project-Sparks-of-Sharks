import getRefs from "../getRef";


const refs=getRefs();
console.log(refs.queue);
console.log(refs.watched);
export function openData(data){
    let idFilms=data.dataset.id;  
    
    localStorage.setItem(idFilms, JSON.stringify(idFilms));
    idFilms = JSON.parse(localStorage.getItem(idFilms));
  
    
    console.log(idFilms); // [1, 2, 3]   
}

export function addWatched(){ 
  

  
    console.log(18); 
    
    
}

export function addQueue(){
console.log(26);

}



