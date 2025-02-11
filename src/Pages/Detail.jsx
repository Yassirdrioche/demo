import ProductDetail from "../Components/Product-compenent/productDetail";

const Detail = () => {
  return <ProductDetail {...products} />;
};
export default Detail;
const products = {
  title: "Premium Leather Jacket",
  price: 199.99,
  description:
    "This premium leather jacket is made from high-quality materials, offering both style and durability. Perfect for any occasion.",
  detailedDescription:
    "This premium leather jacket is crafted from the finest, high-quality materials, ensuring both style and durability for years to come. Designed with a sleek, modern silhouette, it offers a perfect fit for any body type, making it a versatile addition to your wardrobe. The jacket features a soft, supple leather exterior that is both water-resistant and breathable, providing comfort in various weather conditions. Its reinforced stitching and robust zippers guarantee long-lasting wear, even with daily use. The inner lining is made of premium fabric, offering extra warmth and comfort during colder months. With multiple pockets, including a secure inner pocket, it combines practicality with elegance. The timeless design makes it suitable for casual outings, formal events, or even outdoor adventures. Available in a range of classic colors, this jacket is a must-have for anyone looking to elevate their style. Whether you're heading to the office, a night out, or a weekend getaway, this leather jacket is the perfect companion. Experience the perfect blend of luxury, functionality, and sophistication with this exceptional piece.",
  image:
    "https://i.pinimg.com/736x/5f/65/17/5f65176e16d9c7cf1ceb120de2c5103c.jpg", // Replace with your image URL
};
