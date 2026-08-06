import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white py-12 bg-slate-500 bg-opacity-40 bg-blend-overlay">
            <SectionTitle heading={'Check it out'} subheading={'Our most popular items'}></SectionTitle>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-12 px-4 md:px-0">
                <div>
                    <img src={featuredImg} alt="Featured image" width="500" height="300" />
                </div>
                <div className="md:w-1/2 text-center md:text-left pb-20 pt-20 px-36">
                    <p>Aug 20, 2026</p>
                    <h3 className="text-2xl my-4">WHERE CAN I GET SOME?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
}

export default Featured;