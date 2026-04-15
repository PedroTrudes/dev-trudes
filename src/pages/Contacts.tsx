import { useEffect, useState } from "react";
import { getContacts } from "../services/api.js";
import CardContact from "@/components/ui/card-contacts.js";
import HeroSection from "@/components/HeroSection.js";
import Navbar from "@/components/Navbar.js";
import Footer from "@/components/Footer.js";

const Contacts = () => {
    const [listContact, setListContact] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if(!token) {
            window.location.href = "/login";
            return;
        }

        getContacts(token).then(setListContact);
        console.log(listContact);
    }, [])
    return(
        <>
        <HeroSection isInternal={true} position={"Fullstack Developer"} textApresentation={"Area de admin"}/>
        <div className="grid p-12 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {listContact.map((contact) => (
                <CardContact key={contact._id} email={contact.email} name={contact.name} message={contact.message}/>
                
            ))}

        </div>
        <Footer />
        </>
    )
}

export default Contacts;