import axios, { AxiosRequestConfig } from 'axios';
import { useState, useEffect } from 'react';

const api = axios.create({
	baseURL: 'https://api.github.com/',
});

export function useFetch<T = unknown>(url: string, options?: AxiosRequestConfig) {
	const [data, setData] = useState<T | null>(null);
	const [isFetching, setIsFetching] = useState(false);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		setTimeout(() => {
			api
				.get(url, options)
				.then((res) => {
					setData(res.data);
				})
				.catch((err) => setError(err))
				.finally(() => setIsFetching(false));
		}, 3000);
	}, []);

	return { data, isFetching, error };
}
