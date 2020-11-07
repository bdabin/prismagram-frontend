import React from 'react';
import styled from 'styled-components';
import Avatar from '../Avatar';
import FatText from '../FatText';
import { Comment as CommentIcon, HeartEmpty, HeartFull } from '../Icons';
import TextareaAutosize from 'react-autosize-textarea';

const Post = styled.div`
	${(props) => props.theme.whiteBox};
	width: 100%;
	max-width: 600px;
	margin-bottom: 25px;
	user-select: none;
`;

const Header = styled.header`
	padding: 15px;
	display: flex;
	align-items: center;
`;

const UserColumn = styled.div`
	margin-left: 10px;
`;

const Location = styled.span`
	display: block;
	margin-top: 5px;
	font-size: 12px;
`;

const Files = styled.div`
	position: relative;
	padding-bottom: 100%;
`;

const File = styled.div`
	max-width: 100%;
	width: 100%;
	height: 598px;
	position: absolute;
	top: 0;
	background-image: url(${(props) => props.src});
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	background-color: #fff;
	opacity: ${(props) => (props.showing ? 1 : 0)};
	transition: opacity 0.3s linear;
`;

const Meta = styled.div`
	padding: 15px;
`;

const Button = styled.span`
	cursor: pointer;
`;

const Buttons = styled.div`
	${Button} {
		&:first-child {
			margin-right: 10px;
		}
	}
	margin-bottom: 10px;
`;

const Timestamp = styled.span`
	font-weight: 300;
	text-transform: uppercase;
	opacity: 0.5;
	display: block;
	font-size: 12px;
	margin: 10px 0;
	padding-bottom: 10px;
	border-bottom: 1px solid ${(props) => props.theme.lightGreyColor};
`;

const Textarea = styled(TextareaAutosize)`
	border: none;
	width: 100%;
	resize: none;
	font-size: 14px;
	&:focus {
		outline: none;
	}
`;

const Comments = styled.ul`
	margin-top: 10px;
`;
const Comment = styled.li`
	margin-bottom: 7px;
	span {
		margin-right: 5px;
	}
`;

export default ({
	user: { username, avatar },
	location,
	files,
	likeCount,
	isLiked,
	comments,
	createdAt,
	newComment,
	setIsLiked,
	setLikCount,
	currentItem,
	toggleLike,
	onKeyPress,
	selfComments
}) => {
	return (
		<Post>
			<Header>
				<Avatar url={avatar} size='sm' />
				<UserColumn>
					<FatText text={username} />
					<Location>{location}</Location>
				</UserColumn>
			</Header>
			<Files>
				{files &&
					files.map((file, index) => (
						<File
							key={file.id}
							id={file.id}
							src={file.url}
							showing={index === currentItem}
							onDoubleClick={toggleLike}
						/>
					))}
			</Files>
			<Meta>
				<Buttons>
					<Button onClick={toggleLike}>{isLiked ? <HeartFull /> : <HeartEmpty />}</Button>
					<Button>
						<CommentIcon />
					</Button>
				</Buttons>
				<FatText text={likeCount === 1 ? '1 like' : `${likeCount} likes`} />
				{comments && (
					<Comments>
						{comments.map((comment) => (
							<Comment key={comment.id}>
								<FatText text={comment.user.username} />
								{comment.text}
							</Comment>
						))}
						{selfComments.map((comment) => (
							<Comment key={comment.id}>
								<FatText text={comment.user.username} />
								{comment.text}
							</Comment>
						))}
					</Comments>
				)}
				<Timestamp>{createdAt}</Timestamp>
				<Textarea
					placeholder={'Add a comment'}
					value={newComment.value}
					onChange={newComment.onChange}
					onKeyPress={onKeyPress}
				/>
			</Meta>
		</Post>
	);
};
