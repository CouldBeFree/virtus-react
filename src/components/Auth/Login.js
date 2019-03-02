import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

const Login = ({submit, getValue}) => (
    <div>
        <Form onSubmit={submit}>
            <FormGroup>
                <Input type="email" name="email" placeholder="Email" onChange={getValue} />
            </FormGroup>
            <FormGroup>
                <Input type="password" name="password" placeholder="Password" onChange={getValue} />
            </FormGroup>
            <Button>Submit</Button>
        </Form>
    </div>
);

export default Login