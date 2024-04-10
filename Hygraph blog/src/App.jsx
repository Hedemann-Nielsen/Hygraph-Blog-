import "./App.scss";
import "./index.css";

import { Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Header } from "./components/Partials/Header";
import { Footer } from "./components/Partials/Footer";
import { Contact } from "./pages/Contact";
import { Blog } from "./pages/Blog";
import { About } from "./pages/About";
import { PageWrapper } from "./components/Wrappers/PageWrapper";

function App() {
	return (
		<>
			<PageWrapper>
				<Header />
				<Routes>
					<Route index element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</PageWrapper>
			<Footer />
		</>
	);
}

export default App;
