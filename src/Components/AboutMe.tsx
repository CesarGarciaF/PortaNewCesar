import { ABOUT_TEXT } from '../Constants/Containers';
import aboutme from '../assets/aboutme.png'

export const AboutMe = () => {
return (
    <div className="border-b border-neutral-900 pb-2">
        <h1 className="my-20 text-center text-5xl">Sobre 
            <span className="text-neutral-500"> mi...</span>
        </h1>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img className="rounded-2xl" src={aboutme} alt="sobremi" />
                </div>
            </div>
        <div className='w-full lg:w-1/2'>
            <div className='flex justify-center lg:justify-start'>
                <p className='my-2 max-w-xl py-6 text-lg'>{ABOUT_TEXT}</p>
            </div>
        </div>
        </div>
    </div>
)
}
export default AboutMe;