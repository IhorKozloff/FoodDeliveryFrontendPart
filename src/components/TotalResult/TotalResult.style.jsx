import styled from '@emotion/styled';

export const TotalResultWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
`;
export const ConfirmOrderButton = styled.button`
    margin-left: 30px;
    width: 150px;
    height: 40px;
    border: none;
    border-radius: 5px;
    background: rgb(227, 6, 19);
    transition: background 500ms ease;
    transition: color 500ms ease;
    &:hover {
        background: rgb(168, 5, 14);
        color: white;
    }
`;