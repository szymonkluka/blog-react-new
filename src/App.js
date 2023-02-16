import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./components/pages/Home/Home"
import SinglePost from "./components/pages/SinglePost/SinglePost.js"
import PostAdd from "./components/pages/PostAdd/PostAdd"
import PostEdit from './components/pages/PostEditId/PostEdit';
import About from "./components/pages/About/About"
import Header from "./components/views/Header/Header";
import Footer from "./components/views/Footer/Footer";
import SingleCategory from "./components/pages/SingleCategory/SingleCategory";
import Category from './components/features/Category/Category';

const App = () => {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/post/add" element={<PostAdd />} />
        <Route path="/post/edit/:id" element={<PostEdit />} />
        <Route path="/about" element={<About />} />
        <Route path="/category" element={<Category />} />
        <Route path="category/:categoryId" element={<SingleCategory />} />
      </Routes>
      <Footer />
    </Container>
  );
}
export default App;