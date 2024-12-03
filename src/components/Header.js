import trollFace from '../images/troll-face.png';

export default function Header() {
  return(
   <header className='header' >
      <img className='trollface' src={trollFace} alt='' />
      <h3 className='header-title' >Meme Generator</h3>
      <span className='header-course' >by HALOGEN</span>
       </header>
    )
}