import { HERO_CONTENT } from "../Constants/Containers";
import MiFoto from '../assets/yop.png'

export const Landing = () => {
return (
    <div className="border-b border-neutral-900 pb-10 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <h1 className="pb-16 text-6xl font-thin tracking-tight
                    lg:mt-16 lg:text-8xl">
                        César Garcia
                    </h1>
                    <span className="bg-gradient-to-r from-pink-300 via-slate-500
                        to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                        Estudiante de Ingenieria en Software
                    </span>
                    <p className="my-2 max-w-xl py-6 font-light text-lg tracking-tighter">
                        {HERO_CONTENT}
                    </p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <img className="w-65" src={MiFoto} alt="Cesar Garcia"/>
                </div>
            </div>
        </div>
    </div>
)
}
export default Landing;