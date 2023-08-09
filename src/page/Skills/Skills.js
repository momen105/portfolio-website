import { React } from 'react'
// import reactLotti from '../../assests/lotties/reactlottie.json'
// import jsLottie from '../../assests/lotties/jslottie.json'
// import PythonLotti from '../../assests/lotties/pythonlottie.json'
import python from '../../assests/Logos/python.svg'
import react from '../../assests/Logos/react.svg'
import js from '../../assests/Logos/js.jpg'
import css from '../../assests/Logos/css.svg'
import django from '../../assests/Logos/django.svg'
import drf from '../../assests/Logos/drf.png'
import html from '../../assests/Logos/html.svg'
import oop from '../../assests/Logos/oop.png'
import bootstrap from '../../assests/Logos/bootstrap.svg'
import postgreSQL from '../../assests/Logos/postgresql.svg'
import sql from '../../assests/Logos/sql.png'
import tailwind from '../../assests/Logos/tailwind-css.svg'
import github from '../../assests/Logos/github.png'
import pycharm from '../../assests/Logos/pycharm.png'
import machineLearning from '../../assests/Logos/ml.png'
import deepLearning from '../../assests/Logos/dl.png'
import vs from '../../assests/Logos/vs.png'
import googleColab from '../../assests/Logos/google-colab.svg'
import celery from '../../assests/Logos/celery.png'
import websocket from '../../assests/Logos/websockets.svg'

import './skills.css'

function Skills() {
    // const [isHovered, setIsHovered] = useState(false)
    // const handleMouseEnter = () => { setIsHovered(true); };
    // const handleMouseLeave = () => { setIsHovered(false); };

    return (
        <div className='md:h-[360px]  h-[500px] overflow-hidden overflow-y-auto w-3/4 mt-8 m-auto border border-gray-800 bg-black '>
            <div className='md:flex p-8 max-md:pb-0'>
                <p className='text-stone-200 text-xl mb-4 font-bold md:w-[170px]' >Preferable :</p>
                <div class="grid md:gap-4 max-md:gap-2 grid-cols-[repeat(auto-fill,minmax(50px,1fr))] w-full">
                    {/* {isHovered ? <span className='lottiehover bg-slate-100' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ><Lottie options={{ animationData: PythonLotti }} /></span> : <img onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} src={python}></img>} */}
                    <img src={python}></img> 
                    <img src={django} ></img>
                    <img src={drf} ></img>
                    <img src={oop} ></img>
                    <img src={postgreSQL} ></img>
                    <img src={sql} ></img>
                    <img src={css} ></img>
                    <img src={html} ></img>
                    <img src={bootstrap} ></img>
                    <img src={celery} ></img>
                    <img src={websocket} ></img>
                </div>
            </div >
            <div className='md:flex p-8  max-md:pb-0'>
                <p className='text-stone-200 text-xl mb-4 font-bold md:w-[170px]' >Comfortable : </p>
                <div class="grid md:gap-4 max-md:gap-2 grid-cols-[repeat(auto-fill,minmax(50px,1fr))] w-full">
                    {/* {isHovered ? <span className='lottiehover bg-[#212121]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ><Lottie options={{ animationData: jsLottie }} /></span> : <img onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} src={js}></img>} */}
                    {/* {isHovered ? <span className='lottiehover bg-[#212121]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ><Lottie options={{ animationData: reactLotti }} /></span> : <img onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} src={react}></img>} */}
                    <img src={js} ></img>
                    <img src={react} ></img>
                    <img src={tailwind} ></img>
                    <img src={machineLearning} ></img>
                    <img className='origin-center hover:origin-top' src={deepLearning} ></img>
                </div>
            </div >
            <div className='md:flex p-8'>
                <p className='text-stone-200 text-xl mb-4 font-bold md:w-[170px]' >Familiar with : </p>
                <div class="grid md:gap-4 max-md:gap-2 grid-cols-[repeat(auto-fill,minmax(50px,1fr))] w-full">
                    <img src={github} ></img>
                    <img src={pycharm} ></img>
                    <img src={vs} ></img>
                    <img src={googleColab} ></img>
                </div>
            </div >
        </div>

    )
}

export default Skills