import { useState } from 'react';
import FaqCard from '@/components/faqcard';
export default function Faq() {



    return (
        <div className='py-12 bg-[#111827] '>
            <div >

                <section class="bg-white dark:bg-gray-900">
                    <div class="container px-6 py-12 mx-auto">
                        <h1 class="text-2xl md:text-3xl font-semibold text-gray-800 lg:text-4xl dark:text-white">Frequently asked questions</h1>

                        <div class="mt-8 space-y-8 lg:mt-12">
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