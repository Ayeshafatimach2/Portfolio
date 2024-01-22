

import ContactForm from "@/components/Contact/contactForm";

export default function Contact() {
    return (
        <section id="contact">
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold text-center my-8">
                Contact Form
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>

            </h1>
            <div className="p-8 bg-[#BDD0CF] rounded-xl shadow-2xl w-96">

                <ContactForm />

            </div>
        </div>
        </section>
    );
}
