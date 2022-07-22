import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Section = styled.section`
    padding: 30px 0;
    background-color: #DADEDB;
    max-width: 1400px;
`;
export const Container = styled.div`
    margin: 0 auto;
    max-width: 1100px;
    display: flex;
    position: relative;
`;
export const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
`;
export const ImageWrapper = styled.div`
    width: 330px;
    height: 220px;
    background-color: #FFF;
    display: flex;
    justify-content: center;
`;
