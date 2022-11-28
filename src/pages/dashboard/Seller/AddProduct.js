import React from 'react';
import { useForm } from "react-hook-form";


const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    }

    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col text-center text-primary mx-auto  w-1/3'>
                <label className='text-start'>1. Title of the Product</label>
                <input
                    placeholder='Title of the product'
                    type='text'
                    className='border-2 mb-6 p-4 rounded border-primary'
                    {...register("productTitle", { required: true })}
                />
                {errors.productTitle && <span>Product Title is required</span>}

                <label className='text-start'>2. Name of the Product</label>
                <input
                    placeholder='Product Name'
                    type='text'
                    className='border-2 mb-6 p-4 rounded border-primary'
                    {...register("productName", { required: true })}
                />
                {errors.productName && <span>Product Name is required</span>}

                <label className='text-start'>3. Product Brand</label>
                <input
                    placeholder='Product Brand'
                    type='text'
                    className='border-2 mb-6 p-4 rounded border-primary'
                    {...register("productBrand", { required: true })}
                />
                {errors.productBrand && <span>Product Brand is required</span>}

                <label className='text-start'>4. Image of the Product</label>
                <input
                    placeholder='Product Image'
                    type='file'
                    title='Choose Product image'
                    className='border-2 mb-6 p-4 rounded border-primary'
                    {...register("productImage", { required: true })}
                />
                {errors.productImage && <span>Product Image is required</span>}


                <label className='text-start'>5.Product Model</label>
                <input
                    placeholder='Model'
                    type='text'
                    className='border-2 mb-6 p-4 rounded border-primary'
                    {...register("productModel", { required: true })}
                />
                {errors.productModel && <span>Product Model is required</span>}


                <label className='text-start'>6. Location</label>
                <input
                    placeholder='Location'
                    type='text'
                    className='border-2 mb-6 p-4 rounded border-primary'
                    {...register("location", { required: true })}
                />
                {errors.location && <span>Location is required</span>}

                <label className='text-start'>7. Condition</label>
                <input
                    placeholder='Product Condition'
                    type='text'
                    className='border-2 mb-6 p-4 rounded border-primary'
                    {...register("productCondition", { required: true })}
                />
                {errors.productCondition && <span>Product Condition is required</span>}

                <label className='text-start'>8. Physical Condition</label>
                <input
                    placeholder='Physical Condition'
                    type='text'
                    className='border-2 mb-6 p-4 rounded border-primary'
                    {...register("productPhysicalCondition", { required: true })}
                />
                {errors.productPhysicalCondition && <span>Physical Condition is required</span>}

                <label className='text-start'>9. Purchase Year</label>
                <input
                    placeholder='Purchase Year'
                    type='text'
                    className='border-2 mb-6 p-4 rounded border-primary'
                    {...register("purchaseYear", { required: true })}
                />
                {errors.purchaseYear && <span>Purchase Year is required</span>}


                <label className='text-start'>10. Also Includes</label>
                <input
                    placeholder='Also Includes'
                    type='text'
                    className='border-2 mb-6 p-4 rounded border-primary'
                    {...register("includs", { required: true })}
                />
                {errors.includs && <span>Also Includes is required</span>}

                <label className='text-start'>11. Invoice</label>
                <input
                    placeholder='Invoice'
                    type='text'
                    className='border-2 mb-6 p-4 rounded border-primary'
                    {...register("invoice", { required: true })}
                />
                {errors.invoice && <span>Invoice is required</span>}


                <label className='text-start'>12. Seller Typet</label>
                <input
                    placeholder='Seller Type'
                    type='text'
                    className='border-2 mb-6 p-4 rounded border-primary'
                    {...register("sellerType", { required: true })}
                />
                {errors.sellerType && <span>Seller Type is required</span>}

                <label className='text-start'>13. Primary Camera</label>
                <input
                    placeholder='Primary Camera'
                    type='text'
                    className='border-2 mb-6 p-4 rounded border-primary'
                    {...register("primaryCamera", { required: true })}
                />
                {errors.primaryCamera && <span>Primary Camera is required</span>}

                <label className='text-start'>14. Secondary Camera</label>
                <input
                    placeholder='Secondary Camera'
                    type='text'
                    className='border-2 mb-6 p-4 rounded border-primary'
                    {...register("secondaryCamera", { required: true })}
                />
                {errors.secondaryCamera && <span>Secondary Camera is required</span>}

                <label className='text-start'>15. Screen Size</label>
                <input
                    placeholder='Screen Size'
                    type='text'
                    className='border-2 mb-6 p-4 rounded border-primary'
                    {...register("screenSize", { required: true })}
                />
                {errors.screenSize && <span>Screen Size is required</span>}

                <label className='text-start'>16. Operating System</label>
                <input
                    placeholder='Operating System'
                    type='text'
                    className='border-2 mb-6 p-4 rounded border-primary'
                    {...register("operatingSystem", { required: true })}
                />
                {errors.operatingSystem && <span>Operating System is required</span>}


                <label className='text-start'>17. No of SIM</label>
                <input
                    placeholder='No of SIM'
                    type='text'
                    className='border-2 mb-6 p-4 rounded border-primary'
                    {...register("simCount", { required: true })}
                />
                {errors.simCount && <span>No of SIM is required</span>}

                <label className='text-start'>18. SIM Type</label>
                <input
                    placeholder='SIM Type'
                    type='text'
                    className='border-2 mb-6 p-4 rounded border-primary'
                    {...register("simType", { required: true })}
                />
                {errors.simType && <span>SIM Type is required</span>}

                <label className='text-start'>19. RAM</label>
                <input
                    placeholder='RAM'
                    type='text'
                    className='border-2 mb-6 p-4 rounded border-primary'
                    {...register("RAM", { required: true })}
                />
                {errors.RAM && <span>RAM is required</span>}

                <label className='text-start'>20. Internal Memory</label>
                <input
                    placeholder='Internal Memory'
                    type='text'
                    className='border-2 mb-6 p-4 rounded border-primary'
                    {...register("internalMemory", { required: true })}
                />
                {errors.internalMemory && <span>Internal Memory is required</span>}

                <label className='text-start'>21. Display Resulation</label>
                <input
                    placeholder=' Display Resulation'
                    type='text'
                    className='border-2 mb-6 p-4 rounded border-primary'
                    {...register("displayResulation", { required: true })}
                />
                {errors.displayResulation && <span>Display Resulation is required</span>}

                <label className='text-start'>22. Size</label>
                <input
                    placeholder='size'
                    type='text'
                    className='border-2 mb-6 p-4 rounded border-primary'
                    {...register("size", { required: true })}
                />
                {errors.size && <span>size is required</span>}

                <label className='text-start'>23. Video</label>
                <input
                    placeholder='Video'
                    type='text'
                    className='border-2 mb-6 p-4 rounded border-primary'
                    {...register("video", { required: true })}
                />
                {errors.video && <span>Vdeo is required</span>}

                <label className='text-start'>24. Battery Type</label>
                <input
                    placeholder='Battery Type'
                    type='text'
                    className='border-2 mb-6 p-4 rounded border-primary'
                    {...register("batteryType", { required: true })}
                />
                {errors.batteryType && <span>Battery Type is required</span>}

                <label className='text-start'>25. Features</label>
                <input
                    placeholder='GPS, Bluetooth'
                    type='text'
                    className='border-2 mb-6 p-4 rounded border-primary'
                    {...register("features", { required: true })}
                />
                {errors.features && <span>Features is required</span>}
                <input
                    className='mt-10 font-medium border-2 border-primary  w-1/2 rounded mx-auto bg-neutral p-2 hover:bg-primary hover:text-white'
                    type="submit"
                />
            </form>
        </div>
    );
};

export default AddProduct;