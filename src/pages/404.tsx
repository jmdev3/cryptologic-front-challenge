import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 300px;

  h1 {
    color: ${(props) => props.theme.colors.primary};
  }
`

export default function Custom404() {
  return (
    <Wrapper>
      <h1>404 - Page Not Found</h1>
    </Wrapper>
  )
}
