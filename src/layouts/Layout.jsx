//-----router-----//
import { Outlet } from 'react-router-dom';

//-----widgets-----//
import Header from 'entities/Header';

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
};

export default Layout;
