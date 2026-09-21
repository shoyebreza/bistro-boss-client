import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const AddItems = () => {
    const {register, handleSubmit, reset} = useForm();
    const onSubmit = data => {
        console.log(data);
        
    };
    return (
        <div>
            <SectionTitle heading="Add Items" subHeading="Add new items to your menu"></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 mx-auto">
                <div className="select select-bordered w-full mb-4">
                    <select {...register("category", { required: true })}>
                        <option disabled selected>Select Category</option>
                        <option value="salad">Salad</option>
                        <option value="pizza">Pizza</option>
                        <option value="soup">Soup</option>
                        <option value="dessert">Dessert</option>
                        <option value="drinks">Drinks</option>
                        <option value="sandwich">Sandwich</option>
                    </select>

                </div>
            </form>
        </div>
    );
};

export default AddItems;