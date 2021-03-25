import React from 'react';
import {
  CollectionTileWrapper,
  ColectionTileContent,
  Title,
  Description,
} from './styles';
import BackgroundImage from 'gatsby-background-image';
import { StyledLink } from '../StyledLink';

export function CollectionTile({
  destination,
  description,
  title,
  backgroundImage,
  sale,
}) {
  return (
    <CollectionTileWrapper>
      <BackgroundImage fluid={backgroundImage} />
      <ColectionTileContent>
        <div>
          <Title sale={sale}>{title}</Title>
          <Description sale={sale}>{description}</Description>
          <StyledLink to={destination}>comparar ahora</StyledLink>
        </div>
      </ColectionTileContent>
    </CollectionTileWrapper>
  );
}
