import React from 'react';
// import memesData from '../memesData.js';


export default function Main() {
 
     const [meme, setMeme] = React.useState({
            topText : "",
            bottomText : "",
            randomImage : "https://i.imgflip.com/1ur9b0.jpg"
      });
      
     const [allMemes, setAllMemes]  = React.useState([]);
    
    // any of these works
    // React.useEffect( () => {
//        fetch("https://api.imgflip.com/get_memes")
//          .then(res => res.json())
//          .then(data => setAllMemes(data.data.memes) )
//          
//     }, []); 
    
    React.useEffect( () => {
      async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes")
      const data = await res.json()
      setAllMemes(data.data.memes)
      }
      
      getMemes()
    }, []); 
   
    
        
        
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = (allMemes[randomNumber].url);
        
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
   };
   
    function handleChange(event) {
      const {name, value} = event.target;
      setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
      }));
    };
  
  
  
     return(
         <main>
          <section className='form' >
             <input
                className='input' 
                placeholder='Top text' 
                type='text'
                onChange={handleChange}
                name='topText'
                value={meme.topText}
                />
                
             <input 
                className='input' 
                placeholder='Bottom text' 
                type='text'
                onChange={handleChange}
                name='bottomText'
                vaue={meme.bottomText}
                />
                
             <button className='button' onClick={getMemeImage} >
                         Get image to generate meme
             </button>
          </section>
          
      <div className='meme' >
         <img className='memeimage' src={meme.randomImage} alt='' />
         <h2 className="meme--text top">{meme.topText}</h2>
         <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
          
        </main>
          )
}