import React from "react"

const VideoListItem = ({ movie, callback }) => {
	const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/"

	return (
		<li className="list-group-item" onClick={callback}>
			<div className="media">
				<div className="media-left">
					<img
						className="media-object img-rounded"
						height="100px"
						width="100px"
						src={`${IMAGE_BASE_URL}${movie.poster_path}`}
						alt="poster"
					/>
				</div>
				<div className="title_list_item ">
					<h6>{movie.title}</h6>
				</div>
			</div>
		</li>
	)
}

export default VideoListItem
