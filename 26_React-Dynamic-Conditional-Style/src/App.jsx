// import { useState } from "react";

// function App() {
//   const[text, setText] = useState('green')
//   const[cardStyle, setCardStyle] = useState(
//     {
//       border:'3px solid black',
//       width: '200px',
//       boxShadow: '5px 5px 5px 5px grey',
//       margin: '10px',
//      }
//   )
  
//   const updateTheme = (bgcolor, Color) => {
//     setCardStyle({...cardStyle, backgroundColor:bgcolor, color:Color})
//     setText(text)
//   }
//   const[grid, setGrid] = useState(true)
//   return(
//     <>
//      <h1>Dynamic and Conditional Style</h1>
//      <button onClick={()=>updateTheme('grey','white')}>Gray Theme</button>
//      <button onClick={()=>updateTheme("white","black")}>Default Theme</button>
//      <button onClick={()=>setGrid(!grid)}>Toogle</button>
//      <div style={{display:grid?'flex':'block', flexWrap:'wrap', justifyContent:'space-around'}}>
//      <div style={cardStyle}>
//      <img src="https://picsum.photos/200" alt="random" />
//        <h1 style={{paddingLeft:'10px',color:text}}>Sahil khola</h1>
//        <p style={{paddingLeft:'10px'}}>I am Software Developer</p>
//      </div>
//      <div>
//      <div style={cardStyle}>
//      <img src="https://picsum.photos/200" alt="random" />
//        <h1 style={{paddingLeft:'10px',color:text}}>Sahil khola</h1>
//        <p style={{paddingLeft:'10px'}}>I am Software Developer</p>
//       </div>
//      </div>
//      <div>
//      <div style={cardStyle}>
//      <img src="https://picsum.photos/200" alt="random" />
//        <h1 style={{paddingLeft:'10px',color:text}}>Sahil khola</h1>
//        <p style={{paddingLeft:'10px'}}>I am Software Developer</p>
//       </div>
//      </div>
//      <div>
//      <div style={cardStyle}>
//      <img src="https://picsum.photos/200" alt="random" />
//        <h1 style={{paddingLeft:'10px',color:text}}>Sahil khola</h1>
//        <p style={{paddingLeft:'10px'}}>I am Software Developer</p>
//       </div>
//      </div>
//      <div>
//      <div style={cardStyle}>
//      <img src="https://picsum.photos/200" alt="random" />
//        <h1 style={{paddingLeft:'10px',color:text}}>Sahil khola</h1>
//        <p style={{paddingLeft:'10px'}}>I am Software Developer</p>
//       </div>
//      </div>
//      <div>
//      <div style={cardStyle}>
//      <img src="https://picsum.photos/200" alt="random" />
//        <h1 style={{paddingLeft:'10px',color:text}}>Sahil khola</h1>
//        <p style={{paddingLeft:'10px'}}>I am Software Developer</p>
//       </div>
//      </div>
//      <div>
//      <div style={cardStyle}>
//      <img src="https://picsum.photos/200" alt="random" />
//        <h1 style={{paddingLeft:'10px',color:text}}>Sahil khola</h1>
//        <p style={{paddingLeft:'10px'}}>I am Software Developer</p>
//       </div>
//      </div>
//      <div>
//      <div style={cardStyle}>
//      <img src="https://picsum.photos/200" alt="random" />
//        <h1 style={{paddingLeft:'10px',color:text}}>Sahil khola</h1>
//        <p style={{paddingLeft:'10px'}}>I am Software Developer</p>
//       </div>
//      </div>
//      <div>
//      <div style={cardStyle}>
//      <img src="https://picsum.photos/200" alt="random" />
//        <h1 style={{paddingLeft:'10px',color:text}}>Sahil khola</h1>
//        <p style={{paddingLeft:'10px'}}>I am Software Developer</p>
//       </div>
//      </div>
//      <div>
//      <div style={cardStyle}>
//      <img src="https://picsum.photos/200" alt="random" />
//        <h1 style={{paddingLeft:'10px',color:text}}>Sahil khola</h1>
//        <p style={{paddingLeft:'10px'}}>I am Software Developer</p>
//       </div>
//      </div>
//      <div>
//      <div style={cardStyle}>
//      <img src="https://picsum.photos/200" alt="random" />
//        <h1 style={{paddingLeft:'10px',color:text}}>Sahil khola</h1>
//        <p style={{paddingLeft:'10px'}}>I am Software Developer</p>
//       </div>
//      </div>
//      <div>
//      <div style={cardStyle}>
//      <img src="https://picsum.photos/200" alt="random" />
//        <h1 style={{paddingLeft:'10px',color:text}}>Sahil khola</h1>
//        <p style={{paddingLeft:'10px'}}>I am Software Developer</p>
//       </div>
//      </div>
//      <div>
//      <div style={cardStyle}>
//      <img src="https://picsum.photos/200" alt="random" />
//        <h1 style={{paddingLeft:'10px',color:text}}>Sahil khola</h1>
//        <p style={{paddingLeft:'10px'}}>I am Software Developer</p>
//       </div>
//      </div>
//      <div>
//      <div style={cardStyle}>
//      <img src="https://picsum.photos/200" alt="random" />
//        <h1 style={{paddingLeft:'10px',color:text}}>Sahil khola</h1>
//        <p style={{paddingLeft:'10px'}}>I am Software Developer</p>
//       </div>
//      </div>
//      <div>
//      <div style={cardStyle}>
//      <img src="https://picsum.photos/200" alt="random" />
//        <h1 style={{paddingLeft:'10px',color:text}}>Sahil khola</h1>
//        <p style={{paddingLeft:'10px'}}>I am Software Developer</p>
//       </div>
//      </div>
//      <div>
//      <div style={cardStyle}>
//      <img src="https://picsum.photos/200" alt="random" />
//        <h1 style={{paddingLeft:'10px',color:text}}>Sahil khola</h1>
//        <p style={{paddingLeft:'10px'}}>I am Software Developer</p>
//       </div>
//      </div>
//      <div>
//      <div style={cardStyle}>
//      <img src="https://picsum.photos/200" alt="random" />
//        <h1 style={{paddingLeft:'10px',color:text}}>Sahil khola</h1>
//        <p style={{paddingLeft:'10px'}}>I am Software Developer</p>
//       </div>
//      </div>
//      <div>
//      <div style={cardStyle}>
//      <img src="https://picsum.photos/200" alt="random" />
//        <h1 style={{paddingLeft:'10px',color:text}}>Sahil khola</h1>
//        <p style={{paddingLeft:'10px'}}>I am Software Developer</p>
//       </div>
//      </div>
//      <div>
//      <div style={cardStyle}>
//      <img src="https://picsum.photos/200" alt="random" />
//        <h1 style={{paddingLeft:'10px',color:text}}>Sahil khola</h1>
//        <p style={{paddingLeft:'10px'}}>I am Software Developer</p>
//       </div>
//      </div>
//      <div>
//      <div style={cardStyle}>
//      <img src="https://picsum.photos/200" alt="random" />
//        <h1 style={{paddingLeft:'10px',color:text}}>Sahil khola</h1>
//        <p style={{paddingLeft:'10px'}}>I am Software Developer</p>
//       </div>
//      </div>
//      <div>
//      <div style={cardStyle}>
//      <img src="https://picsum.photos/200" alt="random" />
//        <h1 style={{paddingLeft:'10px',color:text}}>Sahil khola</h1>
//        <p style={{paddingLeft:'10px'}}>I am Software Developer</p>
//       </div>
//      </div>
//      <div>
//      <div style={cardStyle}>
//      <img src="https://picsum.photos/200" alt="random" />
//        <h1 style={{paddingLeft:'10px',color:text}}>Sahil khola</h1>
//        <p style={{paddingLeft:'10px'}}>I am Software Developer</p>
//       </div>
//      </div>
//      <div>
//      <div style={cardStyle}>
//      <img src="https://picsum.photos/200" alt="random" />
//        <h1 style={{paddingLeft:'10px',color:text}}>Sahil khola</h1>
//        <p style={{paddingLeft:'10px'}}>I am Software Developer</p>
//       </div>
//      </div>
//      <div>
//      <div style={cardStyle}>
//      <img src="https://picsum.photos/200" alt="random" />
//        <h1 style={{paddingLeft:'10px',color:text}}>Sahil khola</h1>
//        <p style={{paddingLeft:'10px'}}>I am Software Developer</p>
//       </div>
//      </div>
//      <div>
//      <div style={cardStyle}>
//      <img src="https://picsum.photos/200" alt="random" />
//        <h1 style={{paddingLeft:'10px',color:text}}>Sahil khola</h1>
//        <p style={{paddingLeft:'10px'}}>I am Software Developer</p>
//       </div>
//      </div>
//      <div>
//      <div style={cardStyle}>
//      <img src="https://picsum.photos/200" alt="random" />
//        <h1 style={{paddingLeft:'10px',color:text}}>Sahil khola</h1>
//        <p style={{paddingLeft:'10px'}}>I am Software Developer</p>
//       </div>
//      </div>
//      </div>
//      </>
//   )
// }
// export default App;

function App() {
  
}
export default App;