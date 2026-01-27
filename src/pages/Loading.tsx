import {ScaleLoader} from "react-spinners";
const Loading = () => {
    return (
        <section className='section p-2 flex justify-center items-center'>
            <div className="container text-center">
                <ScaleLoader color="#155dfc" />
            </div>
        </section>
    )
}

export default Loading