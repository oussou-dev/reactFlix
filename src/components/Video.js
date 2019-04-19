import React from "react"

const Video = ({ videoId }) => {
	const BASE_URL = "https://www.youtube.com/embed/"

	return (
		<div className="embed-responsive embed-responsive-16by9">
			<iframe
				className="embed-responsive-item"
				src={`${BASE_URL}${videoId}`}
			/>
		</div>
	)
}

export default Video
