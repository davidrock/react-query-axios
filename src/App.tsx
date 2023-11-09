import { Routes, Route } from 'react-router-dom';
import { Repos } from './pages/Repos';
import { Repo } from './pages/Repo';

export function App() {
	return (
		<>
			<Routes>
				<Route path="/" Component={Repos} />
				<Route path="/repo" Component={Repo} />
			</Routes>
		</>
	);
}
