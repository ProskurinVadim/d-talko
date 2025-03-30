import Header from "@/app/components/views/Header";
import Advantages from "@/app/components/views/Advantages";
import Services from "@/app/components/views/Services";
import Benefits from "@/app/components/views/Benefits";
import Banner from "@/app/components/views/Banner";
import Reviews from "@/app/components/views/Reviews";
import Answer from "@/app/components/views/Answers";
import BookForm from "@/app/components/views/BookForm";
import Contacts from "./components/views/Contacts";

export default function Home() {
  return (
      <>
          <Header />
          <Advantages />
          <Services />
          <Benefits />
          <Banner />
          <Reviews />
          <Answer />
          <BookForm />
          <Contacts />
      </>
  );
}
