import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import { certificates } from '../../data/constants';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 0px 80px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 80px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const SliderSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;

const CertificateCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
`;

const CertificateImage = styled.img`
    width: 100%;
    max-width: 600px;
    height: auto;
    border-radius: 8px;
`;

const CertificateName = styled.div`
    font-size: 20px;
    font-weight: 500;
    margin-top: 10px;
    color: ${({ theme }) => theme.text_primary};
`;

const CertificateDate = styled.div`
    font-size: 16px;
    color: ${({ theme }) => theme.text_secondary};
`;

const CertificatesPage = () => {
    return (
        <Container id="certificates">
            <Wrapper>
                <Title>Certificates</Title>
                <Desc>
                    Here are some of my certificates showcasing my skills and achievements.
                </Desc>
                <SliderSection>
                    <Carousel 
                        showArrows={true} 
                        autoPlay={true} 
                        infiniteLoop={true} 
                        showThumbs={false}
                        showStatus={false}
                    >
                        {certificates.map((certificate) => (
                            <CertificateCard key={certificate.id}>
                                <CertificateImage src={certificate.img} alt={certificate.name} />
                                <CertificateName>{certificate.name}</CertificateName>
                                <CertificateDate>{certificate.date}</CertificateDate>
                            </CertificateCard>
                        ))}
                    </Carousel>
                </SliderSection>
            </Wrapper>
        </Container>
    );
}

export default CertificatesPage;
