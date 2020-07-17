import React from 'react';

import Main from '../Main/index'
import { Container, Wrapper } from './styles'

const Layout: React.FC = () => {
    return(
        <Container>
            <Wrapper>
                <Main />
            </Wrapper>
        </Container>
    );
}

export default Layout;