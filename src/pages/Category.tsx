import styled from "styled-components"
import Header from "../Components/Header"

const Category = () => {
  return (
    <>
        <Header/>
        <Container> 
            <div className="category-content">
               <div className="sidebar">menu</div>
               <div className="products">product</div>
            </div>
        </Container>
    </>
    
  )
}

const Container = styled.div`
    width: 95%;
    margin: 0 auto;
    .category-content{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

`

export default Category