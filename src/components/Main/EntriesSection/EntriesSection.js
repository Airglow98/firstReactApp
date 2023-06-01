import "./EntriesSection.css"
import FavouriteButton from "./FavouriteButton"
import Entrycard from "./Entrycard";
import {initialEntries} from "../../../utils/initialEntries"
import { useState } from "react";


export default function EntriesSection() {
    const[entries, setEntries] = useState(initialEntries)
    return (
    <>
    <section className="EntriesSection-section">
    </section>
            {initialEntries.map((entry)=>(
                    <article  className="Entrycard-article" key={entry.id}>
                        <Entrycard 
                        id={entry.id}
                        date={entry.date}
                        motto={entry.motto}
                        notes={entry.notes}
                        />
                        <FavouriteButton></FavouriteButton>
                    </article>
            ))}
    </>
    );
}