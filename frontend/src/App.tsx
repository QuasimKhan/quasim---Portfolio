import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { Hero } from "./components/sections/Hero";
import { Process } from "./components/sections/Process";
import { SelectedWork } from "./components/sections/SelectedWork";
import { Services } from "./components/sections/Services";
import { WhyWorkWithMe } from "./components/sections/WhyWorkWithMe";

function App() {
    return (
        <>
            <Navbar />

            <main>
                <Hero />
                <SelectedWork />
                <Services />
                <WhyWorkWithMe />
                <Process />
                <About />
                <Contact />
            </main>

            <Footer />
        </>
    );
}

export default App;
