import { Appointment } from "../sections/Apportiment";
import { Hero } from "../sections/Hero";
import { Special } from "../sections/Special";
import { TopDoctors } from "../sections/TopDoctors";

export const HomePage = () => {
    return (
        <>
            <section id="hero" className="section p-2 flex items-center">
                <Hero />
            </section>
            <section id="specialties" className="p-2">
                <Special />
            </section>
            <section id="top-doctors" className="section p-2">
                <TopDoctors />
            </section>
            <section id="appointment" className="section p-2">
                <Appointment />
            </section>
        </>
    );
};
