import { useSearchParams } from "react-router-dom";
import CategoriesBox from "./CategoriesBox";
import { categories } from "./CategoriesData";
import Container from "../Shared/Container";


const Categories = () => {
    const [params, setParams] = useSearchParams();
    const category = params.get("category")
    return (
        <Container>
        <div className="flex items-center justify-between overflow-auto">
            {categories.map(item =><CategoriesBox key={item.label}
            label={item.label} icon={item.icon} selected={category === item.label}></CategoriesBox>)}
        </div>
        </Container>
    );
};

export default Categories;