import { useLoaderData } from "react-router-dom";
import { FaAsterisk } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const {name, category, recipe, price, _id} = useLoaderData();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = data.image[0];
        const formData = new FormData();
        formData.append("image", imageFile);
        const res = await axiosPublic.post(image_hosting_api, formData);
        if (res.data.success) {
            // now send the menu item data to the server with the image url
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            // 
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuRes.data)
            if(menuRes.data.modifiedCount > 0){
                // show success popup
                // reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is updated to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        console.log( 'with image url', res.data);
    };
    
    
    return (
        <div>
            <SectionTitle heading="Update an Item" subHeading="Refresh info"></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-3xl mx-auto bg-base-200 p-8 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <fieldset className="fieldset">
                        <label className="label" htmlFor="name">Recipe name <FaAsterisk aria-hidden="true" className="text-error text-xs" /></label>
                        <input
                            id="name"
                            type="text"
                            defaultValue={name}
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
                            defaultValue={category}
                            className="select w-full"
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
                            defaultValue={price}
                            className="input w-full"
                            placeholder="Price"
                            {...register("price", { required: true, valueAsNumber: true, min: 0 })}
                        />
                        {errors.price && <p className="text-error text-sm">Enter a valid price</p>}
                    </fieldset>

                    <fieldset className="fieldset">
                        <label className="label" htmlFor="image">Choose new file <FaAsterisk aria-hidden="true" className="text-error text-xs" /></label>
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
                            defaultValue={recipe}
                            className="textarea w-full min-h-32"
                            placeholder="Recipe details"
                            {...register("recipe", { required: true })}
                        ></textarea>
                        {errors.recipe && <p className="text-error text-sm">Recipe details are required</p>}
                    </fieldset>
                </div>

                <button type="submit" className="btn btn-neutral mt-6">
                    Update item
                </button>
            </form>
        </div>
    );
};

export default UpdateItem;