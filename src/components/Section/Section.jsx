import manImg from './images/man.png'
import './css/Section.css';
import BodySection from './BodySection';
const Section = () => {
    return (
        <section className="h-dvh md:w-1/2 mr-3 ml-3 flex justify-center items-center">
            <div className="max-w-[800px]  ">
                <div className='flex mb-2'>
                    <img src={manImg} alt="" style={{ maxWidth: '20%' }} />
                    <div style={{ width: '80%' }}>
                        <h1 id='specialFont' className='font-black text-[35px]'>TRIVIA QUIZ</h1>
                        <p className='mt-1 mb-2 font-bold text-[27px]'>Test your knowledge!</p>
                        <p><b>Instruction : </b> Pick a trivia category, select your answer from the choices within 20 seconds, or risk it being marked as a mistake.</p>
                    </div>
                </div>
                <hr className='border-1 border-black'></hr>
                <BodySection></BodySection>
            </div>
        </section>
    )
}

export default Section;