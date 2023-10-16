import React from 'react'
import { useState } from 'react'
import './section.css'
import { cardpictures } from '../cardpictures'

export const Section = (props) => {
    const [data, setData] = useState(cardpictures)
    const [currIndex, setCurrIndex] = useState(0)

    const handleNextClick = () => {
        setCurrIndex((prevIndex) => (prevIndex + 1) % data.length);
    }
    const handlePrevClick = () => {
        setCurrIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    }

    return (
        <>
            <section className="absolute w-full -my-12 py-12">
                <div className="container mx-auto flex items-center justify-center">
                    <div className="w-1/2">
                        <div id="card" className="">
                            <img src={data[currIndex].cardImage} alt="" id="card-picture" className="" />
                            <h1 id="card-title" className="text-center">{data[currIndex].cardName}</h1>
                            <p id="card-desc" className="">{data[currIndex].cardDesc}</p>

                        </div>
                        <div id="arrows" className="">
                            <button id="arrow" className="" onClick={handlePrevClick}>&#60;</button>
                            <button id="arrow" className="" onClick={handleNextClick}>&#62;</button>
                        </div>
                    </div>
                    <div id='section-text' className="w-1/2 ml-6">
                        <h1 id='section-title' className="text-4xl font-bold mb-4 text-white">Discovering Rocket Types</h1>
                        <p id='section-desc' className="text-lg text-white p-5 text-justify">
                            Rockets come in various shapes and sizes, each designed for specific missions. From the
                            towering Saturn V that took astronauts to the Moon to the sleek Falcon 9 that propels
                            satellites into orbit, rocketry is a fascinating realm of innovation and exploration.
                            Whether it's the mighty boosters of space agencies or the pioneering rockets of private
                            companies, there's a type for every journey into the cosmos.
                        </p>
                        <button id='section-button' className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}
