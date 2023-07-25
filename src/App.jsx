//-----router-----//
import { Routes, Route } from 'react-router-dom';

//-----pages-----//
import Layout from 'layouts/Layout';
import HomePage from 'pages/HomePage';

//-----widgets-----//

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<HomePage />} />
			</Route>
		</Routes>
	);
};

export default App;
