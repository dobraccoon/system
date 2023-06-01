import { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import TokenGet from './localStorage/TokenGet';


function App() {
	const [logged, setLogged] = useState(false);
	const [register, setRegister] = useState(false);
	const navigate = useNavigate();
	const { pathname } = useLocation();
	
	useEffect(() => {
		const localToken = TokenGet.tryGetToken();

		if (!localToken) {
			if (register) {
				navigate('/register');
			} else {
				navigate('/login');
			};
		};
		
		if (pathname === '/') {
			navigate('/articles')
		};
  	}, [logged, navigate, pathname]);

  

	return 	(
			<div className="App">
				<Outlet context={{setLogged, setRegister}}></Outlet>
			</div>
			);
};

export default App;
