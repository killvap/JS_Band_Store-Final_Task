import "./NotFound.scss";

const NotFound = props => {
	return (
		<div className="no-result_message">
			<img
				src={`${process.env.PUBLIC_URL}/images/icons/not_found.png`}
				alt="not_found_icon"
			/>
			<span>No results has been found for "{props.clickedTitle}"</span>
		</div>
	);
};

export default NotFound;