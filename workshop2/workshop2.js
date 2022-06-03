function finalPrice(price, discount, coupon){
    const discPercent = 100 - discount;
    const priceFinal =((price * discPercent )/100);
    const priceFinalCoupon = (priceFinal*(100-coupon))/100;
    return priceFinalCoupon;
}
function calculateFinalPrice(){
    const originalPrice = document.getElementById("inputPrice");
    const originalDiscount = document.getElementById("inputDiscount");
    const originalPriceValue = originalPrice.value;
    const originalDiscountValue = originalDiscount.value;
    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;
    const discountCoupons = [
        "dandan",
        "ludan",
        "luison",
        "",
    ];
    let couponDiscount;
    switch (couponValue) {
        case discountCoupons [0]:
            couponDiscount = 20;
        break;
        case discountCoupons [1]:
            couponDiscount = 25;
        break;
        case discountCoupons [2]:
            couponDiscount = 30;
        break;
        case discountCoupons [3]:
            couponDiscount = 0;
        break;
    }
    const totalPrice = finalPrice(originalPriceValue,originalDiscountValue,couponDiscount);
    const result = document.getElementById("resultPrice");
    result.innerText = `Total price is $ ${totalPrice}`;
}