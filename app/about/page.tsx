import Advantages from "@/app/components/views/Advantages";
import AboutHeader from "@/app/components/views/AboutHeader";
import Specialization from "@/app/components/views/Specialization";
import Summary from "../components/views/Summary";
import Reviews from "../components/views/Reviews";
import BookForm from "../components/views/BookForm";
import Contacts from "../components/views/Contacts";

export default function About() {
    return (
        <>
            <AboutHeader />
            <Advantages />
            <Specialization />
            <Summary />
            <Reviews />
            <BookForm />
            <Contacts />
        </>
    )
}