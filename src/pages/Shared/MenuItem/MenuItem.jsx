const MenuItem = ({item}) => {
    const { image, name, description, price, recipe } = item;
    return ( 
        <div className="flex gap-4 items-center border-b-2 border-gray-200 py-4 space-x-4">
            <img style={{ borderRadius: '0 200px 200px 200px' }} className="w-[120px] h-[120px] object-cover" src={image} alt={name} /> 
            <div>
                <h3 className="uppercase">{name}----------</h3>
                <p>{description}</p>
                <p className= "text-yellow-500">Price: ${price}</p>
                <p>{recipe}</p>
            </div>      
        </div>
     );
}
 
export default MenuItem;