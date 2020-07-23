import React from "react";

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';


const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        
        <h1>Welington Larsen</h1>
        <h2>@welingtonlarsen</h2>

        <p>
          Developer at <a href="https://rocketseat.com.br">@Neogrid</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Joinville, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 01 de maio de 1996
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>672 </strong> seguidores
          </span>
        </Followage>
      
      </ProfileData>
    </Container>
  )
};

export default ProfilePage;
