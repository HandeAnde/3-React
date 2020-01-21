import React, { Component } from 'react';
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	Breadcrumb,
	BreadcrumbItem,
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	Form,
	FormGroup,
	Input,
	Label,
	LocalForm,
	Control
} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderCampsite({ campsite }) {
	return (
		<div className="col-md-5 m-1">
			<Card>
				<CardImg top src={campsite.image} alt={campsite.name} />
				<CardBody>
					<CardText>{campsite.description}</CardText>
				</CardBody>
			</Card>
		</div>
	);
}

function RenderComments({ comments }) {
	if (comments) {
		return (
			<div className="col-5-md m-1">
				<h4>Comments</h4>
				{comments.map((comment) => (
					<div key={comment.id}>
						<p>{comment.text}</p>
						<p>
							-- {comment.author},{' '}
							{new Intl.DateTimeFormat('en-US', {
								year: 'numeric',
								month: 'short',
								day: '2-digit'
							}).format(new Date(Date.parse(comment.date)))}
						</p>
					</div>
				))}

				<CommentForm />
				<div />
			</div>
		);
	}
}

class CommentModal extends Component {
	constructor(props) {
		super(props);
		this.state = {};

		this.toggleModal = this.toggleModal.bind(this);
	}

	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen
		});
	}

	handleSubmit(event) {
		alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
		this.toggleModal();
		event.preventDefault();
	}

	render() {
		return (
			<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
				<ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
				<ModalBody>
					<LocalForm onSubmit={(event) => this.handleSubmit(event)}>
						<Control.select model=".rating" id="rating" />
						<Control.text model=".author" id="author" />
						<Control.textarea model=".text" id="text" />
					</LocalForm>
				</ModalBody>
			</Modal>
		);
	}
}

class CommentForm extends Component {
	render() {
		return (
			<Button type="submit" outline color="secondary">
				<i className="fa fa-pencil" /> Submit Comment
			</Button>
		);
	}
}

function CampsiteInfo(props) {
	if (props.campsite) {
		return (
			<div className="container">
				<div className="row">
					<div className="col">
						<Breadcrumb>
							<BreadcrumbItem>
								<Link to="/directory">Directory</Link>
							</BreadcrumbItem>
							<BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
						</Breadcrumb>
						<h2>{props.campsite.name}</h2>
						<hr />
					</div>
				</div>
				<div className="row">
					<RenderCampsite campsite={props.campsite} />
					<RenderComments comments={props.comments} />
				</div>
			</div>
		);
	}
	return <div />;
}

export default CampsiteInfo;
