import styled from 'styled-components';



export const StyledPluriverseItem: any = styled.div`
    min-width: 50px;
    height: 100%;
    display: grid;
    place-content: center;
    cursor: pointer;
    font-size: 0.8rem;

    border-left: 1px solid ${(props: any) => {
        return props.theme.backgroundColorPrimaryAlpha;
    }};
    border-right: 1px solid ${(props: any) => {
        return props.theme.backgroundColorPrimaryAlpha;
    }};
    background-color: ${(props: any) => {
        if (props.active) {
            return props.theme.backgroundColorPrimaryAlpha;
        }
        return 'transparent';
    }};

    :hover {
        background-color: ${(props: any) => {
            return props.theme.backgroundColorSecondary;
        }};
    }
`;
