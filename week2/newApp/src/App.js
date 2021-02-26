import React from "react"
import FlavorCard from "./FlavorCard"

function App() {
    return (
        <div className="flavors">
            <FlavorCard 
                flavor={{name: "MaxBerry", imgUrl: "https://user-images.githubusercontent.com/72266712/109277927-f49bcf00-77e5-11eb-90d7-eebce04418f7.jpg", descrip: "Blackberry, Blueberry, Strawberry & Elderberry Infused Sea Moss Gel", price: "$15"}}
            />
            
            <FlavorCard 
                flavor={{name: "BluezBerry", imgUrl: "https://user-images.githubusercontent.com/72266712/109277935-f5ccfc00-77e5-11eb-9dba-efad7217be30.jpg", descrip: "Blueberry & Elderberry Infused Sea Moss Gel", price: "$25"}}
            />


            
            <FlavorCard
                flavor={{name: "Applia", imgUrl: "https://user-images.githubusercontent.com/72266712/109277938-f5ccfc00-77e5-11eb-87e3-01c1c97eeeb1.jpg", descrip: "Apple & Elderberry Infused Sea Moss Gel", price: "$25"}}
            />
            
            <FlavorCard 
                flavor={{name: "Strawbanie", imgUrl: "https://user-images.githubusercontent.com/72266712/109277940-f5ccfc00-77e5-11eb-882d-f7b6bd73623b.jpg", descrip: "Strawberry & Elderberry Infused Sea Moss Gel", price: "$25"}}
            />

            <FlavorCard 
                flavor={{name: "SoulAmmo", imgUrl: "https://user-images.githubusercontent.com/72266712/109277942-f6659280-77e5-11eb-8839-79d43a31ba56.jpg", descrip: "Our Signature Elderberry Infused Sea Moss Gel", price: "$35"}}
            />
            
        </div>
    )
}

export default App