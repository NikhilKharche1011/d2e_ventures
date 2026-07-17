import Navbar from "../../layout/Navbar";
import {  herosectiongif } from "../../assets/assets";
import { Button, Flex, Text } from "@chakra-ui/react";

const HeroSection = () => {
    return (
        <Flex
            h="100vh"
            w="100%"
            bgImage={`url(${herosectiongif})`}
            bgSize="cover"
            backgroundPosition="center"
            bgRepeat="no-repeat"
        >
            <Flex
                flexDir="column"
                w="100%"
                h="100%"
                bg="#00000080"

            >
                <Navbar />

                <Flex
                    flex="1"
                    justify="center"
                    align="center"
                    textAlign="center"
                    px={4}
                >
                    <Flex
                        direction="column"
                        align="center"
                        gap={5}
                        maxW="900px"
                    >
                        <Text
                            className="michroma_font"
                            fontSize={{ base: "42px", lg: "72px" }}
                            lineHeight="1.15"
                            color="white"
                            fontWeight="800"
                        >
                            Your Vision.
                            <br />
                            <Text className="michroma_font" as="span" color="#C8A96B">
                                Expertly
                            </Text>{" "}
                            Built.
                        </Text>

                        <Text
                            color="whiteAlpha.900"
                            fontSize="20px"
                            fontWeight="400"
                        >
                            Integrated Land, Luxury & Development Consultancy.
                        </Text>

                        <Flex flexDirection={{ base: 'column', md: 'row' }} mt={2} gap={5}>
                            <Button
                                bg="#C8A96B"
                                color="black"
                                size="lg"
                                px={8}
                                borderRadius="6px"
                                _hover={{
                                    bg: "#b89558",
                                }}
                            >
                                EXPLORE PROJECTS
                            </Button>

                            <Button
                                variant="outline"
                                color="white"
                                borderColor="#C8A96B"
                                borderWidth="1px"
                                size="lg"
                                px={8}
                                borderRadius="6px"
                                _hover={{
                                    bg: "#C8A96B",
                                    color: "black",
                                }}
                            >
                                ENQUIRE NOW
                            </Button>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default HeroSection;