import styled from "styled-components";
import FilterSidebar from "./FilterSidebar";
import ProductList from "./ProductList";
import Header from "./Header";



const Category = () => {
    return (
        <>
            <Header/>
            <Content>
                <FilterSidebar/>
                <ProductList/>
            </Content>
        </>
    )
}

export default Category;

const Content = styled.div`
    width: 1400px;
    margin:0 auto;
    display:flex;
    gap:50px;
`