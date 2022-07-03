import React from 'react';
import '../App.css';

// const greetings = [
//     ['Hola', 'Kaushan Script'], ['Bonjour', 'Sora'], ['Olá', 'Sora'], ['Hello', 'Cormorant'],
//      ['Namaste', 'Sora'], ['Vanakkam', 'Kaushan Script'], ['Namaskaram', 'Cormorant'], 
//      ['Buenas', 'Kaushan Script'],['Ni Hao', 'Cormorant'], ['Ohayou', 'Sora']
//   ];

function Hero(){
//     const [newGreeting, setnewGreeting] = useState("Hello");

//     const shuffle = useCallback(() => {
//     const index = Math.floor(Math.random() * greetings.length);
//     setnewGreeting(greetings[index][0]);
//     document.getElementById("hero-greet").style.fontFamily = greetings[index][1];
// }, []);

// useEffect(() => {
//     const intervalID = setInterval(shuffle, 2000);
//     return () => clearInterval(intervalID);
// }, [shuffle])

return(
  <>
    <div className='hero'>
    <h1 className='grad-text' id='hero-greet'>Hello</h1>
    {/* <div className='hero-name'>
      <p style={{textAlign: "right"}}>HARSHA</p>
      <p style={{flex: "0.4", padding: "1% 2%"}}><hr /></p>
      <p style={{textAlign: "left"}}>ARIMANDA</p>
    </div> */}
    </div>
  </>
    
)
}

export default Hero;