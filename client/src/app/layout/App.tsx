import { useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import { Container, createTheme, ThemeProvider, Box, CssBaseline } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

function App() {
	const [darkMode, setDarkMode] = useState(false);
	const palleteType = darkMode ? 'dark' : 'light'
	const theme = createTheme({
		palette: {
			mode: palleteType,
			background: {
				default: (palleteType === 'light') ? '#eaeaea' : '#121212'
			}

		}
	})

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	}

/*
	const addProduct = () => {
		setProducts((prevState) => [
			...prevState,
			{
				id: prevState.length + 1,
				name: "product" + (prevState.length + 1),
				price: prevState.length * 100 + 100,
				quantityInStock: 100,
				description: "test",
				pictureUrl: "https://picsum.photo/200",
				type: "test",
				brand: "test",
			},
		]);
	};
*/
	return (
		<ThemeProvider theme={theme}>
		<CssBaseline/>
		<NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
		<Box
			sx= {{
				minHeight: '100vh',
				background: darkMode
					? 'radial-gradient(circle, #1e3aBa, #111B27)'
					: 'radial-gradient(circle, #baecf9, #f0f9ff)',
				py: 6
			}}>
			<Container maxWidth="xl" sx={{mt:8}}>
				<Outlet/>
			</Container>
		</Box>
		</ThemeProvider>
	);
}

export default App;
