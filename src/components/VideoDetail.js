import React from "react"

const VideoDetail = ({ title, description }) => {
	return (
		<div className="mt-3">
			<h3>{title}</h3>
			<p> {description} </p>
		</div>
	)
}

export default VideoDetail
