class ChatLogin extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			name: "",
			error: "",
		};

		this.nameChanged = this.nameChanged.bind(this);
		this.nameSubmit = this.nameSubmit.bind(this);
	}

	render() {
		return (
			<div className="row">
				<ErrorBanner error={ this.state.error } />

				<div className="col-md-offset-2 col-md-10 form-group">
					<label htmlFor="name">
						Please enter your name:
					</label>
					<input
						className="form-control"
						value={ this.state.name }
						onChange={ this.nameChanged }
						onKeyPress={ this.nameSubmit }
					/>
				</div>
			</div>
		);
	}

	nameChanged(e) {
		e.preventDefault();

		this.setState({ name: e.target.value });
	}

	nameSubmit(e) {
		if ( e.which !== 13 ) return;

		e.preventDefault();

		var data = {
			name: this.state.name,
		};

		postJSON("new_session", data, (response) => {
			if ( response.success && response.session_id ) {
				this.props.onSuccess(
					response.session_id,
					response.name,
					response.connected_users,
					response.next_sequence,
				);
			} else if ( response.error_message ) {
				this.setState({ error: response.error_message });
			} else {
				this.setState({ error: "unknown error" });
			}
		});
	}

}
