import { useParams } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import { Repository } from './Repos';

export function Repo() {
	const params = useParams();
	const currentRepository = params['*'] as string;
	const queryClient = useQueryClient();

	function handleChangeRepositoryDescription() {
		// queryClient.invalidateQueries(['repos']);
		const previousRepos = queryClient.getQueryData<Repository[]>('repos');
		const nextRepos = previousRepos?.map((rep) => {
			if (rep.full_name === currentRepository) {
				return { ...rep, description: 'tetandio' };
			} else {
				return rep;
			}
		});

		queryClient.setQueryData('repos', nextRepos);
	}

	return (
		<>
			<h1>{currentRepository}</h1>
			<button onClick={handleChangeRepositoryDescription}>Change repository description</button>
		</>
	);
}
