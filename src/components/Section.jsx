const Section =({title, description, items})=>{
    return(
        <div className="p-6 border border-gray-200 rounded-lg shadow-md bg-gray-50 hover:bg-gray-100 transition duration-200 mb-6">
            <h2 className="text-2xl font-semibolt text-gray-800 mb-4">{title}</h2>
            <p className="text-gray-600 mb-4">{description}</p>
            <ul className="list-disc pl-6 text-gray-700">
                {items.map((item,index) => (
                <li key={index} className="mb-2"> 
                    {item}
                </li>
            ))}
            </ul>
        </div>
    );
};
export default Section;