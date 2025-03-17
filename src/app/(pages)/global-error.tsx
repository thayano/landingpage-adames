'use client' // Error boundaries must be Client Components

export default function GlobalError({
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	error,
	reset,
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	return (
		// global-error must include html and body tags
		<>
			<h2>Something went wrong!</h2>
			<button onClick={() => reset()}>Try again</button></>


	)
}