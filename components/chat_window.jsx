class ChatWindow extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			sessionID: props.sessionID,
			name: props.name,
			messages: [],
			connectedUsers: props.initialUsers || [],
			seq: props.initialSeq || 0,
		};
	}

	componentDidMount() {
	}

	componentWillUnmount() {
	}

	render() {
		return (
			<div className="row">
				<ErrorBanner error={ this.state.error } />

				<div className="col-md-2">
					<UserList users={ this.state.connectedUsers } />
				</div>

				<div className="col-md-10">
					You are signed in as <b>{ this.state.name }</b>.
					<hr/>
					{ /* messages list */ }
					<hr/>
					<div className="form-group">
						<label>
							Enter your message:
						</label>
						<input
							className="form-control"
							autoFocus={ true }
						/>
					</div>
				</div>
			</div>
		);
	}

}
