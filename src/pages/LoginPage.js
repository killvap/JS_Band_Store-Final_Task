import React from 'react'
import '../components/LoginForm/LoginForm.scss';

const LoginPage = () => {
    return (
			<div className={"login_container"}>
				<div className={"login_container__row"}>
					<div className={"login_card"}>
						<img
							className={"login_card__img"}
							src={`${process.env.PUBLIC_URL}/images/icons/login_user.png`}
							alt=""
						/>
                        <div className={'login_card__content'}>
                            <form>
                                <div className={"form-group"}>
                                    <label>Name</label>
                                    <input className={"username-input"} type="text" placeholder="Enter your name..." value=""/>
                                    <button className="btn" type="submit">Log in</button>
                                </div>    
                            </form>
                        </div>
					</div>
				</div>
			</div>
		);
}

export default LoginPage;