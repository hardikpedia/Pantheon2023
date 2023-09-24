import { useState } from 'react';
import FaqCard from '@/components/faqcard';
export default function Faq() {



    return (
        <div className=' bg-black'>
            <div >

                <section className="bg-black">
                    <div className="container px-6 py-12 mx-auto">
                    <h1 className="font-bold text-3xl md:text-5xl z-100 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center">Frequently Asked Questions</h1>

                        <div className="mt-8 space-y-8 lg:mt-12">
                            <FaqCard question="What is the length of pantheon tech fest" answer="Culpa cillum velit est laboris laborum do. Dolore cillum tempor ut commodo sunt dolor culpa cillum nulla. Consequat nisi culpa elit quis sit. Nostrud reprehenderit eiusmod magna reprehenderit ut tempor. Deserunt enim sunt non aliquip. Aliquip dolor occaecat duis dolor sint eu ipsum do cillum. Dolor minim est incididunt exercitation sit aliqua ut nisi ex ad." />
                            <FaqCard question="who designed this beautiful faq page" answer="one and only KUMAR  SHIVAM" />
                            <FaqCard />
                            <FaqCard />
                            <FaqCard />
                            <FaqCard />
                            <FaqCard />
                            <FaqCard />

                        </div>
                    </div>
                </section>
            </div>


        </div>

    );
}