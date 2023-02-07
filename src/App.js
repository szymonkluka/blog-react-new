import { Route, Routes } from "react-router-dom"
import { Container } from "react-bootstrap";
import PostAdd from "./components/pages/PostAdd/PostAdd"
import PostEditId from './components/pages/PostEditId/PostEditId';
import Home from "./components/pages/Home/Home"
import PostId from './components/pages/PostId/PostId';
import About from './components/pages/About/About';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';

const App = () => {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />,
        <Route path="/post/add" element={<PostAdd />} />,
        <Route path="/post/edit/:id" element={<PostEditId />} />,
        <Route path="/post/:id" element={<PostId />} />,
        <Route path="/about" element={<About />} />,
      </Routes>
      <Footer />
    </Container>
  );
};

export default App;