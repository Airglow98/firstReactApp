import "./Tab.css"
import Badge1 from "./Badge/Badge1"
import Badge2 from "./Badge/Badge2"

export default function Tab () {
 return(<>  
 <div className="Tab-div">
 <p>All Entries</p> 
 <Badge1/>
 <p className="badge-Favorites">Favorites</p> 
 <Badge2/>
</div>
</> )
}