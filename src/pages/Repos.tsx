import axios from 'axios';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

export interface Repository {
	full_name: string;
	description: string;
}

export function Repos() {
	// const { data, isFetching } = useFetch<Repository[]>('users/diego3g/repos');
	const { data, isFetching } = useQuery<Repository[]>(
		'repos',
		async () => {
			const response = await axios.get('https://api.github.com/users/diego3g/repos');

			return response.data;
		},
		{
			staleTime: 1000 * 60,
		},
	);

	return (
		<>
			<ul>
				{isFetching ? (
					<p>Loading...</p>
				) : (
					data?.map((item) => (
						<li key={item.full_name}>
							<Link className="text-violet-800 hover:text-violet-600" to={`/repos/${item.full_name}`}>
								{item.full_name}
							</Link>
							<p>{item.description}</p>
						</li>
					))
				)}
			</ul>
		</>
	);
}
