import styled from "styled-components";

import {
    Home,
    Notifications,
    Email,
    FavoriteBorder,
    Person,
    ExitToApp,
    Rocketseat,
} from "../../styles/Icons";

export const Container = styled.div`
    display: none;

    @media (min-width: 500px) {
        display: flex;
    }
`;

export const Topside = styled.div``;

export const Logo = styled(Rocketseat)``;
