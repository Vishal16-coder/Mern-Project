import { styled, Box, Typography } from '@mui/material';
const fileId = '1YndllcInvt8qgqcb-kgcQn9w8_ZBXC96';
const imageUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
const Image = styled(Box)`
    width: 100%;
    background: url(${imageUrl}) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #FFFFFF;
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading>Brew Search</Heading>
            <SubHeading>Have fun</SubHeading>
        </Image>
    )
}

export default Banner;