import React from 'react';

const Register = ({submit, getValue}) => (
    <div>
        <form onSubmit={submit}>
            <input name="email" placeholder="email" onChange={getValue} type="email"/>
            <input name="password" placeholder="password" onChange={getValue} type="password"/>
            <input type="submit" value="submit"/>
        </form>
    </div>
);

export default Register;