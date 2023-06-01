import EntryForm from "./EntryForm/EntryForm";
import EntriesSection from "./EntriesSection/EntriesSection";
import Tab from "./EntriesSection/tabBar/Tab";

export default function Main(){
    return (<><EntryForm legendName={"Motto"} legendName2={"Notes"}/>
    <Tab/>
    <EntriesSection />
    </>);
    
}