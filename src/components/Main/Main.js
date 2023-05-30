import EntryForm from "./EntryForm/EntryForm";
import EntriesSection from "./EntriesSection/EntriesSection";
import Tab from "./EntriesSection/tabBar/Tab";

export default function Main(){
    return (<><EntryForm legendName={"Motto"} legendName2={"Notes"}/>
    <Tab/>
    <EntriesSection articleTitle={'"Lorem Ipsum"'} articleDescription={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quis quasi dolore sed labore distinctio explicabo cupiditate ullam illum iste necessitatibus, quo inventore! Expedita facilis impedit repellendus cum aperiam aut nemo ex eum voluptas ipsum, corporis iste tenetur nostrum!"}/>
    <EntriesSection articleTitle={'"Lorem Ipsum"'} articleDescription={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quis quasi dolore sed labore distinctio explicabo cupiditate ullam illum iste necessitatibus, quo inventore! Expedita facilis impedit repellendus cum aperiam aut nemo ex eum voluptas ipsum, corporis iste tenetur nostrum!"}/>
    <EntriesSection articleTitle={'"Lorem Ipsum"'} articleDescription={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quis quasi dolore sed labore distinctio explicabo cupiditate ullam illum iste necessitatibus, quo inventore! Expedita facilis impedit repellendus cum aperiam aut nemo ex eum voluptas ipsum, corporis iste tenetur nostrum!"}/>
    
    </>);
    
}