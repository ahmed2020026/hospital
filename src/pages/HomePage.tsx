import { Appointment } from "../sections/Apportiment"
import { Hero } from "../sections/Hero"
import { Special } from "../sections/Special"
import { TopDoctors } from "../sections/TopDoctors"

export const HomePage = () => {
    return (
        <>
            <section className='section p-2 flex items-center'>
                <Hero />
            </section>
            <section className='p-2'>
                <Special />
            </section>
            <section className='section p-2'>
                <TopDoctors />
            </section>
            <section className="section p-2">
                <Appointment />
            </section>
        </>
    )
}