import React from "react"

const VideoListItem = ({ movie }) => {
	const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/"
	return (
		<li className="">
			<img
				height="100px"
				width="100px"
				src={`${IMAGE_BASE_URL}${movie.poster_path}`}
				alt="poster"
			/>
			<h3>{movie.title}</h3>
		</li>
	)
}

export default VideoListItem
