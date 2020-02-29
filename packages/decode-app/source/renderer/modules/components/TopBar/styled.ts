import styled from 'styled-components';



export const StyledTopBar: any = styled.div`
    -webkit-app-region: drag;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 40px;
    z-index: 99999;

    display: flex;
    flex-direction: row;

    background-color: ${(props: any) => {
        if (props.mouseOver) {
            return props.theme.backgroundColorDark;
        }
        return 'transparent';
    }};
    box-shadow: ${(props: any) => {
        if (props.mouseOver) {
            return 'inset 0px -2px 4px 0px hsl(220, 10%, 0%)';
        }
        return 'initial';
    }};
`;


export const StyledTopBarAdd: any = styled.div`
    display: grid;
    place-content: center;
    width: 40px;
`;
