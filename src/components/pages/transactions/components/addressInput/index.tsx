import { Button, Form, Input } from 'antd'
import { ethers } from 'ethers'
import { observer } from 'mobx-react'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useMst } from 'stores'
import styled from 'styled-components'

const FormWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  .ant-form {
    display: flex;
    align-items: center;
  }
`

const AddressInput: React.FC = () => {
  const state = useMst()
  const router = useRouter()
  const { address } = router.query
  
  const [form] = Form.useForm()

  useEffect(() => {
    // eslint-disable-next-line prettier/prettier
    if (address && ethers.utils.isAddress(address as string)) {
      // eslint-disable-next-line prettier/prettier
      state.transations.setAddress(address as string)
      form.setFieldsValue({ address })
    }
  }, [address, form, state.transations])

  function onFinish(data: { address: string }) {
    state.transations.setAddress(data.address)
  }

  return (
    <FormWrapper>
      <Form name="signIn" layout="vertical" onFinish={onFinish} form={form}>
        <Form.Item
          name="address"
          validateTrigger="onSubmit"
          rules={[
            {
              required: true,
              message: "Please enter an address"
            },
            () => ({
              validator(_, value) {
                if (value && ethers.utils.isAddress(value as string)) {
                  return Promise.resolve()
                }
                return Promise.reject(new Error('Please enter a valid address'))
              },
            }),
          ]}
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
  )
}

export default observer(AddressInput)
