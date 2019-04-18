import React from "react"

const Video = ({ videoId }) => {
	const BASE_URL = "https://www.youtube.com/embed/"

	return (
		<div className="App">
			<iframe src={`${BASE_URL}${videoId}`} />
		</div>
	)
}

export default Video
