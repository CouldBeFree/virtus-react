import React from 'react';
import { Form, FormGroup, Input } from 'reactstrap';

const Login = ({submit, getValue, success, errors}) => (
    <div>
        <Form onSubmit={submit}>
            <FormGroup>
                <Input type="email" name="email" placeholder="Email login" onChange={getValue} />
            </FormGroup>
            <FormGroup>
                <Input type="password" name="password" placeholder="Password login" onChange={getValue} />
            </FormGroup>
            <input type="submit" className="button" value="Enter"/>
            { errors && errors.map((err) => {
                return (
                    <p key={err} className="mt-3 mb-0 alert alert-danger text-center">{err}</p>
                )
            }) }
            { success && <p className="mt-3 mb-0 alert alert-success text-center">{success}</p> }
        </Form>
    </div>
);

export default Login