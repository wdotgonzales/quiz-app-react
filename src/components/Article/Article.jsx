import './css/Article.css'
import peopleImg from './images/people.jpg';
import LinkContainer from './LinkContainer';
const Article = () => {
    return (
        // h-[550px] md:h-screen
        <aside className='md:w-1/2 flex justify-center'>
            <div className='text-center max-w-[600px] m-auto ml-3 mr-3 pb-5 md:pb-0'>
                <img src={peopleImg} alt="" style={{width: '350px' , margin:'auto'}}/>
                <h1 className='font-bold  text-4xl'>Trivia Quiz App</h1>
                <p className='mt-[20px]'>Welcome to Trivia Quiz App, where knowledge meets excitement in the ultimate trivia adventure! Immerse yourself in a world of diverse quizzes that cater to your interests and challenge your intellect. Whether you're a history buff, a science enthusiast, a general knowledge guru, or a sports fanatic, we have the perfect trivia categories to fuel your curiosity.</p>
                <LinkContainer></LinkContainer>
            </div>
        </aside>
    )
}

export default Article;