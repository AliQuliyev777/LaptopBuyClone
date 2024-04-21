<<<<<<< HEAD
=======
<<<<<<< Updated upstream
import React, { useState } from 'react';
import '../Css/Cardview.css';
import { Link } from 'react-router-dom';
import Cardviewproductdetails from './Cardviewproductdetails';

const Cardview = () => {
    const [isProductDetailsVisible, setProductDetailsVisibility] = useState(false);
    const handleShowDetailsClick = () => {
        setProductDetailsVisibility(!isProductDetailsVisible);
    };
    return (
        <>

            <div className="ShoppingCardviewMain2 ">

                <div className="ShoppingCardviewMain2Main">
                    <h1 >Shopping Card</h1>
                    <p>Item</p>
                </div>

            </div>

            <div className="ShoppingCardviewMain  px-0 py-0 md:!mt-6 ">

                <div className="ShoppingCardviewproductAll w-full px-6 py-0 xs:px-16 2xl:w-2/3 2xl:px-0">

                    <div className="ShoppingCardviewproduct ">

                        <div className="ShoppingCardviewproductone">

                            <div className="ShoppingCardviewproductoneimage">
                                <img src="https://content.ibuypower.com/cdn-cgi/image/width=1920,format=auto,quality=75/https://content.ibuypower.com//Images/Components/26712/FA507NU-DS74-01-175.png?v=64cb5f559abaf27f57b17b6087ecfb9547b6fae5" alt="" />
                                <span className="ShoppingCardproductdetails" onClick={handleShowDetailsClick}>
                                    show product details
                                </span>

                            </div>

                            <div className="ShoppingCardviewproductoneimage">

                                <div className="col-span-6 md:col-span-4 lg:col-span-6 ShoppingCardviewproductoneimagedate">
                                    <div className="md:text-text-sm w-autotext-xs md:w-3/5">
                                        <div className="mr-1">
                                            Estimated Ship Date: 01-17-2024
                                        </div>
                                        <div class="carts_pc_name__TT8ZV my-1.5 text-sm font-bold md:mt-2.5 md:text-base">ASUS TUF Gaming 15 FA507NU-DS74 Gaming Laptop</div>
                                    </div>
                                </div>
                            </div>
                            <div className="ShoppingCardviewproductonechoiche">
                                <div class="col-span-6 md:col-span-2 md:pl-2 lg:col-span-2">
                                    <div><div class="!mb-2 flex items-center">
                                        <div class="pr-2.5">
                                            <select class="!mt-1 h-[100px] w-[60px] min-w-0 border border-solid border-gray-border !pl-4 text-center text-base text-black	" id="qty">
                                                <option class="cursor-pointer text-left " value="1">1</option>
                                            </select></div>
                                    </div><div class="mt-4.5 w-fit cursor-pointer text-[13px] text-blue-ibuypowerLink hover:underline">
                                            <Link to="/"  >
                                                <span>Edit</span>
                                            </Link>
                                        </div>
                                        <div class="mb-1.5 mt-1.5 w-fit cursor-pointer text-[13px] text-blue-ibuypowerLink hover:underline xs:mb-0 ">Remove</div>
                                    </div>
                                </div>
                            </div>
                            <div class="carts_price__V_x2v col-span-6 md:col-span-3 lg:col-span-2 carts_fiyat "><span className="text-black	 ">$1,449</span> /unit</div>

                        </div>
                        {isProductDetailsVisible && (
                            <div className="CardviewproductdetailsMain">
                                <Cardviewproductdetails />
                            </div>
                        )}
                    </div>
                    <div className="ShoppingCardviewproduct ">

<div className="ShoppingCardviewproductone">

    <div className="ShoppingCardviewproductoneimage">
        <img src="https://content.ibuypower.com/cdn-cgi/image/width=1920,format=auto,quality=75/https://content.ibuypower.com//Images/Components/26712/FA507NU-DS74-01-175.png?v=64cb5f559abaf27f57b17b6087ecfb9547b6fae5" alt="" />
        <span className="ShoppingCardproductdetails" onClick={handleShowDetailsClick}>
            show product details
        </span>

    </div>

    <div className="ShoppingCardviewproductoneimage">

        <div className="col-span-6 md:col-span-4 lg:col-span-6 ShoppingCardviewproductoneimagedate">
            <div className="md:text-text-sm w-autotext-xs md:w-3/5">
                <div className="mr-1">
                    Estimated Ship Date: 01-17-2024
                </div>
                <div class="carts_pc_name__TT8ZV my-1.5 text-sm font-bold md:mt-2.5 md:text-base">ASUS TUF Gaming 15 FA507NU-DS74 Gaming Laptop</div>
            </div>
        </div>
    </div>
    <div className="ShoppingCardviewproductonechoiche">
        <div class="col-span-6 md:col-span-2 md:pl-2 lg:col-span-2">
            <div><div class="!mb-2 flex items-center">
                <div class="pr-2.5">
                    <select class="!mt-1 h-[100px] w-[60px] min-w-0 border border-solid border-gray-border !pl-4 text-center text-base text-black	" id="qty">
                        <option class="cursor-pointer text-left " value="1">1</option>
                    </select></div>
            </div><div class="mt-4.5 w-fit cursor-pointer text-[13px] text-blue-ibuypowerLink hover:underline">
                    <Link to="/"  >
                        <span>Edit</span>
                    </Link>
                </div>
                <div class="mb-1.5 mt-1.5 w-fit cursor-pointer text-[13px] text-blue-ibuypowerLink hover:underline xs:mb-0 ">Remove</div>
            </div>
        </div>
    </div>
    <div class="carts_price__V_x2v col-span-6 md:col-span-3 lg:col-span-2 carts_fiyat "><span className="text-black	 ">$1,449</span> /unit</div>

</div>
{isProductDetailsVisible && (
    <div className="CardviewproductdetailsMain">
        <Cardviewproductdetails />
    </div>
)}
</div>  <div className="ShoppingCardviewproduct ">

<div className="ShoppingCardviewproductone">

    <div className="ShoppingCardviewproductoneimage">
        <img src="https://content.ibuypower.com/cdn-cgi/image/width=1920,format=auto,quality=75/https://content.ibuypower.com//Images/Components/26712/FA507NU-DS74-01-175.png?v=64cb5f559abaf27f57b17b6087ecfb9547b6fae5" alt="" />
        <span className="ShoppingCardproductdetails" onClick={handleShowDetailsClick}>
            show product details
        </span>

    </div>

    <div className="ShoppingCardviewproductoneimage">

        <div className="col-span-6 md:col-span-4 lg:col-span-6 ShoppingCardviewproductoneimagedate">
            <div className="md:text-text-sm w-autotext-xs md:w-3/5">
                <div className="mr-1">
                    Estimated Ship Date: 01-17-2024
                </div>
                <div class="carts_pc_name__TT8ZV my-1.5 text-sm font-bold md:mt-2.5 md:text-base">ASUS TUF Gaming 15 FA507NU-DS74 Gaming Laptop</div>
            </div>
        </div>
    </div>
    <div className="ShoppingCardviewproductonechoiche">
        <div class="col-span-6 md:col-span-2 md:pl-2 lg:col-span-2">
            <div><div class="!mb-2 flex items-center">
                <div class="pr-2.5">
                    <select class="!mt-1 h-[100px] w-[60px] min-w-0 border border-solid border-gray-border !pl-4 text-center text-base text-black	" id="qty">
                        <option class="cursor-pointer text-left " value="1">1</option>
                    </select></div>
            </div><div class="mt-4.5 w-fit cursor-pointer text-[13px] text-blue-ibuypowerLink hover:underline">
                    <Link to="/"  >
                        <span>Edit</span>
                    </Link>
                </div>
                <div class="mb-1.5 mt-1.5 w-fit cursor-pointer text-[13px] text-blue-ibuypowerLink hover:underline xs:mb-0 ">Remove</div>
            </div>
        </div>
    </div>
    <div class="carts_price__V_x2v col-span-6 md:col-span-3 lg:col-span-2 carts_fiyat "><span className="text-black	 ">$1,449</span> /unit</div>

</div>
{isProductDetailsVisible && (
    <div className="CardviewproductdetailsMain">
        <Cardviewproductdetails />
    </div>
)}
</div>  <div className="ShoppingCardviewproduct ">

<div className="ShoppingCardviewproductone">

    <div className="ShoppingCardviewproductoneimage">
        <img src="https://content.ibuypower.com/cdn-cgi/image/width=1920,format=auto,quality=75/https://content.ibuypower.com//Images/Components/26712/FA507NU-DS74-01-175.png?v=64cb5f559abaf27f57b17b6087ecfb9547b6fae5" alt="" />
        <span className="ShoppingCardproductdetails" onClick={handleShowDetailsClick}>
            show product details
        </span>

    </div>

    <div className="ShoppingCardviewproductoneimage">

        <div className="col-span-6 md:col-span-4 lg:col-span-6 ShoppingCardviewproductoneimagedate">
            <div className="md:text-text-sm w-autotext-xs md:w-3/5">
                <div className="mr-1">
                    Estimated Ship Date: 01-17-2024
                </div>
                <div class="carts_pc_name__TT8ZV my-1.5 text-sm font-bold md:mt-2.5 md:text-base">ASUS TUF Gaming 15 FA507NU-DS74 Gaming Laptop</div>
            </div>
        </div>
    </div>
    <div className="ShoppingCardviewproductonechoiche">
        <div class="col-span-6 md:col-span-2 md:pl-2 lg:col-span-2">
            <div><div class="!mb-2 flex items-center">
                <div class="pr-2.5">
                    <select class="!mt-1 h-[100px] w-[60px] min-w-0 border border-solid border-gray-border !pl-4 text-center text-base text-black	" id="qty">
                        <option class="cursor-pointer text-left " value="1">1</option>
                    </select></div>
            </div><div class="mt-4.5 w-fit cursor-pointer text-[13px] text-blue-ibuypowerLink hover:underline">
                    <Link to="/"  >
                        <span>Edit</span>
                    </Link>
                </div>
                <div class="mb-1.5 mt-1.5 w-fit cursor-pointer text-[13px] text-blue-ibuypowerLink hover:underline xs:mb-0 ">Remove</div>
            </div>
        </div>
    </div>
    <div class="carts_price__V_x2v col-span-6 md:col-span-3 lg:col-span-2 carts_fiyat "><span className="text-black	 ">$1,449</span> /unit</div>

</div>
{isProductDetailsVisible && (
    <div className="CardviewproductdetailsMain">
        <Cardviewproductdetails />
    </div>
)}
</div>  <div className="ShoppingCardviewproduct ">

<div className="ShoppingCardviewproductone">

    <div className="ShoppingCardviewproductoneimage">
        <img src="https://content.ibuypower.com/cdn-cgi/image/width=1920,format=auto,quality=75/https://content.ibuypower.com//Images/Components/26712/FA507NU-DS74-01-175.png?v=64cb5f559abaf27f57b17b6087ecfb9547b6fae5" alt="" />
        <span className="ShoppingCardproductdetails" onClick={handleShowDetailsClick}>
            show product details
        </span>

    </div>

    <div className="ShoppingCardviewproductoneimage">

        <div className="col-span-6 md:col-span-4 lg:col-span-6 ShoppingCardviewproductoneimagedate">
            <div className="md:text-text-sm w-autotext-xs md:w-3/5">
                <div className="mr-1">
                    Estimated Ship Date: 01-17-2024
                </div>
                <div class="carts_pc_name__TT8ZV my-1.5 text-sm font-bold md:mt-2.5 md:text-base">ASUS TUF Gaming 15 FA507NU-DS74 Gaming Laptop</div>
            </div>
        </div>
    </div>
    <div className="ShoppingCardviewproductonechoiche">
        <div class="col-span-6 md:col-span-2 md:pl-2 lg:col-span-2">
            <div><div class="!mb-2 flex items-center">
                <div class="pr-2.5">
                    <select class="!mt-1 h-[100px] w-[60px] min-w-0 border border-solid border-gray-border !pl-4 text-center text-base text-black	" id="qty">
                        <option class="cursor-pointer text-left " value="1">1</option>
                    </select></div>
            </div><div class="mt-4.5 w-fit cursor-pointer text-[13px] text-blue-ibuypowerLink hover:underline">
                    <Link to="/"  >
                        <span>Edit</span>
                    </Link>
                </div>
                <div class="mb-1.5 mt-1.5 w-fit cursor-pointer text-[13px] text-blue-ibuypowerLink hover:underline xs:mb-0 ">Remove</div>
            </div>
        </div>
    </div>
    <div class="carts_price__V_x2v col-span-6 md:col-span-3 lg:col-span-2 carts_fiyat "><span className="text-black	 ">$1,449</span> /unit</div>

</div>
{isProductDetailsVisible && (
    <div className="CardviewproductdetailsMain">
        <Cardviewproductdetails />
    </div>
)}
</div>  <div className="ShoppingCardviewproduct ">

<div className="ShoppingCardviewproductone">

    <div className="ShoppingCardviewproductoneimage">
        <img src="https://content.ibuypower.com/cdn-cgi/image/width=1920,format=auto,quality=75/https://content.ibuypower.com//Images/Components/26712/FA507NU-DS74-01-175.png?v=64cb5f559abaf27f57b17b6087ecfb9547b6fae5" alt="" />
        <span className="ShoppingCardproductdetails" onClick={handleShowDetailsClick}>
            show product details
        </span>

    </div>

    <div className="ShoppingCardviewproductoneimage">

        <div className="col-span-6 md:col-span-4 lg:col-span-6 ShoppingCardviewproductoneimagedate">
            <div className="md:text-text-sm w-autotext-xs md:w-3/5">
                <div className="mr-1">
                    Estimated Ship Date: 01-17-2024
                </div>
                <div class="carts_pc_name__TT8ZV my-1.5 text-sm font-bold md:mt-2.5 md:text-base">ASUS TUF Gaming 15 FA507NU-DS74 Gaming Laptop</div>
            </div>
        </div>
    </div>
    <div className="ShoppingCardviewproductonechoiche">
        <div class="col-span-6 md:col-span-2 md:pl-2 lg:col-span-2">
            <div><div class="!mb-2 flex items-center">
                <div class="pr-2.5">
                    <select class="!mt-1 h-[100px] w-[60px] min-w-0 border border-solid border-gray-border !pl-4 text-center text-base text-black	" id="qty">
                        <option class="cursor-pointer text-left " value="1">1</option>
                    </select></div>
            </div><div class="mt-4.5 w-fit cursor-pointer text-[13px] text-blue-ibuypowerLink hover:underline">
                    <Link to="/"  >
                        <span>Edit</span>
                    </Link>
                </div>
                <div class="mb-1.5 mt-1.5 w-fit cursor-pointer text-[13px] text-blue-ibuypowerLink hover:underline xs:mb-0 ">Remove</div>
            </div>
        </div>
    </div>
    <div class="carts_price__V_x2v col-span-6 md:col-span-3 lg:col-span-2 carts_fiyat "><span className="text-black	 ">$1,449</span> /unit</div>

</div>
{isProductDetailsVisible && (
    <div className="CardviewproductdetailsMain">
        <Cardviewproductdetails />
    </div>
)}
</div>  <div className="ShoppingCardviewproduct ">

<div className="ShoppingCardviewproductone">

    <div className="ShoppingCardviewproductoneimage">
        <img src="https://content.ibuypower.com/cdn-cgi/image/width=1920,format=auto,quality=75/https://content.ibuypower.com//Images/Components/26712/FA507NU-DS74-01-175.png?v=64cb5f559abaf27f57b17b6087ecfb9547b6fae5" alt="" />
        <span className="ShoppingCardproductdetails" onClick={handleShowDetailsClick}>
            show product details
        </span>

    </div>

    <div className="ShoppingCardviewproductoneimage">

        <div className="col-span-6 md:col-span-4 lg:col-span-6 ShoppingCardviewproductoneimagedate">
            <div className="md:text-text-sm w-autotext-xs md:w-3/5">
                <div className="mr-1">
                    Estimated Ship Date: 01-17-2024
                </div>
                <div class="carts_pc_name__TT8ZV my-1.5 text-sm font-bold md:mt-2.5 md:text-base">ASUS TUF Gaming 15 FA507NU-DS74 Gaming Laptop</div>
            </div>
        </div>
    </div>
    <div className="ShoppingCardviewproductonechoiche">
        <div class="col-span-6 md:col-span-2 md:pl-2 lg:col-span-2">
            <div><div class="!mb-2 flex items-center">
                <div class="pr-2.5">
                    <select class="!mt-1 h-[100px] w-[60px] min-w-0 border border-solid border-gray-border !pl-4 text-center text-base text-black	" id="qty">
                        <option class="cursor-pointer text-left " value="1">1</option>
                    </select></div>
            </div><div class="mt-4.5 w-fit cursor-pointer text-[13px] text-blue-ibuypowerLink hover:underline">
                    <Link to="/"  >
                        <span>Edit</span>
                    </Link>
                </div>
                <div class="mb-1.5 mt-1.5 w-fit cursor-pointer text-[13px] text-blue-ibuypowerLink hover:underline xs:mb-0 ">Remove</div>
            </div>
        </div>
    </div>
    <div class="carts_price__V_x2v col-span-6 md:col-span-3 lg:col-span-2 carts_fiyat "><span className="text-black	 ">$1,449</span> /unit</div>

</div>
{isProductDetailsVisible && (
    <div className="CardviewproductdetailsMain">
        <Cardviewproductdetails />
    </div>
)}
</div>  <div className="ShoppingCardviewproduct ">

<div className="ShoppingCardviewproductone">

    <div className="ShoppingCardviewproductoneimage">
        <img src="https://content.ibuypower.com/cdn-cgi/image/width=1920,format=auto,quality=75/https://content.ibuypower.com//Images/Components/26712/FA507NU-DS74-01-175.png?v=64cb5f559abaf27f57b17b6087ecfb9547b6fae5" alt="" />
        <span className="ShoppingCardproductdetails" onClick={handleShowDetailsClick}>
            show product details
        </span>

    </div>

    <div className="ShoppingCardviewproductoneimage">

        <div className="col-span-6 md:col-span-4 lg:col-span-6 ShoppingCardviewproductoneimagedate">
            <div className="md:text-text-sm w-autotext-xs md:w-3/5">
                <div className="mr-1">
                    Estimated Ship Date: 01-17-2024
                </div>
                <div class="carts_pc_name__TT8ZV my-1.5 text-sm font-bold md:mt-2.5 md:text-base">ASUS TUF Gaming 15 FA507NU-DS74 Gaming Laptop</div>
            </div>
        </div>
    </div>
    <div className="ShoppingCardviewproductonechoiche">
        <div class="col-span-6 md:col-span-2 md:pl-2 lg:col-span-2">
            <div><div class="!mb-2 flex items-center">
                <div class="pr-2.5">
                    <select class="!mt-1 h-[100px] w-[60px] min-w-0 border border-solid border-gray-border !pl-4 text-center text-base text-black	" id="qty">
                        <option class="cursor-pointer text-left " value="1">1</option>
                    </select></div>
            </div><div class="mt-4.5 w-fit cursor-pointer text-[13px] text-blue-ibuypowerLink hover:underline">
                    <Link to="/"  >
                        <span>Edit</span>
                    </Link>
                </div>
                <div class="mb-1.5 mt-1.5 w-fit cursor-pointer text-[13px] text-blue-ibuypowerLink hover:underline xs:mb-0 ">Remove</div>
            </div>
        </div>
    </div>
    <div class="carts_price__V_x2v col-span-6 md:col-span-3 lg:col-span-2 carts_fiyat "><span className="text-black	 ">$1,449</span> /unit</div>

</div>
{isProductDetailsVisible && (
    <div className="CardviewproductdetailsMain">
        <Cardviewproductdetails />
    </div>
)}
</div>  <div className="ShoppingCardviewproduct ">

<div className="ShoppingCardviewproductone">

    <div className="ShoppingCardviewproductoneimage">
        <img src="https://content.ibuypower.com/cdn-cgi/image/width=1920,format=auto,quality=75/https://content.ibuypower.com//Images/Components/26712/FA507NU-DS74-01-175.png?v=64cb5f559abaf27f57b17b6087ecfb9547b6fae5" alt="" />
        <span className="ShoppingCardproductdetails" onClick={handleShowDetailsClick}>
            show product details
        </span>

    </div>

    <div className="ShoppingCardviewproductoneimage">

        <div className="col-span-6 md:col-span-4 lg:col-span-6 ShoppingCardviewproductoneimagedate">
            <div className="md:text-text-sm w-autotext-xs md:w-3/5">
                <div className="mr-1">
                    Estimated Ship Date: 01-17-2024
                </div>
                <div class="carts_pc_name__TT8ZV my-1.5 text-sm font-bold md:mt-2.5 md:text-base">ASUS TUF Gaming 15 FA507NU-DS74 Gaming Laptop</div>
            </div>
        </div>
    </div>
    <div className="ShoppingCardviewproductonechoiche">
        <div class="col-span-6 md:col-span-2 md:pl-2 lg:col-span-2">
            <div><div class="!mb-2 flex items-center">
                <div class="pr-2.5">
                    <select class="!mt-1 h-[100px] w-[60px] min-w-0 border border-solid border-gray-border !pl-4 text-center text-base text-black	" id="qty">
                        <option class="cursor-pointer text-left " value="1">1</option>
                    </select></div>
            </div><div class="mt-4.5 w-fit cursor-pointer text-[13px] text-blue-ibuypowerLink hover:underline">
                    <Link to="/"  >
                        <span>Edit</span>
                    </Link>
                </div>
                <div class="mb-1.5 mt-1.5 w-fit cursor-pointer text-[13px] text-blue-ibuypowerLink hover:underline xs:mb-0 ">Remove</div>
            </div>
        </div>
    </div>
    <div class="carts_price__V_x2v col-span-6 md:col-span-3 lg:col-span-2 carts_fiyat "><span className="text-black	 ">$1,449</span> /unit</div>

</div>
{isProductDetailsVisible && (
    <div className="CardviewproductdetailsMain">
        <Cardviewproductdetails />
    </div>
)}
</div>
                </div>

                <div className="ShoppingCardviewordersummary bg-gray-ibuypower px-0 py-8">
                    <div className="bg-gray-ibuypower px-0 py-8 ShoppingCardviewordersummaryinside ">
                        {/* Order Summary Header */}
                        <div className="px-1.5 py-0 text-2xl font-semibold">Order Summary</div>

                        {/* Order Details */}
                        <div className="mx-6 mt-4 !border border-solid border-transparent border-b-gray-border pb-2 text-sm">
                            {/* Subtotal */}
                            <div className="my-2 flex items-center justify-between">
                                <div>Subtotal</div>
                                <div>$1,449.00</div>
                            </div>
                            {/* Shipping */}
                            <div className="my-2 flex items-center justify-between">
                                <div>Shipping</div>
                                <div>Calculated in checkout</div>
                            </div>
                            {/* Estimated Tax */}
                            <div className="my-2 flex items-center justify-between">
                                <div>Estimated tax</div>
                                <div>Calculated in checkout</div>
                            </div>
                        </div>

                        {/* Estimated Total */}
                        <div className="m-0 block !border border-solid border-transparent border-b-gray-border px-0 pb-4 pt-2">
                            <div className="my-2 flex items-center justify-between px-6">
                                <div className="text-base font-bold">Estimated Total</div>
                                <div className="text-lg font-bold">
                                    $1,449.00 <span className="text-[13px] font-normal">USD</span>
                                </div>
                            </div>

                            {/* Affirm Prequalify Button */}
                            <div className="my-2 px-6">
                                <div className="ordersummary_affirm__XO6dF flex items-center justify-end">
                                    <button
                                        className="affirm_affirm__6Arp_ affirm-modal-trigger border-0 bg-transparent !pl-0"
                                        aria-label="Prequalify now (opens in modal)"
                                    >
                                        {/* Affirm Prequalify Text */}
                                        <p
                                            className="a-affirm-as-low-as"
                                            data-amount="amount"
                                            data-page-type="pageType"
                                            data-affirm-color="black"
                                        >
                                            Starting at
                                            <span className="affirm-ala-price"> $90/mo </span>
                                            with
                                            <span className="__affirm-logo __affirm-logo-black __ligature__affirm_full_logo__ __processed">
                                                {' '}
                                                Affirm
                                            </span>
                                        </p>
                                        {/* Learn More Button */}
                                        <div className="affirm_learn_more__rEkJ1 flex items-center justify-end pt-1" aria-label="Prequalify now (opens in modal)">
                                            Learn more
                                        </div>
                                    </button>
                                </div>
                            </div>

                            {/* Points Earned */}
                            <div className="mt-4 flex items-center justify-between px-6">
                                <div>You Earn</div>
                                <div>14,490 points</div>
                            </div>

                            {/* Learn More Points */}
                            <div>
                                <a rel="noreferrer" href="/support/reward-points">
                                    <div className="flex cursor-pointer items-center justify-end px-6 pt-0.5 text-[13px] text-blue-ibuypowerLink hover:underline">
                                        Learn more
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Coupon Code Section */}
                        <div className="px-6 pt-6 ">
                            <div className="mb-6">
                                <div className="!mb-1 text-left text-sm">Coupon Code:</div>
                                <div className="flex items-center justify-between">
                                    {/* Coupon Input Field */}
                                    <input className="text-base w-4/5 !py-1 !px-2 rounded border border-black" type="text" name="coupon" />
                                    {/* Apply Coupon Button */}
                                    <div
                                        className=" ShoppingCardviewordersummarybuttontwo w-[30%] xs:w-[18%] 2xl:w-[78px] !py-1.5 !px-2 ml-1.5 bg-black-ibuypower text-white text-sm cursor-pointer transition-all hover:bg-white hover:!text-black-ibuypower !border border-solid border-black-ibuypower rounded"
                                    >
                                        Apply
                                    </div>
                                </div>
                                {/* Error Message */}
                                <div className="mt-1 text-left text-sm text-red-ibuypower"></div>
                            </div>
                        </div>

                        {/* Secure Checkout Button */}
                        <div className=" mx-6 my-6 ShoppingCardviewordersummarybutton">
                            <button
                                className="text-white bg-red-ibuypower hover:bg-red-ibuypowerHover rounded-full py-[0.5rem] px-10 transition duration-300 ease-in-out !border-0 text-base  relative flex text-center text-xl w-full justify-center py-2"
                                type="submit"
                            >
                                Secure Checkout
                            </button>

                            {/* Express Checkout Section */}
                            <div className="flex w-full items-center justify-center">
                                <div className="flex-[1_0_0%] !border border-solid border-transparent border-t-gray-border"></div>
                                <p className="mt-4 px-6 text-center text-[#333]">OR Express Checkout</p>
                                <div className="flex-[1_0_0%] !border border-solid border-transparent border-t-gray-border"></div>
                            </div>

                            {/* Payment Methods Section */}
                            <div className="bg-gray-ibuypower px-0 py-8">

                                {/* Payment Method Icons Section */}
                                <div className="undefined mx-6 flex flex-wrap items-center justify-center resimler">
                                    {/* MasterCard Icon */}
                                    <div className="ordersummary_masterCard__DP20E flex-none w-1/4 bg-center bg-contain bg-no-repeat h-[50px]">
                                        {/* Background Image for MasterCard */}
                                        <img src="https://content.ibuypower.com/cdn-cgi/image/quality=75,fomat=auto/https://content.ibuypower.com/Images/Carts/new-MasterCard.png" alt="" />
                                    </div>
                                    {/* VisaCard Icon */}
                                    <div className="ordersummary_visaCard__JkNZC flex-none w-1/4 bg-center bg-contain bg-no-repeat h-[50px]" >
                                        {/* Background Image for VisaCard */}
                                        <img src="https://content.ibuypower.com/cdn-cgi/image/quality=75,fomat=auto/https://content.ibuypower.com/Images/Carts/new-VisaCard.png" alt="" />
                                    </div>
                                    {/* AmericaExpress Icon */}
                                    <div className="ordersummary_aeCard__IcggA flex-none w-1/4 bg-center bg-contain bg-no-repeat h-[50px]" >
                                        {/* Background Image for AmericaExpress */}
                                        <img src="https://content.ibuypower.com/cdn-cgi/image/quality=75,fomat=auto/https://content.ibuypower.com/Images/Carts/new-AmericaExpress.png" alt="" />
                                    </div>
                                    {/* Discover Icon */}
                                    <div className="ordersummary_dcCard__LwT1s flex-none w-1/4 bg-center bg-contain bg-no-repeat h-[50px]" >
                                        {/* Background Image for Discover */}
                                        <img src="https://content.ibuypower.com/cdn-cgi/image/quality=75,fomat=auto/https://content.ibuypower.com/Images/Carts/new-Discover.png" alt="" />
                                    </div>
                                    {/* AffirmPay Icon */}
                                    <div className="ordersummary_affirmPay__VE6IJ flex-none w-1/4 bg-center bg-contain bg-no-repeat h-[50px]">
                                        {/* Background Image for AffirmPay */}
                                        <img src="https://content.ibuypower.com/cdn-cgi/image/quality=75,fomat=auto/https://content.ibuypower.com/Images/Carts/new-Affirm-no-border.png" alt="" />
                                    </div>
                                    {/* PaypalPay Icon */}
                                    <div className="ordersummary_paypalPay__UInsv flex-none w-1/4 bg-center bg-contain bg-no-repeat h-[50px]" >
                                        {/* Background Image for PaypalPay */}
                                        <img src="https://content.ibuypower.com/cdn-cgi/image/quality=75,fomat=auto/https://content.ibuypower.com/Images/Carts/new-Paypal-plus.png" alt="" />
                                    </div>
                                    {/* KatapultPay Icon */}
                                    <div className="ordersummary_katapultPay__TfnOV flex-none w-1/4 bg-center bg-contain bg-no-repeat h-[50px]" >
                                        {/* Background Image for KatapultPay */}
                                        <img src="https://content.ibuypower.com/cdn-cgi/image/quality=75,fomat=auto/https://content.ibuypower.com/Images/Carts/new-Katapult.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>

=======
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898
import React, { useState, useEffect } from 'react';
import '../Css/Cardview.css';
import { Link } from 'react-router-dom';
import CardviewEmpty from './CardviewEmpty';

const Cardview = () => {
    const [shoppingCards, setShoppingCards] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const [shoppingItems, ] = useState([]);
    const [isOrderSummaryVisible, setOrderSummaryVisibility] = useState(true);

    useEffect(() => {
        // Toplam tutarı hesapla
        const total = shoppingItems.reduce((acc, curr) => acc + parseFloat(curr.shoppingCardprice), 0);
        setSubtotal(total);
    }, [shoppingItems]);

    useEffect(() => {
        fetch('https://localhost:44379/api/home/ShoppingCards')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setShoppingCards(data);
            
                if (data.length === 0) {
                    setOrderSummaryVisibility(false);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []); 

    const handleShowDetailsClick = () => {
    };

    const handleRemoveCard = (id) => {
        fetch(`https://localhost:44379/api/home/ShoppingCard/${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                setShoppingCards(shoppingCards.filter(card => card.shoppingCardId !== id));
                if (shoppingCards.length === 1) {
                    setOrderSummaryVisibility(false);
                }
                
                // Başarılı olduğunda sayfa yenilensin
                window.location.reload();
            } else {
                console.error('Error:', response.statusText);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };
    

    return (
        <>
            <div className="ShoppingCardviewMain2Main">
            </div>
            <div className="ShoppingCardviewMain2">
                <div className="ShoppingCardviewMain px-0 py-0 md:!mt-6">
                    <div className="ShoppingCardviewproductAll w-full px-6 py-0 xs:px-16 2xl:w-2/3 2xl:px-0">
                        {shoppingCards.length === 0 ? (
                            <CardviewEmpty />
                        ) : (
                            shoppingCards.map((shoppingCard, index) => (
                                <div className="ShoppingCardviewproduct" key={index}>
                                    <div className="ShoppingCardviewproductone">
                                        <div className="ShoppingCardviewproductoneimage">
                                            <img src={shoppingCard.shoppingCardimage} alt="" />
                                            <span className="ShoppingCardproductdetails" onClick={handleShowDetailsClick}>
                                                show product details
                                            </span>
                                        </div>
                                        <div className="ShoppingCardviewproductoneimage">
                                            <div className="col-span-6 md:col-span-4 lg:col-span-6 ShoppingCardviewproductoneimagedate">
                                                <div className="md:text-text-sm w-autotext-xs md:w-3/5">
                                                    <div className="mr-1">
                                                    <p>Ürün Eklenme Tarihi: {shoppingCard.dateAdded}</p>
                                                    </div>
                                                    <div className="carts_pc_name__TT8ZV my-1.5 text-sm font-bold md:mt-2.5 md:text-base">{shoppingCard.shoppingCardname}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ShoppingCardviewproductonechoiche">
                                            <div className="col-span-6 md:col-span-2 md:pl-2 lg:col-span-2">
                                                <div>
                                                    <div className="!mb-2 flex items-center">
                                                        <div className="pr-2.5">
                                                            <select className="!mt-1 h-[100px] w-[60px] min-w-0 border border-solid border-gray-border !pl-4 text-center text-base text-black" id="qty">
                                                                <option className="cursor-pointer text-left" value="1">1</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="mt-4.5 w-fit cursor-pointer text-[13px] text-blue-ibuypowerLink hover:underline">
                                                        <Link to="/">
                                                            <span>Edit</span>
                                                        </Link>
                                                    </div>
                                                    <div onClick={() => handleRemoveCard(shoppingCard.shoppingCardId)} className="mb-1.5 mt-1.5 w-fit cursor-pointer text-[13px] text-blue-ibuypowerLink hover:underline xs:mb-0">
                                                        Remove
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carts_price__V_x2v col-span-6 md:col-span-3 lg:col-span-2 carts_fiyat"><span className="text-black">{shoppingCard.shoppingCardprice}$</span> /unit</div>
                                    </div>
                                </div>
                            ))
                        )}
                   
                    </div>
                    {isOrderSummaryVisible && (
                        <div className="ShoppingCardviewordersummary bg-gray-ibuypower px-0 py-8">
                            <div className="bg-gray-ibuypower px-0 py-8 ShoppingCardviewordersummaryinside ">
                                {/* Order Summary Header */}
                                <div className="px-1.5 py-0 text-2xl font-semibold">Order Summary</div>
                                {/* Order Details */}
                                <div className="mx-6 mt-4 !border border-solid border-transparent border-b-gray-border pb-2 text-sm">
                                    {/* Subtotal */}
                                    <div className="my-2 flex items-center justify-between">
                                        <div>Subtotal</div>
                                        <div>${subtotal.toFixed(2)}</div>
                                    </div>
                                    {/* Shipping */}
                                    <div className="my-2 flex items-center justify-between">
                                        <div>Shipping</div>
                                        <div>Calculated in checkout</div>
                                    </div>
                                    {/* Estimated Tax */}
                                    <div className="my-2 flex items-center justify-between">
                                        <div>Estimated tax</div>
                                        <div>Calculated in checkout</div>
                                    </div>
                                </div>
                                {/* Estimated Total */}
                                <div className="m-0 block !border border-solid border-transparent border-b-gray-border px-0 pb-4 pt-2">
                                    <div className="my-2 flex items-center justify-between px-6">
                                        <div className="text-base font-bold">Estimated Total</div>
                                        <div className="text-lg font-bold">
                                            $1,449.00 <span className="text-[13px] font-normal">USD</span>
                                        </div>
                                    </div>
                                    {/* Affirm Prequalify Button */}
                                    <div className="my-2 px-6">
                                        <div className="ordersummary_affirm__XO6dF flex items-center justify-end">
                                            <button
                                                className="affirm_affirm__6Arp_ affirm-modal-trigger border-0 bg-transparent !pl-0"
                                                aria-label="Prequalify now (opens in modal)"
                                            >
                                                {/* Affirm Prequalify Text */}
                                                <p
                                                    className="a-affirm-as-low-as"
                                                    data-amount="amount"
                                                    data-page-type="pageType"
                                                    data-affirm-color="black"
                                                >
                                                    Starting at
                                                    <span className="affirm-ala-price"> $90/mo </span>
                                                    with
                                                    <span className="__affirm-logo __affirm-logo-black __ligature__affirm_full_logo__ __processed">
                                                        {' '}
                                                        Affirm
                                                    </span>
                                                </p>
                                                {/* Learn More Button */}
                                                <div className="affirm_learn_more__rEkJ1 flex items-center justify-end pt-1" aria-label="Prequalify now (opens in modal)">
                                                    Learn more
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    {/* Points Earned */}
                                    <div className="mt-4 flex items-center justify-between px-6">
                                        <div>You Earn</div>
                                        <div>14,490 points</div>
                                    </div>
                                    {/* Learn More Points */}
                                    <div>
                                        <a rel="noreferrer" href="/support/reward-points">
                                            <div className="flex cursor-pointer items-center justify-end px-6 pt-0.5 text-[13px] text-blue-ibuypowerLink hover:underline">
                                                Learn more
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                {/* Coupon Code Section */}
                                <div className="px-6 pt-6 ">
                                    <div className="mb-6">
                                        <div className="!mb-1 text-left text-sm">Coupon Code:</div>
                                        <div className="flex items-center justify-between">
                                            {/* Coupon Input Field */}
                                            <input className="text-base w-4/5 !py-1 !px-2 rounded border border-black" type="text" name="coupon" />
                                            {/* Apply Coupon Button */}
                                            <div
                                                className=" ShoppingCardviewordersummarybuttontwo w-[30%] xs:w-[18%] 2xl:w-[78px] !py-1.5 !px-2 ml-1.5 bg-black-ibuypower text-white text-sm cursor-pointer transition-all hover:bg-white hover:!text-black-ibuypower !border border-solid border-black-ibuypower rounded"
                                            >
                                                Apply
                                            </div>
                                        </div>
                                        {/* Error Message */}
                                        <div className="mt-1 text-left text-sm text-red-ibuypower"></div>
                                    </div>
                                </div>
                                {/* Secure Checkout Button */}
                                <div className=" mx-6 my-6 ShoppingCardviewordersummarybutton">
                                    <button
                                        className="text-white bg-red-ibuypower hover:bg-red-ibuypowerHover rounded-full py-[0.5rem] px-10 transition duration-300 ease-in-out !border-0 text-base  relative flex text-center text-xl w-full justify-center py-2"
                                        type="submit"
                                    >
                                        Secure Checkout
                                    </button>
                                    {/* Express Checkout Section */}
                                    <div className="flex w-full items-center justify-center">
                                        <div className="flex-[1_0_0%] !border border-solid border-transparent border-t-gray-border"></div>
                                        <p className="mt-4 px-6 text-center text-[#333]">OR Express Checkout</p>
                                        <div className="flex-[1_0_0%] !border border-solid border-transparent border-t-gray-border"></div>
                                    </div>
                                    {/* Payment Methods Section */}
                                    <div className="bg-gray-ibuypower px-0 py-8">
                                        {/* Payment Method Icons Section */}
                                        <div className="undefined mx-6 flex flex-wrap items-center justify-center resimler">
                                            {/* MasterCard Icon */}
                                            <div className="ordersummary_masterCard__DP20E flex-none w-1/4 bg-center bg-contain bg-no-repeat h-[50px]">
                                                {/* Background Image for MasterCard */}
                                                <img src="https://content.ibuypower.com/cdn-cgi/image/quality=75,fomat=auto/https://content.ibuypower.com/Images/Carts/new-MasterCard.png" alt="" />
                                            </div>
                                            {/* VisaCard Icon */}
                                            <div className="ordersummary_visaCard__JkNZC flex-none w-1/4 bg-center bg-contain bg-no-repeat h-[50px]" >
                                                {/* Background Image for VisaCard */}
                                                <img src="https://content.ibuypower.com/cdn-cgi/image/quality=75,fomat=auto/https://content.ibuypower.com/Images/Carts/new-VisaCard.png" alt="" />
                                            </div>
                                            {/* AmericaExpress Icon */}
                                            <div className="ordersummary_aeCard__IcggA flex-none w-1/4 bg-center bg-contain bg-no-repeat h-[50px]" >
                                                {/* Background Image for AmericaExpress */}
                                                <img src="https://content.ibuypower.com/cdn-cgi/image/quality=75,fomat=auto/https://content.ibuypower.com/Images/Carts/new-AmericaExpress.png" alt="" />
                                            </div>
                                            {/* Discover Icon */}
                                            <div className="ordersummary_dcCard__LwT1s flex-none w-1/4 bg-center bg-contain bg-no-repeat h-[50px]" >
                                                {/* Background Image for Discover */}
                                                <img src="https://content.ibuypower.com/cdn-cgi/image/quality=75,fomat=auto/https://content.ibuypower.com/Images/Carts/new-Discover.png" alt="" />
                                            </div>
                                            {/* AffirmPay Icon */}
                                            <div className="ordersummary_affirmPay__VE6IJ flex-none w-1/4 bg-center bg-contain bg-no-repeat h-[50px]">
                                                {/* Background Image for AffirmPay */}
                                                <img src="https://content.ibuypower.com/cdn-cgi/image/quality=75,fomat=auto/https://content.ibuypower.com/Images/Carts/new-Affirm-no-border.png" alt="" />
                                            </div>
                                            {/* PaypalPay Icon */}
                                            <div className="ordersummary_paypalPay__UInsv flex-none w-1/4 bg-center bg-contain bg-no-repeat h-[50px]" >
                                                {/* Background Image for PaypalPay */}
                                                <img src="https://content.ibuypower.com/cdn-cgi/image/quality=75,fomat=auto/https://content.ibuypower.com/Images/Carts/new-Paypal-plus.png" alt="" />
                                            </div>
                                            {/* KatapultPay Icon */}
                                            <div className="ordersummary_katapultPay__TfnOV flex-none w-1/4 bg-center bg-contain bg-no-repeat h-[50px]" >
                                                {/* Background Image for KatapultPay */}
                                                <img src="https://content.ibuypower.com/cdn-cgi/image/quality=75,fomat=auto/https://content.ibuypower.com/Images/Carts/new-Katapult.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898
    );
}

export default Cardview;
