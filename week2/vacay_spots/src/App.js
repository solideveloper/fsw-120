import React from "react"
import spots from "./spots"
import Properties from "./Properties"



function App(){
     const a = spots.map(spots => <Properties key={spots.id} place={spots.place} price={spots.price} time={spots.timeToGo} />)

     return (
          <div>
               {a}
          </div>
     )
}

export default App