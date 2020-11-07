import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Button from '../../Components/Button';
import Input from '../../Components/Input';

const Wrapper = styled.div`
	min-height: 80vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const Box = styled.div`
	${(props) => props.theme.whiteBox};
	border-radius: 0px;
	width: 100%;
	max-width: 350px;
`;

const StateChanger = styled(Box)`
	text-align: center;
	padding: 20px 0px;
`;

const Link = styled.span`
	color: ${(props) => props.theme.blueColor};
	cursor: pointer;
`;

const Form = styled(Box)`
	padding: 40px;
	padding-bottom: 30px;
	margin-bottom: 15px;
	form {
		width: 100%;
		input {
			width: 100%;
			&:not(:last-child) {
				margin-bottom: 7px;
			}
		}
		button {
			margin-top: 10px;
		}
	}
`;

export default ({ action, username, firstName, lastName, secret, email, setAction, onSubmit }) => (
	<Wrapper>
		<Form>
			{action === 'login' && (
				<>
					<Helmet>
						<title>Log In | Prismagram</title>
					</Helmet>
					<form onSubmit={onSubmit}>
						<Input placeholder={'Email'} type={'email'} value={email.value} onChange={email.onChange} />
						<Button text={'Log in'} />
					</form>
				</>
			)}
			{action === 'signUp' && (
				<>
					<Helmet>
						<title>Sign Up | Prismagram</title>
					</Helmet>
					<form onSubmit={onSubmit}>
						<Input placeholder={'First Name'} value={firstName.value} onChange={firstName.onChange} />
						<Input placeholder={'Last Name'} value={lastName.value} onChange={lastName.onChange} />
						<Input placeholder={'Email'} type={'email'} value={email.value} onChange={email.onChange} />
						<Input placeholder={'Username'} value={username.value} onChange={username.onChange} />
						<Button text={'Sign up'} />
					</form>
				</>
			)}
			{action === 'confirm' && (
				<>
					<Helmet>
						<title>Confirm Secret | Prismagram</title>
					</Helmet>
					<form onSubmit={onSubmit}>
						<Input
							placeholder='Paste your secret'
							required
							value={secret.value}
							onChange={secret.onChange}
						/>
						<Button text={'Confirm'} />
					</form>
				</>
			)}
		</Form>
		{action !== 'confirm' && (
			<StateChanger>
				{action === 'login' ? (
					<>
						Don't have an account? <Link onClick={() => setAction('signUp')}>Sign up</Link>
					</>
				) : (
					<>
						Have an account? <Link onClick={() => setAction('login')}>Log in</Link>
					</>
				)}
			</StateChanger>
		)}
	</Wrapper>
);
