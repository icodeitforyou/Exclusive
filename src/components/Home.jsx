import IndexHero from "./IndexHero";
import FeaturedCollection from "./FeaturedCollection";

export default function Home() {
    return (
        <>
        <IndexHero/>
        <FeaturedCollection collection='baked-bakery-products' limit={8}/>
        </>
    )
}