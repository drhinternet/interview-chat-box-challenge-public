class ErrorBanner extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return this.props.error ? (
			<div className="alert alert-danger">
				{ this.props.error }
			</div>
		) : (
			null
		);
	}

}
