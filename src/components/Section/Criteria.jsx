import './css/Criteria.css';

const Criteria = ({ categoryParams, imageSrc, category, setIsTriviaChosen, triviaInfo, setTriviaInfo }) => {

    const backgroundStyle = {
        background: `url(${imageSrc})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    };

    const chooseTrivia = (categoryParams, category) => {
        setTriviaInfo({ ...triviaInfo, triviaCategoryParams: categoryParams, triviaCategory: category });
        setIsTriviaChosen(true);
    }

    return (
        <div key={categoryParams} id='triviaContainer' className='containerStyle' onClick={() => chooseTrivia(categoryParams, category)}>
            <div style={backgroundStyle} className="p-[40px] text-center h-[130px]">
                <div className='dimBackground' >
                    <h1 className='text-[20px] text-white mt-[2.7em] font-bold'>{category}</h1>
                </div>
            </div>
        </div>
    );
};

export default Criteria;
