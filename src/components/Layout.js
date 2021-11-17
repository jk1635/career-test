import React from "react"
import styled from "styled-components";

const Layout = ({children}) => {
  return (
    <DefaultLayout>
      {children}
    </DefaultLayout>
  )
}

const DefaultLayout = styled.div`
  width: 100%;
  position: relative;
  min-height: calc(100vh - 100px);
`;

export default Layout
