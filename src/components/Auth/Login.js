import React from 'react';
import { Form, FormGroup, Input } from 'reactstrap';

const Login = ({submit, getValue, disabled}) => (
    <div>
        <Form onSubmit={submit}>
            <FormGroup>
                <Input type="email" name="email" placeholder="Email login" onChange={getValue} />
            </FormGroup>
            <FormGroup>
                <Input type="password" name="password" placeholder="Password login" onChange={getValue} />
            </FormGroup>
            <input type="submit" className="button" value="Enter"/>
        </Form>
    </div>
);

export default Login