import { useForm } from "react-hook-form";
import { FaAsterisk } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const AddItems = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        reset();
    };
    return (
        <div>
            <SectionTitle heading="Add Items" subHeading="Add new items to your menu"></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-3xl mx-auto bg-base-200 p-8 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <fieldset className="fieldset">
                        <label className="label" htmlFor="name">Recipe name <FaAsterisk aria-hidden="true" className="text-error text-xs" /></label>
                        <input
                            id="name"
                            type="text"
                            className="input w-full"
                            placeholder="Recipe name"
                            {...register("name", { required: true })}
                        />
                        {errors.name && <p className="text-error text-sm">Recipe name is required</p>}
                    </fieldset>

                    <fieldset className="fieldset">
                        <label className="label" htmlFor="category">Category <FaAsterisk aria-hidden="true" className="text-error text-xs" /></label>
                        <select
                            id="category"
                            className="select w-full"
                            defaultValue=""
                            {...register("category", { required: true })}
                        >
                            <option value="" disabled>Select category</option>
                        <option value="salad">Salad</option>
                        <option value="pizza">Pizza</option>
                        <option value="soup">Soup</option>
                        <option value="dessert">Dessert</option>
                        <option value="drinks">Drinks</option>
                        <option value="sandwich">Sandwich</option>
                        </select>
                        {errors.category && <p className="text-error text-sm">Category is required</p>}
                    </fieldset>

                    <fieldset className="fieldset">
                        <label className="label" htmlFor="price">Price <FaAsterisk aria-hidden="true" className="text-error text-xs" /></label>
                        <input
                            id="price"
                            type="number"
                            step="0.01"
                            min="0"
                            className="input w-full"
                            placeholder="Price"
                            {...register("price", { required: true, valueAsNumber: true, min: 0 })}
                        />
                        {errors.price && <p className="text-error text-sm">Enter a valid price</p>}
                    </fieldset>

                    <fieldset className="fieldset">
                        <label className="label" htmlFor="image">Choose file <FaAsterisk aria-hidden="true" className="text-error text-xs" /></label>
                        <input
                            id="image"
                            type="file"
                            accept="image/*"
                            className="file-input w-full"
                            {...register("image", { required: true })}
                        />
                        {errors.image && <p className="text-error text-sm">An image is required</p>}
                    </fieldset>

                    <fieldset className="fieldset md:col-span-2">
                        <label className="label" htmlFor="recipe">Recipe details <FaAsterisk aria-hidden="true" className="text-error text-xs" /></label>
                        <textarea
                            id="recipe"
                            className="textarea w-full min-h-32"
                            placeholder="Recipe details"
                            {...register("recipe", { required: true })}
                        ></textarea>
                        {errors.recipe && <p className="text-error text-sm">Recipe details are required</p>}
                    </fieldset>
                </div>

                <button type="submit" className="btn btn-neutral mt-6">Add item</button>
            </form>
        </div>
    );
};

export default AddItems;