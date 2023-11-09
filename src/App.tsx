import { useFetch } from './hooks/useFetch';

interface Repository {
	full_name: string;
	description: string;
}

export function App() {
	const { data, isFetching } = useFetch<Repository[]>('users/diego3g/repos');

	return (
		<>
			<ul>
				{isFetching ? (
					<p>Loading...</p>
				) : (
					data?.map((item) => (
						<li key={item.full_name}>
							<strong>{item.full_name}</strong>
							<p>{item.description}</p>
						</li>
					))
				)}
			</ul>
		</>
	);
}
