import React from 'react';

const Login = ({submit, getValue}) => (
    <div>
        <form onSubmit={submit}>
            <input name="email" type="email" onChange={getValue}/>
            <input name="password" type="password" onChange={getValue}/>
            <input type="submit" value="submit"/>
        </form>
    </div>
);

export default Login