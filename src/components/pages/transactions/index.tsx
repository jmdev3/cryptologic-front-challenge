import { Button, Form, Input } from 'antd'
import { observer } from 'mobx-react'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  padding: 10px 20px 20px 20px;
`

const FormWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  .ant-form {
    display: flex;
    align-items: center;
  }
`

const Transactions: React.FC = () => {
  function onFinish(data: unknown) {
    console.log(data)
  }

  return (
    <Wrapper>
      <FormWrapper>
        <Form name="signIn" layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="address"
            rules={[{ required: true, message: 'Field required' }]}
          >
            <Input placeholder="Insert a valid address" />
          </Form.Item>

          <Form.Item>
            <Button
              style={{ marginLeft: 20 }}
              type="primary"
              htmlType="submit"
              size="large"
            >
              Search
            </Button>
          </Form.Item>
        </Form>
      </FormWrapper>
    </Wrapper>
  )
}

export default observer(Transactions)
